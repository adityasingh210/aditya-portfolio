import "./Hero.css";

export default function Hero({ profile }) {
  const { name, role, intro, email, resume, facts } = profile;
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <h1 className="hero__name">{name}</h1>
            {role && <p className="hero__role">{role}</p>}
          </div>
          <div className="hero__side">
            {intro && <p className="hero__intro">{intro}</p>}
            <div className="hero__cta">
              <a className="btn btn--solid" href="#work">
                See work
              </a>
              {email && (
                <a className="btn" href={`mailto:${email}`}>
                  Email me
                </a>
              )}
              {resume && (
                <a className="btn" href={resume} target="_blank" rel="noreferrer">
                  Résumé
                </a>
              )}
            </div>
          </div>
        </div>

        {facts.length > 0 && (
          <dl className="hero__facts">
            {facts.map((f) => (
              <div key={f.label + f.value}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
