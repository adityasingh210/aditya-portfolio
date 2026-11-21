import "./Contact.css";

export default function Contact({ profile }) {
  const { email, phone, links, resume, openTo } = profile;
  return (
    <div className="contact">
      {openTo && <p className="contact__lead">{openTo}</p>}
      {email && (
        <a className="contact__email" href={`mailto:${email}`}>
          {email}
        </a>
      )}
      <ul className="contact__links">
        {phone && (
          <li>
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
          </li>
        )}
        {links.map((l) => (
          <li key={l.url}>
            <a href={l.url} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          </li>
        ))}
        {resume && (
          <li>
            <a href={resume} target="_blank" rel="noreferrer">
              Résumé
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
