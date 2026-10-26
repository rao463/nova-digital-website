import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import Reveal from "@/components/site/reveal.tsx";
import {
  BUDGET_RANGES,
  CONTACT_INFO,
  PROJECT_TYPES,
  SOCIAL_LINKS,
} from "@/lib/site-data.ts";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please choose a project type"),
  budget: z.string().optional(),
  description: z
    .string()
    .trim()
    .min(20, "Please describe your project in at least 20 characters"),
});
type FormValues = z.infer<typeof schema>;

const DEFAULTS: FormValues = { name: "", email: "", projectType: "", budget: "", description: "" };

export default function Contact() {
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: DEFAULTS });

  // Frontend-only: validation passes, then we show a confirmation. No message is sent.
  const onSubmit = (values: FormValues) => {
    setSubmittedName(values.name.split(" ")[0]);
    form.reset(DEFAULTS);
  };

  const contactRows = [
    { icon: Mail, label: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { icon: Phone, label: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, "")}` },
    { icon: MapPin, label: CONTACT_INFO.location },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Contact</p>
          <h2 className="pt-3 font-serif text-3xl font-bold tracking-tight text-balance text-primary sm:text-4xl lg:text-5xl lg:leading-[1.08]">
            {"Have a Project in Mind? Let's Make It Happen."}
          </h2>
          <p className="pt-5 text-lg text-muted-foreground">
            {"Tell us a little about your idea and we'll take it from there."}
          </p>
          <ul className="space-y-4 pt-10">
            {contactRows.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="size-4" />
                </span>
                {href ? (
                  <a href={href} className="font-medium text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-ring">
                    {label}
                  </a>
                ) : (
                  <span className="font-medium text-primary">{label}</span>
                )}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-2 pt-8">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {s.label} <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
          <p className="pt-6 text-sm text-muted-foreground">Contact details are placeholders.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_20px_60px_-30px_oklch(0.24_0.07_268/0.25)] sm:p-9">
            {submittedName ? (
              <div className="flex flex-col items-center py-12 text-center" role="status">
                <CheckCircle2 className="size-14 text-accent" />
                <h3 className="pt-5 font-serif text-2xl font-bold text-primary">
                  Thanks, {submittedName}!
                </h3>
                <p className="max-w-sm pt-3 text-muted-foreground">
                  Your details passed validation. This is a portfolio demo, so no
                  message was actually sent.
                </p>
                <Button className="mt-8 rounded-full" variant="secondary" onClick={() => setSubmittedName(null)}>
                  Send another
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name *</FormLabel>
                      <FormControl><Input placeholder="John Smith" autoComplete="name" className="h-11" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address *</FormLabel>
                      <FormControl><Input type="email" placeholder="example@gmail.com" autoComplete="email" className="h-11" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="projectType" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project type *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl><SelectTrigger className="h-11 w-full"><SelectValue placeholder="Select a type" /></SelectTrigger></FormControl>
                        <SelectContent>
                          {PROJECT_TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="budget" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget range (optional)</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl><SelectTrigger className="h-11 w-full"><SelectValue placeholder="Select a range" /></SelectTrigger></FormControl>
                        <SelectContent>
                          {BUDGET_RANGES.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="description" render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Project description *</FormLabel>
                      <FormControl><Textarea rows={5} placeholder="Tell us about your goals, timeline, and anything else we should know." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" size="lg" className="h-12 rounded-full text-base sm:col-span-2">
                    Send Project Details
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
