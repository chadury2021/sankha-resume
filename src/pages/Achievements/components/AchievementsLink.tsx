const AchievementsLink = ({ title, url }) => (
  <a
    className="text-blue-600 hover:text-blue-700 font-bold"
    target="_blank"
    href={url}
    rel="noreferrer"
  >
    {title}
  </a>
);

export default AchievementsLink;
