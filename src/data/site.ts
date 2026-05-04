// 站點全域常數
// 偉翔提供新數據後 update 這裡，全站自動帶入

export const site = {
  name: '廖偉翔',
  nameEn: 'Sean Liao',
  legislator: '中華民國第十一屆立法委員',
  district: '臺中市第 4 選區（西屯、南屯）',
  committee: '社會福利及衛生環境委員會',
  role: '第 4 會期召集委員',
  slogan: '從政的初衷，是為了你/妳臉上的笑容',

  url: 'https://seanliao.tw',

  contact: {
    address: '臺中市西屯區惠來路三段 200 號',
    phone: '04-2317-9955',
    hours: '週一至週五 9:00–17:00',
  },

  social: [
    { name: 'Facebook', url: 'https://www.facebook.com/seanliao76', icon: 'lucide:facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/seanliao.24', icon: 'lucide:instagram' },
    { name: 'Threads', url: 'https://www.threads.com/@seanliao.24', icon: 'lucide:at-sign' },
    // YouTube / TikTok / LINE: 偉翔之後補連結
  ],

  stats: [
    { label: '當選得票', value: '119,740', unit: '票', sub: '50.02%（2024 年 1 月）' },
    { label: '通過法案', value: '105', unit: '筆', sub: '主提案三讀 9 筆 + 連署通過' },
  ],

  // JSON-LD Person schema（SEO + Google Knowledge Graph）
  personSchema: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '廖偉翔',
    alternateName: 'Sean Liao',
    jobTitle: '中華民國第十一屆立法委員',
    affiliation: {
      '@type': 'Organization',
      name: '中華民國立法院',
      url: 'https://www.ly.gov.tw/',
    },
    url: 'https://seanliao.tw',
    sameAs: [
      'https://www.facebook.com/seanliao76',
      'https://www.instagram.com/seanliao.24',
      'https://www.threads.com/@seanliao.24',
    ],
    description: '中華民國第十一屆立法委員，臺中市第 4 選區（西屯、南屯）。社會福利及衛生環境委員會召集委員。',
  },
} as const;

export type Site = typeof site;
