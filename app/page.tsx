import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

const CLOUD_PROVIDERS = ["AWS", "OCI", "GCP", "Azure"];

// 보유 인증이 아닌 "대응 역량" 중심으로 표현
const TRUST_BADGES = [
  { label: "멀티클라우드 대응", sub: "AWS·OCI·GCP·Azure 통합 운영" },
  { label: "보안 심사 대응", sub: "고객사 점검표 항목 사전 반영" },
  { label: "개인정보 안전성 대응", sub: "안전성 확보조치 기준 갭 분석" },
  { label: "ISMS 대응", sub: "정보보호 관리체계 요건 지원" },
  { label: "증적 기반 운영", sub: "접근·백업 이력 문서화" },
];

// 한국 SMB를 위한 플랜 구성 (가격은 맞춤 견적으로 통일)
const PLANS = [
  {
    name: "스타트",
    tagline: "클라우드를 막 시작했거나, 단일 클라우드만 쓰는 팀",
    priceLabel: "맞춤 견적",
    priceNote: "진단 후 범위에 맞춰 안내",
    features: [
      "단일 클라우드 운영·모니터링",
      "장애 1차 대응 (평일 09–18시)",
      "월간 비용·운영 리포트",
      "보안 기본 점검 체크리스트",
    ],
    cta: "스타트 플랜 상담",
    highlighted: false,
  },
  {
    name: "그로스",
    tagline: "트래픽이 늘고, 고객사 보안 심사 대응이 필요한 팀",
    priceLabel: "맞춤 견적",
    priceNote: "가장 많이 선택하는 구성",
    features: [
      "멀티클라우드 통합 운영·모니터링",
      "장애 대응 + 상시 모니터링",
      "FinOps 비용 최적화 (분기 리뷰)",
      "보안 심사 대응 (증적 문서화 포함)",
      "전담 엔지니어 배정",
    ],
    cta: "그로스 플랜 상담",
    highlighted: true,
  },
  {
    name: "엔터프라이즈",
    tagline: "24×7 대응과 규정 준수가 필수인 팀",
    priceLabel: "맞춤 견적",
    priceNote: "요구 수준에 맞춰 설계",
    features: [
      "24×7×365 장애 대응",
      "멀티클라우드 아키텍처 설계·이전",
      "컴플라이언스 상시 대응 (ISMS 등)",
      "전용 운영 체계 + 월간 정기 미팅",
      "SLA 보장",
    ],
    cta: "엔터프라이즈 상담",
    highlighted: false,
  },
];

const SERVICES = [
  {
    title: "멀티클라우드 운영/모니터링",
    description:
      "AWS·OCI·GCP·Azure에 흩어진 인프라를 한 팀이 통합 모니터링하고, 장애를 사전에 감지해 대응합니다.",
    icon: IconMonitor,
  },
  {
    title: "클라우드 마이그레이션",
    description:
      "온프레미스에서 클라우드로, 혹은 클라우드 간 이전까지 - 다운타임을 최소화하는 이전 계획을 설계하고 직접 수행합니다.",
    icon: IconMigrate,
  },
  {
    title: "비용 최적화 (FinOps)",
    description:
      "리소스 사용 패턴을 분석해 불필요한 지출을 줄이고, 예산 안에서 최대 효율을 내는 아키텍처를 제안합니다.",
    icon: IconCost,
  },
  {
    title: "보안/컴플라이언스",
    description:
      "접근 권한, 네트워크 격리, 백업 정책까지 - 사고 전에 막는 보안 기본기를 클라우드 전반에 일관되게 적용합니다.",
    icon: IconShield,
  },
];

const CASES = [
  {
    industry: "제조업",
    title: "노후 온프레미스 서버를 AWS로 이전",
    before: "장애 대응 인력 부재, 백업 정책 없이 운영되던 사내 서버",
    result: "단계적 이전으로 다운타임 없이 전환, 이중화 백업과 상시 모니터링 체계 확보",
  },
  {
    industry: "이커머스",
    title: "세일 기간 트래픽 급증 대응 체계 구축",
    before: "세일마다 수동으로 서버를 증설하고, 부하가 몰리면 응답 지연 발생",
    result: "오토스케일링 도입으로 트래픽 변화에 자동 대응, 운영 인력 부담 해소",
  },
  {
    industry: "헬스케어",
    title: "2개 클라우드에 흩어진 인프라 비용 재점검",
    before: "GCP·AWS를 함께 쓰면서 사용하지 않는 리소스와 중복 비용 누적",
    result: "리소스 사용 패턴 분석 후 정리, 매달 비용 리포트로 지출 가시성 확보",
  },
];

const FAQS = [
  {
    question: "계약은 어떤 방식으로 진행되나요?",
    answer:
      "월 단위 운영 계약과 프로젝트 단위(이전/구축) 계약을 함께 운영합니다. 진단 후 필요한 범위에 맞춰 제안드립니다.",
  },
  {
    question: "장애가 발생하면 얼마나 빨리 대응하나요?",
    answer:
      "기본 계약은 평일 09~18시, 1차 대응 30분 이내입니다. 24×7 대응이 필요한 경우 별도 등급으로 제공하며, 요금이 달라집니다. 상시 모니터링은 계약 등급과 무관하게 적용됩니다.",
  },
  {
    question: "이미 특정 클라우드 하나만 쓰고 있어도 괜찮나요?",
    answer:
      "네, 단일 클라우드만 사용 중이어도 상관없습니다. 멀티클라우드 전환 여부와 무관하게 현재 인프라 운영·최적화부터 시작할 수 있습니다.",
  },
  {
    question: "비용은 어떻게 산정되나요?",
    answer:
      "인프라 규모, 모니터링 범위, 대응 시간 요구 수준에 따라 산정됩니다. 무료 진단 후 예산에 맞는 견적을 안내드립니다.",
  },
  {
    question: "온보딩에는 얼마나 걸리나요?",
    answer:
      "현재 인프라 진단에 보통 1~2주, 이후 모니터링·운영 체계 이관까지 포함하면 2~4주 정도 소요됩니다. 규모에 따라 달라질 수 있습니다.",
  },
];

const WHY_US = [
  {
    stat: "15년+",
    label: "클라우드 MSP 외길 경력",
    description: "대기업부터 스타트업까지, 다양한 규모의 인프라를 직접 설계·운영해왔습니다.",
  },
  {
    stat: "30분 이내",
    label: "장애 1차 대응",
    description: "상시 모니터링으로 이상 징후를 먼저 감지하고, 기준 시간 안에 1차 대응을 시작합니다.",
  },
  {
    stat: "4개 클라우드",
    label: "하나의 창구로 통합",
    description: "AWS·OCI·GCP·Azure를 담당자 한 명 찾을 필요 없이 다온클라우드 한 팀이 책임집니다.",
  },
  {
    stat: "평균 20%+",
    label: "클라우드 비용 절감",
    description: "FinOps 분석으로 미사용·중복 리소스를 정리해 매달 지출 가시성과 절감을 확보합니다.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "인증 기준으로 시작하는 설계",
    description: "ISMS-P 통제 항목과 고객사 보안 점검표를 구축 단계에서 아키텍처에 반영합니다.",
    note: "나중에 채우면 재구축입니다.",
  },
  {
    title: "증적이 남는 운영",
    description: "권한 변경·접근 이력·백업 복구 테스트 결과가 자동으로 쌓입니다. 심사 요청 시 바로 제출 가능합니다.",
    note: "“기록이 없습니다”는 통제가 없다는 뜻으로 읽힙니다.",
  },
  {
    title: "법적 의무 사항 대응",
    description: "개인정보를 처리한다면 인증 대상이 아니어도 안전성 확보조치 의무는 적용됩니다. 갭 분석부터 구현까지 함께합니다.",
    note: "인증 대상이 아니어도 법적 의무는 남습니다.",
  },
];

const PROCESS = [
  { step: "01", title: "진단", description: "현재 인프라와 비용, 운영 리스크를 점검합니다." },
  { step: "02", title: "설계", description: "목표와 예산에 맞는 아키텍처와 이전 계획을 제안합니다." },
  { step: "03", title: "이전/구축", description: "다운타임을 최소화하며 단계적으로 실행합니다." },
  { step: "04", title: "운영", description: "이후에도 모니터링·최적화·대응을 지속합니다." },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <StructuredData />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Differentiator />
        <Services />
        <WhyUs />
        <Pricing />
        <Cases />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "다온클라우드",
      description:
        "AWS·OCI·GCP·Azure 멀티클라우드 운영·이전·비용 최적화·보안 심사 대응을 제공하는 중소기업·스타트업 전용 클라우드 MSP.",
      url: "https://daon.cloud/",
      areaServed: "KR",
      address: {
        "@type": "PostalAddress",
        streetAddress: "서초구 강남대로 18길 15-6",
        addressLocality: "서울",
        addressCountry: "KR",
      },
      knowsAbout: [
        "클라우드 MSP",
        "멀티클라우드 운영",
        "클라우드 마이그레이션",
        "FinOps 비용 최적화",
        "클라우드 보안",
        "ISMS 대응",
      ],
      makesOffer: PLANS.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} 플랜`,
        description: plan.tagline,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-700/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-[-5%] h-72 w-72 rounded-full bg-brand-200/30 blur-3xl dark:bg-brand-800/20"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
          중소기업을 위한 Cloud &amp; Compliance MSP
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          인증 준비는 구축할 때
          <br />
          이미 끝나 있어야 합니다.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          ISMS-P 통제 항목을 반영해 클라우드를 설계·구축합니다. 심사 직전에 급히 고치는 게
          아니라, 처음부터 통과할 수 있는 인프라를 만듭니다. 인프라·보안 담당자가 없어도
          괜찮습니다.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            무료 진단 문의하기
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          무료 인프라 진단 후 견적 안내 · 계약 전 비용 부담 없음
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
            지원 클라우드
          </span>
          {CLOUD_PROVIDERS.map((provider) => (
            <span
              key={provider}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              {provider}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section
      aria-label="파트너십 및 인증"
      className="border-t border-slate-200 bg-slate-50 py-10 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
          파트너십과 준수 기준
        </p>
        <ul className="mt-6 flex flex-wrap items-stretch justify-center gap-3">
          {TRUST_BADGES.map((badge) => (
            <li
              key={badge.label}
              className="flex min-w-[150px] flex-col items-center rounded-xl border border-slate-200 bg-white px-5 py-4 text-center dark:border-slate-800 dark:bg-slate-950"
            >
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {badge.label}
              </span>
              <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {badge.sub}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
          * 위 항목은 보유 인증이 아니라, 고객사 심사·규정 기준에 맞춘 대응 역량을 의미합니다.
        </p>
      </div>
    </section>
  );
}

function Differentiator() {
  return (
    <section className="border-t border-slate-200 py-20 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
          인증이 필요해지는 순간은,
          <br />
          대부분 계약 직전에 옵니다.
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          중소기업 대부분은 ISMS 의무 대상이 아닙니다. 그래도 인증이 필요해지는 순간은
          옵니다. 대기업·금융권 고객사가 협력사 조건으로 요구할 때, 투자 실사에서 보안 체계를
          물을 때, 서비스가 성장해 의무 대상 기준에 들어설 때입니다.
        </p>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          문제는 그때부터 준비하면 늦다는 겁니다. ISMS는 신청 전에{" "}
          <strong className="font-semibold text-slate-900 dark:text-slate-100">
            최소 2개월 이상의 운영 증적
          </strong>
          이 있어야 합니다. 계약 일정은 기다려주지 않습니다.
        </p>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          막히는 지점도 대부분 같습니다. 서버는 멀쩡히 돌고 있는데,{" "}
          <strong className="font-semibold text-slate-900 dark:text-slate-100">
            접근권한을 누가 언제 부여했는지 증명할 수 없고
          </strong>
          , 로그 보관 기간이 기준에 못 미치고, 백업은 돌지만 복구를 해본 적이 없습니다. 구축
          단계에서는 설정 하나로 끝날 일이{" "}
          <strong className="font-semibold text-slate-900 dark:text-slate-100">
            운영 중에 고치면 재설계가 됩니다.
          </strong>
        </p>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          다온클라우드는{" "}
          <strong className="font-semibold text-slate-900 dark:text-slate-100">
            15년간 현장을 지켜온 엔지니어가 직접
          </strong>{" "}
          인프라를 설계·운영하며 그 지점들을 반복해서 봐 왔습니다. 그래서 인증 기준을 설계
          요구사항으로 놓고 시작합니다.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
              <p className="mt-2 text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
                {item.note}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <p className="max-w-xl text-slate-600 dark:text-slate-300">
            지금 인프라가 심사를 통과할 수 있는 상태인지,
            <br />
            무료 진단에서 항목별로 확인해 드립니다.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            보안 점검 항목 진단 신청
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          무엇을 도와드리나요
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          인프라 구축부터 운영, 이전, 비용 관리까지 - 클라우드 운영에 필요한
          전 과정을 담당합니다.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-400">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          왜 다온클라우드인가요
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">
                {item.stat}
              </p>
              <p className="mt-2 font-semibold">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">플랜 안내</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          팀의 상황에 맞춰 세 가지 플랜을 운영합니다. 비용은 인프라 규모·모니터링 범위·대응
          시간에 따라 달라지므로,{" "}
          <strong className="font-semibold text-slate-900 dark:text-slate-100">
            무료 진단 후 맞춤 견적
          </strong>
          으로 안내드립니다.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.highlighted
                  ? "relative rounded-2xl border-2 border-brand-500 bg-white p-7 shadow-sm dark:bg-slate-950"
                  : "relative rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-950"
              }
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-7 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  가장 많이 선택
                </span>
              )}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-2 min-h-[2.5rem] text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {plan.tagline}
              </p>
              <div className="mt-5">
                <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">
                  {plan.priceLabel}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {plan.priceNote}
                </p>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
                  >
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  plan.highlighted
                    ? "mt-7 block rounded-full bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-700"
                    : "mt-7 block rounded-full border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:text-brand-400"
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-400 dark:text-slate-500">
          * 플랜별 포함 범위는 상황에 따라 조정될 수 있으며, 최종 비용은 진단 후 견적으로
          확정됩니다.
        </p>
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section id="cases" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          이런 요청을 도와드렸습니다
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          고객사명은 비공개 계약에 따라 표기하지 않으며, 업종과 상황만 소개합니다.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {CASES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
            >
              <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                {item.industry}
              </span>
              <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-slate-500 dark:text-slate-400">Before</dt>
                  <dd className="mt-1 leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.before}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500 dark:text-slate-400">After</dt>
                  <dd className="mt-1 leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.result}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          진행 프로세스
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-4">
          {PROCESS.map((item) => (
            <div key={item.step}>
              <p className="text-sm font-bold text-brand-500">{item.step}</p>
              <p className="mt-2 font-semibold">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          자주 묻는 질문
        </h2>
        <div className="mt-10 space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none">
                {item.question}
                <span className="shrink-0 text-brand-600 transition group-open:rotate-45 dark:text-brand-400">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">문의하기</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          간단한 정보만 남겨주시면 담당자가 확인 후 연락드립니다.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

type IconProps = { className?: string };

function IconMonitor({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path strokeLinecap="round" d="M8 20h8M12 16v4" />
    </svg>
  );
}

function IconMigrate({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h13M13 3l4 4-4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 17H7M11 13l-4 4 4 4" />
    </svg>
  );
}

function IconCost({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" d="M12 7v10M14.5 9.5c0-1.1-1.1-2-2.5-2s-2.5.7-2.5 1.8c0 2.6 5 1.2 5 3.8 0 1.1-1.1 1.9-2.5 1.9s-2.5-.9-2.5-2" />
    </svg>
  );
}

function IconShield({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconCheck({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
