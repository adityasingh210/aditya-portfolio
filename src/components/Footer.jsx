export default function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <span>
          {profile.name}
          {profile.location && `, ${profile.location}`}
        </span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
