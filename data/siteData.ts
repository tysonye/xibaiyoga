// 网站数据

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface Video {
  id: number;
  title: string;
  src: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  capacity: string;
  schedule: string;
  icon: string;
}

export interface OnlineCourse {
  id: number;
  title: string;
  description: string;
  price: number;
  lessons: number;
  duration: string;
  image: string;
}

export interface Teacher {
  id: number;
  name: string;
  title: string;
  description: string;
  certificates: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  content: string;
  avatar: string;
}

export interface Membership {
  id: number;
  title: string;
  price: number;
  period: string;
  benefits: string[];
  featured?: boolean;
}

// 照片展示数据
export const galleryImages: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1511615549372-383146498056?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", alt: "瑜伽照片" },
  { id: 2, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", alt: "瑜伽照片" },
  { id: 3, src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", alt: "瑜伽照片" },
  { id: 4, src: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", alt: "瑜伽照片" },
  { id: 5, src: "https://images.unsplash.com/photo-1546317593-3a933b09595b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", alt: "瑜伽照片" },
  { id: 6, src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", alt: "瑜伽照片" },
  { id: 7, src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", alt: "瑜伽照片" },
  { id: 8, src: "https://images.unsplash.com/photo-1496147116348-681f6948a07b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", alt: "瑜伽照片" },
  { id: 9, src: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", alt: "瑜伽照片" },
  { id: 10, src: "https://images.unsplash.com/photo-1541531392427-05e5dffc5b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", alt: "瑜伽照片" },
  { id: 11, src: "https://images.unsplash.com/photo-1553633153-9a01b7295156?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", alt: "瑜伽照片" },
  { id: 12, src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80", alt: "瑜伽照片" },
];

// 视频展示数据
export const videos: Video[] = [
  { id: 1, title: "瑜伽基础入门", src: "https://www.youtube.com/embed/BXUQb4aGQfU" },
  { id: 2, title: "瑜伽进阶练习", src: "https://www.youtube.com/embed/3wTRAF9f7L4" },
  { id: 3, title: "瑜伽冥想引导", src: "https://www.youtube.com/embed/5q9r86n6t0Y" },
];

// 课程介绍数据
export const courses: Course[] = [
  {
    id: 1,
    title: "哈他瑜伽",
    description: "适合初学者的基础课程，注重体式的正确性和呼吸的配合。",
    duration: "60分钟",
    capacity: "15人以内",
    schedule: "每周一、三、五",
    icon: "leaf",
  },
  {
    id: 2,
    title: "阿斯汤加瑜伽",
    description: "动态的瑜伽练习，通过连续的体式流，增强力量和柔韧性。",
    duration: "90分钟",
    capacity: "12人以内",
    schedule: "每周二、四、六",
    icon: "fire",
  },
  {
    id: 3,
    title: "阴瑜伽",
    description: "缓慢而深入的练习，通过长时间保持体式，放松肌肉，释放压力。",
    duration: "75分钟",
    capacity: "10人以内",
    schedule: "每周一、四、日",
    icon: "moon",
  },
  {
    id: 4,
    title: "孕妇瑜伽",
    description: "专为孕妇设计的安全练习，帮助缓解孕期不适，增强体力，为分娩做准备。",
    duration: "60分钟",
    capacity: "8人以内",
    schedule: "每周三、六",
    icon: "baby",
  },
];

// 在线课程数据
export const onlineCourses: OnlineCourse[] = [
  {
    id: 1,
    title: "瑜伽基础入门课程",
    description: "适合完全零基础的学员，从基础体式开始学习，建立正确的练习习惯。",
    price: 199,
    lessons: 12,
    duration: "总计180分钟",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    title: "瑜伽进阶提升课程",
    description: "适合有一定基础的学员，深入学习高级体式和呼吸控制技巧。",
    price: 299,
    lessons: 16,
    duration: "总计240分钟",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "瑜伽冥想与减压课程",
    description: "学习各种冥想技巧，帮助你缓解压力，改善睡眠，提升专注力。",
    price: 399,
    lessons: 10,
    duration: "总计150分钟",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 4,
    title: "瑜伽塑形课程",
    description: "结合力量训练和瑜伽体式，帮助你塑造完美身材，增强核心力量。",
    price: 249,
    lessons: 14,
    duration: "总计210分钟",
    image: "https://images.unsplash.com/photo-1511615549372-383146498056?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 5,
    title: "亲子瑜伽课程",
    description: "适合家长和孩子一起练习，增强亲子关系，培养孩子的专注力和柔韧性。",
    price: 199,
    lessons: 8,
    duration: "总计120分钟",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 6,
    title: "老年瑜伽课程",
    description: "专为中老年人设计，动作缓慢温和，帮助改善关节灵活性，增强身体平衡能力。",
    price: 229,
    lessons: 10,
    duration: "总计150分钟",
    image: "https://images.unsplash.com/photo-1531928454878-323705334760?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

// 导师数据
export const teachers: Teacher[] = [
  {
    id: 1,
    name: "张老师",
    title: "资深哈他瑜伽导师",
    description: "拥有10年瑜伽教学经验，专注于哈他瑜伽和阴瑜伽的研究与教学。曾赴印度瑞诗凯诗深造，获得国际瑜伽联盟认证。",
    certificates: ["国际瑜伽联盟RYT-500认证", "阴瑜伽高级导师认证"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    name: "李老师",
    title: "阿斯汤加瑜伽导师",
    description: "8年阿斯汤加瑜伽教学经验，跟随多位国际名师学习，擅长将传统阿斯汤加与现代瑜伽理念相结合，教学风格严谨而富有活力。",
    certificates: ["阿斯汤加瑜伽授权导师", "流瑜伽高级认证"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    name: "王老师",
    title: "孕妇瑜伽与产后修复专家",
    description: "6年孕妇瑜伽教学经验，获得国际孕产瑜伽认证，擅长为不同阶段的孕妇设计安全有效的瑜伽练习方案，帮助准妈妈们顺利度过孕期。",
    certificates: ["国际孕产瑜伽认证", "产后修复瑜伽认证"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

// 学员评价数据
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "陈女士",
    rating: 5,
    content: "在希柏瑜伽练习了半年，身体和心态都有了很大的改善。张老师的课非常专业，耐心指导每个体式的细节，让我这个初学者也能轻松跟上。环境也非常好，安静舒适，是放松身心的好去处。",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    name: "李先生",
    rating: 5,
    content: "一直想找个专业的瑜伽馆，朋友推荐了希柏瑜伽。体验了李老师的阿斯汤加课程，感觉非常棒！老师的教学风格很有活力，课程设计合理，循序渐进。练习了三个月，我的力量和柔韧性都有了明显的提高。",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    name: "王女士",
    rating: 4.5,
    content: "作为一名孕妇，在这里找到了王老师的孕妇瑜伽课程，非常专业！老师会根据每个孕妇的情况调整体式，让我们练习得既安全又有效。课程结束后，我感觉身体轻松了很多，睡眠质量也提高了。非常感谢希柏瑜伽！",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

// 会员权益数据
export const memberships: Membership[] = [
  {
    id: 1,
    title: "基础会员",
    price: 399,
    period: "月",
    benefits: [
      "每周可参加3次团课",
      "免费使用瑜伽馆设施",
      "享受线上课程9折优惠",
      "定期会员活动邀请",
      "专业瑜伽咨询服务",
    ],
  },
  {
    id: 2,
    title: "高级会员",
    price: 699,
    period: "月",
    benefits: [
      "无限次参加团课",
      "免费使用瑜伽馆所有设施",
      "享受线上课程8折优惠",
      "每月1次免费私教课",
      "定期会员活动优先参与",
      "专业瑜伽咨询服务",
      "免费参加工作坊和大师课",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "VIP会员",
    price: 1299,
    period: "月",
    benefits: [
      "无限次参加所有课程",
      "免费使用瑜伽馆所有设施",
      "线上课程免费学习",
      "每月2次免费私教课",
      "专属私人储物柜",
      "定期会员活动优先参与",
      "免费参加工作坊和大师课",
      "专属瑜伽导师指导",
    ],
  },
];
