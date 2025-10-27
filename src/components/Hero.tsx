import { Button } from "@/components/ui/button"
import RotatingText from "./RotatingText"

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Play = () => (
  <svg
    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
)

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        {/* Badge */}
        <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/60 text-xs sm:text-sm font-medium mb-3 sm:mb-4 mt-12 sm:mt-20 animate-fade-in-badge">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full mr-2 animate-blink"></span>
          AiCodora: Полный цикл разработки
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-balance mb-4 sm:mb-6 animate-fade-in-heading">
          <span className="text-foreground">Разработка цифровых решений</span>
          <br />
          <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-3 sm:mt-4 md:mt-6 lg:mt-8">
            <span className="text-foreground">Делаем</span>
            <RotatingText
              texts={["Сайты", "ТГ-ботов", "Автоматизации", "AI-решения", "Веб-сервисы", "TG miniApp", "Видеоконтент"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-white text-black overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg shadow-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white text-balance max-w-sm sm:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
          Превращаем ваши идеи в работающие digital-продукты. Автоматизируем процессы, создаём сайты и боты, интегрируем AI — освобождаем ваше время для роста бизнеса
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-16 animate-fade-in-buttons px-4">
          <Button
            size="lg"
            className="bg-white text-black rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer relative overflow-hidden w-full sm:w-auto"
            asChild
          >
            <a href="/#contact-form">
              Обсудить проект
              <ArrowRight />
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium border-border hover:bg-accent transition-all duration-200 hover:scale-105 group bg-transparent cursor-pointer w-full sm:w-auto"
            asChild
          >
            <a href="#services">
              Наши услуги
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="text-center px-4 hidden sm:block overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-white/50 mb-6 italic">Работаем с передовыми технологиями и AI-инструментами</p>
          <div className="relative overflow-hidden w-full max-w-4xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg py-4">
            <div className="flex items-center gap-8 opacity-60 hover:opacity-80 transition-all duration-500 animate-slide-left">
              <div className="flex items-center gap-8 whitespace-nowrap">
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>React</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Telegram API</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>N8N</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>GPT-5</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Claude</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Gemini</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Midjourney</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Next.js</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Python</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Node.js</div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-8 whitespace-nowrap">
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>React</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Telegram API</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>N8N</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>GPT-5</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Claude</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Gemini</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Midjourney</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Next.js</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Python</div>
                <div className="text-base sm:text-lg font-semibold" style={{ textShadow: '0 0 10px rgba(82, 179, 138, 0.4)' }}>Node.js</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Trust Indicators */}
        <div className="text-center px-4 mb-8 sm:hidden overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-white/50 mb-6 italic">Работаем с передовыми технологиями</p>
          <div className="relative overflow-hidden w-full max-w-sm mx-auto bg-background/80 backdrop-blur-sm rounded-lg py-3">
            {/* Left blur fade */}
            <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            {/* Right blur fade */}
            <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            <div className="flex items-center gap-6 opacity-60 animate-slide-left-mobile">
              <div className="flex items-center gap-6 whitespace-nowrap">
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>React</div>
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>Telegram</div>
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>N8N</div>
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>GPT-5</div>
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>Claude</div>
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>Gemini</div>
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>Midjourney</div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-6 whitespace-nowrap">
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>React</div>
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>Telegram</div>
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>N8N</div>
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>GPT-5</div>
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>Claude</div>
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>Gemini</div>
                <div className="text-sm font-semibold" style={{ textShadow: '0 0 8px rgba(82, 179, 138, 0.4)' }}>Midjourney</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
