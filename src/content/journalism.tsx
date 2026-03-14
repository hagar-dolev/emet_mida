import type { ReactNode } from 'react';
import { Figure } from '../components';

export interface TopicReference {
  title: string;
  url?: string;
}

export interface Topic {
  id: string;
  title: string;
  content: ReactNode;
  references?: TopicReference[];
}

export const topics: Topic[] = [
  {
    id: 'automation',
    title: 'אוטומציה של חדשות (Robo-Journalism)',
    content: (
        <p>
            מערכות בינה מלאכותית מסוגלות כיום לייצר דוחות פיננסיים, סיכומי ספורט ומבזקים באופן אוטומטי לחלוטין.
            גופי תקשורת מרכזיים כמו AP, בלומברג ורויטרס כבר עושים שימוש נרחב בטכנולוגיות אלו כדי להפיק אלפי כתבות בחודש המבוססות על הזנת נתונים מובנית.
            בישראל, גופי חדשות הידועים בחדשנות מאמצים כלים אלו כדי להגביר את יעילותם בייצור תוכן ולעמוד בדרישות של קהלים שצורכים בעיקר תכנים דיגיטליים.<br />
            האוטומציה מאפשרת לעיתונאים להתפנות לתחקירים מעמיקים יותר ולקידום פרויקטים עיתונאיים מורכבים, אך היא גם מעוררת חששות לגבי תופעות לוואי של הטמעת נורמות עבודה אלה. 
            לדוגמה, מתהווה בעיה של ייצור נפח גדול של תוכן אוטומטי ברמת אימות נמוכה מבעבר. חשש נוסף הוא פגיעה בהכשרתם ובביטחון התעסוקתי של עיתונאים בתחילת דרכם, דבר שעלול להוביל לניוון של הענף לאורך זמן.
        </p>
    ),
    references: [
      { title: 'Generative AI and news report 2025', url: 'https://reutersinstitute.politics.ox.ac.uk/generative-ai-and-news-report-2025-how-people-think-about-ais-role-journalism-and-society' },
      { title: 'מדריך לצרכן התקשורת', url: 'https://www.gov.il/he/pages/identifyfakenews' },
      { title: 'Reuters Tracer: Toward Automated News Production Using Large Scale Social Media Data', url: 'https://arxiv.org/abs/1711.04068' },
    ],
  },
  {
    id: 'personalization',
    title: 'התאמה אישית של תוכן',
    content: (
        <p>
            השימוש באלגוריתמי המלצה (Recommendation Systems) מאפשר התאמה מוקפדת של זרם החדשות להעדפות האישיות של כל קורא.
            מחקרים מהעשור האחרון מראים באופן עקבי שחשיפה לתוכן מותאם אישית מגבירה מעורבות של צרכן/ית התוכן (חלק מהותי מהמודל הכלכלי של פלטפורמות התוכן השונות, המבוסס על פרסום).
            אולם לשינוי זה מתלווה תופעה שגם היא מגובה היטב במחקר - "תיבות תהודה" (Echo Chambers).
            כאשר צרכני מידע נחשפים כמעט בלבד לתוכן שהותאם אליהם אישית ונוטה להסכים ולחזק את דעותיהם והעדפותיהם  הקודמות, הציבור הופך למחולק באופן הולך וגובר לקבוצות הנפרדות לא רק בדעה, אלא גם בתפישת המציאות והכרה משותפת בעובדות אובייקטיביות.
            בשנת 2025, חוקרים רבים בתחומים כמו סוציולוגיה, מדע המדינה, תקשורת,  מזהירים כי תופעת תיבות התהודה, בשילוב עם יכולות הבינה המלאכותית לייצר "מציאות סינתטית" מותאמת אישית, עלולה לשחוק את יכולתן של חברות לקיים קונצנזוס על עובדות בסיסיות ולהעמיק את הקיטוב החברתי.
        </p>
    ),
    references: [
      { title: 'The Generative AI Paradox: GenAI and the Erosion of Trust, the Corrosion of Information Verification, and the Demise of Truth', url: 'https://arxiv.org/html/2601.00306v1' },
      { title: 'Media, Attention Economy, and the Structural Erosion of Meaningful Communication', url: 'https://magazine.mindplex.ai/post/media-attention-economy-and-the-structural-erosion-of-meaningful-communication' },
    ],
  },
  {
    id: 'verification',
    title: 'אימות מידע וזיהוי דיסאינפורמציה',
    content: (
      <>
        <p>
            הבינה המלאכותית פועלת בשוק המידע בצורה דואלית: היא הכלי המרכזי לייצור מידע כוזב, אך גם המגן העיקרי נגדו.
        </p>
        <ol>
            <li>
                <strong>AI כיצרן מיס/דיסאינפורמציה:</strong> כלים גנרטיביים מאפשרים כיום לייצר תכני "דיפ-פייק" היפר-ריאליסטיים, כולל סרטוני וידאו מזויפים של מנהיגים וזירות לחימה.
                סוגי מדיה כמו תמונה, וידאו, ואודיו, שבעבר היוו סטנדרט מוסכם של הוכחת אמיתות בשל הקושי לזייפם, ניתנים היום לייצור בקלות וברמה גבוהה ע"י כלים זמינים, וצרכני תוכן מתקשים להבדיל בין מידע מהימן למטעה.
            </li>
            <li>
                <strong>AI ככלי אימות (Fact-checking):</strong> מנגד, עיתונאים משתמשים כיום בכלי AI סטנדרטיים (כמו chat assistants) ויעודיים (כלים מקצועיים מבוססי בינה מלאכותית) למשימות אימות, מחקר, הצלבת מידע, ועוד.
                בנוסף, משימות כמו זיהוי זיופים בזמן אמת (מצריך בקרה תמידית של ערוצי מידע), ניתוח פורנזי של תמונות וגילוי דפוסים של בוטים ברשתות החברתיות - מקבלות מענה הולך ומשתפר ע"י כלים דיגיטליים המשלבים בינה מלאכותית.
                כלי עבודה כמו Invid לאימות וידאו ו-Reuters Tracer לזיהוי אירועים חדשותיים הופכים לחלק בלתי נפרד מארגז הכלים המקצועי בעולם העיתונות.
                כך יוצא שטכנולוגיות בינה מלאכותית, על מאפייניהן, לוקחות חלק הולך וגדל בעיצוב הדינמיקה בין שלל הגורמים בתעשיית העיתונות - גם ביצירת בעיות חדשות וגם במענה לאותן בעיות.
            </li>
        </ol>
        <p>
            במציאות זו בה מידע רב מיוצר ונבדק ע"י אלגורתמים, הגישה הנחשבת היום לבסיס באימות מידע ותהליכים היא מודל "אדם בלולאה" (Human-in-the-loop), שבו המכונה מבצעת את הסריקה הראשונית והעיתונאי האנושי מבצע את הערכת האמינות הסופית.
        </p>
      </>
    ),
    references: [
      { title: 'Making Artificial Intelligence Work for Investigative Journalism', url: 'https://www.researchgate.net/publication/334182207_Making_Artificial_Intelligence_Work_for_Investigative_Journalism' },
      { title: 'AI and Misinformation', url: 'https://2024.jou.ufl.edu/page/ai-and-misinformation' },
    ],
  },
  {
    id: 'transparency',
    title: 'שקיפות וסימון תוכן',
    content: (
      <p>חוק הבינה המלאכותית של האיחוד האירופי (EU AI Act), שנכנס לשלבי יישום מתקדמים ב-2025, מחייב סימון ברור של כל תוכן סינתטי או "דיפ-פייק". מערכות חדשות המפרסמות טקסט שנוצר על ידי AI לצורך יידוע הציבור חייבות לגלות זאת לקוראים, אלא אם התוכן עבר עריכה אנושית משמעותית והעורך נושא באחריות מלאה. בישראל, מועצת העיתונות וועדות האתיקה מדגישות כי האחריות על דיוק המידע מוטלת במלואה על העיתונאי והמערכת, וכי ה-AI אינו יכול לשמש כתירוץ לטעויות עובדתיות.</p>
    ),
    references: [
      { title: 'EU AI Act', url: 'https://artificialintelligenceact.eu/' },
      { title: 'תקנון האתיקה (המועצה הציבורית לעיתונת ולאתיקה)', url: 'https://www.presscouncil.org.il/ethics' },
    ],
  },
  {
    id: 'intellectual property',
    title: 'זכויות יוצרים ובעלות על טקסט',
    content: (
      <p>שאלת הבעלות על תוצרי AI נותרה מורכבת. משרד זכויות היוצרים האמריקאי (U.S. Copyright Office) הבהיר בדו"ח מינואר 2025 כי תוצרים שנוצרו אך ורק על ידי מכונה אינם זכאים להגנת זכויות יוצרים, הדורשת "יצירתיות אנושית". עם זאת, עבודות שבהן עיתונאי ביצע שינויים או סידורים יצירתיים משמעותיים בתוצר ה-AI עשויות לזכות להגנה. במקביל, שנת 2025 התאפיינה בגל של תביעות נגד חברות AI (כמו התביעות נגד OpenAI ו-Anthropic) על שימוש בתוכן עיתונאי לאימון מודלים ללא פיצוי, מה שהוביל להסכמי פשרה ורישוי בשווי מיליארדי דולרים.</p>
    ),
    references: [
      { title: 'Copyright and Artificial Intelligence (Part 2)', url: 'https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf' },
      { title: 'AI firm Anthropic agrees to pay authors $1.5bn to settle piracy lawsuit', url: 'https://www.bbc.com/news/articles/c5y4jpg922qo' },
    ],
  },
  {
    id: 'platformization',
    title: 'מעבר מעיתונות מסורתית לכלכלת פלטפורמות',
    content: (
      <p>שוק המידע בשנת 2025 מאופיין בשחיקה מתמשכת של מוסדות המדיה המסורתיים לטובת אקוסיסטם מבוזר הנשלט על ידי רשתות חברתיות ופלטפורמות וידאו. בארצות הברית, השימוש בחדשות דרך הרשתות החברתיות עלה בשישה אחוזים בשנה האחרונה, כאשר לראשונה רשתות חברתיות (54%) עקפו את הטלוויזיה (50%) ואתרי החדשות (48%) כמקור המידע המרכזי.התהליך הזה אינו רק כמותי אלא איכותי; הוא משקף מעבר מחדשות "מתווכות" על ידי עורכים אנושיים לחדשות "מנווטות" על ידי אלגוריתמים המעדפים מעורבות רגשית וסנסציונליזם. בעשור האחרון השוק התפצל, וכיום ישנן שש רשתות שונות המגיעות ליותר מ-10% מהציבור לצורך צריכת חדשות שבועית, מה שמקשה על יצירת "מציאות משותפת" בחברה.</p>
    ),
    references: [
      { title: 'Journalism, media, and technology trends and predictions 2025', url: 'https://reutersinstitute.politics.ox.ac.uk/journalism-media-and-technology-trends-and-predictions-2025' },
      { title: 'Overview and key findings of the 2025 Digital News Report', url: 'https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/dnr-executive-summary' },
    ],
  },
  {
    id: 'influencers',
    title: 'עליית השמפיענים ויוצרי התוכן',
    content: (
      <p>אחת המגמות הבולטות היא עלייתם של משפיענים ויוצרי תוכן העוקפים את העיתונות המקצועית ופונים לקהל באופן ישיר. כ-22% מהציבור בארה"ב מעידים כי נחשפו לחדשות או לפרשנות מהפודקאסטר Joe Rogan בשבוע אחד, ונתונים דומים קיימים לגבי יוצרי תוכן בטיקטוק וביוטיוב בשווקים אחרים בעולם. השינוי הזה מעביר את מרכז הכובד ממותגי חדשות ותיקים לאישיות הדובר. עם זאת, המעבר טומן בחובו סיכונים אתיים, שכן משפיענים נתפסים כיום כאחד האיומים המרכזיים להפצת מידע כוזב, בדומה לפוליטיקאים, כיוון שהם אינם כפופים לסטנדרטים המקצועיים של בדיקת עובדות ואחריותיות עיתונאית.</p>
    ),
    references: [
      { title: 'Overview and key findings of the 2025 Digital News Report', url: 'https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/dnr-executive-summary' },
    ],
  },
  {
    id: 'newsrooms',
    title: 'בינה מלאכותית בחדרי החדשות: מהפכת היעילות והסמכות',
    content: (
      <p>הבינה המלאכותית כבר אינה טכנולוגיה עתידית אלא כלי יומיומי בחדרי החדשות; כ-87% מהמנהלים בענף המדיה מעידים כי המערכות שלהם עברו טרנספורמציה בעקבות השימוש ב-AI. הטכנולוגיה משמשת לאוטומציה של משימות רוטיניות כמו תמלול, תרגום וסיכום, אך גם לניתוח מאגרי נתונים עצומים המאפשרים גילוי סיפורים חקירתיים חדשים.לצד היעילות, נוצרת "סמכות אלגוריתמית" המשנה את תפקיד העורך. במקום החלטות המבוססות על ערכים עיתונאיים קלאסיים, המערכות הופכות לממוקדות נתונים, SEO ואופטימיזציה למנועי חיפוש. הדבר יוצר "חיכוך" מקצועי בין האפיסטמולוגיה העיתונאית המסורתית לבין הלוגיקה של למידת המכונה, המעדיפה דפוסים סטטיסטיים על פני ניואנסים אנושיים.</p>
    ),
    references: [
      { title: 'What Every Writer Should Know About Using AI Tools in 2025', url: 'https://medium.com/@elainnaciaramella/what-every-writer-should-know-about-using-ai-tools-in-2025-a8d99ece7551' },
      { title: 'How artificial intelligence shapes the future of journalism', url: 'https://www.jpost.com/consumerism/article-866858' },
      { title: 'How is AI being used in journalism?', url: 'https://www.ibm.com/think/insights/ai-in-journalism' },
    ],
  },
  {
    id: 'economic model',
    title: 'האיום הכלכלי: מנועי החיפוש וה"שאיבה" של התוכן',
    content: (
      <p>הבינה המלאכותית יוצרת אתגר קיומי למודל הכלכלי של העיתונות דרך תופעת ה"אפס קליקים" (Zero-click searches). מנועי חיפוש מבוססי AI מספקים תשובות מלאות לשאלות המשתמשים מבלי שהם יצטרכו להקליק על הקישור לאתר החדשות המקורי, מה שמוביל לירידה של עד 89% בשיעור ההקלקות בחלק מהמקרים.בנוסף, קיים חוסר איזון קיצוני ביחסים בין חברות ה-AI למו"לים; מחקרים מראים כי על כל קורא אחד שחברת AI שולחת לאתר חדשות, היא "שואבת" וסורקת כ-250 כתבות מהאתר לצורך אימון המודלים שלה ללא פיצוי כספי הולם ליוצרים.</p>
    ),
    references: [
      { title: 'When AI Devours the News: Who Pays for Truth', url: 'https://smarterarticles.co.uk/when-ai-devours-the-news-who-pays-for-truth' },
      { title: 'Generative AI and news report 2025', url: 'https://reutersinstitute.politics.ox.ac.uk/generative-ai-and-news-report-2025-how-people-think-about-ais-role-journalism-and-society' },
    ],
  },
  {
    id: 'news deserts',
    title: 'מדבריות חדשות וקריסת העיתונות המקומית',
    content: (
        <>
        <p>היחלשות המודל הכלכלי מובילה להתרחבות תופעת "מדבריות החדשות" (News Deserts) – אזורים גיאוגרפיים שלמים ללא מקור אמין לחדשות מקומיות. בארצות הברית, כ-50 מיליון בני אדם חיים כיום במחוזות כאלו, לאחר שכ-40% מהעיתונים המקומיים נעלמו בשני העשורים האחרונים.היעלמות העיתונות המקומית קשורה באופן ישיר לירידה במעורבות אזרחית, עלייה בשחיתות שלטונית והתגברות הקיטוב החברתי. ללא גופי תקשורת שיפקחו על הרשויות המקומיות, העלות הכלכלית של הממשל הציבורי עולה, והציבור נשאר ללא הגנה מפני דיסאינפורמציה ברמה המקומית.</p>
        <Figure
          src="https://www.usnewsdeserts.com/wp-content/uploads/2020/06/Do_You_Live_in_a_News_Desert_website_V2_Sting_06-11-2020.png"
          alt="מפת ארצות הברית: האם אתה גר במדבר חדשות?"
          caption="מפת 'מדבריות חדשות' בארצות הברית (מקור: US News Deserts)"
        />
        </>
    ),
    references: [
      { title: 'The State of Local News', url: 'https://localnewsinitiative.northwestern.edu/projects/state-of-local-news/2025/report/' },
      { title: 'News deserts: Local journalism at risk', url: 'https://informedfutures.org/wp-content/uploads/2025/09/Koi-Tu-News-Deserts.pdf' },
    ],
  },
  {
    id: 'conflict of interest',
    title: 'פטרונות ה-AI ועידן "העיתונאי האקטיביסט"',
    content: (
      <p>בתגובה למשבר, מסתמנת מגמה של "פטרונות AI", שבה חברות טכנולוגיה גדולות מתחילות לממן או לרכוש גופי תקשורת כדי להבטיח את איכות הנתונים שהן צריכות לאימון המודלים שלהן. הדבר מעלה שאלות קשות לגבי עצמאות המערכת העיתונאית כאשר הצרכן והמממן הגדול ביותר שלה הוא חברת הטכנולוגיה שעליה היא אמורה לדווח.במקביל, עיתונאים רבים נוטשים את גישת ה"ניטרליות" המסורתית לטובת "אקטיביזם של אמת". בסביבה פוליטית שבה העובדות עצמן הופכות לסוגיה שנויה במחלוקת, עיתונאים פועלים באופן אקטיבי להגנה על הדמוקרטיה ועל התנאים המאפשרים את קיום האמת בשיח הציבורי.</p>
    ),
    references: [
        { title: 'AI will reinvent local news', url: 'https://www.niemanlab.org/2025/12/ai-will-reinvent-local-news/' },
    ],
  },
];