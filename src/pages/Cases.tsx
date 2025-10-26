import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import PromoBanner from "@/components/PromoBanner";
import { Card } from "@/components/ui/card";
import { Construction } from "lucide-react";

const Cases = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CodeRain />
      <div className="relative z-10">
        <Header />
        
        <section className="pt-32 pb-20 px-4 min-h-[80vh] flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12 md:p-16 bg-card/50 backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8 animate-pulse">
                <Construction className="h-12 w-12 text-primary" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Страница в разработке
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Скоро здесь будут представлены наши лучшие работы и реализованные проекты
              </p>
              
              <div className="space-y-3 text-muted-foreground">
                <p>Мы готовим для вас:</p>
                <ul className="space-y-2">
                  <li>• Подробные кейсы наших проектов</li>
                  <li>• Результаты и метрики</li>
                  <li>• Отзывы клиентов</li>
                  <li>• Технические детали реализации</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Cases;
