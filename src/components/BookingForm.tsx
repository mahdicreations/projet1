"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface BookingFormProps {
  // All UI strings passed from Server Component (default locale)
  // but we also use useLanguage() so strings reactively update on lang switch
  whatsappNumber?: string;
}

export default function BookingForm({ whatsappNumber = "212784477494" }: BookingFormProps) {
  const { locale, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    city: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const fieldName = id.replace("form-", "");
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const generateWhatsAppMessage = () => {
    if (locale === "ar") {
      let text = `✨ *طلب حجز موعد مكياج منزلي بمراكش - سارة غلامز* ✨\n\n`;
      text += `🌸 *الاسم :* ${formData.name}\n`;
      text += `📞 *رقم الهاتف :* ${formData.phone}\n`;
      text += `📅 *التاريخ المطلوب :* ${formData.date}\n`;
      text += `📍 *الحي / الرياض أو الفندق :* ${formData.city}\n`;
      text += `💄 *الخدمة :* ${formData.service}\n\n`;
      if (formData.message.trim()) text += `💌 *تفاصيل وطلبات خاصة :*\n_${formData.message.trim()}_\n\n`;
      text += `الرجاء تأكيد الحجز وإفادتي بالتواريخ المتاحة لمراكش! 💕`;
      return encodeURIComponent(text);
    } else if (locale === "en") {
      let text = `✨ *In-Home Makeup Booking Request Marrakech - Sarahglam's* ✨\n\n`;
      text += `🌸 *Name:* ${formData.name}\n`;
      text += `📞 *Phone:* ${formData.phone}\n`;
      text += `📅 *Requested Date:* ${formData.date}\n`;
      text += `📍 *Neighborhood / Riad or Hotel:* ${formData.city}\n`;
      text += `💄 *Service Package:* ${formData.service}\n\n`;
      if (formData.message.trim()) text += `💌 *Details / Special Requests:*\n_${formData.message.trim()}_\n\n`;
      text += `Please confirm your availability for Marrakech! 💕`;
      return encodeURIComponent(text);
    } else {
      let text = `✨ *Demande de Maquillage à Domicile Marrakech - Sarahglam's* ✨\n\n`;
      text += `🌸 *Nom :* ${formData.name}\n`;
      text += `📞 *Téléphone :* ${formData.phone}\n`;
      text += `📅 *Date souhaitée :* ${formData.date}\n`;
      text += `📍 *Quartier/Riad/Hôtel :* ${formData.city}\n`;
      text += `💄 *Prestation :* ${formData.service}\n\n`;
      if (formData.message.trim()) text += `💌 *Message/Détails :*\n_${formData.message.trim()}_\n\n`;
      text += `Merci de me reconfirmer vos disponibilités pour Marrakech ! 💕`;
      return encodeURIComponent(text);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.city || !formData.service) {
      alert(
        locale === "ar"
          ? "يرجى ملء جميع الحقول المطلوبة."
          : locale === "en"
          ? "Please fill out all required fields."
          : "Veuillez remplir tous les champs obligatoires."
      );
      return;
    }
    setIsSubmitting(true);
    const whatsappText = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", date: "", city: "", service: "", message: "" });
    }, 1000);
  };

  const handleDirectWhatsAppClick = () => {
    let text = "Bonjour Sarahglam's ! Je souhaite obtenir des informations sur vos prestations de maquillage à domicile à Marrakech. ✨";
    if (locale === "ar") text = "مرحباً سارة غلامز! أود الحصول على معلومات حول خدمات المكياج المنزلي في مراكش. ✨";
    else if (locale === "en") text = "Hello Sarahglam's! I would like to get information about your in-home makeup services in Marrakech. ✨";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form onSubmit={handleFormSubmit} className="booking-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="form-name">{t("booking.form.name_label")}</label>
          <input
            type="text"
            id="form-name"
            className="form-input"
            placeholder={t("booking.form.name_placeholder")}
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="form-phone">{t("booking.form.phone_label")}</label>
          <input
            type="tel"
            id="form-phone"
            className="form-input"
            placeholder={t("booking.form.phone_placeholder")}
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="form-date">{t("booking.form.date_label")}</label>
          <input
            type="date"
            id="form-date"
            className="form-input"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="form-city">{t("booking.form.city_label")}</label>
          <input
            type="text"
            id="form-city"
            className="form-input"
            placeholder={t("booking.form.city_placeholder")}
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="form-service">{t("booking.form.service_label")}</label>
        <select
          id="form-service"
          className="form-input"
          value={formData.service}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>{t("booking.form.service_default")}</option>
          <option value="Maquillage Mariée (Essai + Jour J)">{t("booking.form.service_opt1")}</option>
          <option value="Maquillage Fiançailles">{t("booking.form.service_opt2")}</option>
          <option value="Maquillage Soirée">{t("booking.form.service_opt3")}</option>
          <option value="Maquillage Invitée">{t("booking.form.service_opt4")}</option>
          <option value="Maquillage Shooting">{t("booking.form.service_opt5")}</option>
          <option value="Extension de cils Volume Russe">{t("booking.form.service_opt7")}</option>
          <option value="Extension de cils Cil à Cil">{t("booking.form.service_opt8")}</option>
          <option value="Maquillage Tous Les Jours">{t("booking.form.service_opt9")}</option>
          <option value="Maquillage Express">{t("booking.form.service_opt10")}</option>
          <option value="Autre">{t("booking.form.service_opt6")}</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="form-message">{t("booking.form.message_label")}</label>
        <textarea
          id="form-message"
          className="form-input"
          placeholder={t("booking.form.message_placeholder")}
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? t("booking.form.submit_loading") : t("booking.form.submit")}
        </button>
        <div className="form-divider">{t("booking.form.or")}</div>
        <button
          type="button"
          id="direct-whatsapp-btn"
          className="btn btn-whatsapp"
          onClick={handleDirectWhatsAppClick}
        >
          <svg viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.479 2.005 14.019.98 11.997.98 6.561.98 2.135 5.352 2.132 10.783c0 1.693.456 3.348 1.32 4.792l-.997 3.639 3.73-.974.002.002c1.42.825 2.94 1.258 4.49 1.258z" />
          </svg>
          {t("booking.form.whatsapp_direct")}
        </button>
      </div>
    </form>
  );
}
