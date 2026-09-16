"use client";

import { useEffect, useState } from "react";

const content = {
  en: {
    direction: "ltr",
    home: "Home",
    language: "العربية",
    label: "NASMO BUSINESS INCUBATION",
    title: "Turn Your Business Idea Into Reality",
    introduction:
  "NASMO provides practical guidance, professional resources and ongoing support to help entrepreneurs build and grow successful businesses in Oman.",

benefits: [
  "Develop and validate your business idea",
  "Receive a practical plan tailored to your goals",
  "Get mentorship and professional guidance",
  "Access workspace, training and networking opportunities",
],

services: [
      {
        icon: "✦",
        title: "Idea Development",
        text: "Transform your initial idea into a clear and practical business concept.",
      },
      {
        icon: "◈",
        title: "Business Planning",
        text: "Develop a structured plan covering your goals, operations and growth strategy.",
      },
      {
        icon: "◎",
        title: "Mentorship",
        text: "Receive personalised guidance and practical advice throughout your journey.",
      },
      {
        icon: "▣",
        title: "Training & Workshops",
        text: "Build essential skills through practical training and business workshops.",
      },
      {
        icon: "⌂",
        title: "Workspace Access",
        text: "Work in a professional environment designed to support focus and productivity.",
      },
      {
        icon: "↗",
        title: "Networking & Growth",
        text: "Connect with professionals, partners and opportunities that support your growth.",
      },
    ],
    processTitle: "Your Journey with NASMO",
    steps: [
      "Share your idea",
      "Receive a tailored plan",
      "Develop your business",
      "Launch and grow",
    ],
    callTitle: "Ready to Build Your Business?",
    callText:
      "Speak with the NASMO team and discover the support available for your next step.",
    button: "Join the Incubation Program",
    back: "Return to Home",
  },

  ar: {
    direction: "rtl",
    home: "الرئيسية",
    language: "English",
    label: "حاضنة نسمو للأعمال",
    title: "حوّل فكرتك التجارية إلى واقع",
    introduction:
  "توفر نسمو الإرشاد العملي والموارد المهنية والدعم المستمر لمساعدة رواد الأعمال على تأسيس أعمال ناجحة وتنميتها في سلطنة عُمان.",

benefits: [
  "تطوير فكرتك التجارية والتأكد من قابليتها للتطبيق",
  "الحصول على خطة عملية تناسب أهداف مشروعك",
  "الاستفادة من الإرشاد والتوجيه المهني",
  "الوصول إلى مساحات العمل والتدريب وفرص التواصل",
],

services: [
      {
        icon: "✦",
        title: "تطوير الأفكار",
        text: "تحويل فكرتك الأولية إلى مفهوم تجاري واضح وقابل للتطبيق.",
      },
      {
        icon: "◈",
        title: "تخطيط الأعمال",
        text: "إعداد خطة منظمة تشمل الأهداف والعمليات واستراتيجية النمو.",
      },
      {
        icon: "◎",
        title: "الإرشاد",
        text: "الحصول على توجيه شخصي ونصائح عملية خلال رحلة مشروعك.",
      },
      {
        icon: "▣",
        title: "التدريب وورش العمل",
        text: "تطوير المهارات الأساسية من خلال التدريب العملي وورش الأعمال.",
      },
      {
        icon: "⌂",
        title: "مساحات العمل",
        text: "العمل في بيئة مهنية مصممة لدعم التركيز والإنتاجية.",
      },
      {
        icon: "↗",
        title: "التواصل والنمو",
        text: "التواصل مع المهنيين والشركاء والفرص التي تدعم نمو مشروعك.",
      },
    ],
    processTitle: "رحلتك مع نسمو",
    steps: [
      "شاركنا فكرتك",
      "احصل على خطة مخصصة",
      "طوّر مشروعك",
      "أطلق مشروعك وانمُ",
    ],
    callTitle: "هل أنت مستعد لبناء مشروعك؟",
    callText:
      "تواصل مع فريق نسمو وتعرّف على الدعم المتاح لخطوتك القادمة.",
    button: "انضم إلى برنامج الاحتضان",
    back: "العودة إلى الرئيسية",
  },
} as const;

export default function IncubationPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  useEffect(() => {
  const selectedLanguage = new URLSearchParams(window.location.search).get("lang");

  if (selectedLanguage === "ar") {
    setLanguage("ar");
  }
}, []);
  const text = content[language];

  return (
    <div className="incubation-page" dir={text.direction}>
      <header className="incubation-header">
        <a href="/" className="logo">
          <img src="/nasmo-white.png" alt="NASMO" />
        </a>

        <div className="actions">
          <a href="/">{text.home}</a>

          <button
            className="lang"
            onClick={() =>
              setLanguage(language === "en" ? "ar" : "en")
            }
          >
            {text.language}
          </button>
        </div>
      </header>

      <main>
        <section className="incubation-hero">
          <div className="incubation-hero-content">
            <p className="eyebrow">{text.label}</p>
            <h1>{text.title}</h1>
            <p>{text.introduction}</p>

            <button
              type="button"
              className="button"
              onClick={() => {
                window.location.assign("/#contact");
              }}
            >
              {text.button}
            </button>

            </div>

          <div className="incubation-visual" aria-hidden="true">
            <span>✦</span>
            <strong>IDEA</strong>
            <div className="growth-line"></div>
            <strong>GROWTH</strong>
            <span>↗</span>
          </div>
        </section>

        <section className="incubation-services">
          <p className="eyebrow">{text.label}</p>
          <h2>{text.processTitle}</h2>

          <div className="incubation-grid">
            {text.services.map((service, index) => (
              <article key={service.title}>
                <div className="service-number">0{index + 1}</div>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="incubation-process">
          <h2>{text.processTitle}</h2>

          <div className="process-grid">
            {text.steps.map((step, index) => (
              <article key={step}>
                <span>{index + 1}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}