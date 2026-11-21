// ─────────────────────────────────────────────────────────────
// Page order. Content lives in /content — you normally never
// need to touch this file. Sections with no content hide
// themselves automatically.
// ─────────────────────────────────────────────────────────────

import { profile, projects, skills, coding, listSections } from "./lib/content.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";
import Work from "./sections/Work.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Coding from "./sections/Coding.jsx";
import ListSection from "./sections/ListSection.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  const blocks = [
    projects.length && {
      id: "work",
      title: "Selected work",
      nav: "Work",
      layout: "stacked",
      body: <Work projects={projects} />,
    },
    profile.about.length && {
      id: "about",
      title: "About",
      nav: "About",
      body: <About profile={profile} />,
    },
    skills.length && { id: "skills", title: "Skills", nav: "Skills", body: <Skills groups={skills} /> },
    coding.length && {
      id: "coding",
      title: "Competitive programming",
      nav: "CP",
      body: <Coding profiles={coding} />,
    },
    ...listSections.map((s) => ({
      id: s.id,
      title: s.title,
      intro: s.intro,
      nav: s.inNav ? s.title : null,
      body: <ListSection items={s.items} />,
    })),
    { id: "contact", title: "Contact", nav: "Contact", body: <Contact profile={profile} /> },
  ].filter(Boolean);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav name={profile.name} items={blocks.filter((b) => b.nav).map((b) => ({ id: b.id, label: b.nav }))} />
      <main id="main">
        <Hero profile={profile} />
        {blocks.map((b) => (
          <Section key={b.id} id={b.id} title={b.title} intro={b.intro} layout={b.layout}>
            {b.body}
          </Section>
        ))}
      </main>
      <Footer profile={profile} />
    </>
  );
}
