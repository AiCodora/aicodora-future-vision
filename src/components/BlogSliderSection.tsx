import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import automationBusinessImg from "@/assets/blog/automation-business.jpg";
import telegramBotsImg from "@/assets/blog/telegram-bots.jpg";
import aiTrendsImg from "@/assets/blog/ai-trends.jpg";
import n8nAutomationImg from "@/assets/blog/n8n-automation.jpg";
import webDevelopmentImg from "@/assets/blog/web-development.jpg";

const BlogSliderSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const articles = [
    {
      id: 1,
      title: "Как автоматизация бизнеса повышает прибыль",
      excerpt: "Узнайте, какие процессы стоит автоматизировать в первую очередь и как это влияет на рост бизнеса",
      date: "15 марта 2024",
      category: "Автоматизация",
      image: automationBusinessImg
    },
    {
      id: 2,
      title: "Telegram-боты для бизнеса: полное руководство",
      excerpt: "Пошаговое руководство по внедрению Telegram-ботов для автоматизации продаж и поддержки клиентов",
      date: "10 марта 2024",
      category: "Telegram",
      image: telegramBotsImg
    },
    {
      id: 3,
      title: "AI в бизнесе: тренды 2024",
      excerpt: "Актуальные тренды использования искусственного интеллекта для оптимизации бизнес-процессов",
      date: "5 марта 2024",
      category: "AI",
      image: aiTrendsImg
    },
    {
      id: 4,
      title: "N8N: автоматизация без программирования",
      excerpt: "Как создавать мощные автоматизации без навыков программирования с помощью N8N",
      date: "1 марта 2024",
      category: "N8N",
      image: n8nAutomationImg
    },
    {
      id: 5,
      title: "Веб-разработка: современные подходы",
      excerpt: "Обзор современных технологий и подходов к разработке веб-приложений в 2024 году",
      date: "25 февраля 2024",
      category: "Разработка",
      image: webDevelopmentImg
    },
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Полезные статьи
            </h2>
            <p className="text-muted-foreground text-lg">
              Экспертные материалы о технологиях и автоматизации
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2 py-5 px-6" asChild>
            <Link to="/blog">
              Все статьи
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {articles.map((article) => (
              <CarouselItem key={article.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-all duration-300">
                  <Link to={`/blog/${article.id}`} className="flex flex-col h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 flex-grow">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-primary font-medium mt-auto">
                        <span>Читать далее</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12" />
          <CarouselNext className="hidden md:flex -right-12 h-12 w-12" />
        </Carousel>

        {/* Mobile dots indicator */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex md:hidden justify-center mt-6">
          <Button variant="outline" className="gap-2 py-5 px-6" asChild>
            <Link to="/blog">
              Все статьи
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSliderSection;
