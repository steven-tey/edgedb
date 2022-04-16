export const ROOT_URL =
  process.env.VERCEL === "1"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";
