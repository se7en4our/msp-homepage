"use client";

import { useEffect, useState } from "react";

const USER = "contact";
const DOMAIN = "daon.cloud";

export default function ObfuscatedEmail({ className }: { className?: string }) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(`${USER}@${DOMAIN}`);
  }, []);

  if (!email) {
    return <span className={className}>이메일 보기</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
