import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { name, email, phone, telegram, contactMethod, projectType, budget, description, formType } = await req.json()
    
    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN')
    const chatId = '@aicodora' // Замените на ваш chat_id если нужен конкретный чат
    
    if (!botToken) {
      throw new Error('TELEGRAM_BOT_TOKEN is not set')
    }

    let message = `📋 *Новая заявка (${formType || 'Контактная форма'})*\n\n`
    message += `👤 *Имя:* ${name}\n`
    message += `📧 *Email:* ${email}\n`
    
    if (contactMethod) {
      message += `📞 *Способ связи:* ${contactMethod === 'phone' ? 'Телефон' : contactMethod === 'telegram' ? 'Telegram' : 'WhatsApp'}\n`
    }
    
    if (phone) {
      message += `📱 *Телефон:* ${phone}\n`
    }
    
    if (telegram) {
      message += `💬 *Telegram:* ${telegram}\n`
    }
    
    if (projectType) {
      message += `🎯 *Тип проекта:* ${projectType}\n`
    }
    
    if (budget) {
      message += `💰 *Бюджет:* ${budget}\n`
    }
    
    if (description) {
      message += `\n📝 *Описание:*\n${description}`
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    console.log('Sending message to Telegram:', { chatId, messageLength: message.length })
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    const data = await response.json()
    
    if (!response.ok) {
      console.error('Telegram API error:', data)
      throw new Error(data.description || 'Failed to send message')
    }

    console.log('Message sent successfully:', data)

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
