import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Александр Петров",
      position: "CEO, TechStart",
      rating: 5,
      text: "Отличная команда! Разработали для нас сложную систему автоматизации на N8N. Все работает стабильно, техподдержка на высоте. Рекомендую!",
      initials: "АП"
    },
    {
      id: 2,
      name: "Мария Иванова",
      position: "Директор по маркетингу, E-commerce",
      rating: 5,
      text: "Создали нам современный сайт и настроили интеграции с CRM. Проект был выполнен точно в срок, результат превзошел ожидания.",
      initials: "МИ"
    },
    {
      id: 3,
      name: "Дмитрий Соколов",
      position: "Основатель стартапа",
      rating: 5,
      text: "Разработали Telegram-бота для нашего бизнеса. Очень довольны качеством и скоростью работы. Обязательно обратимся еще!",
      initials: "ДС"
    },
    {
      id: 4,
      name: "Елена Смирнова",
      position: "Руководитель отдела продаж",
      rating: 5,
      text: "Профессиональный подход к каждой детали. Внедрили AI-решение для обработки заявок, что существенно повысило нашу эффективность.",
      initials: "ЕС"
    },
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-muted-foreground text-lg">
            Что говорят о нас наши партнеры
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial card */}
          <div className="overflow-hidden">
            <div
              className={`transition-all duration-500 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <Card className="p-8 md:p-12 bg-card relative">
                <Quote className="absolute top-8 right-8 h-16 w-16 text-primary/10" />
                
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author info */}
                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="h-16 w-16 border-2 border-primary">
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                        {testimonials[currentIndex].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="rounded-full h-12 w-12"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="rounded-full h-12 w-12"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
