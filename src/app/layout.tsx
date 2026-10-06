import type { Metadata } from "next";
import "./globals.css";

const title = "Elias Hezron Opio";
const description =
  "founder, tuning forks. building bella, a whatsapp task assistant for everyone.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
