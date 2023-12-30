import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: {
          bannerHeadline: 'أكبر حدث تكنولوجيا وبدء التشغيل في العالم، الآن على نطاق أوسع',
          bannerLine1:"من 16 إلى 20 أكتوبر - مركز دبي التجاري العالمي",
          bannerLine2:"من 15 إلى 18 أكتوبر - ميناء دبي",
          getyourticket:"احصل على تذكرتك",
          imageLine:"طفرة الطلب العالمي تستعيد قوّتها جيتكس دبي - أكبر معرض للتكنولوجيا في العالم، يوسّع نطاقه أكثر من خلال موقعين ضخمين لإقامة الفعالية",
          imagePara:"نحن على استعداد للترحيب بجميع أصدقائنا في اثنينمن المواقع الضخمة في الإمارات العربية المتحدة، ألا وهما مركز دبي التجاري العالمي و ميناء هاربر دبي ، أكبر مركز لليخوت الفاخرة في المنطقة والذي يستعد الآن للترحيب بمعرض إكسباند نورث ستار، بأكبر إصدار له تستضيفه غرفة دبي للاقتصاد الرقمي",
          bottomLine:"استحواذ كامل على 41 قاعة عبر موقعين ضخمين",
          gitexglobel1:"يجمع معرض جيتكس العالمي أكثر من 6000 شركة ضمن الأكثر ابتكارًا في العالم وأفضل العقول للارتقاء بالأعمال ٫الاقتصاد ٬المجتمع والثقافة",
          gitexglobel2:"يصادف عام 2023 عام تصور الذكاء الاصطناعي في كل شيء، وهو ما يحفز السباق العالمي لتفوق الذكاء الاصطناعي من خلال الكشف عن تكهنات و وجهات نظر الخبراء حول تأثير هذا المجا",
          bottomhead2:"استمتع بتجربة غير عادية في نظام بيئي واحد",
          bottompara1:"عالم الذكاء الاصطناعي في كل شيء أكبر تجمع للمتخصصين في مجال الذكاء الاصطناعي في العالم، يضم قادة عالميين في مجال الذكاء الاصطناعي التوليدي - 600,000 قدم مربع، 10 قاعات، أكثر من 110 متحدّ",
          bottompara2:"فعالية أول إطلاق إقليمي لعلم البيانات Pycon في الشرق الأوسط، الهاكاثون التعاوني الأول من نوعه - انضم إليه أكثر من 15,000 مبرم",
          bottompara3:"تضمّ أكبر الاقتصادات وأسرعها نموًا بما في ذلك الصين، والهند، وإندونيسيا، وفيتنام، والبرازيل، والإمارات العربية المتحدة، والسعودية، وجنوب أفريقيا، ونيجيريا، والتي ستساهم بأكثر من 45% من الناتج المحلي الإجمالي العالمي بحلول عام 2050",
        },
      },
      en: {
        translation: {
          bannerHeadline: "The world's largest technology and startup event, now on a larger scale",
          bannerLine1:"From 16 to 20 October - Dubai World Trade Centre",  
          bannerLine2:"From 15 to 18 October - Harbor Dubai",
          getyourticket:"Get your ticket",
          imageLine:"Global demand boom regains strength GITEX Dubai - the largest technology exhibition in the world, expands its scope further through two huge sites to hold the event",
          imagePara:"We are ready to welcome all our friends to two of the mega sites in the UAE, namely Dubai World Trade Center and Dubai Harbour, the largest superyacht hub in the region which is now preparing to welcome Expand Northstar, with its largest edition hosted by the Dubai Chamber of Digital Economy.",
          bottomLine:"Complete acquisition of 41 halls across two huge sites",
          gitexglobel1:"GITEX Global Exhibition brings together more than 6,000 of the world's most innovative companies and the best minds to advance business, economy, society and culture.",
          gitexglobel2:"2023 marks the year to envision AI in everything, galvanizing the global race for AI supremacy by revealing expert speculation and views on the impact of the field.",
          bottomhead2:"Enjoy an extraordinary experience in one ecosystem",
          bottompara1:"The World of Everything AI The largest gathering of AI professionals in the world, featuring global leaders in generative AI - 600,000 square feet, 10 halls, more than 110 speakers",
          bottompara2:"The first regional data science launch event Pycon in the Middle East, the first collaborative hackathon of its kind - joined by more than 15,000 programmers",
          bottompara3:"It includes the largest and fastest growing economies including China, India, Indonesia, Vietnam, Brazil, the United Arab Emirates, Saudi Arabia, South Africa, and Nigeria, which will contribute more than 45% of global GDP by 2050.",
        },
      },
      // Add more languages as needed
    },
    lng: 'ar',
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;