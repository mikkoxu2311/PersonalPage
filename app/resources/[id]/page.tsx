'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLanguage } from '../../context/LanguageContext';

interface ResourceData {
  title: string;
  subtitle: string;
  content: string;
  date: string;
}

export default function ResourceDetail() {
  const params = useParams();
  const [resource, setResource] = useState<ResourceData>({
    title: `Share Title${params.id}`,
    subtitle: 'Sharing and building meaningful products',
    content: `
# Share Title${params.id}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. 

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.

## Section Title

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. 

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
    `,
    date: 'March.30 2025'
  });
  const { language } = useLanguage();

  return (
    <main className="relative w-[1440px] min-h-screen mx-auto bg-white overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="black" fillOpacity="0.1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Left Border Line */}
      <div className="absolute left-[100px] top-0 h-full border-l-2 border-black" />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[80px] px-[141px] bg-white/80 backdrop-blur-sm border-b-2 border-black">
        <Link href="/" className="flex items-center gap-[15px]">
          <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
          <span className={`text-[36px] text-black ${language === 'zh' ? 'font-hannotate' : 'font-handlee'}`}>
            {language === 'zh' ? '许多肉' : 'Mikko'}
          </span>
        </Link>
        <div className="flex items-center gap-[32px]">
          <Link href="/blogs" className="text-[24px] text-black hover:text-gray-600">Blogs</Link>
          <Link href="/resources" className="text-[24px] text-black hover:text-gray-600">
            <div className="relative">
              Resources
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FFC9F0]" />
            </div>
          </Link>
          <Link href="/follow" className="text-[24px] text-black hover:text-gray-600">Follow Me</Link>
          <button className="p-2">
            <Image src="/images/menu.svg" alt="Menu" width={24} height={24} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-[120px] px-[141px] flex flex-col items-center">
        {/* Title Section */}
        <div className="w-[1157px] mb-[57px]">
          <h1 className="text-[48px] font-semibold leading-[58px] mb-[23px]">
            {resource.title}
          </h1>
          <p className="text-[18px] leading-[25.2px] text-black/80">
            {resource.subtitle}
          </p>
        </div>

        {/* Content Section */}
        <div className="w-[1157px] prose prose-lg prose-headings:font-semibold prose-p:text-[20px] prose-p:leading-[34px] prose-p:text-black/80">
          <ReactMarkdown>{resource.content}</ReactMarkdown>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-[145px] py-[64px] px-[141px] border-t-2 border-black">
        <div className="flex justify-between items-center max-w-[1157px] mx-auto">
          <Link href="/" className="flex items-center gap-[15px]">
            <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
            <span className={`text-[36px] text-black ${language === 'zh' ? 'font-hannotate' : 'font-handlee'}`}>
              {language === 'zh' ? '许多肉' : 'Mikko'}
            </span>
          </Link>
          
          <div className="flex flex-col items-center gap-[39px] w-[495px] ml-[200px]">
            <div className="flex gap-[24px]">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/images/xiaohongshu.svg" alt="Xiaohongshu" width={32} height={32} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/images/wechat.svg" alt="WeChat" width={32} height={32} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/images/youtube.svg" alt="YouTube" width={32} height={32} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/images/twitter.svg" alt="Twitter" width={32} height={32} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/images/bilibili.svg" alt="Bilibili" width={32} height={32} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/images/linkedin.svg" alt="LinkedIn" width={32} height={32} />
              </a>
            </div>
            <p className="text-[24px]">Copyright. Portfolio 2025</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 