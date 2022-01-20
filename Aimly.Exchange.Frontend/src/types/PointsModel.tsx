type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

export interface PointItem{
  title: string;
  icon: HeroIcon;
  link: string;
  description: string | null;
}

export interface PointsModel{
  points: PointItem[]
  why: string;
  title: string;
  description: string;
}