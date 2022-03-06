// A simple utility to combine class names together

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}