import { Link } from 'react-router-dom';
import { PageLayout, Button, Card, CardTitle, CardSummary } from '../components';
import { IconBook, IconScale, IconCpu, IconFileText } from '../components/icons';
import styles from './Home.module.css';

const featureCards = [
  {
    to: '/guides',
    title: 'Guides',
    summary: 'Practical guides to spot AI-assisted misinformation, use AI responsibly in journalism, and understand the legal gap.',
    icon: <IconBook />,
  },
  {
    to: '/legal',
    title: 'Legal gaps',
    summary: 'Why current laws are often insufficient to address AI-generated misleading content and what’s missing.',
    icon: <IconScale />,
  },
  {
    to: '/tech',
    title: 'Technology',
    summary: 'How LLMs and generative media enable mass production of misleading content and the feedback loop risk.',
    icon: <IconCpu />,
  },
  {
    to: '/proposal',
    title: 'Proposal',
    summary: 'Our proposed direction: better literacy and a legal amendment to close the gap for creators and consumers.',
    icon: <IconFileText />,
  },
];

export function Home() {
  return (
    <PageLayout>
      <section className={styles.hero} aria-labelledby="hero-title">
        <h1 id="hero-title" className={styles.heroTitle}>
          AI Misinformation & Legal Gaps
        </h1>
        <p className={styles.heroSubtitle}>
          A public knowledge hub for creators and consumers of journalistic content — understand the risks, the legal lacuna, and what you can do.
        </p>
      </section>

      <section className={styles.cards} aria-labelledby="features-heading">
        <h2 id="features-heading" className={styles.sectionTitle}>
          Explore
        </h2>
        <div className={styles.cardGrid} role="list">
          {featureCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className={styles.cardLink}
              role="listitem"
            >
              <Card hover as="div">
                <span className={styles.cardIcon} aria-hidden>
                  {card.icon}
                </span>
                <CardTitle>{card.title}</CardTitle>
                <CardSummary>{card.summary}</CardSummary>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.why} aria-labelledby="why-heading">
        <h2 id="why-heading" className={styles.sectionTitle}>
          Why this exists
        </h2>
        <p className={styles.whyText}>
          AI-enabled misinformation is different from classic misinformation: scale, ease of production, and synthetic media make it harder for individuals and existing law to keep up. We built this hub to explain the legal gap, the technology behind it, and to offer practical guidance. Our audience is anyone who creates or consumes journalistic content and wants to stay informed.
        </p>
      </section>

      <section className={styles.cta} aria-labelledby="cta-heading">
        <h2 id="cta-heading" className={styles.visuallyHidden}>
          Get started
        </h2>
        <Link to="/guides">
          <Button variant="primary" className={styles.ctaButton}>
            Start here — browse guides
          </Button>
        </Link>
      </section>
    </PageLayout>
  );
}
