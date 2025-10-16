// 生成随机日期（最近一年内）
export function generateRandomDate(): string {
  const now = new Date()
  const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
  const randomTime = oneYearAgo.getTime() + Math.random() * (now.getTime() - oneYearAgo.getTime())
  const randomDate = new Date(randomTime)

  const year = randomDate.getFullYear()
  const month = String(randomDate.getMonth() + 1).padStart(2, '0')
  const day = String(randomDate.getDate()).padStart(2, '0')

  return `${year}${month}/${day}`
}

// 人民日报网站新闻抓取
export async function fetchPeoplesDailyNews(dateStr?: string): Promise<NewsArticle[]> {
  try {
    const date = dateStr || generateRandomDate()
    const url = `https://paper.people.com.cn/zgjjzk/pc/layout/${date}/node_01.html`

    // 这里由于浏览器的 CORS 限制，我们需要使用代理或后端服务
    // 暂时返回模拟数据
    console.log(`尝试抓取: ${url}`)

    // 实际项目中，这里应该调用后端 API 来抓取
    return generateMockNews()
  } catch (error) {
    console.error('抓取新闻失败:', error)
    return generateMockNews()
  }
}

// 生成模拟新闻数据
export function generateMockNews(): NewsArticle[] {
  const mockTitles = [
    {
      title: '科技创新引领高质量发展',
      subtitle: '新一代信息技术加速融合应用',
      category: 'tech'
    },
    {
      title: '绿色发展成效显著',
      subtitle: '生态环境质量持续改善',
      category: 'environment'
    },
    {
      title: '经济运行稳中向好',
      subtitle: '主要指标保持在合理区间',
      category: 'economy'
    },
    {
      title: '教育改革持续深化',
      subtitle: '促进教育公平和质量提升',
      category: 'education'
    },
    {
      title: '文化事业繁荣发展',
      subtitle: '文化自信不断增强',
      category: 'culture'
    },
    {
      title: '民生保障水平稳步提高',
      subtitle: '人民群众获得感幸福感增强',
      category: 'social'
    },
    {
      title: '对外开放持续扩大',
      subtitle: '高水平开放型经济加快构建',
      category: 'international'
    },
    {
      title: '乡村振兴战略深入实施',
      subtitle: '农业农村现代化扎实推进',
      category: 'rural'
    }
  ]

  const mockContents: Record<string, string[]> = {
    tech: [
      '本报讯 近年来，我国科技创新能力显著提升，新一代信息技术加速融合应用，推动经济社会高质量发展。',
      '据统计，全国研发经费投入强度持续提高，重大科技成果不断涌现。人工智能、量子计算、生物医药等前沿领域取得重要突破。',
      '在数字经济领域，5G网络建设全面推进，工业互联网应用日益广泛。智能制造、智慧城市等新模式新业态蓬勃发展。',
      '专家表示，科技创新正在成为驱动经济增长的核心动力，为构建新发展格局提供有力支撑。'
    ],
    environment: [
      '环保部门最新数据显示，全国生态环境质量持续改善，绿色发展取得显著成效。',
      '空气质量优良天数比例达到87.5%，地表水水质达标率超过85%。重点区域大气污染防治成效明显，蓝天保卫战取得阶段性胜利。',
      '各地积极推进绿色低碳发展，新能源装机容量不断攀升。光伏、风电产业快速发展，清洁能源消费占比稳步提高。',
      '生态文明建设深入人心，绿色生活方式逐渐普及。垃圾分类、节能减排成为社会新风尚。'
    ],
    economy: [
      '国家统计局发布数据显示，国民经济持续恢复向好，主要经济指标保持在合理区间。',
      '消费市场稳步复苏，社会消费品零售总额同比增长。投资规模持续扩大，重点领域投资力度加大。',
      '对外贸易保持增长态势，进出口总值创历史新高。贸易结构不断优化，高技术产品出口快速增长。',
      '经济学家认为，中国经济展现出强大韧性和巨大潜力，为全球经济复苏注入信心。'
    ],
    education: [
      '教育部推出系列改革措施，促进教育公平和质量提升，教育现代化水平不断提高。',
      '义务教育优质均衡发展取得新进展，城乡教育差距逐步缩小。"双减"政策落地见效，学生课业负担有效减轻。',
      '职业教育改革持续深化，产教融合培养模式日趋成熟。高等教育内涵式发展稳步推进，人才培养质量显著提升。',
      '教师队伍建设不断加强，教师待遇和社会地位持续提高。教育信息化建设加快，优质教育资源共享水平提升。'
    ],
    culture: [
      '近年来，文化事业繁荣发展，文化自信不断增强，中华优秀传统文化传承弘扬成效显著。',
      '公共文化服务体系不断完善，基层文化设施覆盖面持续扩大。文化惠民工程深入实施，群众文化生活日益丰富。',
      '文化产业快速发展，数字文化产业异军突起。影视、出版、演艺等产业持续繁荣，文化产品供给更加丰富多元。',
      '对外文化交流不断深化，中华文化影响力持续提升。"一带一路"文化交流合作成果丰硕。'
    ],
    social: [
      '民生保障水平稳步提高，人民群众获得感、幸福感、安全感不断增强。',
      '就业形势总体稳定，城镇新增就业目标超额完成。社会保障体系不断完善，覆盖面持续扩大。',
      '医疗卫生事业加快发展，分级诊疗制度逐步建立。基本医疗保险参保率稳定在95%以上。',
      '住房保障力度加大，保障性租赁住房建设加快推进。养老服务体系不断健全，社区养老服务质量提升。'
    ],
    international: [
      '我国坚持高水平对外开放，开放型经济新体制加快构建，国际合作不断深化。',
      '自贸试验区建设取得新成效，制度创新成果不断涌现。海南自由贸易港建设蹄疾步稳。',
      '共建"一带一路"高质量发展，同各方互利合作深入推进。中欧班列开行数量持续增长，国际物流通道更加畅通。',
      '外资准入不断放宽，营商环境持续优化。吸引外资规模保持增长，外资结构不断优化。'
    ],
    rural: [
      '乡村振兴战略深入实施，农业农村现代化扎实推进，乡村面貌发生显著变化。',
      '粮食生产连年丰收，重要农产品供给充足。现代农业加快发展，农业科技进步贡献率持续提高。',
      '农村人居环境整治成效显著，美丽乡村建设深入推进。农村基础设施不断完善，公共服务水平稳步提升。',
      '农民收入持续增长，城乡居民收入差距逐步缩小。农村产业融合发展，新型农业经营主体不断壮大。'
    ]
  }

  // 随机选择几篇新闻
  const selectedNews: NewsArticle[] = []
  const shuffled = [...mockTitles].sort(() => Math.random() - 0.5)

  for (let i = 0; i < Math.min(5, shuffled.length); i++) {
    const news = shuffled[i]
    const content = mockContents[news.category]
    const paragraphs = content.sort(() => Math.random() - 0.5).slice(0, 3 + Math.floor(Math.random() * 2))

    selectedNews.push({
      title: news.title,
      subtitle: news.subtitle,
      content: paragraphs.join('\n\n'),
      category: news.category
    })
  }

  return selectedNews
}

export interface NewsArticle {
  title: string
  subtitle?: string
  content: string
  category: string
}
