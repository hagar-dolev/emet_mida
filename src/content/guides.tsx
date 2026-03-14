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
    title: 'סימנים שכדאי לשים לב אליהם',
    content: (
      <>
        <p>
          דיסאינפורמציה בעזרת בינה מלאכותית לרוב מציגה דפוסים אופייניים: ניסוח חלק או גנרי מדי, פרטים לא עקביים באותו טקסט, ומקורות שקשה לאמת או שלא קיימים. תמונות סינתטיות עלולות להראות חריגות עדינות, ודייפייקים עלולים להראות סנכרון שפתיים או תאורה מוזרים.
        </p>
        <ul>
          <li>שפה גנרית או פורמולאית במקום שמצופה מומחיות ספציפית</li>
          <li>טענות שנשמעות מדויקות אבל ללא מקור שניתן לבדיקה</li>
          <li>תמונות או וידאו שמרגישים "לא בסדר" (למשל ידיים, טקסט או רקעים)</li>
          <li>תוכן שמתפשט מהר מאוד ומשותף בהמונים לפני בדיקת עובדות</li>
        </ul>
      </>
    ),
  },
  {
    id: 'verify',
    title: 'שלבי אימות',
    content: (
      <>
        <p>
          לפני שיתוף או פעולה על בסיס טענה, עצרו ואמתו. השתמשו בחיפוש תמונה הפוך, בדקו מקורות עצמאיים אחדים, והעדיפו גופי תקשורת שמתקנים טעויות ומציגים את המתודולוגיה. היו זהירים במיוחד עם סיפורים טעונים רגשית או "טובים מכדי להיות אמיתיים".
        </p>
        <p>
          ליוצרים: סמנו תוכן סינתטי או בעזרת AI כשאפשר להתבלבל בינו לבין עבודה אנושית בלבד, וקישרו למקורות כדי שאחרים יוכלו לאמת.
        </p>
      </>
    ),
  },
];

// ——— Guide 2: Checklist for journalists using AI tools ———
const guide2Sections: GuideSection[] = [
  {
    id: 'before',
    title: 'לפני שימוש ב-AI',
    content: (
      <>
        <p>
          הגדירו את מדיניות המערכת לגבי מתי ואיך מותר להשתמש ב-AI (מחקר, טיוטה, תרגום וכו׳). וודאו שיש לכם זכות להשתמש בכלים ושאתם לא מזינים חומר סודי או off-the-record. הבינו שהפלטים עלולים להיות שגויים או מוטים.
        </p>
      </>
    ),
  },
  {
    id: 'during',
    title: 'בעת השימוש ב-AI',
    content: (
      <>
        <p>
          לעולם אל תטפלו בפלט AI כבעובדה בלי אימות. בדקו שמות, תאריכים, ציטוטים וסטטיסטיקות מול מקורות ראשוניים. השתמשו ב-AI כעזר, לא כתחליף לשיפוט עיתונאי. תיעדו אילו שלבים השתמשו ב-AI כדי שתוכלו לתקן ולהסביר במידת הצורך.
        </p>
        <ul>
          <li>אמתו כל טענה עובדתית עם מקור עצמאי אחד לפחות</li>
          <li>אל תדביקו מידע סודי או רגיש לכלי AI ציבוריים</li>
          <li>שמרו רישום של אילו חלקים בכתבה כללו סיוע AI</li>
        </ul>
      </>
    ),
  },
  {
    id: 'after',
    title: 'אחרי הפרסום',
    content: (
      <>
        <p>
          אם המערכת מפרסמת שימוש ב-AI, עשו זאת בבירור (למשל בהערת עורך או בקרדיט). תקנו טעויות במהירות ובשקיפות. השתמשו במשוב קוראים ותיקונים לשיפור הנחיות וההדרכה.
        </p>
      </>
    ),
  },
];

// ——— Guide 3: Understanding the legal gap (overview) ———
const guide3Sections: GuideSection[] = [
  {
    id: 'gap',
    title: 'מהו פער החקיקה?',
    content: (
      <>
        <p>
          החוקים הקיימים נכתבו לעולם שבו יצירת תוכן כוזב משכנע בקנה מידה הייתה קשה ויקרה. חוקי הגנת הצרכן, לשון הרע ועונשין לרוב לא מתאימים היטב לדיסאינפורמציה שנוצרה ב-AI: הם עלולים לדרוש הוכחת כוונה, נזק מזוהה או "מפרסם" אחד — דבר שקשה כשהתוכן מיוצר בהמונים ומופץ על ידי שחקנים רבים.
        </p>
      </>
    ),
  },
  {
    id: 'why-it-matters',
    title: 'למה זה חשוב לעיתונות',
    content: (
      <>
        <p>
          הלקונה החקיקתית משאירה גם קהלים וגם יוצרים חשופים. לצופים יש מעט מענה כשמטעים אותם בתוכן סינתטי או מוגבר ב-AI. עיתונאים וגופי תקשורת עלולים להיות מחקים או שעבודתם מעוותת עם מעט כלים משפטיים ברורים. בירור ועדכון החוק במידת הצורך יכולים לסייע להגן על אמון ואחריות בלי לחנוק שימוש לגיטימי ב-AI.
        </p>
      </>
    ),
  },
];

// ——— Guide 4: What to do when you detect fake news ———
const guide4Sections: GuideSection[] = [
  {
    id: 'tools',
    title: 'כלים זמינים לאימות עצמי של פייק ניוז',
    content: (
      <>
        <p>
          לפני שפונים לגופים אחרים, כדאי לנצל את האפשרויות הזמינות לבדיקה עצמאית:
        </p>
        <ul>
          <li><strong>אימות עצמאי:</strong> חיפוש תמונה הפוך (Google Images, TinEye), אימות תאריכים ומקורות, ובדיקה מול מקורות חדשותיים אחרים.</li>
          <li><strong>כלי בדיקת עובדות:</strong> שימוש במדריכים לזיהוי דיסאינפורמציה (כמו מדריך צרכן התקשורת של משרד התקשורת) ובדיקה מול ארגוני Fact-checking בינלאומיים (IFCN) או מקומיים.</li>
          <li><strong>תיעוד:</strong> שמירת צילומי מסך, קישורים ותאריך הצפייה — חשוב אם תחליטו לדווח או לפנות לגורם רשמי.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'who-to-contact',
    title: 'למי לפנות',
    content: (
      <>
        <p>
          אחרי שאימתת או שיש לך חשד סביר לחדשות כוזבות, אפשר לפנות לגורמים הבאים:
        </p>
        <ul>
          <li>
            <strong>פייק ריפורטר (FakeReporter):</strong> ארגון אזרחי ישראלי — "המרכז האזרחי להגנת הדיגיטל" — שמאגד מחקרים מעמיקים על פייק ניוז, מקורות הדיסאינפורמציה ומבצעי השפעה. הארגון נוסד על ידי חוקרים ופעילים, משלב מומחיות OSINT, טכנולוגיה ופלטפורמה מבוססת ציבור; מזהה ומחשיף איומים ברשת, מפרסם תחקירים בתקשורת ועובד עם רשויות ופלטפורמות להסרת תוכן מזיק. ניתן לדווח אצלם על פייק ניוז, הסתה, חשד להתערבות זרה ותוכן פוגעני — דרך טופס הדיווח באתר.{' '}
            <a href="https://fakereporter.net/" target="_blank" rel="noopener noreferrer">fakereporter.net</a>
            {' '}(עברית) או{' '}
            <a href="https://fakereporter.net/en/english/" target="_blank" rel="noopener noreferrer">גרסה באנגלית</a>.
          </li>
          <li><strong>אגודת האינטרנט הישראלי (ISOC-IL):</strong> עוסקת במדיניות אינטרנט, זכויות דיגיטליות והגנת הצרכן ברשת. ניתן לפנות אליהם להכוונה בנושאי תוכן מטעה, פרטיות וזכויות ברשת — דרך האתר או דוא"ל ליצירת קשר.</li>
          <li><strong>משרד התקשורת — מדריך לצרכן התקשורת:</strong> מספק מידע רשמי על זיהוי חדשות כוזבות והתנהגות אחראית ברשת; מומלץ כנקודת מידע ראשונית.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'contact-news-company',
    title: 'האם לפנות לחברת החדשות?',
    content: (
      <>
        <p>
          <strong>כן — במקרים רבים כדאי.</strong> גופי תקשורת אחראיים מעוניינים לתקן טעויות ולשמור על אמון. אם זיהית טעות או תוכן כוזב בפרסום של עיתון או אתר חדשות:
        </p>
        <ul>
          <li>פנו ל"צור קשר" או ל"מערכת" באתר או ברשתות החברתיות של הגוף.</li>
          <li>ציינו בקצרה את הקישור לכתבה, את הטענה השגויה והמקור שממנו אימתתם (אם יש).</li>
          <li>בקשו תיקון או הבהרה. רוב הגופים המקצועיים מפרסמים תיקונים או עדכונים כשמקבלים מידע מבוסס.</li>
        </ul>
        <p>
          אם לא מקבלים מענה או שהגוף מתעלם — ניתן להזכיר זאת בדיווח לגורמים חיצוניים (למשל אגודת האינטרנט או גופי בדיקת עובדות) או לשתף את הממצאים בצורה שקופה (לאחר תיעוד נאות).
        </p>
      </>
    ),
  },
];

/** List of all guides (meta only) for the guides index page */
export const guidesIndex: GuideMeta[] = [
  {
    slug: 'how-to-spot-ai-misinformation',
    title: 'איך לזהות דיסאינפורמציה בעזרת בינה מלאכותית',
    summary: 'סימנים מעשיים ושלבי אימות לזיהוי ובדיקה של תוכן מטעה שנוצר או הוגבר בעזרת AI.',
    tags: ['אימות', 'צרכנים', 'אוריינות'],
    readingTime: 4,
  },
  {
    slug: 'checklist-journalists-ai',
    title: 'צ׳קליסט לעיתונאים שמשתמשים בכלי AI',
    summary: 'צ׳קליסט קצר לצוותים עיתונאיים: לפני, במהלך ואחרי שימוש ב-AI במערכת.',
    tags: ['עיתונות', 'אתיקה', 'צ׳קליסט'],
    readingTime: 3,
  },
  {
    slug: 'understanding-legal-gap',
    title: 'הבנת פער החקיקה (סקירה)',
    summary: 'מדוע החוק הקיים לרוב לא מתאים לדיסאינפורמציה מבוססת AI ומה המשמעות עבור יוצרים וצרכנים.',
    tags: ['משפט', 'סקירה'],
    readingTime: 3,
  },
  {
    slug: 'what-to-do-fake-news',
    title: 'מה לעשות כשמזהים חדשות כוזבות',
    summary: 'למי לפנות, אילו כלים יש בידך ואיך לפעול — כולל דיווח, אגודת האינטרנט הישראלי ופניה לחברת החדשות.',
    tags: ['דיווח', 'אימות', 'צרכנים'],
    readingTime: 4,
  },
];

/** Full guide content by slug. Add new guides here and to guidesIndex. */
export const guidesBySlug: Record<string, Guide> = {
  'how-to-spot-ai-misinformation': {
    ...guidesIndex[0],
    tocItems: guide1Sections.map((s) => ({ id: s.id, label: s.title, level: 1 })),
    sections: guide1Sections,
    references: [
      { title: 'רשת בדיקת עובדות לדוגמה', url: 'https://ifcn.org', note: 'International Fact-Checking Network' },
      { title: 'חיפוש תמונה הפוך', url: 'https://images.google.com', note: 'Google Images' },
    ],
  },
  'checklist-journalists-ai': {
    ...guidesIndex[1],
    tocItems: guide2Sections.map((s) => ({ id: s.id, label: s.title, level: 1 })),
    sections: guide2Sections,
    references: [
      { title: 'מכון רויטרס: AI ועיתונות', url: 'https://reutersinstitute.politics.ox.ac.uk', note: 'מחקר והנחיות' },
    ],
  },
  'understanding-legal-gap': {
    ...guidesIndex[2],
    tocItems: guide3Sections.map((s) => ({ id: s.id, label: s.title, level: 1 })),
    sections: guide3Sections,
    references: [
      { title: 'מועצת אירופה: AI ודיסאינפורמציה', note: 'סקירת מדיניות (placeholder)' },
    ],
  },
  'what-to-do-fake-news': {
    ...guidesIndex[3],
    tocItems: guide4Sections.map((s) => ({ id: s.id, label: s.title, level: 1 })),
    sections: guide4Sections,
    references: [
      { title: 'פייק ריפורטר — המרכז האזרחי להגנת הדיגיטל', url: 'https://fakereporter.net/', note: 'דיווח ומידע (עברית)' },
      { title: 'FakeReporter — English', url: 'https://fakereporter.net/en/english/', note: 'דיווח ומידע (אנגלית)' },
      { title: 'מדריך לצרכן התקשורת — זיהוי חדשות כוזבות', url: 'https://www.gov.il/he/pages/identifyfakenews', note: 'משרד התקשורת' },
      { title: 'אגודת האינטרנט הישראלי', url: 'https://www.isoc.org.il', note: 'ISOC-IL — יצירת קשר והכוונה' },
      { title: 'International Fact-Checking Network (IFCN)', url: 'https://ifcn.org', note: 'רשת גופי בדיקת עובדות' },
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
