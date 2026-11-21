import { useId, useState } from "react";
import "./ProjectCard.css";

// Everything except title is optional. Long text is clamped,
// images are cropped to a fixed ratio, and a missing or broken
// image falls back to a tinted placeholder — so no entry from the
// CMS can push the grid out of shape.
export default function ProjectCard({ project }) {
  const { title, category, summary, image, tint, featured, stack, highlights, metrics, links } = project;
  const [open, setOpen] = useState(false);
  const [broken, setBroken] = useState(false);
  const panelId = useId();
  const showImage = image && !broken;

  return (
    <article className={`card ${featured ? "card--featured" : ""}`}>
      <div className="card__media" style={{ background: `var(--tint-${tint})` }}>
        {/* placeholder always sits underneath; a working image simply covers it */}
        <div className="card__placeholder" aria-hidden="true">
          <span>{title}</span>
        </div>
        {showImage && <img src={image} alt={`${title} preview`} loading="lazy" onError={() => setBroken(true)} />}
      </div>

      <div className="card__body">
        <div className="card__head">
          <h3 className="card__title">{title}</h3>
          {category && <span className="card__cat">{category}</span>}
        </div>
        {summary && <p className="card__summary">{summary}</p>}

        {metrics.length > 0 && (
          <dl className="card__metrics">
            {metrics.map((m) => (
              <div key={m.label + m.value}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {stack.length > 0 && <p className="card__stack">{stack.join(", ")}</p>}

        {(highlights.length > 0 || links.length > 0) && (
          <div className="card__actions">
            {links.map((l, i) => (
              <a
                key={l.url}
                className={`btn btn--sm ${i === 0 ? "btn--solid" : ""}`}
                href={l.url}
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            ))}
            {highlights.length > 0 && (
              <button
                type="button"
                className="card__toggle"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((o) => !o)}
              >
                {open ? "Hide details" : "Show details"}
              </button>
            )}
          </div>
        )}

        {highlights.length > 0 && (
          <div id={panelId} className="card__details" data-open={open} hidden={!open}>
            <ul>
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
