'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LanguageMenu from '../components/LanguageMenu';
import { useLanguage } from '../context/LanguageContext';

export default function Resources() {
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
          <Link href="/resources" className="text-[24px] text-black hover:text-gray-600">
            <div className="relative">
              {t('nav.resources')}
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FFC9F0]" />
            </div>
          </Link>
          <Link href="/follow" className="text-[24px] text-black hover:text-gray-600">{t('nav.followMe')}</Link>
          <LanguageMenu />
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-[120px] px-[141px] flex flex-col items-center">
        {/* Title Section */}
        <div className="w-[1157px] text-center mb-[110px]">
          <h1 className="text-[48px] font-semibold leading-[58px] mb-[23px]">
            {t('resources.title')}
          </h1>
        </div>

        {/* Resources List Section */}
        <div className="w-[1157px] flex gap-[60px]">
          {/* Share By Date Title */}
          <div className="flex flex-col items-start gap-4">
            <div className="bg-[#FFC9F0] shadow-[1px_1px_11.2px_rgba(0,0,0,0.08)] px-[16px] py-[4px] rounded-lg">
              <span className="font-handlee text-[32px]">Share By Date</span>
            </div>
            <svg width="40" height="67" viewBox="0 0 50 84" fill="none" xmlns="http://www.w3.org/2000/svg" 
                 className="transform rotate-[0deg] ml-[300px]">
              <path fillRule="evenodd" clipRule="evenodd" d="M27.9582 22.0597C28.4253 15.9768 30.5356 4.22792 37.2299 7.85071C41.4892 10.1567 45.1856 17.1981 44.2547 23.3072C43.0877 30.9637 36.3177 31.0245 31.7107 29.3261C30.3843 28.8377 29.0836 28.2063 27.806 27.4771C27.7778 25.6696 27.82 23.8606 27.9582 22.0597ZM0.584268 0.698754C6.40528 12.2721 14.7915 23.0192 24.4875 29.4508C24.6648 32.6235 25.0183 35.6118 25.4226 38.1079C27.7726 52.6084 34.1386 67.788 42.4954 77.9785C43.4089 79.0917 44.744 78.1546 45.0101 76.865C44.927 77.603 44.8369 78.3398 44.7397 79.0755C43.2681 78.6703 41.8925 77.9792 40.5439 76.9546C39.7201 76.3281 38.9851 75.3573 38.1387 74.8236C37.6346 74.5056 37.3566 74.8776 36.8437 74.4342C36.6801 74.2928 36.4166 74.4509 36.4992 74.7367C36.7255 75.5191 36.4915 76.1566 36.7433 76.9269C37.1395 78.1404 38.5278 79.5649 39.3048 80.3143C41.2399 82.1806 43.4985 83.3047 45.8555 83.8818C46.84 84.1224 47.6479 83.2366 47.893 82.0583C48.4944 79.17 48.7791 76.1709 48.911 73.1893C49.0248 70.606 49.2831 67.6808 48.5306 65.2431C47.9414 63.3313 45.8592 63.5354 45.498 65.5418C45.0569 67.99 45.4355 70.6595 45.3196 73.1742C45.27 74.2523 45.1734 75.3163 45.0608 76.3771C45.0547 76.0349 44.9702 75.684 44.7786 75.3509C38.5874 64.5902 32.4799 54.5789 29.5146 41.4408C28.7853 38.2143 28.2673 34.8927 28.0002 31.5405C28.2202 31.6583 28.4382 31.7895 28.6604 31.9041C35.9699 35.6499 47.5257 34.9303 47.5904 21.5131C47.6374 11.9898 38.874 -1.81684 30.9352 4.34444C25.8628 8.28082 24.3691 16.934 24.3701 25.2562C21.4252 23.1391 18.6223 20.621 15.9685 18.1801C10.4357 13.0928 5.43941 6.95251 0.942757 0.387047C0.764287 0.126925 0.427518 0.387601 0.584268 0.698754Z" fill="black"/>
            </svg>
          </div>

          {/* Resource Items */}
          <div className="w-[726px]">
            <div className="space-y-[69px] px-[34px] py-[30px]">
              <div className="flex gap-[31px]">
                <div className="w-[203px] py-[8px] text-center">
                  <span className="font-handlee text-[24px] leading-[36px]">March.30 2025</span>
                </div>
                <Link 
                  href="/resources/1"
                  className="relative flex-1 group"
                >
                  <div className="space-y-[6px] group-hover:opacity-80 transition-all">
                    <h3 className="text-[24px] font-semibold leading-[33.6px] text-black">Share Title1</h3>
                    <p className="text-[18px] leading-[25.2px] text-black/80 w-[418px]">
                      Sharing and building meaningful products
                    </p>
                  </div>
                  <div className="absolute inset-0" />
                </Link>
              </div>
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