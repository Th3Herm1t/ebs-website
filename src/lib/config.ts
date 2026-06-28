export const siteConfig = {
  // Use environment variable if provided, otherwise fallback to the current formspree.
  // We can switch this to the n8n/Make webhook later by setting NEXT_PUBLIC_WEBHOOK_URL in .env
  webhookUrl: process.env.NEXT_PUBLIC_WEBHOOK_URL || "https://formspree.io/f/xeojaqdr",
};
