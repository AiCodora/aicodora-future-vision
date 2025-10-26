import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import PromoBanner from "@/components/PromoBanner";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const article = blogArticles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Статья не найдена</h1>
          <Link to="/blog">
            <Button>Вернуться к блогу</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <CodeRain />
      <div className="relative z-10">
        <Header />
        
        <article className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              Вернуться к блогу
            </Link>

            {/* Category badge */}
            <div className="mb-4">
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            {/* Meta info */}
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Featured image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {article.excerpt}
              </div>

              <div className="space-y-6 text-foreground leading-relaxed">
                {article.fullContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-5 w-5 text-muted-foreground" />
                {article.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-muted px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">
                Хотите узнать больше?
              </h3>
              <p className="text-muted-foreground mb-6">
                Свяжитесь с нами, и мы поможем вам внедрить эти решения в ваш бизнес
              </p>
              <Link to="/contacts">
                <Button size="lg">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;
