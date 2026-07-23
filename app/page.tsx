const SHA = process.env.BUILD_SHA ?? "dev";
const BUILT_AT = process.env.BUILD_TIME ?? "";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "system-ui",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>다온클라우드</h1>
        <p style={{ color: "#555" }}>중소기업을 위한 멀티 클라우드 MSP · 준비 중</p>
        <p style={{ marginTop: "1.5rem" }}>
          <a href="mailto:hello@daon.cloud">hello@daon.cloud</a>
        </p>
        <footer style={{ marginTop: "3rem", fontSize: "0.75rem", color: "#999" }}>
          build {SHA} {BUILT_AT && `· ${BUILT_AT}`}
        </footer>
      </div>
    </main>
  );
}
