import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CodeRain />
      <Header />
      
      <main className="flex-grow relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-foreground">
              О компании AiCodora
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              Мы создаем инновационные цифровые решения, которые помогают бизнесу развиваться в эпоху искусственного интеллекта
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Делать передовые технологии искусственного интеллекта доступными для бизнеса любого масштаба. 
                  Мы верим, что каждая компания заслуживает современных инструментов для роста и автоматизации.
                </p>
              </Card>
              
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Наши ценности</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>✓ Качество превыше всего</li>
                  <li>✓ Индивидуальный подход к каждому клиенту</li>
                  <li>✓ Прозрачность на всех этапах работы</li>
                  <li>✓ Постоянное развитие и обучение</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Чем мы занимаемся</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3">AI & Автоматизация</h3>
                <p className="text-muted-foreground">
                  Интегрируем ИИ в бизнес-процессы, создаем чат-ботов и автоматизируем рутинные задачи
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold mb-3">Веб-разработка</h3>
                <p className="text-muted-foreground">
                  Создаем современные сайты и веб-приложения с отличным UX и высокой производительностью
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-3">Telegram-решения</h3>
                <p className="text-muted-foreground">
                  Разрабатываем ботов и Mini Apps для автоматизации продаж и взаимодействия с клиентами
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center mb-12">
              <Users className="w-12 h-12 text-primary mr-4" />
              <h2 className="text-3xl font-bold">Наша команда</h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Эксперты в своем деле</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  В AiCodora работают опытные разработчики, дизайнеры и специалисты по автоматизации. 
                  Каждый член команды имеет глубокую экспертизу в своей области и страсть к созданию качественных продуктов.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Разработка</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Full-stack разработчики</li>
                      <li>• AI/ML инженеры</li>
                      <li>• DevOps специалисты</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Дизайн & Поддержка</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• UX/UI дизайнеры</li>
                      <li>• Проектные менеджеры</li>
                      <li>• Техподдержка 24/7</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <Globe className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-center">Работаем по всему миру</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Мы успешно реализовали проекты для клиентов из России, СНГ, Европы и США. 
                  Удаленный формат работы позволяет нам сотрудничать с компаниями по всему миру, 
                  обеспечивая высокое качество и оперативность.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "100+", label: "Реализованных проектов" },
                { number: "50+", label: "Довольных клиентов" },
                { number: "24/7", label: "Техническая поддержка" },
                { number: "5+", label: "Лет опыта в IT" }
              ].map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы начать проект?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами, и мы обсудим, как можем помочь вашему бизнесу
            </p>
            <a 
              href="/#contact-form" 
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Связаться с нами
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;