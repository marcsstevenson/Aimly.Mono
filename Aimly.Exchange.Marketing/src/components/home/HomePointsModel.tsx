import { EmojiHappyIcon, SupportIcon, UserGroupIcon, GlobeIcon } from '@heroicons/react/outline'
import { PointsModel } from 'types/PointsModel';

const HomePointsModel: PointsModel = {
  why: 'Why Aimly?',
  title: 'We are here to get impactful problems solved',
  description: 'Aimly is single-minded in the support of startups that are solving impactful problems.',
  points: [
    {
      title: "Mentorship",
      icon: SupportIcon,
      link: "/for-mentors",
      description:
        "Starting up is rarely easy so use Aimly to gain access to mentors who will help you find the right people to succeed and guide you through the startup journey from idea to MVP to exit.",
    },
    {
      title: "Experts",
      icon: UserGroupIcon,
      link: "/for-experts",
      description:
        "Most startup founders are strong in specific areas. Aimly provides a community of capable subject matter experts who can support you in areas that you do not yet have in-house resource. Need advice on intellectual property? Unsure of how to draft a service contract? Lacking a marketing strategy? Aimly has the expertise to help you."
    },
    {
      title: "Community",
      icon: EmojiHappyIcon,
      link: "/Community",
      description:
        "Join a community of like-minded problem solvers to see what other problems are being worked on. Create a profile to showcase your startup. Access case studies on successful approaches, stay in touch with industry trends and use Aimly to look for funding."
    },
    {
      title: "All in one accessible market",
      icon: GlobeIcon,
      link: "Market",
      description:
        "Startups, mentors, experts, and investors. Only Aimly has all these integrated in within the same marketplace so that important problems can be solved incredibly quickly."
    }
  ]
};

export default HomePointsModel;
