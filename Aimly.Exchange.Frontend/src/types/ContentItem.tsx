type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

export interface ContentItem{
  title: string;
  icon: HeroIcon;
  link: string | undefined;
  description: string;
}