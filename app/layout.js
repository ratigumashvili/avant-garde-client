import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import { firaGo, gordeziani } from "./_lib/fonts";
import "./globals.css";

export const metadata = {
  title: "ქართული ფუტურიზმის 100 წელი",
  description: "ეძღვნება ქართველი ავანგარდისტების (ფუტურისტების და დადაისტების) ლიტერატურულ ასპარეზზე გამოსვლის ასი წლის იუბილეს.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaGo.variable} ${gordeziani.variable} font-sans px-4 container container-xl mx-auto flex flex-col h-screen`}>

        <Header />
        <main className="flex gap-4">
          <Sidebar />
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
