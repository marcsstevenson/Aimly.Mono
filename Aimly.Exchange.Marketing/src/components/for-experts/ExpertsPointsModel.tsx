import { EmojiHappyIcon, LightningBoltIcon, LightBulbIcon, GlobeIcon } from '@heroicons/react/outline';
import { PointsModel } from 'types/PointsModel';

const ExpertsPointsModel: PointsModel = {
  why: 'Why Aimly?',
  title: 'Find work to help Startups solve impactful problems',
  description: 'Only Aimly provides a rich ecosystem of startups to service within an integrated online system.',
  points: [
    {
      title: 'Purpose',
      icon: EmojiHappyIcon,
      link: '/',
      description:
        'Help take on the impactful problems that startups are working on and add real purpose to your career.',
    },
    {
      title: 'Stimulation',
      icon: LightningBoltIcon,
      link: '/',
      description:
        'Startups work on novel solutions to interesting problems so gain exposure to new ways of thinking and problem solving.',
    },
    {
      title: 'Networking',
      icon: GlobeIcon,
      link: '/',
      description:
        'Startups are often looking for co-founders, directors and team expansion. Expert a startup today and gain access to a new network of professionals working in the startup space.',
    },
    {
      title: 'Earn',
      icon: LightBulbIcon,
      link: '/',
      description:
        'Use Aimly’s automated scheduling to fill-out your calendar with billable work.',
    },
  ],
};

export default ExpertsPointsModel;
