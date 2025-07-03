import { motion } from 'framer-motion';

import InfoCard, { IInfoCardProps } from './InfoCard';
import { cn } from '../../lib/utils.ts';

export interface IDateCardProps {
  date: string;
  index: number;
  items: IInfoCardProps[];
  equalCols?: boolean;
  type?: 'info' | 'link';
}

const DateCard = ({ date, index, items, equalCols = false, type = 'info' }: IDateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={cn('grid grid-cols-1 gap-x-8 gap-y-10', {
        'lg:grid-cols-[120px_auto]': !equalCols,
        'lg:grid-cols-2': equalCols,
      })}
    >
      <div className="flex flex-col items-start">
        <div className="px-2 py-1 bg-[#17A0BF1A] rounded-[4px] h-5 flex items-center whitespace-nowrap">
          <div className="dateTagDot mr-2.5 mb-[1px]" />
          <span className="font-shuriken text-[10px] tracking-[0.02em] text-[#17A0BF]">{date}</span>
        </div>
        <div className="ml-2.5 mt-2 bg-[#17A0BF1A] h-full w-[1px] max-lg:hidden" />
      </div>
      <div className="flex flex-col gap-y-4">
        {items.map(({ title, description, descriptionsList, Icon, link }, itemIndex) => (
          <InfoCard
            key={title}
            title={title}
            description={description}
            descriptionsList={descriptionsList}
            Icon={Icon}
            type={type}
            index={itemIndex}
            link={link}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default DateCard;
