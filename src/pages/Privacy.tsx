import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CodeRain />
      <Header />
      
      <main className="flex-grow relative z-10 pt-20">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
            Политика конфиденциальности
          </h1>
          
          <Card className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта AiCodora (далее — «Сайт»). 
                Используя Сайт, вы соглашаетесь с условиями данной Политики конфиденциальности.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Собираемая информация</h2>
              <p className="text-muted-foreground mb-3">Мы можем собирать следующую информацию:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Имя и контактная информация (email, телефон)</li>
                <li>Информация о проектах и запросах</li>
                <li>Данные об использовании сайта (IP-адрес, браузер, операционная система)</li>
                <li>Cookie-файлы для улучшения работы сайта</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Использование информации</h2>
              <p className="text-muted-foreground mb-3">Собранная информация используется для:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Обработки ваших запросов и предоставления услуг</li>
                <li>Связи с вами по поводу проектов и консультаций</li>
                <li>Улучшения качества наших услуг</li>
                <li>Отправки информационных материалов (с вашего согласия)</li>
                <li>Анализа использования сайта и его оптимизации</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Защита персональных данных</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы применяем современные технологии и процедуры для защиты ваших персональных данных от несанкционированного доступа, 
                изменения, раскрытия или уничтожения. Все данные хранятся на защищенных серверах с использованием шифрования.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Передача данных третьим лицам</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением случаев:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>С вашего явного согласия</li>
                <li>Для предоставления услуг (например, сервисы email-рассылок, платежные системы)</li>
                <li>По требованию законодательства или государственных органов</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Cookie-файлы</h2>
              <p className="text-muted-foreground leading-relaxed">
                Наш сайт использует cookie-файлы для улучшения пользовательского опыта, анализа трафика и персонализации контента. 
                Вы можете настроить свой браузер для отказа от cookie-файлов, однако это может ограничить функциональность сайта.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Ваши права</h2>
              <p className="text-muted-foreground mb-3">Вы имеете право:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Получать информацию о ваших персональных данных, которые мы храним</li>
                <li>Запрашивать исправление неточных данных</li>
                <li>Запрашивать удаление ваших персональных данных</li>
                <li>Отозвать согласие на обработку данных в любое время</li>
                <li>Подать жалобу в надзорный орган</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Хранение данных</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы храним ваши персональные данные только в течение периода, необходимого для достижения целей их обработки, 
                или в течение срока, установленного законодательством.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Изменения в Политике конфиденциальности</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы оставляем за собой право вносить изменения в данную Политику конфиденциальности. 
                Все изменения будут опубликованы на этой странице с указанием даты последнего обновления.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Контактная информация</h2>
              <p className="text-muted-foreground leading-relaxed">
                По вопросам, связанным с обработкой персональных данных, вы можете связаться с нами:
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

export default Privacy;