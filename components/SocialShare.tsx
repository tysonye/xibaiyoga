'use client';

import { motion } from 'framer-motion';
import { FaWeixin, FaWeibo, FaQq, FaLinkedin, FaTwitter, FaFacebook, FaVideo } from 'react-icons/fa';

interface SocialShareProps {
  title?: string;
  description?: string;
  url?: string;
}

export const SocialShare = ({ 
  title = '希柏瑜伽 | 发现内心的平静与力量', 
  description = '希柏瑜伽提供专业瑜伽课程、在线学习和私教服务，帮助您达到身心平衡。',
  url = 'https://xibai.xin'
}: SocialShareProps) => {
  const shareLinks = {
    weixin: `https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxcheckurl?requrl=${encodeURIComponent(url)}`,
    weibo: `https://service.weibo.com/share/share.php?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&summary=${encodeURIComponent(description)}`,
    douyin: `https://www.douyin.com/share/video/`, // 抖音分享需要特殊处理
    qq: `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  };

  const socialIcons = [
    { name: '微信', icon: <FaWeixin />, color: '#07C160', link: shareLinks.weixin },
    { name: '微博', icon: <FaWeibo />, color: '#E6162D', link: shareLinks.weibo },
    { name: '视频', icon: <FaVideo />, color: '#FE2C55', link: shareLinks.douyin },
    { name: 'QQ', icon: <FaQq />, color: '#12B7F5', link: shareLinks.qq },
    { name: 'LinkedIn', icon: <FaLinkedin />, color: '#0077B5', link: shareLinks.linkedin },
    { name: 'Twitter', icon: <FaTwitter />, color: '#1DA1F2', link: shareLinks.twitter },
    { name: 'Facebook', icon: <FaFacebook />, color: '#1877F2', link: shareLinks.facebook }
  ];

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4 text-brand-primary">分享到社交媒体</h3>
      <div className="flex flex-wrap gap-3">
        {socialIcons.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-10 h-10 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
            style={{ backgroundColor: social.color }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            aria-label={`分享到${social.name}`}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;