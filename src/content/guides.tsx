/**
 * Guide content: add new guides here. Each guide needs slug, title, summary, tags,
 * and either readingTime (optional) and full content (sections + references).
 */

import type { ReactNode } from 'react';
import type { Reference } from '../components/GuideLayout';
import type { TocItem } from '../components/TableOfContents';

export interface GuideSection {
  id: string;
  title: string;
  content: ReactNode;
}

export interface GuideMeta {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  readingTime?: number; // minutes
}

export interface Guide extends GuideMeta {
  tocItems: TocItem[];
  sections: GuideSection[];
  references: Reference[];
}

// ——— Guide 1: How to spot AI-assisted misinformation ———
const guide1Sections: GuideSection[] = [
  {
    id: 'signs',
    title: 'Signs to watch for',
    content: (
      <>
        <p>
          AI-assisted misinformation often exhibits telltale patterns: overly smooth or generic phrasing, inconsistent details within the same piece, and sources that are hard to verify or that do not exist. Synthetic images may show subtle artifacts, and deepfakes can have odd lip-sync or lighting.
        </p>
        <ul>
          <li>Generic or formulaic language where you'd expect specific expertise</li>
          <li>Claims that sound precise but cite no checkable source</li>
          <li>Images or video that feel "off" (e.g. hands, text, or backgrounds)</li>
          <li>Content that spreads very quickly and is heavily shared before fact-checking</li>
        </ul>
      </>
    ),
  },
  {
    id: 'verify',
    title: 'Verification steps',
    content: (
      <>
        <p>
          Before sharing or acting on a claim, pause and verify. Use reverse image search, check multiple independent sources, and prefer outlets that correct errors and show their methodology. Be especially cautious with emotionally charged or "too good to be true" stories.
        </p>
        <p>
          For creators: label synthetic or AI-assisted content where it could be mistaken for human-only work, and link to sources so others can verify.
        </p>
      </>
    ),
  },
];

// ——— Guide 2: Checklist for journalists using AI tools ———
const guide2Sections: GuideSection[] = [
  {
    id: 'before',
    title: 'Before you use AI',
    content: (
      <>
        <p>
          Define your outlet's policy on when and how AI may be used (research, drafting, translation, etc.). Ensure you have the rights to use the tools and that you're not feeding confidential or off-the-record material into them. Understand that outputs can be wrong or biased.
        </p>
      </>
    ),
  },
  {
    id: 'during',
    title: 'While using AI',
    content: (
      <>
        <p>
          Never treat AI output as fact without verification. Cross-check names, dates, quotes, and statistics with primary sources. Use AI to assist, not replace, editorial judgment. Document which steps used AI so you can correct and explain if needed.
        </p>
        <ul>
          <li>Verify every factual claim with at least one independent source</li>
          <li>Do not paste confidential or sensitive information into public AI tools</li>
          <li>Keep a record of which parts of the story involved AI assistance</li>
        </ul>
      </>
    ),
  },
  {
    id: 'after',
    title: 'After publication',
    content: (
      <>
        <p>
          If your outlet discloses AI use, do so clearly (e.g. in an editor's note or byline). Correct errors promptly and transparently. Use reader feedback and corrections to improve policies and training.
        </p>
      </>
    ),
  },
];

// ——— Guide 3: Understanding the legal gap (overview) ———
const guide3Sections: GuideSection[] = [
  {
    id: 'gap',
    title: 'What is the legal gap?',
    content: (
      <>
        <p>
          Existing laws were written for a world where creating convincing false content at scale was difficult and costly. Consumer protection, defamation, and criminal laws often don't fit AI-generated misinformation well: they may require proof of intent, identifiable harm, or a single "publisher," which is hard when content is mass-produced and spread by many actors.
        </p>
      </>
    ),
  },
  {
    id: 'why-it-matters',
    title: 'Why it matters for journalism',
    content: (
      <>
        <p>
          The legal lacuna leaves both audiences and creators exposed. Audiences have limited recourse when they're misled by synthetic or AI-amplified content. Journalists and outlets can be impersonated or have their work distorted with few clear legal tools. Clarifying and, where needed, updating the law can help protect trust and accountability without stifling legitimate use of AI.
        </p>
      </>
    ),
  },
];

/** List of all guides (meta only) for the guides index page */
export const guidesIndex: GuideMeta[] = [
  {
    slug: 'how-to-spot-ai-misinformation',
    title: 'How to spot AI-assisted misinformation',
    summary: 'Practical signs and verification steps to recognise and check AI-generated or AI-amplified misleading content.',
    tags: ['verification', 'consumers', 'literacy'],
    readingTime: 4,
  },
  {
    slug: 'checklist-journalists-ai',
    title: 'Checklist for journalists using AI tools',
    summary: 'A short checklist for editorial teams: before, during, and after using AI in the newsroom.',
    tags: ['journalism', 'ethics', 'checklist'],
    readingTime: 3,
  },
  {
    slug: 'understanding-legal-gap',
    title: 'Understanding the legal gap (overview)',
    summary: "Why existing laws often don't fit AI-enabled misinformation and what that means for creators and consumers.",
    tags: ['legal', 'overview'],
    readingTime: 3,
  },
];

/** Full guide content by slug. Add new guides here and to guidesIndex. */
export const guidesBySlug: Record<string, Guide> = {
  'how-to-spot-ai-misinformation': {
    ...guidesIndex[0],
    tocItems: guide1Sections.map((s) => ({ id: s.id, label: s.title, level: 1 })),
    sections: guide1Sections,
    references: [
      { title: 'Example fact-checking network', url: 'https://ifcn.org', note: 'International Fact-Checking Network' },
      { title: 'Reverse image search', url: 'https://images.google.com', note: 'Google Images' },
    ],
  },
  'checklist-journalists-ai': {
    ...guidesIndex[1],
    tocItems: guide2Sections.map((s) => ({ id: s.id, label: s.title, level: 1 })),
    sections: guide2Sections,
    references: [
      { title: 'Reuters Institute: AI and journalism', url: 'https://reutersinstitute.politics.ox.ac.uk', note: 'Research and guidelines' },
    ],
  },
  'understanding-legal-gap': {
    ...guidesIndex[2],
    tocItems: guide3Sections.map((s) => ({ id: s.id, label: s.title, level: 1 })),
    sections: guide3Sections,
    references: [
      { title: 'Council of Europe: AI and disinformation', note: 'Policy overview (placeholder)' },
    ],
  },
};

/** Get a guide by slug, or undefined if not found */
export function getGuide(slug: string): Guide | undefined {
  return guidesBySlug[slug];
}

/** Get all guide slugs */
export function getGuideSlugs(): string[] {
  return Object.keys(guidesBySlug);
}
