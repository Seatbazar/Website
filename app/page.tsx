import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Why from "@/components/Why";
import Steps from "@/components/Steps";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <Products />
        <Why />
        <Steps />
        <Visit />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
