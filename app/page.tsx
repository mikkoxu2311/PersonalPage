'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import LanguageMenu from './components/LanguageMenu';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <main className="relative w-[1440px] min-h-[4069px] mx-auto bg-white overflow-x-hidden">
      {/* Vertical Line */}
      <div className="absolute left-[100px] top-0 h-full pointer-events-none">
        <svg width="2" height="100%" viewBox="0 0 2 100%" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="0" x2="1" y2="100%" stroke="black" strokeWidth="2"/>
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="black" fillOpacity="0.1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[80px] px-[141px] bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-[15px]">
          <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
          <span className={`text-[36px] text-black ${language === 'zh' ? 'font-hannotate' : 'font-handlee'}`}>
            {language === 'zh' ? '许多肉' : 'Mikko'}
          </span>
        </div>
        <div className="flex items-center gap-[32px]">
          <Link href="/blogs" className="text-[24px] text-black hover:text-gray-600">{t('nav.blogs')}</Link>
          <Link href="/resources" className="text-[24px] text-black hover:text-gray-600">{t('nav.resources')}</Link>
          <Link href="/follow" className="text-[24px] text-black hover:text-gray-600">{t('nav.followMe')}</Link>
          <LanguageMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-[120px] px-[141px]">
        <div className="flex flex-col gap-[23px] max-w-[1157px] mx-auto">
          <div className="flex items-center gap-[15px]">
            <Image src="/images/profile.jpg" alt="Profile" width={120} height={120} className="rounded-full" />
            <svg width="40" height="67" viewBox="0 0 50 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[90deg]">
              <path fillRule="evenodd" clipRule="evenodd" d="M27.9582 22.0597C28.4253 15.9768 30.5356 4.22792 37.2299 7.85071C41.4892 10.1567 45.1856 17.1981 44.2547 23.3072C43.0877 30.9637 36.3177 31.0245 31.7107 29.3261C30.3843 28.8377 29.0836 28.2063 27.806 27.4771C27.7778 25.6696 27.82 23.8606 27.9582 22.0597ZM0.584268 0.698754C6.40528 12.2721 14.7915 23.0192 24.4875 29.4508C24.6648 32.6235 25.0183 35.6118 25.4226 38.1079C27.7726 52.6084 34.1386 67.788 42.4954 77.9785C43.4089 79.0917 44.744 78.1546 45.0101 76.865C44.927 77.603 44.8369 78.3398 44.7397 79.0755C43.2681 78.6703 41.8925 77.9792 40.5439 76.9546C39.7201 76.3281 38.9851 75.3573 38.1387 74.8236C37.6346 74.5056 37.3566 74.8776 36.8437 74.4342C36.6801 74.2928 36.4166 74.4509 36.4992 74.7367C36.7255 75.5191 36.4915 76.1566 36.7433 76.9269C37.1395 78.1404 38.5278 79.5649 39.3048 80.3143C41.2399 82.1806 43.4985 83.3047 45.8555 83.8818C46.84 84.1224 47.6479 83.2366 47.893 82.0583C48.4944 79.17 48.7791 76.1709 48.911 73.1893C49.0248 70.606 49.2831 67.6808 48.5306 65.2431C47.9414 63.3313 45.8592 63.5354 45.498 65.5418C45.0569 67.99 45.4355 70.6595 45.3196 73.1742C45.27 74.2523 45.1734 75.3163 45.0608 76.3771C45.0547 76.0349 44.9702 75.684 44.7786 75.3509C38.5874 64.5902 32.4799 54.5789 29.5146 41.4408C28.7853 38.2143 28.2673 34.8927 28.0002 31.5405C28.2202 31.6583 28.4382 31.7895 28.6604 31.9041C35.9699 35.6499 47.5257 34.9303 47.5904 21.5131C47.6374 11.9898 38.874 -1.81684 30.9352 4.34444C25.8628 8.28082 24.3691 16.934 24.3701 25.2562C21.4252 23.1391 18.6223 20.621 15.9685 18.1801C10.4357 13.0928 5.43941 6.95251 0.942757 0.387047C0.764287 0.126925 0.427518 0.387601 0.584268 0.698754Z" fill="black"/>
            </svg>
            <div className="bg-[#FFC9F0] shadow-lg px-[24px] py-[8px] rounded-lg transform -rotate-[4.75deg]">
              <span className={`text-[36px] text-black ${language === 'zh' ? 'font-hannotate' : 'font-handlee'}`}>
                {language === 'zh' ? '许多肉' : 'Mikko'}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div className="md:w-3/5">
              <h1 
                className="text-[48px] font-semibold leading-[58px]"
                dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
              />
            </div>
            
            <div className="md:w-1/3 ml-auto">
              <p className="text-[22px] leading-[31px] mb-[30px]" dangerouslySetInnerHTML={{ __html: t('home.hero.description') }}>
              </p>
              <div className="flex justify-end gap-[24px] relative z-10">
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
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="mt-[110px] px-[141px]">
        <div className="max-w-[1157px] mx-auto">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-[15px] shrink-0">
              <div className="bg-[#FFC9F0] shadow-lg px-[16px] py-[4px] rounded-lg transform rotate-[4.75deg]">
                <span className={`text-[24px] ${language === 'zh' ? 'font-hannotate' : 'font-handlee'}`}>{t('home.whatIDo')}</span>
              </div>
              <svg width="40" height="67" viewBox="0 0 50 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[-90deg]">
                <path fillRule="evenodd" clipRule="evenodd" d="M27.9582 22.0597C28.4253 15.9768 30.5356 4.22792 37.2299 7.85071C41.4892 10.1567 45.1856 17.1981 44.2547 23.3072C43.0877 30.9637 36.3177 31.0245 31.7107 29.3261C30.3843 28.8377 29.0836 28.2063 27.806 27.4771C27.7778 25.6696 27.82 23.8606 27.9582 22.0597ZM0.584268 0.698754C6.40528 12.2721 14.7915 23.0192 24.4875 29.4508C24.6648 32.6235 25.0183 35.6118 25.4226 38.1079C27.7726 52.6084 34.1386 67.788 42.4954 77.9785C43.4089 79.0917 44.744 78.1546 45.0101 76.865C44.927 77.603 44.8369 78.3398 44.7397 79.0755C43.2681 78.6703 41.8925 77.9792 40.5439 76.9546C39.7201 76.3281 38.9851 75.3573 38.1387 74.8236C37.6346 74.5056 37.3566 74.8776 36.8437 74.4342C36.6801 74.2928 36.4166 74.4509 36.4992 74.7367C36.7255 75.5191 36.4915 76.1566 36.7433 76.9269C37.1395 78.1404 38.5278 79.5649 39.3048 80.3143C41.2399 82.1806 43.4985 83.3047 45.8555 83.8818C46.84 84.1224 47.6479 83.2366 47.893 82.0583C48.4944 79.17 48.7791 76.1709 48.911 73.1893C49.0248 70.606 49.2831 67.6808 48.5306 65.2431C47.9414 63.3313 45.8592 63.5354 45.498 65.5418C45.0569 67.99 45.4355 70.6595 45.3196 73.1742C45.27 74.2523 45.1734 75.3163 45.0608 76.3771C45.0547 76.0349 44.9702 75.684 44.7786 75.3509C38.5874 64.5902 32.4799 54.5789 29.5146 41.4408C28.7853 38.2143 28.2673 34.8927 28.0002 31.5405C28.2202 31.6583 28.4382 31.7895 28.6604 31.9041C35.9699 35.6499 47.5257 34.9303 47.5904 21.5131C47.6374 11.9898 38.874 -1.81684 30.9352 4.34444C25.8628 8.28082 24.3691 16.934 24.3701 25.2562C21.4252 23.1391 18.6223 20.621 15.9685 18.1801C10.4357 13.0928 5.43941 6.95251 0.942757 0.387047C0.764287 0.126925 0.427518 0.387601 0.584268 0.698754Z" fill="black"/>
              </svg>
            </div>
            
            <div className="grid grid-cols-3 gap-6 w-full">
              {/* Blog Essay Card */}
              <Link href="/blogs" className="transform rotate-[-2deg] hover:rotate-0 transition-all duration-300">
                <div className="w-[280px] h-[380px] bg-[#FFE68C] border-[4px] border-[#EECD56] rounded-lg p-[20px] flex flex-col justify-between shadow-lg">
                  <div className="space-y-[24px]">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 mr-2">
                        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 32L30 10L34 14L12 36L7 37L8 32Z" fill="#FFE68C" stroke="black" strokeWidth="2" />
                          <path d="M28 12L32 16" stroke="black" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-[28px] font-medium leading-[36px]" 
                        dangerouslySetInnerHTML={{ __html: t('home.personalGrowth') }}>
                    </h3>
                    <div className="space-y-[4px]">
                      <h4 className="text-[20px] font-semibold">My First Blog Post</h4>
                      <p className="text-[16px] text-black/80">This is my first blog post about my journey in product design</p>
                    </div>
                  </div>
                  <div className="bg-[#FFC9F0] shadow-lg px-[16px] py-[6px] rounded-lg inline-block transform -rotate-[4.75deg]">
                    <span className={`text-[24px] ${language === 'zh' ? 'font-hannotate' : 'font-handlee'}`}>{t('home.blogEssay')}</span>
                  </div>
                </div>
              </Link>

              {/* Resources Card */}
              <Link href="/resources" className="transform rotate-[2deg] hover:rotate-0 transition-all duration-300">
                <div className="w-[280px] h-[380px] bg-[#9DDCFF] border-[4px] border-[#5AB5E8] rounded-lg p-[20px] flex flex-col justify-between shadow-lg">
                  <div className="space-y-[24px]">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 mr-2">
                        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="12" fill="#44E2F8" stroke="black" strokeWidth="2" />
                          <circle cx="20" cy="20" r="5" fill="#FC75FF" stroke="black" strokeWidth="2" />
                          <circle cx="20" cy="20" r="2" fill="black" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-[28px] font-medium leading-[36px]"
                        dangerouslySetInnerHTML={{ __html: t('home.thrive') }}>
                    </h3>
                    <div className="space-y-[4px]">
                      <h4 className="text-[20px] font-semibold">Share Title1</h4>
                      <p className="text-[16px] text-black/80">Sharing and building meaningful products</p>
                    </div>
                  </div>
                  <div className="bg-[#FFC9F0] shadow-lg px-[16px] py-[6px] rounded-lg inline-block transform rotate-[4.75deg]">
                    <span className={`text-[24px] ${language === 'zh' ? 'font-hannotate' : 'font-handlee'}`}>{t('home.resources')}</span>
                  </div>
                </div>
              </Link>

              {/* Projects Card */}
              <div className="transform rotate-[-1deg] hover:rotate-0 transition-all duration-300">
                <div className="w-[280px] h-[380px] bg-[#FFC9F0] border-[4px] border-[#F384D4] rounded-lg p-[20px] flex flex-col justify-between shadow-lg">
                  <div className="space-y-[24px]">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 mr-2">
                        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20 5L26 15L37 17L28.5 25L30 36L20 31L10 36L11.5 25L3 17L14 15L20 5Z"
                            fill="#FC75FF"
                            stroke="black"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-[28px] font-medium leading-[36px]"
                        dangerouslySetInnerHTML={{ __html: t('home.buildThings') }}>
                    </h3>
                    <p className="text-[20px] font-normal text-black/80">More to come…</p>
                  </div>
                  <div className="bg-[#FFE68C] shadow-lg px-[16px] py-[6px] rounded-lg inline-block transform rotate-[4.75deg]">
                    <span className="font-handlee text-[24px]">{t('home.projects')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Working On Section */}
      <section className="mt-[145px] px-4 md:px-[80px] lg:px-[141px]">
        <div className="max-w-[1157px] mx-auto">
          <div className="flex items-start gap-8">
            <div className="flex flex-col items-start shrink-0">
              <div className="flex items-center gap-[15px]">
                <div className="bg-[#FFC9F0] shadow-lg px-[16px] py-[4px] rounded-lg transform -rotate-[4.75deg]">
                  <span className={`text-[24px] ${language === 'zh' ? 'font-hannotate' : 'font-handlee'}`}>{t('home.currentlyWorkingOn')}</span>
                </div>
                <svg width="40" height="67" viewBox="0 0 50 84" fill="none" xmlns="http://www.w3.org/2000/svg" 
                     className="mt-[70px] transform rotate-[-90deg]">
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.9582 22.0597C28.4253 15.9768 30.5356 4.22792 37.2299 7.85071C41.4892 10.1567 45.1856 17.1981 44.2547 23.3072C43.0877 30.9637 36.3177 31.0245 31.7107 29.3261C30.3843 28.8377 29.0836 28.2063 27.806 27.4771C27.7778 25.6696 27.82 23.8606 27.9582 22.0597ZM0.584268 0.698754C6.40528 12.2721 14.7915 23.0192 24.4875 29.4508C24.6648 32.6235 25.0183 35.6118 25.4226 38.1079C27.7726 52.6084 34.1386 67.788 42.4954 77.9785C43.4089 79.0917 44.744 78.1546 45.0101 76.865C44.927 77.603 44.8369 78.3398 44.7397 79.0755C43.2681 78.6703 41.8925 77.9792 40.5439 76.9546C39.7201 76.3281 38.9851 75.3573 38.1387 74.8236C37.6346 74.5056 37.3566 74.8776 36.8437 74.4342C36.6801 74.2928 36.4166 74.4509 36.4992 74.7367C36.7255 75.5191 36.4915 76.1566 36.7433 76.9269C37.1395 78.1404 38.5278 79.5649 39.3048 80.3143C41.2399 82.1806 43.4985 83.3047 45.8555 83.8818C46.84 84.1224 47.6479 83.2366 47.893 82.0583C48.4944 79.17 48.7791 76.1709 48.911 73.1893C49.0248 70.606 49.2831 67.6808 48.5306 65.2431C47.9414 63.3313 45.8592 63.5354 45.498 65.5418C45.0569 67.99 45.4355 70.6595 45.3196 73.1742C45.27 74.2523 45.1734 75.3163 45.0608 76.3771C45.0547 76.0349 44.9702 75.684 44.7786 75.3509C38.5874 64.5902 32.4799 54.5789 29.5146 41.4408C28.7853 38.2143 28.2673 34.8927 28.0002 31.5405C28.2202 31.6583 28.4382 31.7895 28.6604 31.9041C35.9699 35.6499 47.5257 34.9303 47.5904 21.5131C47.6374 11.9898 38.874 -1.81684 30.9352 4.34444C25.8628 8.28082 24.3691 16.934 24.3701 25.2562C21.4252 23.1391 18.6223 20.621 15.9685 18.1801C10.4357 13.0928 5.43941 6.95251 0.942757 0.387047C0.764287 0.126925 0.427518 0.387601 0.584268 0.698754Z" fill="black"/>
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 flex-1">
              {/* Featured video - Youtube Channel */}
              <a href="https://www.youtube.com/@MikkoXu24" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="relative w-[405px] h-[454px] border-[3px] border-black rounded-[6px] overflow-hidden group cursor-pointer">
                <div className="absolute top-0 left-[26px] w-[353px] h-[320px] mt-[24px]">
                  <Image 
                    src="/images/work2.jpg" 
                    alt="Work 1" 
                    width={353}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-[6px]" 
                  />
                </div>
                <div className="absolute bottom-[24px] left-[26px] right-[26px] flex items-end justify-between">
                  <h3 className="font-handlee text-[24px] leading-[28px] text-black"
                      dangerouslySetInnerHTML={{ __html: t('home.featuredVideo') }}>
                  </h3>
                  <div className="bg-[#F072CD] text-white px-[18px] py-[6px] rounded-[27px] shadow-lg">
                    <span className="text-[16px] font-medium">{t('home.creator')}</span>
                  </div>
                </div>
              </a>

              {/* LifeCode. AI Podcast */}
              <a href="https://www.xiaoyuzhoufm.com/podcast/67187e050d2f24f2892fa7a5" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="relative w-[405px] h-[454px] border-[3px] border-black rounded-[6px] overflow-hidden group cursor-pointer">
                <div className="absolute top-0 left-[26px] w-[353px] h-[320px] mt-[24px]">
                  <Image 
                    src="/images/work4.jpg" 
                    alt="Work 2" 
                    width={353}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-[6px]" 
                  />
                </div>
                <div className="absolute bottom-[24px] left-[26px] right-[26px] flex items-end justify-between">
                  <h3 className="font-handlee text-[24px] leading-[28px] text-black"
                      dangerouslySetInnerHTML={{ __html: t('home.lifecode') }}>
                  </h3>
                  <div className="bg-[#E5C141] text-white px-[18px] py-[6px] rounded-[27px] shadow-lg">
                    <span className="text-[16px] font-medium">{t('home.hosting')}</span>
                  </div>
                </div>
              </a>

              {/* AI for Science Community */}
              <div className="relative w-[405px] h-[454px] border-[3px] border-black rounded-[6px] overflow-hidden group">
                <div className="absolute top-0 left-[26px] w-[353px] h-[320px] mt-[24px]">
                  <Image 
                    src="/images/work1.jpg" 
                    alt="Work 3" 
                    width={353}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-[6px]" 
                  />
                </div>
                <div className="absolute bottom-[24px] left-[26px] right-[26px] flex items-end justify-between">
                  <h3 className="font-handlee text-[24px] leading-[28px] text-black"
                      dangerouslySetInnerHTML={{ __html: t('home.aiForScience') }}>
                  </h3>
                  <div className="bg-[#5AB5E8] text-white px-[18px] py-[6px] rounded-[27px] shadow-lg">
                    <span className="text-[16px] font-medium">{t('home.curator')}</span>
                  </div>
                </div>
              </div>

              {/* Building things */}
              <div className="relative w-[405px] h-[454px] border-[3px] border-black rounded-[6px] overflow-hidden group">
                <div className="absolute top-0 left-[26px] w-[353px] h-[320px] mt-[24px]">
                  <Image 
                    src="/images/work3.jpg" 
                    alt="Work 4" 
                    width={353}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-[6px]" 
                  />
                </div>
                <div className="absolute bottom-[24px] left-[26px] right-[26px] flex items-end justify-between">
                  <h3 className="font-handlee text-[24px] leading-[28px] text-black"
                      dangerouslySetInnerHTML={{ __html: t('home.buildingThings') }}>
                  </h3>
                  <div className="bg-[#7CF072] text-white px-[18px] py-[6px] rounded-[27px] shadow-lg">
                    <span className="text-[16px] font-medium">{t('home.creator')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mt-[145px] px-[141px]">
        <div className="max-w-[1157px] mx-auto">
          <div className="flex items-start gap-[200px]">
            <div className="flex flex-col gap-6 shrink-0">
              <div className="flex items-center gap-[50px]">
                <div className="bg-[#FFC9F0] shadow-lg px-[16px] py-[4px] rounded-lg transform rotate-[4.75deg]">
                  <span className={`text-[24px] ${language === 'zh' ? 'font-hannotate' : 'font-handlee'}`}>{t('home.workExperience')}</span>
                </div>
                <svg width="40" height="67" viewBox="0 0 50 84" fill="none" xmlns="http://www.w3.org/2000/svg" 
                     className="mt-[70px] transform rotate-[-90deg]">
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.9582 22.0597C28.4253 15.9768 30.5356 4.22792 37.2299 7.85071C41.4892 10.1567 45.1856 17.1981 44.2547 23.3072C43.0877 30.9637 36.3177 31.0245 31.7107 29.3261C30.3843 28.8377 29.0836 28.2063 27.806 27.4771C27.7778 25.6696 27.82 23.8606 27.9582 22.0597ZM0.584268 0.698754C6.40528 12.2721 14.7915 23.0192 24.4875 29.4508C24.6648 32.6235 25.0183 35.6118 25.4226 38.1079C27.7726 52.6084 34.1386 67.788 42.4954 77.9785C43.4089 79.0917 44.744 78.1546 45.0101 76.865C44.927 77.603 44.8369 78.3398 44.7397 79.0755C43.2681 78.6703 41.8925 77.9792 40.5439 76.9546C39.7201 76.3281 38.9851 75.3573 38.1387 74.8236C37.6346 74.5056 37.3566 74.8776 36.8437 74.4342C36.6801 74.2928 36.4166 74.4509 36.4992 74.7367C36.7255 75.5191 36.4915 76.1566 36.7433 76.9269C37.1395 78.1404 38.5278 79.5649 39.3048 80.3143C41.2399 82.1806 43.4985 83.3047 45.8555 83.8818C46.84 84.1224 47.6479 83.2366 47.893 82.0583C48.4944 79.17 48.7791 76.1709 48.911 73.1893C49.0248 70.606 49.2831 67.6808 48.5306 65.2431C47.9414 63.3313 45.8592 63.5354 45.498 65.5418C45.0569 67.99 45.4355 70.6595 45.3196 73.1742C45.27 74.2523 45.1734 75.3163 45.0608 76.3771C45.0547 76.0349 44.9702 75.684 44.7786 75.3509C38.5874 64.5902 32.4799 54.5789 29.5146 41.4408C28.7853 38.2143 28.2673 34.8927 28.0002 31.5405C28.2202 31.6583 28.4382 31.7895 28.6604 31.9041C35.9699 35.6499 47.5257 34.9303 47.5904 21.5131C47.6374 11.9898 38.874 -1.81684 30.9352 4.34444C25.8628 8.28082 24.3691 16.934 24.3701 25.2562C21.4252 23.1391 18.6223 20.621 15.9685 18.1801C10.4357 13.0928 5.43941 6.95251 0.942757 0.387047C0.764287 0.126925 0.427518 0.387601 0.584268 0.698754Z" fill="black"/>
                </svg>
              </div>
              <p className="mt-[70px] text-[24px]">{t('home.workDescription')}</p>
            </div>
            
            <div className="w-[600px] relative">
              <svg width="calc(100% + 120px)" height="3" viewBox="0 0 720 3" fill="none" xmlns="http://www.w3.org/2000/svg" 
                   className="absolute -top-[20px] -left-[60px]">
                <line x1="0" y1="1.04785" x2="720" y2="1.04785" stroke="black" strokeWidth="2"/>
              </svg>
              
              <svg width="3" height="calc(100% + 200px)" viewBox="0 0 3 700" fill="none" xmlns="http://www.w3.org/2000/svg" 
                   className="absolute -left-[60px] -top-[100px]">
                <line x1="1.04785" y1="0" x2="1.04785" y2="750" stroke="black" strokeWidth="2"/>
              </svg>
              
              <svg width="3" height="calc(100% + 200px)" viewBox="0 0 3 700" fill="none" xmlns="http://www.w3.org/2000/svg" 
                   className="absolute -right-[60px] -top-[100px]">
                <line x1="1.04785" y1="0" x2="1.04785" y2="750" stroke="black" strokeWidth="2"/>
              </svg>
              
              <svg width="calc(100% + 120px)" height="3" viewBox="0 0 720 3" fill="none" xmlns="http://www.w3.org/2000/svg" 
                   className="absolute -bottom-[20px] -left-[60px]">
                <line x1="0" y1="1.04785" x2="720" y2="1.04785" stroke="black" strokeWidth="2"/>
              </svg>

              <div className="space-y-[37px] px-[20px] py-[20px]">
                <div className="flex items-center gap-[37px]">
                  <div className="w-[95px] h-[95px] bg-[#FFE68C] border-[2px] border-[#EECD56] rounded-[6px] flex items-center justify-center">
                    <span className="font-handlee text-[48px]">1</span>
                  </div>
                  <div className="w-[418px]">
                    <h3 className="text-[24px] font-semibold mb-[6px]">Analyst Consultant @ Deloitte</h3>
                    <p className="text-[18px] text-gray-800">Helped Mercedes-Benz build frontline sales data platform</p>
                    <p className="text-[16px] text-[#706F6F] mt-[3px]">2016</p>
                  </div>
                </div>

                <div className="flex items-center gap-[37px]">
                  <div className="w-[95px] h-[95px] bg-[#9DDCFF] border-[2px] border-[#5AB5E8] rounded-[6px] flex items-center justify-center">
                    <span className="font-handlee text-[48px]">2</span>
                  </div>
                  <div className="w-[418px]">
                    <h3 className="text-[24px] font-semibold mb-[6px]">Start-up Data Scientist @ Y-Closet</h3>
                    <p className="text-[18px] text-gray-800">Worked on building Eng pipeline and extract insight reports</p>
                    <p className="text-[16px] text-[#706F6F] mt-[3px]">2018</p>
                  </div>
                </div>

                <div className="flex items-center gap-[37px]">
                  <div className="w-[95px] h-[95px] bg-[#FFC9F0] border-[2px] border-[#F384D4] rounded-[6px] flex items-center justify-center">
                    <span className="font-handlee text-[48px]">3</span>
                  </div>
                  <div className="w-[418px]">
                    <h3 className="text-[24px] font-semibold mb-[6px]">Strategic Product Manager @ Tencent</h3>
                    <p className="text-[18px] text-gray-800">Focused on Recommendation & Growth Strategy</p>
                    <p className="text-[16px] text-[#706F6F] mt-[3px]">2021-2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-[37px]">
                  <div className="w-[95px] h-[95px] bg-[#FFE68C] border-[2px] border-[#EECD56] rounded-[6px] flex items-center justify-center">
                    <span className="font-handlee text-[48px]">Now</span>
                  </div>
                  <div className="w-[418px]">
                    <h3 className="text-[24px] font-semibold mb-[6px]">Undefined Creator 🥳</h3>
                    <p className="text-[18px] text-gray-800">Sharing and building meaningful products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-[145px] px-[141px]">
        <div className="max-w-[1157px] mx-auto">
          <div className="flex items-start justify-end gap-[100px]">
            <div className="flex flex-col gap-6 shrink-0 ml-[100px]">
              <div className="flex items-center gap-[55px]">
                <div className="bg-[#FFC9F0] shadow-lg px-[16px] py-[4px] rounded-lg transform -rotate-[4.75deg]">
                  <span className={`text-[24px] ${language === 'zh' ? 'font-hannotate' : 'font-handlee'}`}>{t('home.contactHere')}</span>
                </div>
                <svg width="40" height="67" viewBox="0 0 50 84" fill="none" xmlns="http://www.w3.org/2000/svg" 
                     className="mt-[70px] transform rotate[40deg]">
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.9582 22.0597C28.4253 15.9768 30.5356 4.22792 37.2299 7.85071C41.4892 10.1567 45.1856 17.1981 44.2547 23.3072C43.0877 30.9637 36.3177 31.0245 31.7107 29.3261C30.3843 28.8377 29.0836 28.2063 27.806 27.4771C27.7778 25.6696 27.82 23.8606 27.9582 22.0597ZM0.584268 0.698754C6.40528 12.2721 14.7915 23.0192 24.4875 29.4508C24.6648 32.6235 25.0183 35.6118 25.4226 38.1079C27.7726 52.6084 34.1386 67.788 42.4954 77.9785C43.4089 79.0917 44.744 78.1546 45.0101 76.865C44.927 77.603 44.8369 78.3398 44.7397 79.0755C43.2681 78.6703 41.8925 77.9792 40.5439 76.9546C39.7201 76.3281 38.9851 75.3573 38.1387 74.8236C37.6346 74.5056 37.3566 74.8776 36.8437 74.4342C36.6801 74.2928 36.4166 74.4509 36.4992 74.7367C36.7255 75.5191 36.4915 76.1566 36.7433 76.9269C37.1395 78.1404 38.5278 79.5649 39.3048 80.3143C41.2399 82.1806 43.4985 83.3047 45.8555 83.8818C46.84 84.1224 47.6479 83.2366 47.893 82.0583C48.4944 79.17 48.7791 76.1709 48.911 73.1893C49.0248 70.606 49.2831 67.6808 48.5306 65.2431C47.9414 63.3313 45.8592 63.5354 45.498 65.5418C45.0569 67.99 45.4355 70.6595 45.3196 73.1742C45.27 74.2523 45.1734 75.3163 45.0608 76.3771C45.0547 76.0349 44.9702 75.684 44.7786 75.3509C38.5874 64.5902 32.4799 54.5789 29.5146 41.4408C28.7853 38.2143 28.2673 34.8927 28.0002 31.5405C28.2202 31.6583 28.4382 31.7895 28.6604 31.9041C35.9699 35.6499 47.5257 34.9303 47.5904 21.5131C47.6374 11.9898 38.874 -1.81684 30.9352 4.34444C25.8628 8.28082 24.3691 16.934 24.3701 25.2562C21.4252 23.1391 18.6223 20.621 15.9685 18.1801C10.4357 13.0928 5.43941 6.95251 0.942757 0.387047C0.764287 0.126925 0.427518 0.387601 0.584268 0.698754Z" fill="black"/>
                </svg>
              </div>
              <h2 className="text-[24px] mt-[50px]">{t('home.contactDescription')}</h2>
            </div>
            
            <div className="flex justify-end flex-1">
              <form onSubmit={handleSubmit} className="w-[495px] space-y-[60px]">
                <div className="space-y-[24px]">
                  <div className="flex items-center gap-[24px]">
                    <div className="bg-[#FFC9F0] shadow-lg px-[16px] py-[4px] rounded-lg transform">
                      <span className="font-handlee text-[24px]">{t('home.name')}</span>
                    </div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="flex-1 border-b-[2px] border-black py-[8px] focus:outline-none font-handlee text-[24px]"
                      placeholder={t('home.namePlace')}
                    />
                  </div>
                </div>

                <div className="space-y-[24px]">
                  <div className="flex items-center gap-[24px]">
                    <div className="bg-[#FFE68C] shadow-lg px-[16px] py-[4px] rounded-lg whitespace-nowrap">
                      <span className="font-handlee text-[24px]">{t('home.yourEmail')}</span>
                    </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b-[2px] border-black py-[8px] focus:outline-none font-handlee text-[24px]"
                    placeholder="youremail123@gmail.com"
                  />
                </div>
              </div>

                <div className="space-y-[24px]">
                  <div className="flex items-center gap-[24px]">
                    <div className="bg-[#9DDCFF] shadow-lg px-[16px] py-[4px] rounded-lg whitespace-nowrap">
                      <span className="font-handlee text-[24px]">{t('home.aboutProject')}</span>
                    </div>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border-b-[2px] border-black py-[8px] focus:outline-none font-handlee text-[24px]"
                    placeholder={t('home.projectPlace')}
                  />
                </div>
              </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="w-1/2 bg-black text-white text-[24px] font-semibold px-[41px] py-[18px] rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
                  >
                    {t('home.sendHere')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-[145px] py-[64px] px-[141px] border-t-[2px] border-black">
        <div className="flex justify-between items-center max-w-[1157px] mx-auto">
          <div className="flex items-center gap-[15px]">
            <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
            <span className={`text-[36px] text-black ${language === 'zh' ? 'font-hannotate' : 'font-handlee'}`}>
              {language === 'zh' ? '许多肉' : 'Mikko'}
            </span>
          </div>
          
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