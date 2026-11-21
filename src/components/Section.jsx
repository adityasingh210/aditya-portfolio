import "./Section.css";

// One shell for every section, so spacing is identical everywhere.
//   layout="split"   heading on the left, content on the right (default)
//   layout="stacked" heading on top, content full width (used by Work)
export default function Section({ id, title, intro, layout = "split", children }) {
  return (
    <section id={id} className={`section section--${layout}`} aria-labelledby={`${id}-h`}>
      <div className="wrap section__grid">
        <header className="section__head">
          <h2 id={`${id}-h`} className="section__title">
            {title}
          </h2>
          {intro && <p className="section__intro">{intro}</p>}
        </header>
        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}
