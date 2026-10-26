# Nova Digital — Agency Website (Portfolio Concept)

React 19 + TypeScript + Vite + Tailwind CSS 4 + React Router 7 + Motion + Lucide icons.
No backend or database. The contact form validates in the browser only and does NOT send email.

## Run it
Requires Node.js 20+.

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in /dist
    npm run preview    # preview the production build

No environment variables are needed.

## Folder structure
    index.html                    Page title, SEO meta, fonts
    vite.config.ts                Vite + Tailwind plugin + "@" alias to /src
    src/main.tsx                  Entry point
    src/App.tsx                   Routes: "/", "/projects/:slug", 404
    src/index.css                 Tailwind import + theme colors + fonts
    src/lib/site-data.ts          ALL text, projects, contact info, links
    src/lib/utils.ts              cn() class helper
    src/components/site/          Navbar, Footer, Logo, layout, reveal animation, etc.
    src/components/ui/            Button, Input, Textarea, Select, Form, Label (shadcn/ui)
    src/pages/Index.tsx           Home page (assembles sections)
    src/pages/_components/        Hero, Services, Projects, About+Process, Testimonials, Contact
    src/pages/projects/page.tsx   Project detail page
    src/pages/NotFound.tsx        404 page

## Customizing
- Text, projects, testimonials, contact details, social links: edit `src/lib/site-data.ts`.
- Images: project images are hosted URLs in `site-data.ts`. To use your own, put files in
  `public/images/` (e.g. `public/images/bloom.jpg`) and set `image: "/images/bloom.jpg"`.
  A fallback icon appears automatically if an image fails to load.
- Colors: edit the variables in the `:root` block of `src/index.css`
  (`--primary` = navy, `--accent` = violet, `--background` = off-white).
- Fonts: change the Google Fonts link in `index.html` and `--font-sans` / `--font-serif` in `src/index.css`.
- Contact form: logic is in `src/pages/_components/contact.tsx` (`onSubmit`). To actually send
  messages, connect a form/email service there.

## Testing checklist
- [ ] Nav links scroll to each section; "Let's Talk" goes to Contact
- [ ] Mobile (<768px): hamburger opens/closes, links close the menu
- [ ] "Start a Project" / "Explore Our Work" go to Contact / Projects
- [ ] Each project card opens its detail page; "Next project" and "All projects" work
- [ ] Form: empty submit shows errors; bad email rejected; valid submit shows success message
- [ ] Tab through the page: every link/button shows a focus outline
- [ ] Test at 320px, 375px, 768px, 1024px, 1440px: no horizontal scrolling
- [ ] OS "reduce motion" on: entrance animations are disabled
- [ ] Back-to-top button works; unknown URL shows the 404 page
- [ ] Browser console shows no errors
