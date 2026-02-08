
import { NICHES } from './constants';

export interface AutomationIdea {
  id: string;
  idea: string;
  niche: string;
  solution: string;
  tools?: string[];
}

export type NicheType = typeof NICHES[number];
