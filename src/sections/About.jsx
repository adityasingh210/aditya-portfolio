import "./About.css";

export default function About({ profile }) {
  const { about, photo, name } = profile;
  return (
    <div className={`about ${photo ? "about--photo" : ""}`}>
      <div className="about__text">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {photo && <img className="about__photo" src={photo} alt={name} loading="lazy" />}
    </div>
  );
}
