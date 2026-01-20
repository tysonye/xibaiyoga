import type { Metadata } from "next";
import "./globals.css";
import { MouseGlow } from "../../components/ui/MouseGlow";

// 性能监控 - 核心Web指标
export function reportWebVitals(metric: any) {
  // 这里可以将指标发送到监控服务
  console.log('Web Vitals:', metric);
  
  // 示例：发送到自定义监控服务
  /*
  const body = JSON.stringify(metric);
  const url = '/api/monitor';
  
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, {
      body,
      method: 'POST',
      keepalive: true,
    });
  }
  */
}

export const metadata: Metadata = {
  metadataBase: new URL('https://xibai.xin'),
  title: {
    default: "希柏瑜伽 | 发现内心的平静与力量",
    template: "%s | 希柏瑜伽"
  },
  description: "希柏瑜伽提供专业瑜伽课程、在线学习和私教服务，帮助您达到身心平衡。适合初学者到进阶学员，包括哈他瑜伽、阿斯汤加、阴瑜伽等多种课程。",
  keywords: ["瑜伽", "希柏瑜伽", "哈他瑜伽", "阿斯汤加瑜伽", "阴瑜伽", "孕妇瑜伽", "在线瑜伽课程", "瑜伽教练培训"],
  authors: [{ name: "希柏瑜伽" }],
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
    description: "希柏瑜伽提供专业瑜伽课程、在线学习和私教服务",
    siteName: "希柏瑜伽",
    images: [
      {
        url: "https://picsum.photos/seed/yoga-og/1200/630",
        width: 1200,
        height: 630,
        alt: "希柏瑜伽"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "希柏瑜伽 | 发现内心的平静与力量",
    description: "希柏瑜伽提供专业瑜伽课程、在线学习和私教服务",
    images: ["https://picsum.photos/seed/yoga-og/1200/630"],
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
};

// 结构化数据 - LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "希柏瑜伽",
  "image": "https://picsum.photos/seed/yoga-og/1200/630",
  "description": "希柏瑜伽提供专业瑜伽课程、在线学习和私教服务",
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
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "06:00",
      "closes": "21:00"
    }
  ],
  "priceRange": "¥¥¥"
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
        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
