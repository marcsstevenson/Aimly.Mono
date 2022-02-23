
export interface employmentExperience {
  readonly id: string | null;
  readonly title: string | null;
  readonly organisation: string | null;
  readonly description: string | null;
  readonly startMonth: number;
  readonly startYear: number;
  readonly endMonth: number | null;
  readonly endYear: number | null;
}
