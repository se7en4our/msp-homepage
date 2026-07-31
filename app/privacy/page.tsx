import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 다온클라우드",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://daon.cloud/privacy" },
};

const SECTIONS = [
  {
    title: "1. 수집하는 개인정보 항목 및 수집 방법",
    body: [
      "다온클라우드(이하 “회사”)는 홈페이지 문의 폼을 통해 아래 개인정보를 이용자가 자발적으로 제공하는 방식으로만 수집합니다.",
      "필수 항목: 이름, 회사명, 이메일, 문의 내용, 현재 상황",
      "선택 항목: 연락처",
      "그 외에 회사는 이용자를 식별하기 위한 쿠키 등 자동 수집 장치를 사용하지 않습니다.",
    ],
  },
  {
    title: "2. 개인정보의 수집 및 이용 목적",
    body: ["수집한 개인정보는 문의 내용 확인 및 응대, 상담·견적 안내 목적으로만 이용합니다."],
  },
  {
    title: "3. 개인정보의 보유 및 이용 기간",
    body: [
      "회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.",
      "문의를 통해 수집한 개인정보는 문의 처리 완료일로부터 1년간 보관 후 파기함을 원칙으로 합니다.",
      "단, 관계 법령의 규정에 따라 보존할 필요가 있는 경우 회사는 관계 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다.",
    ],
  },
  {
    title: "4. 개인정보의 제3자 제공 및 처리위탁",
    body: [
      "회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.",
      "다만 문의 폼으로 접수된 내용은 담당자에게 신속히 전달하기 위해 협업 도구인 Slack(운영사: Slack Technologies, LLC, 미국 소재)을 통해 내부적으로 전달됩니다. 이는 국외로의 개인정보 이전에 해당하며, 이전 항목은 문의 폼에 입력한 이름·회사명·이메일·연락처·문의 내용이고, 이전 목적은 문의 접수 알림 수신입니다.",
    ],
  },
  {
    title: "5. 정보주체의 권리·의무 및 행사방법",
    body: [
      "이용자는 언제든지 자신의 개인정보에 대해 열람·정정·삭제·처리정지를 요구할 수 있습니다.",
      "권리 행사는 아래 개인정보 보호책임자에게 서면, 이메일 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치합니다.",
    ],
  },
  {
    title: "6. 개인정보의 파기절차 및 방법",
    body: [
      "이용목적이 달성되거나 보유기간이 경과한 개인정보는 지체 없이 파기합니다.",
      "전자적 파일 형태의 정보는 복구할 수 없는 기술적 방법을 사용하여 삭제합니다.",
    ],
  },
  {
    title: "7. 개인정보 보호책임자",
    body: [
      "회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.",
      "성명: 홍준호 (대표)",
      "연락처: contact@daon.cloud",
    ],
  },
  {
    title: "8. 고지의 의무",
    body: [
      "현 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 경우에는 개정 최소 7일 전부터 홈페이지의 공지사항을 통하여 고지할 것입니다.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">개인정보처리방침</h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            다온클라우드(이하 “회사”)는 정보주체의 개인정보를 중요시하며, 「개인정보 보호법」을
            준수하고 있습니다. 회사는 개인정보처리방침을 통하여 이용자가 제공하는 개인정보가
            어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고
            있는지 알려드립니다.
          </p>
          <div className="mt-10 space-y-8">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {section.body.map((line, i) => (
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
