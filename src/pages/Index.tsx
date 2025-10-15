import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    country: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.country) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });

    setFormData({ fullName: '', phone: '', country: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.85)), url('https://cdn.poehali.dev/projects/955da5ba-5229-42de-b1fe-f3bfda23ebc4/files/e1b5f5d7-d121-4285-a03c-dff3f442665b.jpg')`
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Icon name="Shield" size={32} />
                  <span className="text-sm font-medium tracking-[0.3em] uppercase">Premium Auto Import</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  Элитные
                  <span className="block text-primary">Автомобили</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg font-light">
                  Профессиональный импорт премиальных автомобилей из Японии, Китая и Кореи с полным сопровождением
                </p>
              </div>

              <div className="flex gap-6 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Довольных клиентов</div>
                </div>
                <div className="w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground mt-1">Лет на рынке</div>
                </div>
                <div className="w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Гарантия качества</div>
                </div>
              </div>
            </div>

            <Card className="bg-card/95 backdrop-blur-sm p-8 border-2 border-primary/20 shadow-2xl animate-fade-in">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold">Оставить заявку</h2>
                  <p className="text-muted-foreground">Получите персональное предложение</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-base">
                      Фамилия Имя Отчество
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Иванов Иван Иванович"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="h-12 bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">
                      Номер телефона
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 999-99-99"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="h-12 bg-background/50 border-border focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-base">
                      Страна импорта
                    </Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) =>
                        setFormData({ ...formData, country: value })
                      }
                    >
                      <SelectTrigger 
                        id="country" 
                        className="h-12 bg-background/50 border-border focus:border-primary transition-colors"
                      >
                        <SelectValue placeholder="Выберите страну" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="japan">
                          <div className="flex items-center gap-2">
                            <span>🇯🇵</span>
                            <span>Япония</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="china">
                          <div className="flex items-center gap-2">
                            <span>🇨🇳</span>
                            <span>Китай</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="korea">
                          <div className="flex items-center gap-2">
                            <span>🇰🇷</span>
                            <span>Корея</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-[1.02] shadow-lg"
                  >
                    Отправить заявку
                  </Button>
                </form>

                <div className="flex items-center justify-center gap-4 pt-4 border-t border-border">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">Бесплатная консультация 24/7</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
