import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";
import { useTranslation } from "react-i18next";
import Swal from 'sweetalert2';


const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className="resize-y min-h-[120px] bg-white backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border border-transparent focus:border-[#ff8b80] transition-all duration-300"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-white backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border border-transparent focus:border-[#ff8b80] transition-all duration-300"
      />
    )}
  </label>
);


const Contact = () => {

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAIL_TEMPLATE_REPLY_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY_ID;
  const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const abstractKey = import.meta.env.VITE_ABSTRACT_API_KEY;
  

  const { t } = useTranslation();

  const [showLinkInput, setShowLinkInput] = useState(false);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmation("");

    const email = form.email.trim();
  
    if (!validateEmail(form.email)) {
      Swal.fire({
        icon: "warning",
        title: t("contact.emailError"),
        confirmButtonColor: "#ff8b80",
        background: "#1a1a1a",
        color: "#ffffff"
      });
      return;
    }
  
    if (!form.name.trim()) {
      Swal.fire({
        icon: "warning",
        title: t("contact.nameError"),
        confirmButtonColor: "#ff8b80",
        background: "#1a1a1a",
        color: "#ffffff"
      });
      return;
    }

    if (!form.message.trim()) {
      Swal.fire({
        icon: "warning",
        title: t("contact.messageEmptyConfirmTitle"),
        text: t("contact.messageEmptyConfirmText"),
        showCancelButton: true,
        confirmButtonText: t("contact.confirmSend"),
        cancelButtonText: t("contact.cancelSend"),
        confirmButtonColor: "#ff8b80",
        cancelButtonColor: "#555",
        background: "#1a1a1a",
        color: "#ffffff"
      }).then((result) => {
        if (result.isConfirmed) {
          sendEmail();
        }
      });
      return;
    }
    
    const verifyUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=${abstractKey}&email=${encodeURIComponent(email)}`;
  
    try {
      const response = await fetch(verifyUrl);
      const data = await response.json();
  
      if (!data.deliverability || data.deliverability !== "DELIVERABLE") {
        await Swal.fire({
          icon: "warning",
          title: t("contact.emailInvalid"),
          text: t("contact.emailInvalidMessage"),
          confirmButtonColor: "#ff8b80",
          background: "#1a1a1a",
          color: "#ffffff"
        });
        return;
      }
      
    } catch (error) {
      console.error("Verification error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: t("contact.verificationError"),
        confirmButtonColor: "#ff8b80",
        background: "#1a1a1a",
        color: "#ffffff"
      });
      return;
    }
   
  
    setLoading(true);
  
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      file_link: form.file_link || "Kein Link angegeben",
    };
  
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams,
        EMAIL_PUBLIC_KEY
      )
      .then(() => {
        return emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAIL_TEMPLATE_REPLY_ID,
          templateParams,
          EMAIL_PUBLIC_KEY
        );
      })
      .then(() => {
        setLoading(false);
        Swal.fire({
          title: t("contact.successTitle"),
          text: t("contact.confirmation"),
          icon: "success",
          confirmButtonColor: "#ff8b80",
          background: "#1a1a1a",
          color: "#ffffff",
          customClass: {
            popup: 'rounded-xl p-8 shadow-lg',
            confirmButton: 'rounded-lg px-6 py-2 font-semibold'
          }
        });
  
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: t("contact.error"),
          confirmButtonColor: "#ff8b80",
          background: "#1a1a1a",
          color: "#ffffff"
        });
      });
  };

  const sendEmail = () => {
    setLoading(true);
  
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

  };
  
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} 
      className="flex-[1] bg-tertiary p-8 rounded-2xl">
        <p className={styles.sectionSubText}>{t("contact.subtitle")}</p>
        <h3 className={styles.sectionHeadText}>{t("contact.title")}</h3>

        <form
        ref={formRef} 
        onSubmit={handleSubmit} 
        className="mt-6 flex flex-col gap-6"
        >
          <InputField
            label={t("contact.name")}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t("contact.namePlaceholder")}
            type="text"
          />
          {nameError && <span className="text-red-500">{t("contact.nameError")}</span>}

          <InputField
            label={t("contact.email")}
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t("contact.emailPlaceholder")}
            type="email"
          />
          {emailError && <span className="text-red-500">{t("contact.emailError")}</span>}

          <InputField
            label={t("contact.message")}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t("contact.messagePlaceholder")}
            type="textarea"
          />
          
          {!showLinkInput ? (
            <button
            type="button"
            onClick={() => setShowLinkInput(true)}
            className="text-sm text-secondary underline hover:text-[#ff8b80] transition-all duration-300 w-fit"
            >
              🔗 {t("contact.addLink")}
              </button>
              ) : (
              <div className="flex flex-col gap-2">
                <InputField
                label={t("contact.linkLabel")}
                name="file_link"
                value={form.file_link}
                onChange={handleChange}
                placeholder={t("contact.fileLinkPlaceholder")}
                type="text"
                />
             <button
             type="button"
             onClick={() => {
              setShowLinkInput(false);
              setForm({ ...form, file_link: "" });
            }}
            className="text-xs text-gray-400 hover:text-red-400 transition-all duration-200 w-fit"
            >
              ✖️ {t("contact.removeLink")}
              </button>
            </div>
          )}



          <button
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-r from-secondary to-[#ff8b80] py-3 px-8 rounded-xl text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 w-fit"
          >
            {loading ? t("contact.sending") : t("contact.send")}
          </button>
          {confirmation && <p className="text-green-500">{t("contact.confirmation")}</p>}
        </form>

      </motion.div>

      <motion.div 
         variants={slideIn("right", "tween", 0.2, 1)}
         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
         >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");