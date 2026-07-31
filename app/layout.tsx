import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daon.cloud"),
  title: "인프라 담당자 없는 팀을 위한 클라우드 운영 파트너 | 다온클라우드",
  description:
    "AWS 구축·이관부터 24시간 운영, 비용 최적화, 고객사 보안 심사 대응까지. 15년간 다양한 규모의 조직에서 쌓아온 경험으로 설계하는 중소기업·스타트업 전용 클라우드 MSP.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://daon.cloud/",
  },
  openGraph: {
    title: "다온클라우드 | 클라우드 운영, 사람 뽑지 말고 맡기세요",
    description: "구축·운영·비용 최적화·보안 심사 대응. 무료 인프라 진단부터 시작하세요.",
    type: "website",
    url: "https://daon.cloud/",
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
