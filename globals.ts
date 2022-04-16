export const ROOT_URL =
  process.env.VERCEL === "1"
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
