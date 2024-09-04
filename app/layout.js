
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import NavMenu from "./_components/NavMenu";

import { generateMetaGlobal } from "./_lib/apiCalls";

import { firaGo, gordeziani } from "./_lib/fonts";

import "./globals.css";

export async function generateMetadata() {
  const response = await generateMetaGlobal()

  return {
    title: response?.data?.attributes?.seo?.metaTitle,
    description: response?.data?.attributes?.seo?.metaDescription,
    keywords: response?.data?.attributes?.seo?.metaKeywords,
    openGraph: {
      images: response?.data?.attributes?.seo?.metaImage?.data?.attributes?.url
    },
    icons: {
      icon: './favicon.ico',
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaGo.variable} ${gordeziani.variable} font-firaGo font-light flex flex-col h-screen`}>

        <div className="px-4 container container-xl mx-auto">
          <Header />
          <main className="flex pb-8">
            <NavMenu />
            <div className="flex flex-1">
              {children}
            </div>
          </main>
        </div>
        <Footer />

      </body>
    </html>
  );
}
