"use client";

import { FormEvent, useState } from "react";

const booking = "https://nasmoadmin-eng.github.io/Bookwithnasmo/";

const workspaceImages = [
  "/meeting-room.jpeg",
  "/training-room.jpeg",
  "/private-offices.jpeg",
  "/virtual-hot-desks.jpeg",
  "/virtual-hot-desks.jpeg",
  "",
];

const copy = {
  en: {
    dir: "ltr",
    nav: [
      "Home",
      "About",
      "Workspaces",
      "Business Services",
      "Incubation",
      "FAQ",
      "Contact",
    ],
    hero: "More Than a Workspace",
    lead: "Everything your business needs to start, operate, and grow in Oman.",
    intro:
      "From flexible workspaces and company formation to administrative, financial, technology, and government services, NASMO brings your essential business support together in one place.",
    explore: "Explore Our Solutions",
    advisor: "Talk to an Advisor",
    pillars: ["Workspaces", "Business Services", "Growth and Incubation"],
    workspaceTitle: "A professional setting for every kind of work.",
    workspaces: [
      [
        "Meeting Room",
        "A professional private room for meetings, presentations and team discussions.",
      ],
      [
        "Training Room",
        "A spacious room designed for training sessions, workshops and group activities.",
      ],
      [
        "Private Offices",
        "Dedicated furnished offices for teams that value focus, privacy and comfort.",
      ],
      [
        "Virtual Hot Desks",
        "A flexible workspace solution with professional business support.",
      ],
      [
        "Regular Hot Desks",
        "A practical shared workspace for productive daily work and flexible access.",
      ],
      [
        "Clinics",
        "Smaller private office spaces offering a comfortable and flexible setting for different uses.",
      ],
    ],
    servicesTitle: "Specialist support, brought together.",
    services: [
      [
        "Company Formation",
        "Clear guidance for establishing your business in Oman.",
      ],
      [
        "Sanad & PRO Services",
        "Support with government-facing processes and documentation.",
      ],
      [
        "Business Consultancy",
        "Practical advice for decisions, growth plans and operations.",
      ],
      [
        "Administrative Support",
        "Reliable back-office support that keeps daily work moving.",
      ],
      [
        "Financial Services",
        "Financial support suited to your operating stage.",
      ],
      [
        "IT Services",
        "Technology support that helps your business operate confidently.",
      ],
    ],
    why: "Built around the realities of doing business in Oman.",
    whyText:
      "NASMO connects the essentials businesses often source separately—space, setup, specialist support, and ongoing operational help.",
    whyPoints: [
      "Local knowledge of Oman’s business environment",
      "Workspace and business support under one provider",
      "Personalised solutions for every stage",
    ],
    steps: [
      "Tell Us What You Need",
      "Receive a Tailored Recommendation",
      "Complete Your Setup",
      "Grow with Ongoing Support",
    ],
    incubation: "Build Your Business with the Right Support",
    incubationText:
      "Workspace, mentorship, business planning, training, networking and specialist support for ambitious founders.",
    contact: "Let’s find the right support for your next step.",
    send: "Send Enquiry",
    trust:
      "✓ Local expertise · Personalised support · Complete business solutions",
  },

  ar: {
    dir: "rtl",
    nav: [
      "الرئيسية",
      "من نحن",
      "مساحات العمل",
      "خدمات الأعمال",
      "الاحتضان",
      "الأسئلة الشائعة",
      "تواصل معنا",
    ],
    hero: "أكثر من مجرد مساحة عمل",
    lead: "كل ما يحتاجه عملك للانطلاق والتشغيل والنمو في عُمان.",
    intro:
      "من مساحات العمل المرنة وتأسيس الشركات إلى الخدمات الإدارية والمالية والتقنية والحكومية، تجمع ناسمو احتياجات أعمالك الأساسية في مكان واحد.",
    explore: "استكشف حلولنا",
    advisor: "تحدث مع مستشار",
    pillars: ["مساحات العمل", "خدمات الأعمال", "النمو والاحتضان"],
    workspaceTitle: "بيئة مهنية تناسب كل أسلوب عمل.",
    workspaces: [
      [
        "غرفة الاجتماعات",
        "غرفة خاصة ومهنية للاجتماعات والعروض ومناقشات فرق العمل.",
      ],
      [
        "قاعة التدريب",
        "قاعة واسعة مصممة للدورات التدريبية وورش العمل والأنشطة الجماعية.",
      ],
      [
        "المكاتب الخاصة",
        "مكاتب مفروشة ومخصصة للفرق التي تحتاج إلى الخصوصية والتركيز والراحة.",
      ],
      [
        "المكاتب المشتركة الافتراضية",
        "حل مرن لمساحة العمل مع دعم مهني للأعمال.",
      ],
      [
        "المكاتب المشتركة",
        "مساحة عمل مشتركة مناسبة للعمل اليومي والإنتاجية والوصول المرن.",
      ],
      [
        "العيادات",
        "مساحات مكتبية خاصة وصغيرة توفر بيئة مريحة ومرنة لمختلف الاستخدامات.",
      ],
    ],
    servicesTitle: "خدمات متخصصة في مكان واحد.",
    services: [
      ["تأسيس الشركات", "إرشاد واضح لتأسيس أعمالك في عُمان."],
      [
        "خدمات سند وتخليص المعاملات",
        "دعم في الإجراءات الحكومية والمستندات.",
      ],
      [
        "استشارات الأعمال",
        "نصائح عملية للقرارات وخطط النمو والتشغيل.",
      ],
      ["الدعم الإداري", "دعم موثوق للأعمال اليومية."],
      ["الخدمات المالية", "دعم مالي مناسب لمرحلة عملك."],
      [
        "خدمات تقنية المعلومات",
        "حلول تقنية تساعد أعمالك على العمل بكفاءة.",
      ],
    ],
    why: "مصمم لواقع ممارسة الأعمال في عُمان.",
    whyText:
      "تجمع ناسمو بين المساحة والتأسيس والدعم المتخصص والتشغيل المستمر في شريك واحد.",
    whyPoints: [
      "خبرة محلية في بيئة الأعمال العُمانية",
      "مساحات عمل وخدمات أعمال لدى مزود واحد",
      "حلول مخصصة لكل مرحلة من مراحل العمل",
    ],
    steps: [
      "أخبرنا بما تحتاج",
      "احصل على توصية مخصصة",
      "أكمل إعداد أعمالك",
      "انمُ بدعم مستمر",
    ],
    incubation: "ابنِ أعمالك بالدعم المناسب",
    incubationText:
      "مساحات عمل وإرشاد وتخطيط وتدريب وشبكات ودعم متخصص لأصحاب المشاريع.",
    contact: "لنجد الدعم المناسب لخطوتك القادمة.",
    send: "إرسال الاستفسار",
    trust: "✓ خبرة محلية · دعم مخصص · حلول أعمال متكاملة",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [menu, setMenu] = useState(false);
  const [spaceNeed, setSpaceNeed] = useState("");
  const [selectedWorkspace, setSelectedWorkspace] = useState<{
  image: string;
  title: string;
} | null>(null);


  const [contactMenu, setContactMenu] = useState(false);

  const t = copy[lang];
const spaceOptions = [
  {
    id: "solo",
    icon: "◉",
    label: lang === "en" ? "I work alone" : "أعمل بشكل فردي",
    recommendation:
      lang === "en" ? "Regular Hot Desk" : "مكتب مشترك",
  },
  {
    id: "team",
    icon: "▦",
    label: lang === "en" ? "Office for my team" : "مكتب لفريق العمل",
    recommendation:
      lang === "en" ? "Private Office" : "مكتب خاص",
  },
  {
    id: "meeting",
    icon: "◇",
    label:
      lang === "en"
        ? "Meeting or training"
        : "اجتماع أو تدريب",
    recommendation:
      lang === "en"
        ? "Meeting or Training Room"
        : "غرفة اجتماعات أو قاعة تدريب",
  },
  {
    id: "virtual",
    icon: "⌂",
    label:
      lang === "en"
        ? "Business address"
        : "عنوان تجاري",
    recommendation:
      lang === "en" ? "Virtual Hot Desk" : "مكتب افتراضي",
  },
  {
    id: "clinic",
    icon: "✦",
    label:
      lang === "en"
        ? "Small private space"
        : "مساحة خاصة صغيرة",
    recommendation:
      lang === "en" ? "Clinic-style Space" : "مساحة عيادة مكتبية",
  },
];

const faqItems =
  lang === "en"
    ? [
        {
          question: "How much do NASMO workspaces cost?",
          answer:
            "Prices depend on the workspace type and size. Hot desks start from approximately 110 OMR, clinics from 160 OMR, and private offices from 250 OMR per month.",
        },
        {
          question: "What is included with the workspace?",
          answer:
            "Workspace packages include Wi-Fi, electricity, water and access to shared facilities. Printing services are also available.",
        },
        {
          question: "Can I use the space for commercial registration?",
          answer:
            "Selected workspace and virtual-office options can support commercial registration. Contact our team to confirm the suitable option for your business.",
        },
        {
          question: "Can I book meeting and training rooms?",
          answer:
            "Yes. Meeting and training rooms can be booked depending on availability.",
        },
        {
          question: "Can I visit the spaces before booking?",
          answer:
            "Yes. You can book a personal tour through WhatsApp and our team will show you the available spaces.",
        },
      ]
    : [
        {
          question: "كم تبلغ أسعار مساحات العمل في نسمو؟",
          answer:
            "تختلف الأسعار حسب نوع المساحة وحجمها. تبدأ المكاتب المشتركة من حوالي 110 ريالات عمانية، والعيادات من 160 ريالاً، والمكاتب الخاصة من 250 ريالاً شهرياً.",
        },
        {
          question: "ما الخدمات المشمولة مع مساحة العمل؟",
          answer:
            "تشمل باقات مساحات العمل الإنترنت والكهرباء والمياه واستخدام المرافق المشتركة، كما تتوفر خدمات الطباعة.",
        },
        {
          question: "هل يمكن استخدام المساحة للسجل التجاري؟",
          answer:
            "يمكن لبعض خيارات مساحات العمل والمكاتب الافتراضية دعم السجل التجاري. تواصل مع فريقنا لمعرفة الخيار المناسب لأعمالك.",
        },
        {
          question: "هل يمكن حجز غرف الاجتماعات وقاعات التدريب؟",
          answer:
            "نعم، يمكن حجز غرف الاجتماعات وقاعات التدريب حسب التوفر.",
        },
        {
          question: "هل يمكن زيارة المساحات قبل الحجز؟",
          answer:
            "نعم، يمكنك حجز جولة خاصة عبر واتساب وسيعرض لك فريقنا المساحات المتاحة.",
        },
      ];

  const incubationLink = `/incubation?lang=${lang}`;

  const pillarLinks = [
    "#workspaces",
    "#services",
    incubationLink,
  ];

  const navLinks = [
    "#home",
    "#about",
    "#workspaces",
    "#services",
    incubationLink,
    "#faq",
    "#contact",
  ];

  function changeLanguage() {
    setLang(lang === "en" ? "ar" : "en");
    setMenu(false);
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const subject = `NASMO enquiry from ${name}`;

    const body = Array.from(data.entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    window.location.href =
      `mailto:info@nasmo.om?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  return (
    <div dir={t.dir}>
      <header>
        <a href="#home" className="logo" aria-label="NASMO home">
          <img src="/nasmo-white.png" alt="NASMO International" />
        </a>

        <nav aria-label="Main navigation">
          {t.nav.map((name, index) => (
            <a key={name} href={navLinks[index]}>
              {name}
            </a>
          ))}
        </nav>

        <div className="actions">
          <button
            type="button"
            className="lang"
            onClick={changeLanguage}
            aria-label="Change language"
          >
            {lang === "en" ? "العربية" : "English"}
          </button>

          <a
            className="button small"
            href={booking}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang === "en" ? "Book a Space" : "احجز مساحة"}
          </a>

          <button
            type="button"
            className="menu"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menu}
          >
            {menu ? "✕" : "☰"}
          </button>
        </div>

        {menu && (
          <div className="drawer">
            {t.nav.map((name, index) => (
              <a
                key={name}
                href={navLinks[index]}
                onClick={() => setMenu(false)}
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero">
          <div>
            <p className="eyebrow">NASMO INTERNATIONAL LLC • OMAN</p>

            <h1>{t.hero}</h1>
            <h2>{t.lead}</h2>
            <p>{t.intro}</p>

            <div className="buttons">
              <a className="button" href="#workspaces">
                {t.explore}
              </a>

              <a className="button outline" href="#contact">
                {t.advisor}
              </a>
            </div>

            <p className="trust">{t.trust}</p>
          </div>

          <div className="hero-card hero-photo">
            <img
              src="/al-noor-plaza.jpeg"
              alt="Al Noor Plaza, NASMO International location"
            />
          </div>
          </section>

          <section className="space-finder">
  <div className="space-finder-heading">
    <p className="eyebrow">
      {lang === "en" ? "FIND YOUR SPACE" : "اعثر على مساحتك"}
    </p>

    <h2>
      {lang === "en"
        ? "Which space works for you?"
        : "ما المساحة المناسبة لك؟"}
    </h2>

    <p>
      {lang === "en"
        ? "Choose what you need and we’ll recommend the right NASMO solution."
        : "اختر ما تحتاجه وسنقترح عليك الحل المناسب من نسمو."}
    </p>
  </div>

  <div className="space-options">
    {spaceOptions.map((option) => (
      <button
        type="button"
        key={option.id}
        className={`space-option ${
          spaceNeed === option.id ? "selected" : ""
        }`}
        onClick={() => setSpaceNeed(option.id)}
      >
        <span>{option.icon}</span>
        <b>{option.label}</b>
      </button>
    ))}
  </div>

  {spaceNeed && (
    <div className="space-result">
      <div>
        <small>
          {lang === "en"
            ? "OUR RECOMMENDATION"
            : "توصيتنا لك"}
        </small>

        <h3>
          {
            spaceOptions.find(
              (option) => option.id === spaceNeed
            )?.recommendation
          }
        </h3>
      </div>

      <a className="button" href="#contact">
        {lang === "en" ? "Ask About This Space" : "استفسر عن هذه المساحة"}
      </a>
    </div>
  )}
</section>



        <section id="workspaces" className="soft">
          <p className="eyebrow">
            {lang === "en"
              ? "WORKSPACE SOLUTIONS"
              : "حلول مساحات العمل"}
          </p>

          <h2>{t.workspaceTitle}</h2>

          <div className="cards workspace">
            {t.workspaces.map((workspace, index) => (
              <article key={workspace[0]}>
                {workspaceImages[index] && (
  <button
    type="button"
    className="photo workspace-photo-button"
    onClick={() =>
      setSelectedWorkspace({
        image: workspaceImages[index],
        title: workspace[0],
      })
    }
    aria-label={`View ${workspace[0]} photo`}
  >
    <img
      src={workspaceImages[index]}
      alt={workspace[0]}
      loading="lazy"
    />

    <span className="photo-overlay">
      {lang === "en" ? "View Space" : "عرض المساحة"}
    </span>
  </button>
)}

                <h3>{workspace[0]}</h3>
                <p>{workspace[1]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="nasmo-video-section">
  <div className="video-copy">
    <p className="eyebrow">
      {lang === "en" ? "INSIDE NASMO" : "داخل نسمو"}
    </p>

    <h2>
      {lang === "en"
        ? "See Where Your Next Step Begins"
        : "شاهد أين تبدأ خطوتك القادمة"}
    </h2>

    <p>
      {lang === "en"
        ? "Take a quick look inside NASMO and discover a professional environment designed for work, meetings and business growth."
        : "خذ جولة سريعة داخل نسمو واكتشف بيئة مهنية مصممة للعمل والاجتماعات ونمو الأعمال."}
    </p>

    <a className="button" href={booking} target="_blank" rel="noopener noreferrer">
      {lang === "en" ? "Book Your Space" : "احجز مساحتك"}
    </a>
  </div>

  <div className="video-frame">
    <div className="video-label">
      <span>✦</span>
      {lang === "en" ? "44-SECOND TOUR" : "جولة في ٤٤ ثانية"}
    </div>

    <video
      controls
      muted
      playsInline
      preload="metadata"
      aria-label={
        lang === "en"
          ? "Video tour inside NASMO"
          : "جولة مصورة داخل نسمو"
      }
    >
      <source src="/nasmo-tour.mp4" type="video/mp4" />
      Your browser does not support video playback.
    </video>
  </div>
</section>

        <section className="pricing-banner">
          <div className="pricing-content">
            <p className="pricing-label">
              {lang === "en"
                ? "FLEXIBLE WORKSPACE OPTIONS"
                : "خيارات مساحات عمل مرنة"}
            </p>

            <h2>
              {lang === "en" ? (
                <>
                  Find your space from <strong>110 OMR</strong> per month
                </>
              ) : (
                <>
                  اختر مساحتك ابتداءً من{" "}
                  <strong>110 ريال عُماني</strong> شهرياً
                </>
              )}
            </h2>

            <p>
              {lang === "en"
                ? "Hot desks, clinics and private offices—with options start from 110 OMR."
                : "مكاتب مشتركة وعيادات ومكاتب خاصة، بخيارات تبدأ من 110 ريالا عمانيا شهريا ."}
            </p>
          </div>

          <a className="pricing-button" href="#contact">
            <span>
              {lang === "en"
                ? "Contact Us for Details"
                : "تواصل معنا للتفاصيل"}
            </span>

            <b aria-hidden="true">↗</b>
          </a>
        </section>

        <section className="tour-cta">
  <div className="tour-decoration" aria-hidden="true">
    <span>✦</span>
    <span>↗</span>
  </div>

  <div className="tour-content">
    <p className="eyebrow">
      {lang === "en" ? "VISIT NASMO" : "زُر نسمو"}
    </p>

    <h2>
      {lang === "en"
        ? "See Your Next Workspace in Person"
        : "شاهد مساحة عملك القادمة بنفسك"}
    </h2>

    <p>
      {lang === "en"
        ? "Book a personal tour, explore the available spaces and find the right option for your business."
        : "احجز جولة خاصة، واستكشف المساحات المتاحة، واختر الخيار المناسب لأعمالك."}
    </p>

    <div className="buttons">
  <a
    className="button"
    href="https://wa.me/96879399939?text=Hello%20NASMO%2C%20I%20would%20like%20to%20book%20a%20workspace%20tour."
    target="_blank"
    rel="noopener noreferrer"
  >
    {lang === "en" ? "Book a Tour" : "احجز جولة"}
  </a>
</div>
  </div>
</section>

        <section id="services">
          <p className="eyebrow">
            {lang === "en" ? "BUSINESS SERVICES" : "خدمات الأعمال"}
          </p>

          <h2>{t.servicesTitle}</h2>

          <div className="cards services">
            {t.services.map((service) => (
              <article key={service[0]}>
                <span className="service-arrow" aria-hidden="true">
                  ↗
                </span>

                <h3>{service[0]}</h3>
                <p>{service[1]}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="split soft">
          <div>
            <p className="eyebrow">
              {lang === "en" ? "WHY NASMO" : "لماذا ناسمو؟"}
            </p>

            <h2>{t.why}</h2>
            <p>{t.whyText}</p>
          </div>

          <ul>
            {t.whyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="steps">
          <h2>{lang === "en" ? "How it works" : "كيف نعمل"}</h2>

          <div className="four">
            {t.steps.map((step, index) => (
              <article key={step}>
                <small>0{index + 1}</small>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="incubation" className="incubation">
  <div className="incubation-photo">
    <img
      src="/incubation-nasmo.png"
      alt="NASMO business incubation and mentorship"
    />
  </div>

  <div>
    <p className="eyebrow">
      {lang === "en" ? "INCUBATION" : "الاحتضان"}
    </p>

    <h2>{t.incubation}</h2>

    <p>
      {lang === "en"
        ? "Workspace, mentorship, business planning, training, networking and specialist support for ambitious founders."
        : "مساحات عمل وإرشاد وتخطيط وتدريب وشبكات ودعم متخصص لأصحاب المشاريع."}
    </p>

    <a className="button" href={`/incubation?lang=${lang}`}>
      {lang === "en" ? "Explore Incubation" : "استكشف برنامج الاحتضان"}
    </a>
  </div>
</section>


<section id="faq" className="faq-section">
    <div className="faq-heading">
    <p className="eyebrow">
      {lang === "en"
        ? "FREQUENTLY ASKED QUESTIONS"
        : "الأسئلة الشائعة"}
    </p>

    <h2>
      {lang === "en"
        ? "Everything You Need to Know"
        : "كل ما تحتاج إلى معرفته"}
    </h2>

    <p>
      {lang === "en"
        ? "Quick answers about NASMO workspaces, services and bookings."
        : "إجابات سريعة حول مساحات نسمو وخدماتها والحجوزات."}
    </p>
  </div>

  <div className="faq-list">
    {faqItems.map((item, index) => (
      <details key={item.question} className="faq-item">
        <summary>
          <span className="faq-number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <strong>{item.question}</strong>

          <span className="faq-plus">+</span>
        </summary>

        <p>{item.answer}</p>
      </details>
    ))}
  </div>

  <div className="faq-help">
  <h3>
    {lang === "en"
      ? "Still have a question?"
      : "لا يزال لديك سؤال؟"}
  </h3>

  <p>
    {lang === "en"
      ? "Speak directly with the NASMO team on WhatsApp."
      : "تواصل مباشرة مع فريق نسمو عبر واتساب."}
  </p>

  <a
    className="button"
    href="https://wa.me/96879399939?text=Hello%20NASMO%2C%20I%20have%20a%20question."
    target="_blank"
    rel="noopener noreferrer"
  >
    {lang === "en" ? "Ask Your Question" : "اطرح سؤالك"}
  </a>
</div>
</section>

        <section id="contact" className="contact">
          <div>
            <p className="eyebrow">
              {lang === "en"
                ? "CONTACT NASMO"
                : "تواصل مع ناسمو"}
            </p>

            <h2>{t.contact}</h2>

            <p>
              <a href="mailto:info@nasmo.om">info@nasmo.om</a>
              <br />

              <a href="tel:+96879399939">+968 7939 9939</a>
              {" · "}
              <a href="tel:+96822842927">+968 2284 2927</a>

              <br />

              {lang === "en"
                ? "First Floor, Al Noor Plaza, Madinat Sultan Qaboos, Muscat, Oman"
                : "الطابق الأول، النور بلازا، مدينة السلطان قابوس، مسقط، عُمان"}
            </p>
          </div>

          <form onSubmit={submit}>
            <input
              name="name"
              required
              placeholder={
                lang === "en" ? "Full name" : "الاسم الكامل"
              }
              aria-label={
                lang === "en" ? "Full name" : "الاسم الكامل"
              }
            />

            <input
              name="company"
              placeholder={
                lang === "en" ? "Company" : "الشركة"
              }
              aria-label={
                lang === "en" ? "Company" : "الشركة"
              }
            />

            <input
              name="email"
              type="email"
              required
              placeholder={
                lang === "en"
                  ? "Email address"
                  : "البريد الإلكتروني"
              }
              aria-label={
                lang === "en"
                  ? "Email address"
                  : "البريد الإلكتروني"
              }
            />

            <textarea
              name="message"
              required
              placeholder={
                lang === "en"
                  ? "How can NASMO help?"
                  : "كيف يمكن لناسمو مساعدتك؟"
              }
              aria-label={
                lang === "en"
                  ? "How can NASMO help?"
                  : "كيف يمكن لناسمو مساعدتك؟"
              }
            />

            <button type="submit" className="button">
              {t.send}
            </button>
          </form>
        </section>
      </main>

      {selectedWorkspace && (
  <div
    className="workspace-modal"
    role="dialog"
    aria-modal="true"
    aria-label={selectedWorkspace.title}
    onClick={() => setSelectedWorkspace(null)}
  >
    <div
      className="workspace-modal-content"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="workspace-modal-close"
        onClick={() => setSelectedWorkspace(null)}
        aria-label="Close photo"
      >
        ×
      </button>

      <img
        src={selectedWorkspace.image}
        alt={selectedWorkspace.title}
      />

      <div className="workspace-modal-title">
        <h3>{selectedWorkspace.title}</h3>

        <a className="button" href="#contact">
          {lang === "en" ? "Ask About This Space" : "استفسر عن هذه المساحة"}
        </a>
      </div>
    </div>
  </div>
)}

      <footer>
        <div className="map">
          <iframe
            title="NASMO location on Google Maps"
            src="https://www.google.com/maps?q=Al%20Noor%20Plaza%20Madinat%20Sultan%20Qaboos%20Muscat&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="footer-info">
          <div>
            <img
              src="/nasmo-white.png"
              alt="NASMO International"
            />

            <p>
              {lang === "en"
                ? "Flexible workspaces and complete business support in Oman."
                : "مساحات عمل مرنة ودعم متكامل للأعمال في عُمان."}
            </p>
          </div>

          <div>
            <b>{lang === "en" ? "COMPANY" : "الشركة"}</b>

            <a href="#about">
              {lang === "en" ? "About NASMO" : "عن ناسمو"}
            </a>

            <a href={incubationLink}>
              {lang === "en" ? "Incubation" : "الاحتضان"}
            </a>

            <a href="#contact">
              {lang === "en" ? "Contact" : "تواصل معنا"}
            </a>
          </div>

          <div>
            <b>{lang === "en" ? "CONTACT" : "التواصل"}</b>

            <a href="mailto:info@nasmo.om">
              info@nasmo.om
            </a>

            <a href="tel:+96879399939">
              +968 7939 9939
            </a>

            <span>
              {lang === "en" ? "Muscat, Oman" : "مسقط، عُمان"}
            </span>
          </div>
        </div>

        <small>
          © 2026 NASMO International LLC ·{" "}
          {lang === "en"
            ? "Privacy Policy · Terms and Conditions"
            : "سياسة الخصوصية · الشروط والأحكام"}
        </small>
      </footer>

      <div className={`side-contact ${contactMenu ? "open" : ""}`}>
  <div className="side-contact-links">
    <a
      className="contact-option whatsapp"
      href="https://wa.me/96879399939?text=Hello%20NASMO%2C%20I%20would%20like%20more%20information."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact NASMO on WhatsApp"
    >
      <span>WA</span>
      <b>WhatsApp</b>
    </a>

    <a
      className="contact-option instagram"
      href="https://www.instagram.com/nasmo_int/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit NASMO on Instagram"
    >
      <span>IG</span>
      <b>Instagram</b>
    </a>

    <a
      className="contact-option linkedin"
      href="https://www.linkedin.com/showcase/nasmo-oman/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit NASMO on LinkedIn"
    >
      <span>in</span>
      <b>LinkedIn</b>
    </a>

    <a
      className="contact-option email"
      href="mailto:info@nasmo.om"
      aria-label="Email NASMO"
    >
      <span>✉</span>
      <b>Email</b>
    </a>
  </div>

  <button
    type="button"
    className="side-contact-trigger"
    onClick={() => setContactMenu(!contactMenu)}
    aria-expanded={contactMenu}
    aria-label={contactMenu ? "Close contact menu" : "Open contact menu"}
  >
    <span>{contactMenu ? "×" : "✦"}</span>
    <b>
      {contactMenu
        ? lang === "en"
          ? "Close"
          : "إغلاق"
        : lang === "en"
          ? "Contact Us"
          : "تواصل معنا"}
    </b>
  </button>
</div>
    </div>
  );
}