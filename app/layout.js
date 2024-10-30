import Footer from "./_components/Footer";
import Header from "./_components/Header";
import NavMenu from "./_components/NavMenu";

import { generateMetaGlobal, getHeaderImage } from "./_lib/apiCalls";
import Analytics from "./_lib/Analytics";

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

export default async function RootLayout({ children }) {

  const header = await getHeaderImage()

  return (
    <html lang="en" className="scroll-smooth">
      <head>
       <Analytics />
      </head>
      <body className={`${firaGo.variable} ${gordeziani.variable} font-firaGo font-light flex flex-col h-screen`}>
        <div className="px-4 container mx-auto" style={{maxWidth: "1200px"}}>
          <Header image={header?.data} />
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
