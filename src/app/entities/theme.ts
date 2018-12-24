export interface Theme {
  id: number;
  name: string;
  description: string;
  skills?: Skill[];
  tests?: Test[];
}
