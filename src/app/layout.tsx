import type { Metadata } from "next";
import "./globals.css";
import { MouseGlow } from "../../components/ui/MouseGlow";

// 性能监控 - 核心Web指标
export function reportWebVitals(metric: {
  id: string;
  name: string;
  startTime: number;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  entries: any[];
  navigationType?: string;
}) {
  // 收集核心Web Vitals指标
  const webVitalsData = {
    metric: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    timestamp: Date.now(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    navigationType: metric.navigationType || 'unknown',
  };
  
  // 控制台日志，便于开发调试
  console.log('[Web Vitals]', webVitalsData);
  
  // 发送到监控服务（示例实现）
  // 实际项目中，替换为你的监控服务URL
  const monitorUrl = '/api/monitor';
  
  try {
    // 使用sendBeacon API发送，不影响页面性能
    if (navigator.sendBeacon) {
      navigator.sendBeacon(monitorUrl, JSON.stringify(webVitalsData));
    } else {
      // 降级方案
      fetch(monitorUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webVitalsData),
        keepalive: true,
      });
    }
  } catch (error) {
    console.error('[Web Vitals] 发送失败:', error);
  }
  
  // 存储到localStorage，用于后续分析
  try {
    const vitalsHistory = JSON.parse(localStorage.getItem('webVitals') || '[]');
    vitalsHistory.push(webVitalsData);
    // 只保留最近100条记录
    if (vitalsHistory.length > 100) {
      vitalsHistory.shift();
    }
    localStorage.setItem('webVitals', JSON.stringify(vitalsHistory));
  } catch (error) {
    console.error('[Web Vitals] 存储失败:', error);
  }
}

// 页面加载时间监控 - 简化版本
(function() {
  try {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const typedEntry = entry as any;
        let value: number = 0;
        
        // 安全访问性能指标值
        if (typeof typedEntry.duration === 'number') {
          value = typedEntry.duration;
        } else if (typeof typedEntry.startTime === 'number') {
          if (typeof typedEntry.loadEventEnd === 'number') {
            value = typedEntry.loadEventEnd - typedEntry.startTime;
          } else if (typeof typedEntry.responseEnd === 'number') {
            value = typedEntry.responseEnd - typedEntry.startTime;
          } else {
            value = typedEntry.startTime;
          }
        } else if (typeof typedEntry.renderTime === 'number') {
          value = typedEntry.renderTime;
        } else if (typeof typedEntry.loadTime === 'number') {
          value = typedEntry.loadTime;
        } else if (typeof typedEntry.value === 'number') {
          value = typedEntry.value;
        }
        
        console.log('[Performance]', typedEntry.entryType, typedEntry.name, value);
      });
    });
    
    // 监听资源加载和导航性能
    observer.observe({ entryTypes: ['navigation', 'resource', 'paint', 'layout-shift', 'largest-contentful-paint'] });
  } catch (error) {
    console.error('[Performance] 监控初始化失败:', error);
  }
})();

export const metadata: Metadata = {
  metadataBase: new URL('https://xibai.xin'),
  title: {
    default: "希柏瑜伽 | 发现内心的平静与力量",
    template: "%s | 希柏瑜伽"
  },
  description: "希柏瑜伽提供专业瑜伽课程、在线学习和私教服务，帮助您达到身心平衡。适合初学者到进阶学员，包括哈他瑜伽、阿斯汤加、阴瑜伽等多种课程。",
  keywords: ["瑜伽", "希柏瑜伽", "哈他瑜伽", "阿斯汤加瑜伽", "阴瑜伽", "孕妇瑜伽", "在线瑜伽课程", "瑜伽教练培训", "瑜伽馆", "瑜伽练习", "瑜伽冥想", "瑜伽减肥", "瑜伽塑形"],
  authors: [{ name: "希柏瑜伽", url: "https://xibai.xin" }],
  creator: "希柏瑜伽",
  publisher: "希柏瑜伽",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://xibai.xin",
    title: "希柏瑜伽 | 发现内心的平静与力量",
    description: "希柏瑜伽提供专业瑜伽课程、在线学习和私教服务，帮助您达到身心平衡。适合初学者到进阶学员。",
    siteName: "希柏瑜伽",
    images: [
      {
        url: "https://picsum.photos/seed/yoga-og/1200/630",
        width: 1200,
        height: 630,
        alt: "希柏瑜伽 - 专业瑜伽课程",
        type: "image/jpeg",
        secureUrl: "https://picsum.photos/seed/yoga-og/1200/630"
      }
    ],
    alternateLocale: ["zh-TW", "en-US"]
  },
  twitter: {
    card: "summary_large_image",
    title: "希柏瑜伽 | 发现内心的平静与力量",
    description: "希柏瑜伽提供专业瑜伽课程、在线学习和私教服务，帮助您达到身心平衡。",
    images: ["https://picsum.photos/seed/yoga-og/1200/630"],
    creator: "@xibaiyoga",
    site: "@xibaiyoga"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#2D5A3D',
  colorScheme: 'light',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: '希柏瑜伽',
    startupImage: ['https://picsum.photos/seed/yoga-startup/1200/1920']
  },
  applicationName: '希柏瑜伽',
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2D5A3D',
      },
    ],
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-site-verification-code',
  },
  alternates: {
    canonical: 'https://xibai.xin',
    languages: {
      'zh-TW': 'https://xibai.xin/zh-tw',
      'en-US': 'https://xibai.xin/en',
    },
  },
};

// 结构化数据 - WebSite
const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "希柏瑜伽",
  "url": "https://xibai.xin",
  "description": "希柏瑜伽提供专业瑜伽课程、在线学习和私教服务，帮助您达到身心平衡。",
  "publisher": {
    "@type": "Organization",
    "name": "希柏瑜伽",
    "logo": {
      "@type": "ImageObject",
      "url": "https://picsum.photos/seed/yoga-logo/200/200"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://xibai.xin/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// 结构化数据 - WebPage
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "希柏瑜伽 | 发现内心的平静与力量",
  "description": "希柏瑜伽提供专业瑜伽课程、在线学习和私教服务，帮助您达到身心平衡。适合初学者到进阶学员。",
  "url": "https://xibai.xin",
  "inLanguage": "zh-CN",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://xibai.xin"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://xibai.xin"
      }
    ]
  },
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "希柏瑜伽"
  }
};

// 结构化数据 - LocalBusiness
const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "希柏瑜伽",
  "image": "https://picsum.photos/seed/yoga-og/1200/630",
  "description": "希柏瑜伽提供专业瑜伽课程、在线学习和私教服务，帮助您达到身心平衡。",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "建国路88号",
    "addressLocality": "朝阳区",
    "addressRegion": "北京市",
    "postalCode": "100000",
    "addressCountry": "CN"
  },
  "telephone": "010-12345678",
  "email": "info@xibaiyoga.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "06:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "¥¥-¥¥¥",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "128",
    "bestRating": "5",
    "worstRating": "1"
  },
  "url": "https://xibai.xin",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "瑜伽课程",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "线下课程",
        "itemListElement": [
          {
            "@type": "Course",
            "name": "哈他瑜伽",
            "description": "适合初学者的基础课程，注重体式的正确性和呼吸的配合。",
            "provider": {
              "@type": "Organization",
              "name": "希柏瑜伽"
            }
          },
          {
            "@type": "Course",
            "name": "阿斯汤加瑜伽",
            "description": "动态的瑜伽练习，通过连续的体式流，增强力量和柔韧性。",
            "provider": {
              "@type": "Organization",
              "name": "希柏瑜伽"
            }
          },
          {
            "@type": "Course",
            "name": "阴瑜伽",
            "description": "缓慢而深入的练习，通过长时间保持体式，放松肌肉，释放压力。",
            "provider": {
              "@type": "Organization",
              "name": "希柏瑜伽"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "在线课程",
        "itemListElement": [
          {
            "@type": "Course",
            "name": "瑜伽基础入门课程",
            "description": "适合完全零基础的学员，从基础体式开始学习，建立正确的练习习惯。",
            "provider": {
              "@type": "Organization",
              "name": "希柏瑜伽"
            },
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurrency": "CNY"
            }
          }
        ]
      }
    ]
  }
};

// 结构化数据 - 导师（Person）
const jsonLdPersons = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "希柏瑜伽导师团队",
  "itemListElement": [
    {
      "@type": "Person",
      "position": 1,
      "name": "张老师",
      "jobTitle": "资深哈他瑜伽导师",
      "description": "拥有10年瑜伽教学经验，专注于哈他瑜伽和阴瑜伽的研究与教学。曾赴印度瑞诗凯诗深造，获得国际瑜伽联盟认证。",
      "image": "https://picsum.photos/seed/teacher1/800/600",
      "url": "https://xibai.xin/teachers#zhang",
      "sameAs": [
        "https://www.instagram.com/teacher_zhang",
        "https://www.facebook.com/teacher_zhang"
      ]
    },
    {
      "@type": "Person",
      "position": 2,
      "name": "李老师",
      "jobTitle": "阿斯汤加瑜伽导师",
      "description": "8年阿斯汤加瑜伽教学经验，跟随多位国际名师学习，擅长将传统阿斯汤加与现代瑜伽理念相结合。",
      "image": "https://picsum.photos/seed/teacher2/800/600",
      "url": "https://xibai.xin/teachers#li"
    }
  ]
};

// 结构化数据 - 聚合评价（AggregateRating）
const jsonLdAggregateRating = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "希柏瑜伽"
  },
  "ratingValue": "4.8",
  "reviewCount": "128",
  "bestRating": "5",
  "worstRating": "1",
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "陈女士"
      },
      "datePublished": "2025-12-15",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "在希柏瑜伽练习了半年，身体和心态都有了很大的改善。张老师的课非常专业，耐心指导每个体式的细节。"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "李先生"
      },
      "datePublished": "2025-11-20",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "一直想找个专业的瑜伽馆，朋友推荐了希柏瑜伽。体验了李老师的阿斯汤加课程，感觉非常棒！"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://xibai.xin" />
        {/* 结构化数据 - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        {/* 结构化数据 - WebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
        />
        {/* 结构化数据 - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
        {/* 结构化数据 - 导师团队 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPersons) }}
        />
        {/* 结构化数据 - 聚合评价 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAggregateRating) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
