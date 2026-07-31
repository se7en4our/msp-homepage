import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "이용약관 | 다온클라우드",
  robots: { index: false, follow: false },
};

const ARTICLES = [
  {
    title: "제1조 (목적)",
    body: [
      "이 약관은 다온클라우드(이하 “회사”)가 운영하는 웹사이트(https://daon.cloud, 이하 “사이트”)를 통해 제공하는 서비스 소개, 문의 접수 및 관련 안내(이하 “서비스”)의 이용과 관련하여 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.",
    ],
  },
  {
    title: "제2조 (용어의 정의)",
    body: [
      "“이용자”란 사이트에 접속하여 이 약관에 따라 서비스를 이용하는 자를 말합니다.",
      "“서비스”란 사이트를 통해 제공되는 회사 소개, 서비스 안내, 문의 접수 기능 일체를 말합니다.",
    ],
  },
  {
    title: "제3조 (약관의 효력 및 변경)",
    body: [
      "이 약관은 사이트에 게시함으로써 효력이 발생합니다.",
      "회사는 관계 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있으며, 개정 시 적용일자 및 개정사유를 명시하여 시행일 7일 전부터 사이트에 공지합니다.",
    ],
  },
  {
    title: "제4조 (서비스의 내용)",
    body: [
      "회사는 사이트를 통해 클라우드 구축·이관, 클라우드 운영 관리(MSP), 보안·컴플라이언스 대응 등 서비스에 대한 정보를 제공하고, 이용자의 문의를 접수합니다.",
      "사이트를 통해 접수된 문의는 상담·견적 안내를 위한 것이며, 문의 접수만으로 회사와 이용자 사이에 별도 계약이 체결되는 것은 아닙니다. 구체적인 서비스 계약은 별도 협의를 통해 체결됩니다.",
    ],
  },
  {
    title: "제5조 (이용자의 의무)",
    body: [
      "이용자는 문의 시 사실에 기반한 정보를 제공하여야 하며, 타인의 정보를 도용하거나 허위 정보를 기재하여서는 안 됩니다.",
      "이용자는 사이트 운영을 방해하거나 사이트에 게시된 정보를 무단으로 복제·배포·상업적으로 이용해서는 안 됩니다.",
    ],
  },
  {
    title: "제6조 (회사의 의무)",
    body: [
      "회사는 관계 법령과 이 약관이 정하는 바에 따라 지속적이고 안정적으로 서비스를 제공하기 위해 노력합니다.",
      "회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 이를 준수합니다.",
    ],
  },
  {
    title: "제7조 (지적재산권)",
    body: [
      "사이트에 게시된 텍스트, 이미지, 로고 등 콘텐츠에 대한 저작권 및 지적재산권은 회사에 귀속됩니다.",
      "이용자는 회사의 사전 서면 동의 없이 사이트의 콘텐츠를 복제, 전송, 출판, 배포, 방송하는 등의 방법으로 영리 목적으로 이용하거나 제3자에게 이용하게 할 수 없습니다.",
    ],
  },
  {
    title: "제8조 (면책조항)",
    body: [
      "회사는 천재지변, 불가항력적 사유로 인해 서비스를 제공할 수 없는 경우 서비스 제공에 대한 책임이 면제됩니다.",
      "회사는 이용자가 사이트에 게재한 정보, 자료의 신뢰도, 정확성 등에 대해서는 책임을 지지 않습니다.",
    ],
  },
  {
    title: "제9조 (준거법 및 관할법원)",
    body: [
      "이 약관과 관련하여 회사와 이용자 간에 발생한 분쟁에 대해서는 대한민국 법을 적용하며, 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">이용약관</h1>
          <div className="mt-10 space-y-8">
            {ARTICLES.map((article) => (
              <section key={article.title}>
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {article.body.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="mt-12 text-xs text-slate-400 dark:text-slate-500">
            공고일자: 2026년 8월 1일 · 시행일자: 2026년 8월 1일
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
