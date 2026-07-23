import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "다온클라우드 · 준비 중",
  description: "중소기업을 위한 멀티 클라우드 MSP",
  robots: { index: false, follow: false },
  openGraph: {
    title: "다온클라우드",
    description: "중소기업 멀티 클라우드 MSP · 준비 중",
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
