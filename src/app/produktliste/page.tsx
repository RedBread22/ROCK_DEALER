'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { productCategories, type Product } from '@/lib/products';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { InteractiveElement } from '@/components/interactive-element';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { AnimatedText } from '@/components/animated-text';

const ProductCard = ({
  product,
  onDetailsClick,
}: {
  product: Product;
  onDetailsClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow duration-300 hover:shadow-primary/20 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={product.image.imageUrl}
          alt={product.name}
          fill
          data-ai-hint={product.image.imageHint}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-headline text-2xl font-bold">{product.name}</h3>
        <p className="mt-2 flex-1 text-muted-foreground line-clamp-3">{product.description}</p>
        <div className="mt-6">
          <Button
            variant="outline"
            onClick={onDetailsClick}
            className="w-full transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ContactFormSection = () => {
  const { toast } = useToast();
  const formSchema = z.object({
    name: z.string().min(2, { message: 'Name muss mindestens 2 Zeichen lang sein.' }),
    email: z.string().email({ message: 'Bitte gib eine gültige E-Mail-Adresse ein.' }),
    categories: z.array(z.string()).optional(),
    message: z.string().min(10, { message: 'Nachricht muss mindestens 10 Zeichen lang sein.' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      categories: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Anfrage gesendet!',
      description: 'Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.',
    });
    form.reset();
  }

  return (
    <section id="product-contact" className="w-full py-24 sm:py-32 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedText
            el="h2"
            text="Kontakt aufnehmen"
            className="font-headline text-5xl md:text-6xl text-primary"
          />
          <p className="mt-4 text-lg text-muted-foreground">
            Sag uns kurz, was du brauchst – wir melden uns.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-16 max-w-2xl mx-auto space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Ihr Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail</FormLabel>
                  <FormControl>
                    <Input placeholder="ihre@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categories"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Interesse an Kategorien</FormLabel>
                    <FormDescription>
                      Sie können eine oder mehrere Kategorien auswählen.
                    </FormDescription>
                  </div>
                  {productCategories.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="categories"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.name)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        item.name,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.name
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nachricht</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Erzählen Sie uns von Ihrem Projekt..." rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full">
              Anfrage senden
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};


const useActiveCategoryOnScroll = (categoryIds: string[]) => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveCategory(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );

        const elements = categoryIds.map(id => document.getElementById(id));
        elements.forEach(elem => elem && observer.observe(elem));

        return () => elements.forEach(elem => elem && observer.unobserve(elem));
    }, [categoryIds]);

    return activeCategory;
};

export default function ProduktlistePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const allCategoryIds = productCategories.map(c => c.id);
  const activeCategory = useActiveCategoryOnScroll(allCategoryIds);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <main className="w-full bg-background">
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden border-b border-border py-20 text-center bg-background">
          <div className="container px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-headline text-5xl md:text-7xl lg:text-8xl"
            >
              Produktliste
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl"
            >
              Steine, Platten & Kies – Ein Überblick über unser Sortiment.
              <span className="mt-2 block text-sm text-primary">[Demo-Sortiment]</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <InteractiveElement cursorType="magnetic">
                <Button size="lg" onClick={() => scrollToCategory(productCategories[0].id)}>
                  Zu den Kategorien
                </Button>
              </InteractiveElement>
            </motion.div>
          </div>
        </section>

        {/* Categories Navigation */}
        <nav className="sticky top-24 z-20 border-y border-border bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto flex justify-center gap-2 p-4 md:gap-4">
            {productCategories.map((category) => (
              <InteractiveElement key={category.id} cursorType="link">
                <button
                  onClick={() => scrollToCategory(category.id)}
                  className={cn(
                    "transform rounded-full px-4 py-2 font-headline text-sm font-medium transition-all duration-300 md:px-6 md:py-3 md:text-base",
                    "hover:scale-105 hover:bg-primary/90",
                    activeCategory === category.id
                      ? "scale-105 bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {category.name}
                </button>
              </InteractiveElement>
            ))}
          </div>
        </nav>

        {/* Product Sections */}
        <div className="flex flex-col">
          {productCategories.map((category, index) => (
            <section
              key={category.id}
              id={category.id}
              className={cn(
                "scroll-mt-24 py-24 sm:py-32",
                index === 0 && 'bg-background',
                index === 1 && 'bg-secondary',
                index === 2 && 'bg-background'
              )}
            >
                <div className="container mx-auto px-4">
                  <div className="mb-12 max-w-3xl lg:mb-16">
                    <h2 className="font-headline text-4xl text-primary md:text-5xl">{category.name}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">{category.description}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
                    {category.products.map((product) => (
                      <ProductCard
                        key={product.name}
                        product={product}
                        onDetailsClick={() => setSelectedProduct(product)}
                      />
                    ))}
                  </div>
                </div>
            </section>
          ))}
        </div>
        
        <ContactFormSection />

      </main>

      <Dialog open={!!selectedProduct} onOpenChange={(isOpen) => !isOpen && setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-md md:aspect-auto md:h-full">
                 <Image
                    src={selectedProduct.image.imageUrl}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
              </div>
              <div className="flex flex-col">
                <DialogHeader>
                  <DialogTitle className="font-headline text-4xl text-primary">{selectedProduct.name}</DialogTitle>
                </DialogHeader>
                <DialogDescription className="mt-4 flex-1 text-base text-foreground/80 whitespace-pre-line">
                  {selectedProduct.description}
                </DialogDescription>
                <div className="mt-8">
                  <Link href="/#contact" passHref>
                    <Button size="lg" className="w-full">
                      Anfrage senden
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
