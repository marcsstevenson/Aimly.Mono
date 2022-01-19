type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

export interface PointItem{
  title: string;
  icon: HeroIcon;
  link: string | undefined;
  description: string;
}