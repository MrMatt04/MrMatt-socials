import "./nav.css";

function nav({ link }) {
  const activatedLinks = Object.entries(link).filter(
    ([key, value]) => value !== ""
  );

  return (
    <nav className="social-nav">
      <ul>
        {activatedLinks.map(([key, value]) => {
          const platform = key.split("-")[0];
          return (
            <li key={key}>
              <a
                className="Social-icon"
                href={getSocialUrl(platform, value)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/icons/${platform}.svg`}
                  alt={platform}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function getSocialUrl(platform, value) {
  switch (platform) {
    case "discord":
      return `https://discord.com/users/${value}`;
    case "bluesky":
      return `https://bsky.app/profile/${value}.bsky.social`;
    case "telegram":
      return `https://t.me/${value}`;
    case "instagram":
      return `https://instagram.com/${value}`;
    case "twitter":
      return `https://twitter.com/${value}`;
    case "tiktok":
      return `https://tiktok.com/@${value}`;
    case "twitch":
      return `https://twitch.tv/${value}`;
    case "youtube":
      return `https://youtube.com/@${value}`;
    case "furaffinity":
      return `https://furaffinity.net/user/${value}`;
    case "reddit":
      return `https://www.reddit.com/user/${value}`;
    default:
      return value;
  }
}

export default nav;
