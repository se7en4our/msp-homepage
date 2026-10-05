import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daon.cloud"),
  title: "중소기업을 위한 Cloud & Compliance MSP | 다온클라우드",
  description:
    "ISMS-P 통제 항목을 반영해 클라우드를 설계·구축합니다. 심사 직전에 급히 고치는 게 아니라, 처음부터 통과할 수 있는 인프라를 만듭니다. 인프라·보안 담당자가 없어도 괜찮습니다. 무료 인프라 진단 후 맞춤 견적으로 안내합니다.",
  keywords: [
    "클라우드 MSP",
    "Cloud Compliance",
    "ISMS-P",
    "ISMS 인증",
    "중소기업 클라우드",
    "멀티클라우드 운영",
    "AWS 운영 대행",
    "클라우드 마이그레이션",
    "클라우드 비용 최적화",
    "FinOps",
    "클라우드 보안 심사",
    "다온클라우드",
  ],
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://daon.cloud/",
  },
  openGraph: {
    title: "다온클라우드 | 인증 준비는 구축할 때 이미 끝나 있어야 합니다",
    description:
      "ISMS-P 통제 항목을 반영한 클라우드 설계·구축·운영. 무료 인프라 진단 후 맞춤 견적으로 시작하세요.",
    type: "website",
    url: "https://daon.cloud/",
    locale: "ko_KR",
    siteName: "다온클라우드",
  },
  twitter: {
    card: "summary_large_image",
    title: "다온클라우드 | 중소기업을 위한 Cloud & Compliance MSP",
    description:
      "ISMS-P 통제 항목을 반영해 처음부터 통과하는 클라우드를 설계·구축합니다. 무료 진단부터 시작하세요.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
