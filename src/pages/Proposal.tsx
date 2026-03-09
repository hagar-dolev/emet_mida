import { PageLayout, Callout, Button } from '../components';
import styles from './Proposal.module.css';

export function Proposal() {
  return (
    <PageLayout narrow>
      <h1 className={styles.title}>Proposal</h1>

      <section aria-labelledby="proposed-fix-heading">
        <h2 id="proposed-fix-heading" className={styles.heading}>
          Our proposed fix
        </h2>
        <p>
          We propose a two-part direction: first, strengthen AI and media literacy so that creators and consumers can recognise and handle AI-assisted and synthetic content. Second, advocate for a targeted legal amendment that closes the current gap — making it clearer when and how the law applies to AI-generated misleading content, without stifling legitimate use of AI in journalism and education. The exact form of the amendment will depend on jurisdiction and consultation with legal and industry experts.
        </p>
      </section>

      <section aria-labelledby="guidelines-heading">
        <h2 id="guidelines-heading" className={styles.heading}>
          Practical guidelines
        </h2>
        <p>
          In parallel, we support practical guidelines for newsrooms and platforms: transparent disclosure when AI is used in the production of content, verification standards before publication, and clear processes for corrections. These are not a substitute for law but can reduce harm and build trust while the legal framework catches up.
        </p>
      </section>

      <Callout variant="info" title="Download / Contact">
        <p style={{ margin: 0 }}>
          For a one-page summary or to get in touch about the proposal, email us at{' '}
          <a href="mailto:contact@example.org">contact@example.org</a> (placeholder). We will update this with a real contact and, where available, a downloadable PDF.
        </p>
      </Callout>

      <div className={styles.cta}>
        <a href="mailto:contact@example.org">
          <Button variant="outline">Contact us</Button>
        </a>
      </div>
    </PageLayout>
  );
}
