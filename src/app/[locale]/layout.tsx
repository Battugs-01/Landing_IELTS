import { Footer } from "@/components/main/Footer";
import Header from "@/components/main/Header";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic", "cyrillic-ext"] });

export const metadata: Metadata = {
  title: "Marshal - English Learning",
  description:
    "Хэл сурах гэдэг төгсгөл нь үл харагдах далай биш бид таньд тусална",
  openGraph: {
    type: "website",
    // images: ["/og/image.png"],
    title: "Marshal - English Learning",
    description:
      "Хэл сурах гэдэг төгсгөл нь үл харагдах далай биш бид таньд тусална",
    siteName: "Marshal - English Learning",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,

  keywords: [
    "Англи хэл сурах",
    "English Learning",
    "English",
    "English for kids",
    "English for adults",
    "English for business",
    "English for travel",
    "English for study",
    "IELTS",
    "TOEFL",
    "TOEIC",
    "Cambridge",
    "IELTS preparation",
    "TOEFL preparation",
    "TOEIC preparation",
    "Cambridge preparation",
  ],
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="w-full overflow-hidden bg-white-a700">
            <Header />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
