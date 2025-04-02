'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LanguageMenu from '../components/LanguageMenu';
import { useLanguage } from '../context/LanguageContext';

export default function Follow() {
  const { t, language } = useLanguage();
  
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
          <Link href="/blogs" className="text-[24px] text-black hover:text-gray-600">{t('nav.blogs')}</Link>
          <Link href="/resources" className="text-[24px] text-black hover:text-gray-600">{t('nav.resources')}</Link>
          <Link href="/follow" className="text-[24px] text-black hover:text-gray-600">
            <div className="relative">
              {t('nav.followMe')}
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FFC9F0]" />
            </div>
          </Link>
          <LanguageMenu />
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-[120px] px-[141px] flex flex-col items-center">
        {/* Title Section */}
        <div className="w-[1157px] text-center mb-[110px]">
          <h1 className="text-[48px] font-semibold leading-[58px] mb-[23px]">
            {t('follow.title')}
          </h1>
        </div>

        {/* Social Media Links */}
        <div className="w-[1157px] flex flex-col items-center gap-[60px]">
          <div className="flex flex-col items-center gap-[50px] w-full">
            {/* 社交媒体平台展示 */}
            <div className="grid grid-cols-3 gap-[50px] w-full">
              {/* 小红书 */}
              <div className="flex flex-col items-center gap-[20px] p-[30px] rounded-lg border-2 border-black hover:bg-black/5 transition-all">
                <a href="https://www.xiaohongshu.com/user/profile/64d772580000000001005a9b" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex flex-col items-center gap-[15px] w-full"
                >
                  <div className="!block relative !w-[80px] !h-[80px] !cursor-pointer group">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <Image 
                        src="/images/xiaohongshu.svg" 
                        alt="小红书" 
                        width={60} 
                        height={60}
                        style={{ pointerEvents: 'none' }}
                        className="!pointer-events-none"
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-[24px] font-semibold">{t('follow.xiaohongshu')}</h3>
                  <p className="text-[16px] text-center text-black/80">{t('follow.xiaohongshu.desc')}</p>
                </a>
              </div>
              
              {/* 微信 */}
              <div className="flex flex-col items-center gap-[20px] p-[30px] rounded-lg border-2 border-black hover:bg-black/5 transition-all">
                <div 
                  className="flex flex-col items-center gap-[15px] w-full cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    alert("coming soon");
                  }}
                >
                  <div className="!block relative !w-[80px] !h-[80px] !cursor-pointer group">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <Image 
                        src="/images/wechat.svg" 
                        alt="微信" 
                        width={60} 
                        height={60}
                        style={{ pointerEvents: 'none' }}
                        className="!pointer-events-none"
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-[24px] font-semibold">{t('follow.wechat')}</h3>
                  <p className="text-[16px] text-center text-black/80">{t('follow.wechat.desc')}</p>
                </div>
              </div>
              
              {/* YouTube */}
              <div className="flex flex-col items-center gap-[20px] p-[30px] rounded-lg border-2 border-black hover:bg-black/5 transition-all">
                <a href="https://www.youtube.com/@MikkoXu24" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex flex-col items-center gap-[15px] w-full"
                >
                  <div className="!block relative !w-[80px] !h-[80px] !cursor-pointer group">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <Image 
                        src="/images/youtube.svg" 
                        alt="YouTube" 
                        width={60} 
                        height={60}
                        style={{ pointerEvents: 'none' }}
                        className="!pointer-events-none"
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-[24px] font-semibold">{t('follow.youtube')}</h3>
                  <p className="text-[16px] text-center text-black/80">{t('follow.youtube.desc')}</p>
                </a>
              </div>
              
              {/* Twitter */}
              <div className="flex flex-col items-center gap-[20px] p-[30px] rounded-lg border-2 border-black hover:bg-black/5 transition-all">
                <a href="https://x.com/mikkooxu" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex flex-col items-center gap-[15px] w-full"
                >
                  <div className="!block relative !w-[80px] !h-[80px] !cursor-pointer group">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <Image 
                        src="/images/twitter.svg" 
                        alt="Twitter" 
                        width={60} 
                        height={60}
                        style={{ pointerEvents: 'none' }}
                        className="!pointer-events-none"
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-[24px] font-semibold">{t('follow.twitter')}</h3>
                  <p className="text-[16px] text-center text-black/80">{t('follow.twitter.desc')}</p>
                </a>
              </div>
              
              {/* 哔哩哔哩 */}
              <div className="flex flex-col items-center gap-[20px] p-[30px] rounded-lg border-2 border-black hover:bg-black/5 transition-all">
                <a href="https://space.bilibili.com/181697029" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex flex-col items-center gap-[15px] w-full"
                >
                  <div className="!block relative !w-[80px] !h-[80px] !cursor-pointer group">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <Image 
                        src="/images/bilibili.svg" 
                        alt="哔哩哔哩" 
                        width={60} 
                        height={60}
                        style={{ pointerEvents: 'none' }}
                        className="!pointer-events-none"
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-[24px] font-semibold">{t('follow.bilibili')}</h3>
                  <p className="text-[16px] text-center text-black/80">{t('follow.bilibili.desc')}</p>
                </a>
              </div>
              
              {/* LinkedIn */}
              <div className="flex flex-col items-center gap-[20px] p-[30px] rounded-lg border-2 border-black hover:bg-black/5 transition-all">
                <a href="https://www.linkedin.com/in/mikko-xu-a86745244/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex flex-col items-center gap-[15px] w-full"
                >
                  <div className="!block relative !w-[80px] !h-[80px] !cursor-pointer group">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <Image 
                        src="/images/linkedin.svg" 
                        alt="领英" 
                        width={60} 
                        height={60}
                        style={{ pointerEvents: 'none' }}
                        className="!pointer-events-none"
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-[24px] font-semibold">{t('follow.linkedin')}</h3>
                  <p className="text-[16px] text-center text-black/80">{t('follow.linkedin.desc')}</p>
                </a>
              </div>
            </div>
            
            <div className="mt-[50px] text-center">
              <p className="text-[20px] text-black/70">{t('follow.reachOut')}</p>
              <p className="text-[18px] text-black/60 mt-[10px]">{t('follow.response')}</p>
            </div>
          </div>
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
            <div className="flex gap-[24px] items-center">
              <a href="https://www.xiaohongshu.com/user/profile/64d772580000000001005a9b" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="!block relative !w-[48px] !h-[48px] !cursor-pointer group"
                 style={{ 
                   touchAction: 'manipulation',
                   WebkitTapHighlightColor: 'transparent'
                 }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <Image 
                    src="/images/xiaohongshu.svg" 
                    alt="小红书" 
                    width={32} 
                    height={32}
                    style={{ pointerEvents: 'none' }}
                    className="!pointer-events-none"
                    priority
                  />
                </div>
              </a>
              <a 
                 className="!block relative !w-[48px] !h-[48px] !cursor-pointer group"
                 style={{ 
                   touchAction: 'manipulation',
                   WebkitTapHighlightColor: 'transparent'
                 }}
                 onClick={(e) => {
                   e.preventDefault();
                   e.stopPropagation();
                   alert("coming soon");
                 }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <Image 
                    src="/images/wechat.svg" 
                    alt="微信" 
                    width={32} 
                    height={32}
                    style={{ pointerEvents: 'none' }}
                    className="!pointer-events-none"
                    priority
                  />
                </div>
              </a>
              <a href="https://www.youtube.com/@MikkoXu24" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="!block relative !w-[48px] !h-[48px] !cursor-pointer group"
                 style={{ 
                   touchAction: 'manipulation',
                   WebkitTapHighlightColor: 'transparent'
                 }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <Image src="/images/youtube.svg" alt="YouTube" width={32} height={32} style={{ pointerEvents: 'none' }} className="!pointer-events-none" priority />
                </div>
              </a>
              <a href="https://x.com/mikkooxu" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="!block relative !w-[48px] !h-[48px] !cursor-pointer group"
                 style={{ 
                   touchAction: 'manipulation',
                   WebkitTapHighlightColor: 'transparent'
                 }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <Image src="/images/twitter.svg" alt="Twitter" width={32} height={32} style={{ pointerEvents: 'none' }} className="!pointer-events-none" priority />
                </div>
              </a>
              <a href="https://space.bilibili.com/181697029" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="!block relative !w-[48px] !h-[48px] !cursor-pointer group"
                 style={{ 
                   touchAction: 'manipulation',
                   WebkitTapHighlightColor: 'transparent'
                 }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <Image src="/images/bilibili.svg" alt="哔哩哔哩" width={32} height={32} style={{ pointerEvents: 'none' }} className="!pointer-events-none" priority />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mikko-xu-a86745244/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="!block relative !w-[48px] !h-[48px] !cursor-pointer group"
                 style={{ 
                   touchAction: 'manipulation',
                   WebkitTapHighlightColor: 'transparent'
                 }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-lg" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <Image src="/images/linkedin.svg" alt="领英" width={32} height={32} style={{ pointerEvents: 'none' }} className="!pointer-events-none" priority />
                </div>
              </a>
            </div>
            <p className="text-[24px]">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 