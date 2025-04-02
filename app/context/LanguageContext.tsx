'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface Translations {
  [key: string]: string;
}

interface TranslationsRecord {
  en: Translations;
  zh: Translations;
}

// 英文和中文的翻译对象
const translations: TranslationsRecord = {
  en: {
    // 导航
    'nav.blogs': 'Blogs',
    'nav.resources': 'Resources',
    'nav.followMe': 'Follow Me',
    
    // 首页
    'home.hero.title': 'Exploring the Intersection of Learning, AI & Technology, and Personal Evolution',
    'home.hero.description': 'Help you build efficient learning frameworks and consistently enhance your cognitive and thinking abilities. Follow me on any social platform you prefer!',
    'home.whatIDo': 'What i do?',
    'home.personalGrowth': 'Personal Growth & Efficiency',
    'home.blogEssay': 'Blog Essay',
    'home.thrive': 'Thrive in the age of AI',
    'home.resources': 'Resources',
    'home.buildThings': 'Build Things',
    'home.projects': 'Projects',
    'home.currentlyWorkingOn': 'Currently Working on',
    'home.featuredVideo': 'Featured video - Youtube Channel',
    'home.creator': 'Creator',
    'home.lifecode': 'LifeCode. AI Podcast',
    'home.hosting': 'Hosting',
    'home.aiForScience': 'AI for Science Community',
    'home.curator': 'Curator',
    'home.buildingThings': 'Building things that makes life better',
    'home.workExperience': 'Work Experience',
    'home.workDescription': 'Mainly focusing on data and insight for 8 years',
    'home.contactHere': 'Contact here',
    'home.contactDescription': 'Have any problems? just say me Hi.',
    'home.name': 'Name',
    'home.namePlace': 'What should I call you？',
    'home.yourEmail': 'Your Email',
    'home.aboutProject': 'About Project',
    'home.projectPlace': 'I want to discuss about .......',
    'home.sendHere': 'Send Here',
    'footer.copyright': 'Copyright. Portfolio 2025',
    
    // Follow页面
    'follow.title': 'Follow Me on Social Media',
    'follow.xiaohongshu': 'Xiaohongshu',
    'follow.xiaohongshu.desc': 'Follow me on Xiaohongshu for product design stories and daily life.',
    'follow.wechat': 'WeChat',
    'follow.wechat.desc': 'Connect with me on WeChat for design and product discussions.',
    'follow.youtube': 'YouTube',
    'follow.youtube.desc': 'Watch my videos on product design, career insights and tutorials.',
    'follow.twitter': 'Twitter',
    'follow.twitter.desc': 'Follow my tweets about design trends, tech updates and quick thoughts.',
    'follow.bilibili': 'Bilibili',
    'follow.bilibili.desc': 'Watch my Chinese content about design process and career development.',
    'follow.linkedin': 'LinkedIn',
    'follow.linkedin.desc': 'Connect professionally for design collaborations and career opportunities.',
    'follow.reachOut': 'Feel free to reach out through any of these platforms!',
    'follow.response': 'I usually respond within 24 hours.',
    
    // Resources页面
    'resources.title': 'Share helpful Tools and Insights from Pioneers',
    
    // Blogs页面
    'blogs.title': 'My Writings about … Everything',
  },
  zh: {
    // 导航
    'nav.blogs': '博客文章',
    'nav.resources': '资料分享',
    'nav.followMe': '关注我',
    
    // 首页
    'home.hero.title': '探索AI提效 认知进化<br/> 终身学习 Life-long Learner<br/> 深度思考｜保持好奇',
    'home.hero.description': '分享AI提效探索和不断学习的心得，帮助你构建高效学习框架，持续提升认知于思维能力。<br/> <br/>欢迎在任何你喜欢的社交平台上关注我~',
    'home.whatIDo': '你可以找到',
    'home.personalGrowth': '个人成长<br/>& 效率提升',
    'home.blogEssay': '🖊️博客文章',
    'home.thrive': '在AI时代脱颖而出',
    'home.resources': '📃有用的资料库',
    'home.buildThings': '创造更多产品',
    'home.projects': '📱Web/App',
    'home.currentlyWorkingOn': '当前在做',
    'home.featuredVideo': 'YouTube频道',
    'home.creator': '创作者',
    'home.lifecode': 'LifeCode AI播客',
    'home.hosting': '主持/主编',
    'home.aiForScience': 'AI4Science科学社区',
    'home.curator': '策划/开发',
    'home.buildingThings': '构建更多产品',
    'home.workExperience': '工作经历',
    'home.workDescription': '专注于从数据中获得洞见并制定策略',
    'home.contactHere': '在这里联系',
    'home.contactDescription': '有任何问题？只需向我打个招呼。',
    'home.name': '姓名',
    'home.namePlace': '我该怎么称呼你？',
    'home.yourEmail': '你的邮箱',
    'home.aboutProject': '关于项目',
    'home.projectPlace': '我想讨论关于.......',
    'home.sendHere': '发送',
    'footer.copyright': '版权所有. 作品集 2025',
    
    // Follow页面
    'follow.title': '在社交媒体上关注我',
    'follow.xiaohongshu': '小红书',
    'follow.xiaohongshu.desc': '在小红书上关注我，获取产品设计故事和日常生活分享。',
    'follow.wechat': '微信',
    'follow.wechat.desc': '通过微信与我连接，讨论设计和产品相关话题。',
    'follow.youtube': 'YouTube',
    'follow.youtube.desc': '观看我关于产品设计、职业洞察和教程的视频。',
    'follow.twitter': 'Twitter',
    'follow.twitter.desc': '关注我的推文，了解设计趋势、技术更新和快速思考。',
    'follow.bilibili': '哔哩哔哩',
    'follow.bilibili.desc': '观看我的中文内容，关于设计过程和职业发展。',
    'follow.linkedin': '领英',
    'follow.linkedin.desc': '专业连接，探讨设计合作和职业机会。',
    'follow.reachOut': '欢迎通过这些平台与我联系！',
    'follow.response': '我通常会在24小时内回复。',
    
    // Resources页面
    'resources.title': '分享先驱者的有用工具和见解',
    
    // Blogs页面
    'blogs.title': '博客',
  }
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  // 从本地存储中获取语言设置，默认为英文
  const [language, setLanguageState] = useState<Language>('en');
  
  // 在组件挂载时从localStorage读取语言设置
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
        setLanguageState(savedLanguage);
      }
    }
  }, []);
  
  // 设置语言并保存到localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };
  
  // 翻译函数
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定义hook，方便组件使用语言上下文
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 