import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "다온클라우드 · 중소기업을 위한 멀티클라우드 MSP",
  description:
    "AWS, OCI, GCP, Azure - 여러 클라우드를 오가는 부담을 다온클라우드 한 팀이 관리·이전·최적화합니다.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "다온클라우드",
    description: "중소기업을 위한 멀티클라우드 MSP - 운영, 이전, 비용 최적화",
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
