import type { ComponentType, SVGProps } from 'react';

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface LighthouseScores {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

/** A single case study rendered in the portfolio grid. */
export interface Project {
  id: string;
  index: string;
  title: string;
  domain: string;
  description: string;
  tags: readonly string[];
  tags2?: readonly string[];
  /** External case study (real deployed site) vs. an internal demo route. */
  kind: 'external' | 'internal' | 'soon';
  href: string;
  /** Path to a screenshot to drop into the browser-mockup frame; omit to show a placeholder. */
  screenshot?: string;
  lighthouse?: LighthouseScores;
}

export interface Certificate {
  title: string;
  program: string;
  issuer: string;
  partner: string;
  issueDate: string;
  description: string;
  image: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconComponent;
}
