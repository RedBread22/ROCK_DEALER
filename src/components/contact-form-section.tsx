'use client';

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
import { Button } from '@/components/ui/button';
import { AnimatedText } from '@/components/animated-text';
import { productCategories } from '@/lib/products';

export const ContactFormSection = () => {
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
                  <div className="flex flex-col space-y-2">
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
                  </div>
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
