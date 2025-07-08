import { motion } from 'framer-motion';
import { ReactElement } from 'react';

export interface IInfoCardProps {
  type?: 'info' | 'link';
  title: string;
  description?: string | ReactElement;
  descriptionsList?: { sectionTitle: string; descriptions: string[] }[];
  index?: number;
  link?: string;
  linkTitle?: string;
  Icon?: ReactElement;
}

const InfoCard = ({
  title,
  descriptionsList = [],
  description,
  link,
  linkTitle,
  Icon,
  index = 0,
  type = 'info',
}: IInfoCardProps) => {
  if (type === 'info') {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="flex items-start gap-x-4"
      >
        <div className="icon-box-wrapper">
          <div className="icon-box">{Icon}</div>
        </div>
        <div className="flex flex-col gap-y-1">
          <h1 className="dark-text text-sm lg:text-base">{title}</h1>
          {description && <p className="text-xs lg:text-sm">{description}</p>}
          {linkTitle && (
            <span className="text-xs lg:text-sm lg:leading-4">
              (<span className="text-[#0000EE]">{linkTitle}</span>)
            </span>
          )}
          {descriptionsList.map(({ sectionTitle, descriptions }, dlIndex) => (
            <div className="flex flex-col gap-y-2 mt-1" key={dlIndex}>
              {sectionTitle && (
                <span className="highlighted-text text-xs lg:text-sm">{sectionTitle}</span>
              )}
              {descriptions.map((el, dIndex) => (
                <p key={dIndex} className="text-xs lg:text-sm">
                  {el}
                </p>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    );
  } else if (type === 'link') {
    return (
      <motion.a
        key={index}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="flex items-start gap-x-4"
      >
        <div className="icon-box-wrapper">
          <div className="icon-box">{Icon}</div>
        </div>
        <div className="flex flex-col gap-y-1">
          <h1 className="dark-text text-sm lg:text-base">{title}</h1>
          {description && <p className="text-xs lg:text-sm">{description}</p>}
          {linkTitle && (
            <span className="text-xs lg:text-sm lg:leading-4">
              (<span className="text-[#0000EE]">{linkTitle}</span>)
            </span>
          )}
          {descriptionsList.map(({ sectionTitle, descriptions }, dlIndex) => (
            <div className="flex flex-col gap-y-2 mt-1" key={dlIndex}>
              {sectionTitle && (
                <span className="highlighted-text text-xs lg:text-sm">{sectionTitle}</span>
              )}
              {descriptions.map((el, dIndex) => (
                <p key={dIndex} className="text-xs lg:text-sm">
                  {el}
                </p>
              ))}
            </div>
          ))}
        </div>
      </motion.a>
    );
  }
};

export default InfoCard;
