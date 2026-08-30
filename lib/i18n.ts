export type Locale = "ur" | "ar" | "en"

export const LOCALES: Locale[] = ["ur", "ar", "en"]
export const DEFAULT_LOCALE: Locale = "ur"

export const DIRECTION: Record<Locale, "rtl" | "ltr"> = {
  ur: "rtl",
  ar: "rtl",
  en: "ltr",
}

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  ur: "ur",
  ar: "ar",
  en: "en",
}

export const PHONE_DISPLAY = "0599082520"
export const PHONE_TEL = "+966599082520"
export const WHATSAPP_URL = "https://wa.me/966599082520"

export const LANGUAGE_LABELS: { locale: Locale; label: string }[] = [
  { locale: "ur", label: "اردو" },
  { locale: "ar", label: "العربية" },
  { locale: "en", label: "English" },
]

type ServiceKey =
  | "floor"
  | "ceramic"
  | "porcelain"
  | "marble"
  | "bathroom"
  | "kitchen"
  | "wallFloor"
  | "finishing"

type GalleryKey =
  | "bathroom"
  | "floor"
  | "wall"
  | "porcelain"
  | "marble"
  | "kitchen"
  | "interior"
  | "finishing"

export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  nav: {
    home: string
    about: string
    services: string
    work: string
    contact: string
    quote: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    quote: string
    whatsapp: string
    trust: string
  }
  trust: {
    workmanship: string
    finishing: string
    quality: string
    pricing: string
    local: string
  }
  about: {
    label: string
    title: string
    lead: string
    body: string
    points: string[]
    imageAlt: string
  }
  services: {
    label: string
    title: string
    subtitle: string
    cta: string
    items: Record<ServiceKey, { name: string; desc: string }>
  }
  why: {
    label: string
    title: string
    subtitle: string
    items: { title: string; desc: string }[]
  }
  gallery: {
    label: string
    title: string
    subtitle: string
    note: string
    items: Record<GalleryKey, string>
    close: string
    prev: string
    next: string
  }
  area: {
    label: string
    title: string
    body: string
    badge: string
  }
  cta: {
    title: string
    body: string
    call: string
    whatsapp: string
  }
  contact: {
    label: string
    title: string
    subtitle: string
    phoneLabel: string
    whatsappLabel: string
    locationLabel: string
    location: string
    call: string
    whatsapp: string
  }
  footer: {
    tagline: string
    navTitle: string
    contactTitle: string
    langTitle: string
    rights: string
  }
  floating: {
    whatsapp: string
    call: string
  }
}

export const translations: Record<Locale, Dictionary> = {
  ur: {
    meta: {
      title: "مدینہ منورہ میں ٹائل و سیرامک کا معلم | Madina Tile Works",
      description:
        "مدینہ منورہ میں ٹائل، سیرامک، پورسلین اور ماربل کی پروفیشنل انسٹالیشن۔ صاف کام، اعلیٰ معیار اور مناسب قیمت۔ واٹس ایپ پر رابطہ کریں۔",
    },
    nav: {
      home: "ہوم",
      about: "تعارف",
      services: "خدمات",
      work: "ہمارا کام",
      contact: "رابطہ",
      quote: "قیمت معلوم کریں",
    },
    hero: {
      eyebrow: "مدینہ منورہ کا پاکستانی ٹائل معلم",
      title: "مدینہ منورہ میں ٹائل و سیرامک کی پروفیشنل انسٹالیشن",
      subtitle:
        "گھروں، ولاز، اپارٹمنٹس، ریستورانوں اور دکانوں کے لیے ٹائل، سیرامک، پورسلین اور ماربل کی ماہرانہ تنصیب۔",
      quote: "قیمت معلوم کریں",
      whatsapp: "واٹس ایپ پر رابطہ کریں",
      trust: "صاف کام • اعلیٰ معیار • مناسب قیمت",
    },
    trust: {
      workmanship: "پیشہ ورانہ کاریگری",
      finishing: "صاف فنشنگ",
      quality: "معیار پر توجہ",
      pricing: "مناسب قیمت",
      local: "مدینہ منورہ میں خدمت",
    },
    about: {
      label: "تعارف",
      title: "مدینہ منورہ کا بھروسہ مند ٹائل معلم",
      lead: "ہم مدینہ منورہ میں ٹائل، سیرامک، پورسلین اور ماربل کی تنصیب کا کام کرتے ہیں۔",
      body: "ہر پروجیکٹ کو دقت اور محنت سے مکمل کیا جاتا ہے، صاف ستھری فنشنگ اور مقررہ وقت کی پابندی کے ساتھ۔ چھوٹے گھر سے لے کر بڑے ولا اور کمرشل جگہوں تک، ہمارا مقصد ایسا کام دینا ہے جو دیر تک خوبصورت اور مضبوط رہے۔",
      points: [
        "گھروں، ولاز اور اپارٹمنٹس کے لیے تنصیب",
        "ریستورانوں اور کمرشل جگہوں کا کام",
        "صاف اور محفوظ ورک سائٹ",
      ],
      imageAlt: "ٹائل معلم بیج رنگ کی پورسلین ٹائل کو دقت سے لگا رہا ہے",
    },
    services: {
      label: "ہماری خدمات",
      title: "ٹائل و سیرامک کی مکمل خدمات",
      subtitle: "ہر جگہ کے لیے موزوں تنصیب، معیار اور صفائی کے ساتھ۔",
      cta: "قیمت معلوم کریں",
      items: {
        floor: {
          name: "فرش کی ٹائل",
          desc: "بڑے سائز کی فرش ٹائل کی سیدھی اور مضبوط تنصیب، ہموار جوڑوں کے ساتھ۔",
        },
        ceramic: {
          name: "سیرامک کی تنصیب",
          desc: "دیوار اور فرش کے لیے سیرامک ٹائل کا صاف اور پائیدار کام۔",
        },
        porcelain: {
          name: "پورسلین کی تنصیب",
          desc: "پورسلین ٹائل کی درست کٹنگ اور شاندار فنشنگ کے ساتھ تنصیب۔",
        },
        marble: {
          name: "ماربل کی تنصیب",
          desc: "ماربل کے فرش اور سیڑھیوں کی پالش اور جوڑوں کی نفیس تکمیل۔",
        },
        bathroom: {
          name: "باتھ روم ٹائل",
          desc: "باتھ روم کی دیوار اور فرش کی واٹر پروف اور صاف تنصیب۔",
        },
        kitchen: {
          name: "کچن ٹائل",
          desc: "کچن کے فرش اور بیک اسپلیش کی مضبوط اور خوبصورت ٹائلنگ۔",
        },
        wallFloor: {
          name: "دیوار و فرش ٹائل",
          desc: "دیواروں اور فرش کی مکمل ٹائلنگ ایک جیسے معیار کے ساتھ۔",
        },
        finishing: {
          name: "فنشنگ کے کام",
          desc: "جوڑوں، کناروں اور تفصیلی فنشنگ پر خاص توجہ۔",
        },
      },
    },
    why: {
      label: "ہمیں کیوں چنیں",
      title: "کام جس پر بھروسہ کیا جا سکے",
      subtitle: "ہم صرف ٹائل نہیں لگاتے، ہم آپ کی جگہ کو نکھارتے ہیں۔",
      items: [
        { title: "صاف کاریگری", desc: "ہر کام ترتیب اور صفائی کے ساتھ مکمل ہوتا ہے۔" },
        { title: "باریکی پر توجہ", desc: "جوڑ اور کنارے دقت سے تیار کیے جاتے ہیں۔" },
        { title: "اعلیٰ فنشنگ", desc: "نتیجہ ہموار اور دیرپا خوبصورتی کے ساتھ۔" },
        { title: "مناسب قیمت", desc: "معیار سے سمجھوتہ کیے بغیر مناسب ریٹ۔" },
        { title: "وقت کی پابندی", desc: "کام مقررہ وقت میں مکمل کرنے کی کوشش۔" },
      ],
    },
    gallery: {
      label: "ہمارا کام",
      title: "پروجیکٹس کی جھلک",
      subtitle: "ٹائل، سیرامک، پورسلین اور ماربل کے کام کے نمونے۔",
      note: "یہ تصاویر بطور نمونہ ہیں اور جلد اصل مکمل شدہ پروجیکٹس کی تصاویر سے تبدیل کی جائیں گی۔",
      items: {
        bathroom: "ماربل نما ٹائل والا جدید باتھ روم",
        floor: "کریم رنگ کی پورسلین فرش ٹائل کی تنصیب",
        wall: "بیج پتھر نما دیوار کی ٹائلنگ",
        porcelain: "چمکدار پورسلین ٹائل والا راہداری",
        marble: "ماربل کا فرش اور سیڑھیاں",
        kitchen: "پتھر نما ٹائل والا جدید کچن",
        interior: "کھلا اور جدید رہائشی حصہ",
        finishing: "ٹائل کے جوڑ کی نفیس فنشنگ",
      },
      close: "بند کریں",
      prev: "پچھلی",
      next: "اگلی",
    },
    area: {
      label: "خدمت کا علاقہ",
      title: "ہم مدینہ منورہ میں خدمت پیش کرتے ہیں",
      body: "ہماری خدمات مدینہ منورہ اور اس کے قریبی علاقوں میں دستیاب ہیں۔ اپنے مقام کی تفصیل واٹس ایپ پر بھیجیں۔",
      badge: "مدینہ منورہ، سعودی عرب",
    },
    cta: {
      title: "مدینہ منورہ میں ٹائل کا کام کروانا ہے؟",
      body: "اپنے پروجیکٹ کی تفصیلات یا تصاویر واٹس ایپ پر بھیجیں اور قیمت معلوم کریں۔",
      call: "ابھی کال کریں",
      whatsapp: "واٹس ایپ",
    },
    contact: {
      label: "رابطہ",
      title: "آئیے آپ کے پروجیکٹ پر بات کرتے ہیں",
      subtitle: "کال یا واٹس ایپ کے ذریعے آسانی سے رابطہ کریں۔",
      phoneLabel: "فون",
      whatsappLabel: "واٹس ایپ",
      locationLabel: "مقام",
      location: "مدینہ منورہ، سعودی عرب",
      call: "ابھی کال کریں",
      whatsapp: "واٹس ایپ پر رابطہ",
    },
    footer: {
      tagline: "مدینہ منورہ میں ٹائل و سیرامک کی تنصیب۔",
      navTitle: "صفحات",
      contactTitle: "رابطہ",
      langTitle: "زبان",
      rights: "تمام حقوق محفوظ ہیں۔",
    },
    floating: {
      whatsapp: "واٹس ایپ",
      call: "کال کریں",
    },
  },

  ar: {
    meta: {
      title: "معلم بلاط وسيراميك في المدينة المنورة | Madina Tile Works",
      description:
        "معلم بلاط وسيراميك بالمدينة المنورة، متخصص في تركيب البلاط والسيراميك والبورسلان والرخام. شغل نظيف وجودة عالية وأسعار مناسبة. تواصل عبر واتساب.",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      work: "أعمالنا",
      contact: "تواصل",
      quote: "اطلب عرض سعر",
    },
    hero: {
      eyebrow: "معلم بلاط باكستاني في المدينة المنورة",
      title: "معلم بلاط وسيراميك في المدينة المنورة",
      subtitle:
        "تركيب احترافي للبلاط والسيراميك والبورسلان والرخام للمنازل والفلل والشقق والمطاعم والمحلات التجارية.",
      quote: "اطلب عرض سعر",
      whatsapp: "تواصل عبر واتساب",
      trust: "شغل نظيف • جودة عالية • أسعار مناسبة",
    },
    trust: {
      workmanship: "احترافية في التنفيذ",
      finishing: "تشطيب نظيف",
      quality: "تركيز على الجودة",
      pricing: "أسعار مناسبة",
      local: "خدمة داخل المدينة",
    },
    about: {
      label: "من نحن",
      title: "معلم بلاط تثق به في المدينة المنورة",
      lead: "متخصصون في تركيب البلاط والسيراميك والبورسلان والرخام بالمدينة المنورة.",
      body: "ننفذ كل عمل بدقة واحترافية مع تشطيب نظيف والتزام بالمواعيد. من المنازل الصغيرة إلى الفلل والمحلات التجارية، هدفنا تقديم عمل يبقى جميلاً ومتيناً لسنوات.",
      points: [
        "تركيب للمنازل والفلل والشقق",
        "أعمال المطاعم والمحلات التجارية",
        "موقع عمل نظيف ومرتب",
      ],
      imageAlt: "معلم بلاط يركب بلاطة بورسلان بيج بدقة",
    },
    services: {
      label: "خدماتنا",
      title: "خدمات متكاملة للبلاط والسيراميك",
      subtitle: "تركيب مناسب لكل مساحة مع جودة وشغل نظيف.",
      cta: "اطلب عرض سعر",
      items: {
        floor: {
          name: "تركيب بلاط الأرضيات",
          desc: "تركيب مستوٍ ومتين للبلاط بمقاسات كبيرة مع فواصل منتظمة.",
        },
        ceramic: {
          name: "تركيب السيراميك",
          desc: "تركيب سيراميك نظيف ومتين للأرضيات والجدران.",
        },
        porcelain: {
          name: "تركيب البورسلان",
          desc: "قص دقيق وتشطيب راقٍ لبلاط البورسلان.",
        },
        marble: {
          name: "تركيب الرخام",
          desc: "تركيب وجلي الرخام للأرضيات والدرج بفواصل دقيقة.",
        },
        bathroom: {
          name: "تركيب بلاط الحمامات",
          desc: "تركيب نظيف ومقاوم للماء لجدران وأرضيات الحمام.",
        },
        kitchen: {
          name: "تركيب بلاط المطابخ",
          desc: "تبليط متين وأنيق لأرضية المطبخ والباك سبلاش.",
        },
        wallFloor: {
          name: "بلاط الأرضيات والجدران",
          desc: "تبليط كامل للجدران والأرضيات بنفس مستوى الإتقان.",
        },
        finishing: {
          name: "أعمال التشطيبات",
          desc: "عناية خاصة بالفواصل والحواف والتفاصيل النهائية.",
        },
      },
    },
    why: {
      label: "لماذا نحن",
      title: "شغل تثق به وتطمئن إليه",
      subtitle: "لا نركب البلاط فقط، بل نرتقي بمظهر مساحتك.",
      items: [
        { title: "شغل نظيف", desc: "كل عمل يُنفذ بترتيب ونظافة." },
        { title: "دقة في التفاصيل", desc: "فواصل وحواف تُنفذ بعناية." },
        { title: "تشطيب عالي الجودة", desc: "نتيجة مستوية وجمال يدوم." },
        { title: "أسعار مناسبة", desc: "سعر معقول دون التنازل عن الجودة." },
        { title: "الالتزام بالمواعيد", desc: "حرص على إنجاز العمل في وقته." },
      ],
    },
    gallery: {
      label: "أعمالنا",
      title: "لمحة من أعمالنا",
      subtitle: "نماذج من أعمال البلاط والسيراميك والبورسلان والرخام.",
      note: "هذه الصور للعرض فقط وسيتم استبدالها قريباً بصور أعمال حقيقية منفذة.",
      items: {
        bathroom: "حمام عصري ببلاط يشبه الرخام",
        floor: "تركيب أرضية بورسلان بلون كريمي",
        wall: "تبليط جدار بحجر بيج",
        porcelain: "ممر ببلاط بورسلان لامع",
        marble: "أرضية ودرج من الرخام",
        kitchen: "مطبخ عصري ببلاط يشبه الحجر",
        interior: "مساحة معيشة حديثة ومفتوحة",
        finishing: "تشطيب دقيق لفواصل البلاط",
      },
      close: "إغلاق",
      prev: "السابق",
      next: "التالي",
    },
    area: {
      label: "نطاق الخدمة",
      title: "نخدمكم في المدينة المنورة",
      body: "نقدم خدماتنا داخل المدينة المنورة والمناطق القريبة منها. أرسل تفاصيل موقعك عبر واتساب.",
      badge: "المدينة المنورة، السعودية",
    },
    cta: {
      title: "لديك مشروع بلاط في المدينة المنورة؟",
      body: "أرسل لنا تفاصيل مشروعك أو صور المكان عبر واتساب للحصول على عرض سعر.",
      call: "اتصل الآن",
      whatsapp: "واتساب",
    },
    contact: {
      label: "تواصل",
      title: "لنتحدث عن مشروعك",
      subtitle: "تواصل معنا بسهولة عبر الاتصال أو واتساب.",
      phoneLabel: "الهاتف",
      whatsappLabel: "واتساب",
      locationLabel: "الموقع",
      location: "المدينة المنورة، السعودية",
      call: "اتصل الآن",
      whatsapp: "تواصل عبر واتساب",
    },
    footer: {
      tagline: "تركيب البلاط والسيراميك في المدينة المنورة.",
      navTitle: "الصفحات",
      contactTitle: "تواصل",
      langTitle: "اللغة",
      rights: "جميع الحقوق محفوظة.",
    },
    floating: {
      whatsapp: "واتساب",
      call: "اتصال",
    },
  },

  en: {
    meta: {
      title: "Tile & Ceramic Installation in Madinah | Madina Tile Works",
      description:
        "Professional tile, ceramic, porcelain and marble installation in Madinah, Saudi Arabia. Clean workmanship, high quality and fair pricing. Contact us on WhatsApp.",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      work: "Our Work",
      contact: "Contact",
      quote: "Get a Quote",
    },
    hero: {
      eyebrow: "Pakistani tile specialist in Madinah",
      title: "Professional Tile & Ceramic Installation in Madinah",
      subtitle:
        "Expert installation of tiles, ceramic, porcelain and marble for homes, villas, apartments, restaurants and commercial spaces.",
      quote: "Get a Quote",
      whatsapp: "WhatsApp Us",
      trust: "Clean work • High quality • Fair pricing",
    },
    trust: {
      workmanship: "Professional Workmanship",
      finishing: "Clean Finishing",
      quality: "Quality Focus",
      pricing: "Affordable Pricing",
      local: "Madinah Service",
    },
    about: {
      label: "About",
      title: "A Tile Specialist Madinah Can Rely On",
      lead: "We specialise in installing tile, ceramic, porcelain and marble across Madinah.",
      body: "Every job is completed with care and precision, clean finishing and respect for the agreed schedule. From small homes to large villas and commercial spaces, our aim is work that stays beautiful and solid for years.",
      points: [
        "Installation for homes, villas and apartments",
        "Restaurant and commercial fit-outs",
        "Clean and tidy work site",
      ],
      imageAlt: "A tile installer carefully laying a beige porcelain floor tile",
    },
    services: {
      label: "Our Services",
      title: "Complete Tile & Ceramic Services",
      subtitle: "The right installation for every space, with quality and clean workmanship.",
      cta: "Get a Quote",
      items: {
        floor: {
          name: "Floor Tile Installation",
          desc: "Level, durable installation of large-format floor tiles with even joints.",
        },
        ceramic: {
          name: "Ceramic Installation",
          desc: "Clean, long-lasting ceramic tiling for walls and floors.",
        },
        porcelain: {
          name: "Porcelain Installation",
          desc: "Precise cutting and refined finishing for porcelain tiles.",
        },
        marble: {
          name: "Marble Installation",
          desc: "Marble laying and polishing for floors and staircases with fine joints.",
        },
        bathroom: {
          name: "Bathroom Tile Installation",
          desc: "Clean, water-resistant tiling for bathroom walls and floors.",
        },
        kitchen: {
          name: "Kitchen Tile Installation",
          desc: "Solid, elegant tiling for kitchen floors and backsplashes.",
        },
        wallFloor: {
          name: "Floor & Wall Tiles",
          desc: "Complete wall and floor tiling to the same standard of finish.",
        },
        finishing: {
          name: "Finishing Works",
          desc: "Careful attention to joints, edges and final detailing.",
        },
      },
    },
    why: {
      label: "Why Choose Us",
      title: "Work You Can Trust",
      subtitle: "We don't just lay tiles, we elevate your space.",
      items: [
        { title: "Clean Workmanship", desc: "Every job done with order and tidiness." },
        { title: "Attention to Detail", desc: "Joints and edges finished with care." },
        { title: "Quality Finishing", desc: "A level result and beauty that lasts." },
        { title: "Reasonable Pricing", desc: "Fair rates without cutting on quality." },
        { title: "Reliable Scheduling", desc: "Committed to finishing work on time." },
      ],
    },
    gallery: {
      label: "Our Work",
      title: "A Look at Our Projects",
      subtitle: "Samples of tile, ceramic, porcelain and marble work.",
      note: "These images are placeholders and will soon be replaced with photos of real completed projects.",
      items: {
        bathroom: "Modern bathroom with marble-look tiles",
        floor: "Cream porcelain floor tile installation",
        wall: "Beige stone-look wall tiling",
        porcelain: "Hallway with glossy porcelain tiles",
        marble: "Marble flooring and staircase",
        kitchen: "Modern kitchen with stone-look tiles",
        interior: "Open, modern living space",
        finishing: "Precise finishing of a tile joint",
      },
      close: "Close",
      prev: "Previous",
      next: "Next",
    },
    area: {
      label: "Service Area",
      title: "We Serve Madinah",
      body: "We provide our services within Madinah and its nearby areas. Send your location details on WhatsApp.",
      badge: "Madinah, Saudi Arabia",
    },
    cta: {
      title: "Have a tile project in Madinah?",
      body: "Send your project details or photos on WhatsApp to discuss your requirements and request a quotation.",
      call: "Call Now",
      whatsapp: "WhatsApp",
    },
    contact: {
      label: "Contact",
      title: "Let's Talk About Your Project",
      subtitle: "Reach us easily by phone or WhatsApp.",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      locationLabel: "Location",
      location: "Madinah, Saudi Arabia",
      call: "Call Now",
      whatsapp: "Contact on WhatsApp",
    },
    footer: {
      tagline: "Tile and ceramic installation in Madinah.",
      navTitle: "Pages",
      contactTitle: "Contact",
      langTitle: "Language",
      rights: "All rights reserved.",
    },
    floating: {
      whatsapp: "WhatsApp",
      call: "Call",
    },
  },
}
