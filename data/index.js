import logoLight from "@/images/logo.png";
import logoDark from "@/images/logo2.png";

export const LogoImage = {
  light: logoLight,
  dark: logoDark,
};


export const NavLinks = [
  {
    name: "ホーム",
    url: "/",
    // subItems: [
    //   {
    //     name: "ホーム",
    //     url: "/"
    //   },
    //   {
    //     name: "ホーム 02",
    //     url: "/index-2"
    //   },
    //   {
    //     name: "ホーム 03",
    //     url: "/index-3"
    //   }
    // ]
  },
  {
    name: "会社概要",
    url: "/about",
  },
  {
    name: "事業内容",
    url: "/service",
    // subItems: [
    //   {
    //     name: "事業内容",
    //     url: "/service",
    //   },
    //   {
    //     name: "サービス詳細",
    //     url: "/service-details",
    //   },
    // ],
  },
  // {
  //   name: "実績",
  //   url: "/portfolio",
  //   subItems: [
  //     {
  //       name: "実績",
  //       url: "/portfolio",
  //     },
  //     {
  //       name: "実績詳細",
  //       url: "/portfolio-details",
  //     },
  //   ],
  // },
  // {
  //   name: "お知らせ",
  //   url: "/blog",
  //   subItems: [
  //     {
  //       name: "お知らせ",
  //       url: "/blog",
  //     },
  //     {
  //       name: "お知らせ 02",
  //       url: "/blog-2",
  //     },
  //     {
  //       name: "お知らせ 03",
  //       url: "/blog-3",
  //     },
  //     {
  //       name: "お知らせ詳細",
  //       url: "/blog-single",
  //     },
  //   ],
  // },
  // {
  //   name: "お問い合わせ",
  //   url: "/contact",
  // },
];

import sliderOne01 from "@/images/slider/1_1.jpg";
import sliderOne02 from "@/images/slider/1_2.jpg";

export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "AI × 戦略で、成果を最短距離に。",
    title:
      'Web広告の"いま"と"つぎ"を and で結び、ads を伸ばすパートナー──ands株式会社',
    button: {
      label: "詳しく見る",
      url: "/about",
    },
  },
  {
    image: sliderOne02,
    subTitle: "AI × 戦略で、成果を最短距離に。",
    title:
      'Web広告の"いま"と"つぎ"を and で結び、ads を伸ばすパートナー──ands株式会社',
    button: {
      label: "詳しく見る",
      url: "/about",
    },
  },
];

import sliderTwo01 from "@/images/slider/1_1.jpg";
import sliderTwo02 from "@/images/slider/1_1.jpg";
import sliderTwo03 from "@/images/slider/1_1.jpg";

export const SliderTwoData = [
  {
    image: sliderTwo01,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
  {
    image: sliderTwo02,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
  {
    image: sliderTwo03,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
];

import sliderThree01 from "@/images/slider/1_1.jpg";
import sliderThree02 from "@/images/slider/1_1.jpg";

export const SliderThreeData = [
  {
    image: sliderThree01,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
  {
    image: sliderThree02,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
];

export const ContactInfosBlock = {
  subTitle: "our offices",
  title: "offices near you",
  description:
    "We are committed to providing our customers with exceptional service while \n offering our employees the best training.",
};

export const ContactInfosList = [
  {
    title: "austin",
    infos: [
      {
        name: "22 Texas West Hills",
      },
      {
        name: "needhelp@meipaly.com",
      },
      {
        name: "666 888 000",
      },
    ],
  },
  {
    title: "boston",
    infos: [
      {
        name: "5 Federal Street Boston",
      },
      {
        name: "needhelp@meipaly.com",
      },
      {
        name: "666 888 000",
      },
    ],
  },
  {
    title: "new york",
    infos: [
      {
        name: "8th Broklyn New York",
      },
      {
        name: "needhelp@meipaly.com",
      },
      {
        name: "666 888 000",
      },
    ],
  },
  {
    title: "baltimore",
    infos: [
      {
        name: "3 Lombabr 50 baltimore",
      },
      {
        name: "needhelp@meipaly.com",
      },
      {
        name: "666 888 000",
      },
    ],
  },
];

export const ContactFormTitle = {
  subTitle: "Contact with us",
  title: "write us a message",
  description:
    "We are committed to providing our customers with exceptional service while \n      offering our employees the best training. ",
};

import blogImage1 from "@/images/blog/1.jpg";
import blogImage2 from "@/images/blog/2.jpg";
import blogImage3 from "@/images/blog/3.jpg";
import blogImage4 from "@/images/blog/4.jpg";
import blogImage5 from "@/images/blog/5.jpg";
import blogImage6 from "@/images/blog/6.jpg";

export const BlogData = [
  {
    title: "basic rules of running web agency business",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage1,
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2,
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3,
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4,
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5,
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6,
  },
];

import blogImageTwo1 from "@/images/blog/14.jpg";
import blogImageTwo2 from "@/images/blog/15.jpg";

export const BlogTwoData = [
  {
    title:
      "Dynamically procrastinate unique vortals with global best practices.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo1,
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2,
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3,
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4,
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5,
  },
  {
    title:
      "Holisticly conceptualize backend scenarios via accurate technologies.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo2,
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6,
  },
];

export const BlogHomeSection = {
  subTitle: "お知らせ・記事",
  title: "最新のお知らせ",
  text: "AIとデジタルマーケティングに関する最新の情報をお届けします。",
};

import blogS1 from "@/images/blog/11.jpg";
import blogS2 from "@/images/blog/12.jpg";
import blogS3 from "@/images/blog/13.jpg";

export const BlogSidebarPost = [
  {
    title: "basic rules of running web agency",
    image: blogS1,
    url: "/blog-single",
  },
  {
    title: "basic rules of running web agency",
    image: blogS2,
    url: "/blog-single",
  },
  {
    title: "basic rules of running web agency",
    image: blogS3,
    url: "/blog-single",
  },
];

import commentImage1 from "@/images/blog/9.jpg";
import commentImage2 from "@/images/blog/10.jpg";

export const BlogComments = [
  {
    image: commentImage1,
    name: "David Martin",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.",
  },
  {
    image: commentImage2,
    name: "Jessica Brown",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.",
  },
];

import portfolio01 from "@/images/portfolio/1.jpg";
import portfolio02 from "@/images/portfolio/2.jpg";
import portfolio03 from "@/images/portfolio/3.jpg";
import portfolio04 from "@/images/portfolio/4.jpg";
import portfolio05 from "@/images/portfolio/5.jpg";
import portfolio06 from "@/images/portfolio/6.jpg";

export const PortfolioData = [
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio01,
    url: "/portfolio-details",
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio02,
    url: "/portfolio-details",
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio03,
    url: "/portfolio-details",
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio04,
    url: "/portfolio-details",
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio05,
    url: "/portfolio-details",
  },
  {
    title: "Design Styles",
    categories: ["all", "graphic"],
    image: portfolio06,
    url: "/portfolio-details",
  },
];

export const PortfolioFilters = [
  { name: "all" },
  { name: "graphic" },
  { name: "branding" },
  { name: "marketing" },
  { name: "logos" },
];

import portfolioD01 from "@/images/portfolio/7.jpg";
import portfolioD02 from "@/images/portfolio/8.jpg";

export const PortfolioDetailsData = {
  gallery: [{ image: portfolioD01 }, { image: portfolioD02 }],
  title: "Design Styles",
  text: " Tincidunt elit magnis nulla facilisis sagittis sapien nunc amet ultrices dolores sit ipsum velit purus aliquet massa fringilla leo orci. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci dolors sit amet elit amet. ",
  client: "Jessica Brown",
  categories: [
    {
      name: "Graphic,",
      url: "#",
    },
    {
      name: "Illustrations,",
      url: "#",
    },
  ],
  date: "8 Nov, 2018",
  socials: [
    {
      name: "Facebook",
      url: "#",
    },
    {
      name: "Twitter",
      url: "#",
    },
    {
      name: "Linkedin",
      url: "#",
    },
  ],
};

export const ServicePostData = [
  {
    title: "Modren Design",
    text: "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-settings",
    url: "/service-details",
  },
  {
    title: "Digital products",
    text: "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-transfer",
    url: "/service-details",
  },
  {
    title: "Marketing Strategy",
    text: "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-pie-chart",
    url: "/service-details",
  },
];

export const ServiceHomeTwoData = {
  subTitle: "welcome to smart meipaly web agency",
  title: "We design digital products that \n help grow businesses.",
  text: "We are committed to providing our customers with exceptional service while\n offering our employees the best training.",
};

export const ServiceHomeThreeData = {
  subTitle: "Services we are offering",
  title: "Our Services",
  text: "We are committed to providing our customers with exceptional service while\n offering our employees the best training.",
};

export const ServicePostTwoData = {
  sectionContent: {
    title: "BUSINESS │ 事業内容",
    subTitle: "事業領域	概要",
    text: ["インターネット広告代理店事業", "比較メディアサイト事業"],
  },
  posts1: [
    {
      title: "主要プラットフォーム（Google, Meta, X, TikTok など）の運用型広告",
      iconName: "mei-web-design",
      url: "/service-details",
    },
    {
      title: "AI予測モデルによる入札・クリエイティブ最適化",
      iconName: "mei-computer-graphic",
      url: "/service-details",
    },
    {
      title: "コンバージョンAPI／GTM 連携など高度な計測・トラッキング支援",
      iconName: "mei-development-1",
      url: "/service-details",
    },
  ],
  posts2: [
    {
      title: "金融・EC・サブスクリプション領域の比較サイトを自社運営",
      iconName: "mei-web-design",
      url: "/service-details",
    },
    {
      title:
        "SEO／コンテンツマーケティングを組み合わせたリードジェネレーション",
      iconName: "mei-computer-graphic",
      url: "/service-details",
    },
    {
      title: "獲得データを広告運用へフィードバックし、LTV 最大化を実現",
      iconName: "mei-development-1",
      url: "/service-details",
    },
  ],
};

import serviceOne01 from "@/images/home_1/6.jpg";
import serviceOne02 from "@/images/home_1/7.jpg";
import serviceOne03 from "@/images/home_1/8.jpg";

export const ServicePostThreeData = {
  sectionContent: {
    title: "Let’s create something",
    subTitle: "what we do",
    text: "We are committed to providing our customers with exceptional service \n while offering our employees the best training.",
  },
  posts: [
    {
      title: "web development",
      image: serviceOne01,
      url: "/service-details",
    },
    {
      title: "digital marketing",
      image: serviceOne02,
      url: "/service-details",
    },
    {
      title: "product branding",
      image: serviceOne03,
      url: "/service-details",
    },
  ],
};

export const FunfactData = [
  {
    title: "All-in Data",
    countNumber: 100,
  },
  {
    title: "Next Standard",
    countNumber: 100,
  },
  {
    title: "Deep Partnership",
    countNumber: 100,
  },
  // {
  //   title: "AI × 戦略",
  //   countNumber: 100
  // }
];

import trustClient01 from "@/images/home_1/4.jpg";

export const TrustClientData = {
  image: trustClient01,
  title: "MESSAGE │ 代表メッセージ",
  text: '"広告は、費用ではなく投資であるべきです。andsはAIを活用し、投資対効果を科学することで、クライアントの成長を加速させます。"\n\n— 代表取締役 天野 真夢',
  url: "/about",
};

import ClientCarousel01 from "@/images/client/1.png";
import ClientCarousel02 from "@/images/client/2.png";
import ClientCarousel03 from "@/images/client/3.png";
import ClientCarousel04 from "@/images/client/4.png";
import ClientCarousel05 from "@/images/client/5.png";

export const ClientCarouselData = {
  sectionContent: {
    title: "パートナー企業",
    subTitle: "お取引先",
    text: "多くの企業様にご支援いただき、AIとデジタルマーケティングの力で成長をサポートしています。",
  },
  items: [
    {
      url: "#",
      image: ClientCarousel01,
    },
    {
      url: "#",
      image: ClientCarousel02,
    },
    {
      url: "#",
      image: ClientCarousel03,
    },
    {
      url: "#",
      image: ClientCarousel04,
    },
    {
      url: "#",
      image: ClientCarousel05,
    },
  ],
};

import aboutOne01 from "@/images/about/1.jpg";
import aboutOne02 from "@/images/about/2.jpg";

export const AboutOneData = {
  sectionContent: {
    title: "build better website alot quicker with meipaly agency",
    subTitle: "get to know us",
  },
  gallery: [aboutOne01, aboutOne02],
  counter: {
    title: "Company Started",
    number: 1990,
  },
};

import team01 from "@/images/team/1.jpg";
import team02 from "@/images/team/2.jpg";
import team03 from "@/images/team/3.jpg";
import team04 from "@/images/team/4.jpg";
import team05 from "@/images/team/5.jpg";

export const TeamOneData = {
  sectionContent: {
    title: "チーム",
    subTitle: "私たちのチーム",
    text: "AIとデジタルマーケティングの専門家が集まり、クライアントの成功をサポートします。",
  },
  posts: [
    {
      image: team01,
      name: "天野 真夢",
      designation: "代表取締役",
      url: "#",
      socials: [
        {
          name: "LinkedIn",
          url: "#",
        },
        {
          name: "Twitter",
          url: "#",
        },
      ],
    },
    {
      image: team02,
      name: "田中 太郎",
      designation: "クリエイティブディレクター",
      url: "#",
      socials: [
        {
          name: "LinkedIn",
          url: "#",
        },
        {
          name: "Twitter",
          url: "#",
        },
      ],
    },
    {
      image: team03,
      name: "佐藤 花子",
      designation: "マーケティングマネージャー",
      url: "#",
      socials: [
        {
          name: "LinkedIn",
          url: "#",
        },
        {
          name: "Twitter",
          url: "#",
        },
      ],
    },
    {
      image: team04,
      name: "鈴木 次郎",
      designation: "AIエンジニア",
      url: "#",
      socials: [
        {
          name: "LinkedIn",
          url: "#",
        },
        {
          name: "GitHub",
          url: "#",
        },
      ],
    },
    {
      image: team05,
      name: "高橋 美咲",
      designation: "データアナリスト",
      url: "#",
      socials: [
        {
          name: "LinkedIn",
          url: "#",
        },
        {
          name: "Twitter",
          url: "#",
        },
      ],
    },
  ],
};

import video01 from "@/images/about/3.jpg";

export const VideoOneData = {
  sectionContent: {
    title: "AIとデジタルマーケティングで、\nビジネスの可能性を拡張する",
    subTitle: "私たちのアプローチ",
    text: "AIと人間の知見を掛け合わせ、革新的なデジタルマーケティングソリューションを提供します。データドリブンな戦略で、クライアントの成長を加速させます。",
  },
  video: {
    image: video01,
    ID: "y2Eqx6ys1hQ",
    title: "動画を見る",
  },
};

export const SubscribeFormData = {
  sectionContent: {
    title: "お問い合わせ",
    subTitle: "最新の情報をお届けします",
  },
};

import testimonial01 from "@/images/home_1/1.jpg";
import testimonial02 from "@/images/home_1/1.jpg";
import testimonial03 from "@/images/home_1/1.jpg";

export const TestimonialsOneData = {
  sectionContent: {
    subTitle: "お客様の声",
    title: "クライアントの声",
  },
  posts: [
    {
      name: "田中 一郎",
      designation: "マーケティングディレクター",
      image: testimonial01,
      content:
        "ands株式会社のAIを活用した広告運用により、ROASが大幅に改善されました。データに基づいた戦略立案と、クリエイティブの最適化により、投資対効果が明確に向上しています。",
      date: "2024年12月",
    },
    {
      name: "佐藤 美咲",
      designation: "EC事業部長",
      image: testimonial02,
      content:
        "比較メディアサイト事業と広告運用の連携により、LTVが最大化されました。ワンストップでのサービス提供により、効率的に事業成長を実現できています。",
      date: "2024年11月",
    },
    {
      name: "鈴木 健太",
      designation: "スタートアップCEO",
      image: testimonial03,
      content:
        "創業期からands株式会社にサポートしていただき、CACを抑えながら安定した成長を実現できました。AIと人間の知見の組み合わせが素晴らしいです。",
      date: "2024年10月",
    },
  ],
};

import featureTab01 from "@/images/home_1/1.jpg";
import featureTab02 from "@/images/home_1/1.jpg";
import featureTab03 from "@/images/home_1/1.jpg";

export const FeatureTabData = {
  sectionContent: {
    title: "why choose us",
    subTitle: "our benefits",
    text: "We are committed to providing our customers with exceptional service while\n offering our employees the best training.",
  },
  posts: [
    {
      title: "Latest technology",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab01,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock",
        },
        {
          item: "Scalability of up to 500 employees per time clock",
        },
        {
          item: "The ability to connect up to 32 time clocks",
        },
        {
          item: "Employee self-enrollment",
        },
        {
          item: "Payroll integration",
        },
        {
          item: "Built-in backup camera to verify failed punches",
        },
      ],
    },
    {
      title: "Awesome Support",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab02,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock",
        },
        {
          item: "Scalability of up to 500 employees per time clock",
        },
        {
          item: "The ability to connect up to 32 time clocks",
        },
        {
          item: "Employee self-enrollment",
        },
        {
          item: "Payroll integration",
        },
        {
          item: "Built-in backup camera to verify failed punches",
        },
      ],
    },
    {
      title: "1 Click demo install",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab03,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock",
        },
        {
          item: "Scalability of up to 500 employees per time clock",
        },
        {
          item: "The ability to connect up to 32 time clocks",
        },
        {
          item: "Employee self-enrollment",
        },
        {
          item: "Payroll integration",
        },
        {
          item: "Built-in backup camera to verify failed punches",
        },
      ],
    },
  ],
};

export const ParallaxOneData = {
  iconName: "mei-team",
  title: "ビジネスにおける素晴らしい成果は、一人では決して達成されません。",
  specialText: "チームの力で実現されます。",
  text: "私たちは、AIと人間の知見を掛け合わせ、チームとして最高のサービスを提供します。",
};

export const PortfolioHomeData = {
  sectionContent: {
    title: "実績紹介",
    subTitle: "私たちの実績",
    text: "AIとデジタルマーケティングの力を活用し、クライアントの成長を加速させた実績をご紹介します。",
  },
};

import video02 from "@/images/home_1/3.jpg";

export const VideoTwoData = {
  sectionContent: {
    title: "デジタル体験",
    subTitle: "私たちの取り組み",
    text: "AIと人間の知見を掛け合わせ、革新的なデジタルマーケティングソリューションを提供します。",
  },
  video: {
    title: "動画を見る",
    ID: "y2Eqx6ys1hQ",
    image: video02,
  },
};

import aboutTwo01 from "@/images/home_1/2.jpg";
import aboutTwo02 from "@/images/home_1/1.jpg";

export const AboutTwoData = {
  sectionContent: {
    title: "MISSION │ 私たちの使命",
    subTitle:
      "テクノロジーとクリエイティブで、あらゆるビジネスの可能性を拡張する。",
    text: "私たちは、AIと人間の知見を掛け合わせ、企業とユーザー双方にとって価値ある体験を創出します。結果だけでなく、その過程までも革新し、デジタルマーケティングの新しいスタンダードを築くことが使命です。",
  },
  button: {
    label: "詳しく見る",
    url: "#",
  },
  gallery: [aboutTwo01, aboutTwo02],
};

import aboutCompany01 from "@/images/home_1/11.jpg";
import aboutCompany02 from "@/images/home_1/12.jpg";

export const AboutCompanyData = {
  sectionContent: {
    title: "COMPANY INFO │ 会社概要",
    subTitle: "",
    text: "会社名	ands株式会社\n所在地	〒107-0061 東京都港区北青山１丁目３－３三橋ビル３階\n設立　	2025年6月\n代表者	代表取締役 天野 真夢\n事業内容	インターネット広告代理店事業／比較メディアサイト事業",
  },
  button: {
    label: "詳しく見る",
    url: "/about",
  },
  gallery: [aboutCompany02, aboutCompany01],
};

import featureTwo01 from "@/images/home_1/5.jpg";

export const FeatureTwoData = {
  sectionContent: {
    title: "STRENGTH │ 選ばれる理由",
    // subTitle: "クリエイティブ・ラボ・戦略設計の深度・ワンストップ実行力",
    subTitle: "",
    // text:
    //   "生成AIとクリエイティブディレクターのハイブリッド体制で、A/Bテストを高速回転し、勝ちパターンを量産します。"
    text: "",
  },
  posts: [
    {
      title: "クリエイティブ・ラボ",
      text: "生成AIとクリエイティブディレクターのハイブリッド体制。A/Bテストを高速回転し、勝ちパターンを量産。",
    },
    {
      title: "戦略設計の深度",
      text: 'マーケティングファネル全体を捉えたメディアプランニング。事業KPI（売上・利益・CAC）から逆算する"逆算型"グロース支援。',
    },
    {
      title: "ワンストップ実行力",
      text: "分析 → 戦略立案 → クリエイティブ制作 → 運用改善を一気通貫。社内専任チーム＋外部アライアンスにより、スピードと品質を両立。",
    },
  ],
  image: {
    text: "AI × 戦略で、\n成果を最短距離に。",
    path: featureTwo01,
  },
};

export const CallToActionTwoData = [
  {
    label: "実績を見る",
    url: "/portfolio",
  },
  {
    label: "無料相談を申し込む",
    url: "/contact",
  },
];
