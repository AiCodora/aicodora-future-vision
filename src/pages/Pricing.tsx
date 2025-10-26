import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import PromoBanner from "@/components/PromoBanner";
import PricingSection from "@/components/PricingSection";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CodeRain />
      <div className="relative z-10">
        <Header />
        
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Прайс-лист
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Прозрачные цены на все виды услуг. Стоимость указана за минимальный комплекс работ
            </p>
          </div>
        </section>

        <PricingSection />

        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
