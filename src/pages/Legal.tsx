import { PageLayout, Accordion, AccordionItem } from '../components';
import styles from './Legal.module.css';

export function Legal() {
  return (
    <PageLayout narrow>
      <h1 className={styles.title}>Legal gaps</h1>
      <p className={styles.intro}>
        Current laws are often insufficient to address AI-generated misleading content. Existing frameworks were designed for a different scale and kind of harm. This page summarises why the legal lacuna exists and what it means for consumers and creators.
      </p>

      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading" className={styles.faqTitle}>
          Frequently asked questions
        </h2>
        <Accordion>
          <AccordionItem
            id="consumer-protection"
            title="Why consumer protection law isn't enough"
          >
            <p>
              Consumer protection law typically targets misleading commercial practices by identifiable traders. AI-generated misinformation is often produced and spread at scale by many actors, some anonymous or outside a single jurisdiction. Proving direct causation and attributing harm to a specific “trader” becomes difficult. The remedy set (e.g. redress from one seller) doesn't match the diffuse way this content is created and consumed.
            </p>
          </AccordionItem>
          <AccordionItem
            id="defamation"
            title="Why defamation law isn't enough"
          >
            <p>
              Defamation usually requires identifying a person or entity that was defamed, publication to a third party, and often proof of reputational harm and sometimes intent or negligence. With synthetic or AI-amplified content, the “publisher” may be unclear, the content may not target a single identifiable victim, and the volume of content makes individual lawsuits impractical. Defamation law was not designed for mass, automated distribution of misleading material.
            </p>
          </AccordionItem>
          <AccordionItem
            id="criminal-panic"
            title="What about criminal panic clause?"
          >
            <p>
              Some jurisdictions have offences for spreading false information that causes panic or public harm. These often require a high bar (e.g. intent to cause panic, or a direct link to serious harm). They also tend to be used sparingly and after the fact. They don't provide a clear, preventive framework for the kind of AI-enabled misinformation that undermines trust in media and institutions without a single “panic” event. A tailored approach may be needed to close the gap.
            </p>
          </AccordionItem>
        </Accordion>
      </section>
    </PageLayout>
  );
}
