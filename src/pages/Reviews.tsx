import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import PromoBanner from "@/components/PromoBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Reviews = () => {
  const allReviews = [
    {
      id: 1,
      name: "Александр Петров",
      position: "CEO, TechStart",
      rating: 5,
      text: "Отличная команда! Разработали для нас сложную систему автоматизации на N8N. Все работает стабильно, техподдержка на высоте. Особенно порадовала скорость реагирования на наши запросы. Рекомендую!",
      initials: "АП",
      date: "15 октября 2024"
    },
    {
      id: 2,
      name: "Мария Иванова",
      position: "Директор по маркетингу, E-commerce",
      rating: 5,
      text: "Создали нам современный интернет-магазин и настроили все интеграции с CRM. Проект был выполнен точно в срок, результат превзошел ожидания. Продажи выросли на 40% после запуска!",
      initials: "МИ",
      date: "10 октября 2024"
    },
    {
      id: 3,
      name: "Дмитрий Соколов",
      position: "Основатель стартапа",
      rating: 5,
      text: "Разработали Telegram-бота для нашего бизнеса с интеграцией платежной системы. Очень довольны качеством кода и подходом к работе. Все пожелания были учтены. Обязательно обратимся еще!",
      initials: "ДС",
      date: "5 октября 2024"
    },
    {
      id: 4,
      name: "Елена Смирнова",
      position: "Руководитель отдела продаж",
      rating: 5,
      text: "Профессиональный подход к каждой детали проекта. Внедрили AI-решение для обработки заявок клиентов, что существенно повысило нашу эффективность. Время обработки сократилось в 3 раза!",
      initials: "ЕС",
      date: "1 октября 2024"
    },
    {
      id: 5,
      name: "Игорь Волков",
      position: "IT-директор, Производственная компания",
      rating: 5,
      text: "Автоматизировали множество процессов с помощью N8N. Команда показала глубокое понимание бизнес-процессов и предложила оптимальные решения. Экономим 20+ часов в неделю на рутине.",
      initials: "ИВ",
      date: "25 сентября 2024"
    },
    {
      id: 6,
      name: "Ольга Морозова",
      position: "Владелец сети салонов красоты",
      rating: 5,
      text: "Создали корпоративный сайт и систему онлайн-записи. Дизайн получился стильный и современный, функционал удобный. Клиенты оценили возможность записаться онлайн. Спасибо за отличную работу!",
      initials: "ОМ",
      date: "20 сентября 2024"
    },
    {
      id: 7,
      name: "Андрей Козлов",
      position: "Маркетолог-фрилансер",
      rating: 5,
      text: "Заказывал лендинг для продвижения своих услуг. Сделали быстро, красиво и недорого. Конверсия выросла в 2 раза! Очень доволен результатом и обязательно буду обращаться еще.",
      initials: "АК",
      date: "15 сентября 2024"
    },
    {
      id: 8,
      name: "Виктория Лебедева",
      position: "HR-менеджер",
      rating: 5,
      text: "Разработали Telegram Mini App для внутреннего использования в компании. Сотрудники довольны удобством, все работает быстро и без сбоев. Отличное соотношение цены и качества.",
      initials: "ВЛ",
      date: "10 сентября 2024"
    },
    {
      id: 9,
      name: "Сергей Новиков",
      position: "Директор логистической компании",
      rating: 5,
      text: "Внедрили систему автоматизации документооборота. Теперь все процессы прозрачны и контролируемы. Сократили время на обработку документов на 60%. Команда работала четко и профессионально.",
      initials: "СН",
      date: "5 сентября 2024"
    },
    {
      id: 10,
      name: "Татьяна Белова",
      position: "Основатель образовательного проекта",
      rating: 5,
      text: "Создали образовательную платформу с личными кабинетами и системой оплаты. Проект получился именно таким, как мы задумывали. Студенты в восторге от удобства интерфейса!",
      initials: "ТБ",
      date: "1 сентября 2024"
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <CodeRain />
      <div className="relative z-10">
        <Header />
        
        <section className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Отзывы наших клиентов
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Что говорят о нас наши партнеры и клиенты
            </p>
          </div>
        </section>

        <TestimonialsSection />

        {/* All Reviews Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Все отзывы
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allReviews.map((review) => (
                <Card key={review.id} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.position}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4">{review.text}</p>

                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Reviews;
