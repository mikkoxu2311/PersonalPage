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

interface BlogPost {
  title: string;
  date: string;
  content: string;
}

interface BlogData {
  [key: string]: BlogPost;
}

// 示例博客数据
const blogData: BlogData = {
  '1': {
    title: 'My First Blog Post',
    date: 'March.30 2025',
    content: `
# My First Blog Post

## Introduction
This is my first blog post about my journey in product design.

### Code Example
\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

### Features
- Markdown support
- Syntax highlighting
- Responsive design

> This is a blockquote

For more information, visit [my website](/).
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    // 在实际应用中，这里应该从API获取博客数据
    setBlog(blogData[params.id as string]);
  }, [params.id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

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
          <Link href="/blogs" className="text-[24px] text-black hover:text-gray-600">
            <div className="relative">
              Blogs
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FFC9F0]" />
            </div>
          </Link>
          <Link href="/resources" className="text-[24px] text-black hover:text-gray-600">Resources</Link>
          <Link href="/follow" className="text-[24px] text-black hover:text-gray-600">Follow Me</Link>
          <button className="p-2">
            <Image src="/images/menu.svg" alt="Menu" width={24} height={24} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-[120px] px-[141px] pb-[64px]">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-8">
            <h1 className="text-[48px] font-semibold mb-4">{blog.title}</h1>
            <p className="text-[24px] text-gray-600 font-handlee">{blog.date}</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({className, children, inline, ...props}: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={tomorrow}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-[64px] px-[141px] border-t-2 border-black">
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