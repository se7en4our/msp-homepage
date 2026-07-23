export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({ status: "ok", sha: process.env.BUILD_SHA ?? "dev" });
}
