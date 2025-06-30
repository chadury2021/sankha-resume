const AchievementsLink = ({ title, url }) => (
  <a className="text-[#0000EE] font-bold" target="_blank" href={url} rel="noreferrer">
    {title}
  </a>
);

export default AchievementsLink;
