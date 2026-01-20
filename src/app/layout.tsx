import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "希柏瑜伽 | 发现内心的平静与力量",
  description: "在希柏瑜伽，找到属于你的瑜伽之旅，专业的瑜伽课程、优秀的导师团队，助你达到身心平衡。",
  keywords: "瑜伽, 希柏瑜伽, 瑜伽课程, 瑜伽导师, 在线瑜伽, 瑜伽练习",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
