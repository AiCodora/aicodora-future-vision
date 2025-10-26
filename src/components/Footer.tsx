import { Link } from "react-router-dom";
import { Bot, Mail, Phone, MapPin, Github, Twitter, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Bot className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">AiCodora</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Современное digital-агентство, специализирующееся на AI-автоматизации и веб-разработке
            </p>
            <div className="flex gap-4">
              <a 
                href="https://t.me/aicodora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/aicodora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/aicodora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/aicodora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services/website-development" className="hover:text-primary transition-colors py-1 inline-block">Разработка сайтов</Link></li>
              <li><Link to="/services/telegram-bots" className="hover:text-primary transition-colors py-1 inline-block">Telegram-боты</Link></li>
              <li><Link to="/services/n8n-automation" className="hover:text-primary transition-colors py-1 inline-block">N8N Автоматизация</Link></li>
              <li><Link to="/services/ai-content" className="hover:text-primary transition-colors py-1 inline-block">AI решения</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors py-1 inline-block">О компании</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors py-1 inline-block">Блог</Link></li>
              <li><Link to="/cases" className="hover:text-primary transition-colors py-1 inline-block">Кейсы</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors py-1 inline-block">FAQ</Link></li>
              <li><Link to="/contacts" className="hover:text-primary transition-colors py-1 inline-block">Контакты</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-muted-foreground mb-4">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@aicodora.com" className="hover:text-primary transition-colors">
                  info@aicodora.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+79932577740" className="hover:text-primary transition-colors">
                  +7 (993) 257-77-40
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>Москва, Россия</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Пользовательское соглашение</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AiCodora. Все права защищены.</p>
          <p className="mt-2">🌍 Работаем с клиентами по всему миру</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
