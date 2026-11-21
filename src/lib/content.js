// ─────────────────────────────────────────────────────────────
// Reads everything in /content and cleans it up, so the UI never
// has to deal with missing fields, empty rows or blank strings.
// Edit content in /content (or in Pages CMS) — not here.
// ─────────────────────────────────────────────────────────────

import profileRaw from "../../content/profile.json";
import projectsRaw from "../../content/projects.json";
import skillsRaw from "../../content/skills.json";
import codingRaw from "../../content/coding.json";
import sectionsRaw from "../../content/sections.json";

const str = (v) => (typeof v === "string" ? v.trim() : v == null ? "" : String(v).trim());
const arr = (v) => (Array.isArray(v) ? v : []);
const strings = (v) => arr(v).map(str).filter(Boolean);
const pairs = (v) =>
  arr(v)
    .map((p) => ({ label: str(p?.label), value: str(p?.value) }))
    .filter((p) => p.label || p.value);
const links = (v) =>
  arr(v)
    .map((l) => ({ label: str(l?.label) || "Open link", url: str(l?.url) }))
    .filter((l) => l.url);

export const slug = (s) =>
  str(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "section";

const TINTS = ["sand", "slate", "mint", "lilac", "peach", "stone"];

export const profile = {
  name: str(profileRaw.name) || "Your Name",
  role: str(profileRaw.role),
  location: str(profileRaw.location),
  intro: str(profileRaw.intro),
  email: str(profileRaw.email),
  phone: str(profileRaw.phone),
  resume: str(profileRaw.resume),
  photo: str(profileRaw.photo),
  facts: pairs(profileRaw.facts).slice(0, 4),
  about: strings(profileRaw.about),
  openTo: str(profileRaw.open_to),
  links: links(profileRaw.links),
};

export const projects = arr(projectsRaw)
  .filter((p) => str(p?.title))
  .map((p, i) => ({
    title: str(p.title),
    category: str(p.category),
    summary: str(p.summary),
    image: str(p.image),
    tint: TINTS.includes(p.tint) ? p.tint : TINTS[i % TINTS.length],
    featured: Boolean(p.featured),
    stack: strings(p.stack),
    highlights: strings(p.highlights),
    metrics: pairs(p.metrics).slice(0, 3),
    links: links(p.links),
  }));

export const skills = arr(skillsRaw)
  .map((g) => ({ group: str(g?.group), items: strings(g?.items) }))
  .filter((g) => g.group && g.items.length);

export const coding = arr(codingRaw)
  .map((c) => ({ platform: str(c?.platform), handle: str(c?.handle), url: str(c?.url), stats: pairs(c?.stats) }))
  .filter((c) => c.platform && c.handle);

// Custom list sections (Education, Leadership, …). Unique ids from titles.
const seen = new Map();
export const listSections = arr(sectionsRaw)
  .filter((s) => str(s?.title) && s.show !== false)
  .map((s) => {
    let id = slug(s.title);
    const n = seen.get(id) || 0;
    seen.set(id, n + 1);
    if (n) id = `${id}-${n + 1}`;
    return {
      id,
      title: str(s.title),
      intro: str(s.intro),
      inNav: Boolean(s.in_nav),
      items: arr(s.items)
        .filter((it) => str(it?.title))
        .map((it) => ({
          period: str(it.period),
          title: str(it.title),
          subtitle: str(it.subtitle),
          note: str(it.note),
          details: pairs(it.details).slice(0, 3),
          link: str(it.link),
        })),
    };
  })
  .filter((s) => s.items.length);
