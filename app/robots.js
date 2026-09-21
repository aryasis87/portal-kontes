export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portal-kontes.vercel.app/sitemap.xml",
    host: "https://portal-kontes.vercel.app",
  };
}
