"use client";

import { useEffect, useState } from "react";

const content = {
  en: {
    direction: "ltr",
    home: "Home",
    about: "About",
    workspaces: "Workspaces",
    businessServices: "Business Services",
    companyFormation: "Company Formation",
    incubation: "Incubation",
    faq: "FAQ",
    contact: "Contact",
    language: "العربية",
    book: "Book a Space",

    label: "NASMO COMPANY FORMATION",
    title: "Start Your Business With Confidence",
    introduction:
      "NASMO provides practical support to help you establish your business in Oman, from choosing the right structure and completing documentation to licensing, banking and operational readiness.",

    button: "Get Started",

    servicesTitle: "Everything You Need to Get Started",

    services: [
      {
        number: "01",
        title: "Business Structure",
        text: "Get guidance on choosing the right business structure for your goals, including sole proprietorships, partnerships, LLCs and other suitable options.",
      },
      {
        number: "02",
        title: "Legal Documentation",
        text: "Receive support with preparing, reviewing and managing the documents required to establish your business.",
      },
      {
        number: "03",
        title: "Permits & Licenses",
        text: "Get assistance with the permits and licenses required to operate your business and meet applicable requirements.",
      },
      {
        number: "04",
        title: "Tax Registration",
        text: "Receive practical guidance and support with the relevant tax registration requirements for your business.",
      },
      {
        number: "05",
        title: "Corporate Bank Account",
        text: "Get support with the process of setting up a corporate bank account for your newly established business.",
      },
      {
        number: "06",
        title: "Operational Setup",
        text: "Prepare your business for day-to-day operations with guidance on the practical requirements needed to get started.",
      },
      {
        number: "07",
        title: "Initial Staffing",
        text: "Receive initial consultation on staffing requirements and the people you may need as your business begins operating.",
      },
      {
        number: "08",
        title: "Regulatory Compliance",
        text: "Understand the applicable local requirements and receive support in maintaining compliance as your business operates.",
      },
    ],

    processTitle: "Your Company Formation Journey",

    steps: [
      {
        number: "01",
        title: "Tell Us What You Need",
        text: "Share your business idea, goals and requirements with the NASMO team.",
      },
      {
        number: "02",
        title: "Receive a Tailored Recommendation",
        text: "We help identify the appropriate structure, services and next steps for your business.",
      },
      {
        number: "03",
        title: "Complete Your Setup",
        text: "Move through documentation, registration, licensing and other setup requirements.",
      },
      {
        number: "04",
        title: "Start and Grow",
        text: "Get your business ready for operations and access ongoing support when you need it.",
      },
    ],

    callTitle: "Ready to Start Your Business in Oman?",
    callText:
      "Let NASMO simplify your company formation process and help you move from an idea to an operational business.",
    callButton: "Enquire Now",
    back: "Return to Home",
  },

  ar: {
    direction: "rtl",
    home: "الرئيسية",
    about: "من نحن",
    workspaces: "مساحات العمل",
    businessServices: "خدمات الأعمال",
    companyFormation: "تأسيس الشركات",
    incubation: "الحاضنة",
    faq: "الأسئلة الشائعة",
    contact: "تواصل معنا",
    language: "English",
    book: "احجز مساحة",

    label: "تأسيس الشركات مع نسمو",
    title: "ابدأ مشروعك بثقة",
    introduction:
      "توفر نسمو الدعم العملي لمساعدتك في تأسيس أعمالك في سلطنة عُمان، بدءًا من اختيار الهيكل المناسب واستكمال المستندات، وصولًا إلى التراخيص والحسابات البنكية والاستعداد للتشغيل.",

    button: "ابدأ الآن",

    servicesTitle: "كل ما تحتاجه لبدء مشروعك",

    services: [
      {
        number: "01",
        title: "اختيار هيكل الشركة",
        text: "إرشادك لاختيار الهيكل التجاري المناسب لأهدافك، بما في ذلك المؤسسة الفردية والشراكات والشركات ذات المسؤولية المحدودة وغيرها من الخيارات المناسبة.",
      },
      {
        number: "02",
        title: "المستندات القانونية",
        text: "دعمك في إعداد ومراجعة وإدارة المستندات المطلوبة لتأسيس شركتك.",
      },
      {
        number: "03",
        title: "التصاريح والتراخيص",
        text: "المساعدة في الحصول على التصاريح والتراخيص المطلوبة لممارسة نشاطك والالتزام بالمتطلبات المعمول بها.",
      },
      {
        number: "04",
        title: "التسجيل الضريبي",
        text: "تقديم الإرشاد والدعم العملي فيما يتعلق بمتطلبات التسجيل الضريبي ذات الصلة بنشاطك.",
      },
      {
        number: "05",
        title: "الحساب البنكي للشركة",
        text: "دعمك في إجراءات فتح حساب بنكي للشركة بعد تأسيسها.",
      },
      {
        number: "06",
        title: "الإعداد التشغيلي",
        text: "تجهيز مشروعك للعمليات اليومية من خلال الإرشاد حول المتطلبات العملية اللازمة للبدء.",
      },
      {
        number: "07",
        title: "الاستشارات الأولية للتوظيف",
        text: "تقديم استشارة أولية حول احتياجات التوظيف والموارد البشرية التي قد يحتاجها مشروعك.",
      },
      {
        number: "08",
        title: "الامتثال للأنظمة",
        text: "مساعدتك على فهم المتطلبات المحلية والالتزام بالأنظمة أثناء تشغيل مشروعك.",
      },
    ],

    processTitle: "رحلتك في تأسيس شركتك",

    steps: [
      {
        number: "01",
        title: "أخبرنا بما تحتاجه",
        text: "شاركنا فكرة مشروعك وأهدافك واحتياجاتك مع فريق نسمو.",
      },
      {
        number: "02",
        title: "احصل على توصية مخصصة",
        text: "نساعدك في تحديد الهيكل والخدمات والخطوات المناسبة لمشروعك.",
      },
      {
        number: "03",
        title: "أكمل إجراءات التأسيس",
        text: "انتقل عبر إجراءات المستندات والتسجيل والتراخيص وغيرها من متطلبات التأسيس.",
      },
      {
        number: "04",
        title: "ابدأ وانمُ",
        text: "جهّز مشروعك للتشغيل واستفد من الدعم المستمر عند الحاجة.",
      },
    ],

    callTitle: "هل أنت مستعد لبدء مشروعك في عُمان؟",
    callText:
      "دع نسمو تبسّط لك عملية تأسيس شركتك وتساعدك على الانتقال من الفكرة إلى مشروع جاهز للتشغيل.",
    callButton: "تواصل معنا",
    back: "العودة إلى الرئيسية",
  },
} as const;

export default function CompanyFormationPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  useEffect(() => {
    const selectedLanguage = new URLSearchParams(
      window.location.search
    ).get("lang");

    if (selectedLanguage === "ar") {
      setLanguage("ar");
    }
  }, []);

  const text = content[language];

  const switchLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);

    window.history.replaceState(
      null,
      "",
      `/company-formation?lang=${newLanguage}`
    );
  };

  return (
    <div
      className="incubation-page"
      dir={text.direction}
      style={{
        minHeight: "100vh",
        background: "#300d45",
        color: "#ffffff",
      }}
    >
      <header className="incubation-header">
        <a href="/" className="logo">
          <img src="/nasmo-white.png" alt="NASMO" />
        </a>

        <nav className="main-nav">
          <a href="/">{text.home}</a>
          <a href="/#about">{text.about}</a>
          <a href="/#workspaces">{text.workspaces}</a>
          <a href="/#business-services">
            {text.businessServices}
          </a>
          <a
            href="/company-formation"
            style={{ fontWeight: 600 }}
          >
            {text.companyFormation}
          </a>
          <a href="/incubation">{text.incubation}</a>
          <a href="/#faq">{text.faq}</a>
          <a href="/#contact">{text.contact}</a>
        </nav>

        <div className="actions">
          <button
            className="lang"
            onClick={switchLanguage}
          >
            {text.language}
          </button>

          <a href="/#contact" className="book-button">
            {text.book}
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
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

          <div
            className="incubation-visual"
            aria-hidden="true"
          >
            <span>✦</span>
            <strong>START</strong>
            <div className="growth-line"></div>
            <strong>GROW</strong>
            <span>↗</span>
          </div>
        </section>

        {/* SERVICES */}
        <section className="incubation-services">
          <p className="eyebrow">{text.label}</p>

          <h2>{text.servicesTitle}</h2>

          <div className="incubation-grid">
            {text.services.map((service) => (
              <article key={service.number}>
                <div className="service-number">
                  {service.number}
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="incubation-process">
          <p className="eyebrow">{text.label}</p>

          <h2>{text.processTitle}</h2>

          <div className="process-grid">
            {text.steps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: "100px 8%",
            textAlign: "center",
          }}
        >
          <p className="eyebrow">{text.label}</p>

          <h2>{text.callTitle}</h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "20px auto 35px",
            }}
          >
            {text.callText}
          </p>

          <button
            type="button"
            className="button"
            onClick={() => {
              window.location.assign("/#contact");
            }}
          >
            {text.callButton}
          </button>
        </section>
      </main>
    </div>
  );
}