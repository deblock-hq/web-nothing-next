import i18next from "i18next";
import { languages } from "../../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={i18next.dir(lng)}>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
