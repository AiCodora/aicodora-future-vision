import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CodeRain />
      <Header />
      
      <main className="flex-grow relative z-10 pt-20">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
            Пользовательское соглашение
          </h1>
          
          <Card className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Общие условия</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между AiCodora (далее — «Компания») 
                и пользователями сайта aicodora.com (далее — «Сайт»). Используя Сайт, вы принимаете условия данного Соглашения в полном объеме.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Предмет соглашения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Компания предоставляет пользователям доступ к информации об услугах разработки программного обеспечения, 
                веб-сайтов, Telegram-ботов, автоматизации бизнес-процессов и других IT-решений. 
                Пользователи могут оставлять заявки на консультацию и получение услуг через формы обратной связи.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Регистрация и учетная запись</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Для использования некоторых функций Сайта может потребоваться регистрация. При регистрации вы обязуетесь:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Предоставлять достоверную и актуальную информацию</li>
                <li>Поддерживать безопасность своей учетной записи</li>
                <li>Немедленно уведомлять нас о любом несанкционированном использовании</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Услуги компании</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Компания предоставляет следующие услуги:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Разработка веб-сайтов и веб-приложений</li>
                <li>Создание Telegram-ботов и Mini Apps</li>
                <li>Автоматизация бизнес-процессов (N8N, Make.com)</li>
                <li>Интеграция AI-решений</li>
                <li>Техническая поддержка и консультации</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Условия оказания конкретных услуг определяются отдельными договорами.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Права и обязанности пользователя</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Пользователь имеет право:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Использовать Сайт в личных и коммерческих целях</li>
                    <li>Получать консультации по предоставляемым услугам</li>
                    <li>Оставлять отзывы и предложения</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Пользователь обязуется:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Не нарушать законодательство РФ при использовании Сайта</li>
                    <li>Не распространять вредоносное ПО</li>
                    <li>Не использовать Сайт для спама или мошенничества</li>
                    <li>Уважать права интеллектуальной собственности</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Права и обязанности компании</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Компания имеет право:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Изменять и дополнять Соглашение в одностороннем порядке</li>
                    <li>Ограничивать доступ к Сайту без объяснения причин</li>
                    <li>Модифицировать или прекращать предоставление услуг</li>
                    <li>Удалять контент, нарушающий Соглашение</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Компания обязуется:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Предоставлять качественные услуги в соответствии с договорами</li>
                    <li>Обеспечивать конфиденциальность персональных данных</li>
                    <li>Отвечать на запросы пользователей в разумные сроки</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Интеллектуальная собственность</h2>
              <p className="text-muted-foreground leading-relaxed">
                Все материалы Сайта, включая тексты, изображения, логотипы, дизайн и код, являются интеллектуальной собственностью Компании 
                и защищены законодательством РФ об авторском праве. Использование материалов без письменного согласия запрещено.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Ответственность сторон</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Компания не несет ответственности за:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Временную недоступность Сайта по техническим причинам</li>
                <li>Действия пользователей и последствия использования ими Сайта</li>
                <li>Содержание сайтов третьих лиц, на которые ведут ссылки</li>
                <li>Потерю данных или упущенную выгоду</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Пользователь несет полную ответственность за свои действия на Сайте и соблюдение законодательства РФ.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Стоимость услуг и оплата</h2>
              <p className="text-muted-foreground leading-relaxed">
                Стоимость услуг определяется индивидуально для каждого проекта и указывается в договоре. 
                Оплата производится в соответствии с условиями договора. Компания оставляет за собой право изменять цены на услуги.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Конфиденциальность</h2>
              <p className="text-muted-foreground leading-relaxed">
                Обработка персональных данных пользователей осуществляется в соответствии с 
                <a href="/privacy" className="text-primary hover:underline ml-1">Политикой конфиденциальности</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Изменение условий соглашения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Компания имеет право изменять условия настоящего Соглашения в одностороннем порядке. 
                Новая редакция вступает в силу с момента её размещения на Сайте. 
                Продолжение использования Сайта после изменений означает согласие с новыми условиями.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Разрешение споров</h2>
              <p className="text-muted-foreground leading-relaxed">
                Все споры между Компанией и пользователями решаются путем переговоров. 
                При невозможности достижения соглашения споры передаются на рассмотрение в суд по месту нахождения Компании 
                в соответствии с законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Заключительные положения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящее Соглашение составлено в соответствии с законодательством Российской Федерации. 
                Если какое-либо положение Соглашения будет признано недействительным, остальные положения сохраняют свою силу.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Контактная информация</h2>
              <p className="text-muted-foreground leading-relaxed">
                По всем вопросам, связанным с настоящим Соглашением, вы можете связаться с нами:
              </p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li><strong>Email:</strong> info@aicodora.com</li>
                <li><strong>Telegram:</strong> @aicodora</li>
              </ul>
            </section>

            <div className="pt-6 border-t text-sm text-muted-foreground">
              <p><strong>Дата последнего обновления:</strong> {new Date().toLocaleDateString('ru-RU')}</p>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;