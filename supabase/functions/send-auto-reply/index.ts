import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AutoReplyRequest {
  name: string;
  email: string;
  type: "contact" | "consultation" | "promo";
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Auto-reply function invoked");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, type }: AutoReplyRequest = await req.json();
    console.log(`Sending auto-reply to ${email} (${name}), type: ${type}`);

    // Validate inputs
    if (!name || !email || !type) {
      throw new Error("Missing required fields");
    }

    if (!email.includes("@")) {
      throw new Error("Invalid email format");
    }

    // Different email templates based on type
    let subject = "";
    let html = "";

    switch (type) {
      case "contact":
        subject = "Спасибо за обращение в AiCodora!";
        html = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 6px; margin-top: 20px; }
                .footer { text-align: center; margin-top: 30px; font-size: 14px; color: #666; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>AiCodora</h1>
                  <p>Ваше обращение получено!</p>
                </div>
                <div class="content">
                  <p>Здравствуйте, ${name}!</p>
                  <p>Благодарим вас за обращение в AiCodora. Мы получили вашу заявку и свяжемся с вами в ближайшее время.</p>
                  <p><strong>Что дальше?</strong></p>
                  <ul>
                    <li>Наш менеджер изучит ваш запрос</li>
                    <li>Мы свяжемся с вами в течение 24 часов</li>
                    <li>Обсудим детали проекта и подготовим предложение</li>
                  </ul>
                  <p>Если у вас срочный вопрос, вы можете написать нам в Telegram: <a href="https://t.me/aicodora">@aicodora</a></p>
                  <a href="https://aicodora.com" class="button">Перейти на сайт</a>
                </div>
                <div class="footer">
                  <p>С уважением,<br>Команда AiCodora</p>
                  <p>🌍 Работаем с клиентами по всему миру</p>
                </div>
              </div>
            </body>
          </html>
        `;
        break;

      case "consultation":
        subject = "Консультация по услуге - AiCodora";
        html = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .footer { text-align: center; margin-top: 30px; font-size: 14px; color: #666; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>AiCodora</h1>
                  <p>Запрос на консультацию получен!</p>
                </div>
                <div class="content">
                  <p>Здравствуйте, ${name}!</p>
                  <p>Спасибо за интерес к нашим услугам! Мы получили ваш запрос на консультацию.</p>
                  <p><strong>Наш эксперт:</strong></p>
                  <ul>
                    <li>Изучит специфику вашей задачи</li>
                    <li>Подготовит рекомендации</li>
                    <li>Свяжется с вами для детального обсуждения</li>
                  </ul>
                  <p>Мы ответим вам в течение рабочего дня.</p>
                </div>
                <div class="footer">
                  <p>С уважением,<br>Команда AiCodora</p>
                </div>
              </div>
            </body>
          </html>
        `;
        break;

      case "promo":
        subject = "Заявка на участие в акции - AiCodora";
        html = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .promo-box { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; }
                .footer { text-align: center; margin-top: 30px; font-size: 14px; color: #666; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🎉 AiCodora</h1>
                  <p>Заявка на акцию принята!</p>
                </div>
                <div class="content">
                  <p>Здравствуйте, ${name}!</p>
                  <p>Отличная новость! Ваша заявка на участие в акции успешно принята.</p>
                  <div class="promo-box">
                    <strong>🎁 Ваши преимущества:</strong>
                    <ul>
                      <li>Специальные условия по акции</li>
                      <li>Приоритетное рассмотрение заявки</li>
                      <li>Персональный менеджер</li>
                    </ul>
                  </div>
                  <p>Наш менеджер свяжется с вами в течение нескольких часов для уточнения деталей.</p>
                  <p><strong>Не упустите возможность!</strong> Акция действует ограниченное время.</p>
                </div>
                <div class="footer">
                  <p>С уважением,<br>Команда AiCodora</p>
                </div>
              </div>
            </body>
          </html>
        `;
        break;
    }

    const emailResponse = await resend.emails.send({
      from: "AiCodora <onboarding@resend.dev>",
      to: [email],
      subject: subject,
      html: html,
    });

    console.log("Auto-reply sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, messageId: emailResponse.data?.id }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-auto-reply function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to send auto-reply" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);