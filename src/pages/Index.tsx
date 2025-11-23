import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Building2",
      title: "Испытания строительных конструкций",
      description: "Полный комплекс испытаний несущих конструкций, фундаментов, перекрытий и стен жилых домов"
    },
    {
      icon: "Waves",
      title: "Гидротехнические испытания",
      description: "Проверка водонепроницаемости, испытания систем водоснабжения и канализации"
    },
    {
      icon: "Zap",
      title: "Электротехнические измерения",
      description: "Испытания электроустановок, проверка заземления, измерение сопротивления изоляции"
    },
    {
      icon: "Thermometer",
      title: "Теплотехнические испытания",
      description: "Проверка теплоизоляции, испытания систем отопления и вентиляции"
    },
    {
      icon: "Shield",
      title: "Акустические измерения",
      description: "Измерение звукоизоляции конструкций и уровня шума в помещениях"
    },
    {
      icon: "CheckCircle2",
      title: "Комплексное обследование",
      description: "Полный пакет испытаний для получения разрешения на ввод объекта в эксплуатацию"
    }
  ];

  const stats = [
    { value: "500+", label: "Объектов введено в эксплуатацию" },
    { value: "15+", label: "Лет на рынке" },
    { value: "98%", label: "Успешных проектов" },
    { value: "24/7", label: "Техническая поддержка" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0F1419]">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="FlaskConical" size={32} className="text-[#0EA5E9]" />
            <span className="text-2xl font-bold text-white">ЦОТ ОПТИМА</span>
          </div>
          <Button variant="outline" className="bg-transparent border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white">
            Связаться с нами
          </Button>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Испытательная лаборатория для ввода жилых домов в эксплуатацию
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Аккредитованная лаборатория с современным оборудованием. Полный комплекс испытаний для получения разрешения на ввод объекта.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-lg px-8">
              <Icon name="FileText" size={20} className="mr-2" />
              Заказать испытания
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-[#0EA5E9] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Наши услуги</h2>
          <p className="text-gray-300 text-lg">Комплексные испытания для безопасного ввода объектов в эксплуатацию</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-[#262B3C] border-[#3A4155] hover:border-[#0EA5E9] transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#0EA5E9]/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={24} className="text-[#0EA5E9]" />
                </div>
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Icon name="Award" size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <Icon name="BadgeCheck" size={32} className="mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Аккредитация</h3>
                <p className="text-white/90">Официальная аккредитация Росаккредитации</p>
              </div>
              <div>
                <Icon name="Clock" size={32} className="mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Оперативность</h3>
                <p className="text-white/90">Выполнение работ в сжатые сроки</p>
              </div>
              <div>
                <Icon name="Users" size={32} className="mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Эксперты</h3>
                <p className="text-white/90">Опытные инженеры-испытатели</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Оставить заявку</h2>
            <p className="text-gray-300">Заполните форму и мы свяжемся с вами в течение 30 минут</p>
          </div>
          <Card className="bg-[#262B3C] border-[#3A4155]">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-[#1A1F2C] border-[#3A4155] text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="bg-[#1A1F2C] border-[#3A4155] text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-[#1A1F2C] border-[#3A4155] text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Опишите ваш объект и необходимые испытания" 
                    rows={4}
                    className="bg-[#1A1F2C] border-[#3A4155] text-white placeholder:text-gray-500"
                  />
                </div>
                <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-[#0F1419] py-12 border-t border-[#3A4155]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="FlaskConical" size={28} className="text-[#0EA5E9]" />
                <span className="text-xl font-bold text-white">ЦОТ ОПТИМА</span>
              </div>
              <p className="text-gray-400">Испытательная лаборатория полного цикла</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@optima-lab.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Режим работы</h3>
              <p className="text-gray-400">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-gray-400">Вызов специалиста: 24/7</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#3A4155] text-center text-gray-500">
            <p>&copy; 2024 ЦОТ ОПТИМА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;