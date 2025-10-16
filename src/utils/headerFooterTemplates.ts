export interface HeaderFooterTemplate {
  id: string
  name: string
  headerType: 'center' | 'left-right' | 'right-left'
  footerType: 'center' | 'left-right' | 'right-left' | 'single-column' | 'double-column' | 'simple' | 'none'
}

// 报纸名称列表
export const newspaperNames = [
  '人民日报',
  '光明日报',
  '经济日报',
  '科技日报',
  '中国青年报',
  '工人日报',
  '农民日报',
  '法制日报',
  '环球时报',
  '参考消息'
]

// 版面选项
export const pageNumbers = [
  '第01版',
  '第02版',
  '第03版',
  '第04版',
  '头版',
  '要闻版',
  '综合版',
  '财经版'
]

// 页眉页脚模板配置
export const headerFooterTemplates: HeaderFooterTemplate[] = [
  {
    id: 'template-1',
    name: '居中标题-单栏页脚',
    headerType: 'center',
    footerType: 'single-column'
  },
  {
    id: 'template-2',
    name: '居中标题-双栏页脚',
    headerType: 'center',
    footerType: 'double-column'
  },
  {
    id: 'template-3',
    name: '居中标题-简单页脚',
    headerType: 'center',
    footerType: 'simple'
  },
  {
    id: 'template-4',
    name: '左标题右版面-单栏页脚',
    headerType: 'left-right',
    footerType: 'single-column'
  },
  {
    id: 'template-5',
    name: '左标题右版面-双栏页脚',
    headerType: 'left-right',
    footerType: 'double-column'
  },
  {
    id: 'template-6',
    name: '左标题右日期-简单页脚',
    headerType: 'left-right',
    footerType: 'simple'
  },
  {
    id: 'template-7',
    name: '左版面右标题-双栏页脚',
    headerType: 'right-left',
    footerType: 'double-column'
  },
  {
    id: 'template-8',
    name: '左版面右标题-单栏页脚',
    headerType: 'right-left',
    footerType: 'single-column'
  },
  {
    id: 'template-9',
    name: '居中标题-居中日期（传统）',
    headerType: 'center',
    footerType: 'center'
  },
  {
    id: 'template-10',
    name: '左标题右日期-无页脚',
    headerType: 'left-right',
    footerType: 'none'
  }
]

// 随机选择模板
export function getRandomHeaderFooterTemplate(): HeaderFooterTemplate {
  const randomIndex = Math.floor(Math.random() * headerFooterTemplates.length)
  return headerFooterTemplates[randomIndex]
}

// 随机选择报纸名称
export function getRandomNewspaperName(): string {
  const randomIndex = Math.floor(Math.random() * newspaperNames.length)
  return newspaperNames[randomIndex]
}

// 随机选择版面
export function getRandomPageNumber(): string {
  const randomIndex = Math.floor(Math.random() * pageNumbers.length)
  return pageNumbers[randomIndex]
}

// 格式化日期
export function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const weekday = weekdays[date.getDay()]

  return `${year}年${month}月${day}日 ${weekday}`
}
