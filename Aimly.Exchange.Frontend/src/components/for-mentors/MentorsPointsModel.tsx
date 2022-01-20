import { EmojiHappyIcon, LightningBoltIcon, LightBulbIcon, GlobeIcon } from '@heroicons/react/outline';
import { PointsModel } from 'types/PointsModel';

const MentorsPointsModel: PointsModel = {
  why: 'Why Aimly?',
  title: 'A better way to mentor',
  description: 'Only Aimly provides a rich ecosystem of startups to mentor within an integrated online system.',
  points: [
    {
      title: 'Impact',
      icon: LightningBoltIcon,
      link: '/',
      description:
        'Use your knowledge, experience and network to guide startups from idea to exit.',
    },
    {
      title: 'Purpose',
      icon: EmojiHappyIcon,
      link: '/',
      description:
        'Help take on the impactful problems that startups are working on and add real purpose to your career.',
    },
    {
      title: 'Stimulation',
      icon: LightBulbIcon,
      link: '/',
      description:
        'Startups work on novel solutions to interesting problems so gain exposure to new ways of thinking and problem solving.',
    },
    {
      title: 'Networking',
      icon: GlobeIcon,
      link: '/',
      description:
        'Startups are often looking for co-founders, directors and team expansion. Mentor a startup today and gain access to a new network of professionals working in the startup space.',
    },
  ],
};

export default MentorsPointsModel;
