import "./bio.css";

function Bio({ bio }) {
  return (
    <div className="bio-container">
      <h2>About me</h2>
      <div className="general-bio">
        <p>
          {bio.gender} {bio.age} {bio.orientation} {bio.pronouns} {bio.country}
        </p>
        <p>{bio.description}</p>
      </div>
    </div>
  );
}

export default Bio;
