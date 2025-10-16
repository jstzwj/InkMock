import { useEffect, useState } from 'react'
import { NewspaperLayout } from './components/Layout'
import type { NewspaperConfig } from './types'
import { generateMockNews } from './utils/newsGenerator'
import { getRandomColorScheme } from './utils/colorSchemes'
import {
  getRandomHeaderFooterTemplate,
  getRandomNewspaperName,
  getRandomPageNumber,
  formatDate
} from './utils/headerFooterTemplates'
import { generateFooterInfo } from './utils/footerInfo'

function App() {
  const [config, setConfig] = useState<NewspaperConfig | null>(null)

  useEffect(() => {
    // 生成新闻数据
    const newsArticles = generateMockNews()

    // 获取随机颜色方案
    const colorScheme = getRandomColorScheme()

    // 获取随机页眉页脚模板
    const headerFooterTemplate = getRandomHeaderFooterTemplate()
    const newspaperName = getRandomNewspaperName()
    const pageNumber = getRandomPageNumber()
    const date = formatDate(new Date())

    // 生成页脚信息（如果页脚类型需要）
    const footerInfo = ['single-column', 'double-column', 'simple'].includes(
      headerFooterTemplate.footerType
    )
      ? generateFooterInfo()
      : undefined

    // 创建报纸配置
    const newspaperConfig: NewspaperConfig = {
      layout: 'two-column-horizontal',
      pageSize: 'a4',
      blocks: [],
      style: {
        fontFamily: 'SimSun, serif',
        backgroundColor: colorScheme.backgroundColor,
        textColor: colorScheme.textColor,
        borderColor: colorScheme.borderColor
      },
      header: {
        newspaperName,
        pageNumber,
        date,
        template: headerFooterTemplate,
        footerInfo
      }
    }

    // 根据新闻数量动态生成区块
    if (newsArticles.length >= 1) {
      // 左侧主标题新闻
      newspaperConfig.blocks.push({
        id: 'block-1',
        type: 'double-title',
        position: { x: 30, y: 20 },
        size: { width: 340, height: 400 },
        title: {
          main: newsArticles[0].title,
          subtitle: newsArticles[0].subtitle,
          style: 'double-line',
          align: 'left'
        },
        content: {
          text: newsArticles[0].content,
          columns: 1,
          fontSize: 13,
          lineHeight: 1.8
        }
      })
    }

    if (newsArticles.length >= 2) {
      // 右侧竖标题新闻
      newspaperConfig.blocks.push({
        id: 'block-2',
        type: 'vertical-title',
        position: { x: 390, y: 20 },
        size: { width: 300, height: 200 },
        title: {
          main: newsArticles[1].title,
          style: 'vertical',
          align: 'center'
        },
        content: {
          text: newsArticles[1].content.split('\n\n')[0],
          columns: 1,
          fontSize: 12,
          lineHeight: 1.6
        }
      })
    }

    if (newsArticles.length >= 3) {
      // 左下角新闻
      newspaperConfig.blocks.push({
        id: 'block-3',
        type: 'single-title',
        position: { x: 30, y: 440 },
        size: { width: 340, height: 300 },
        title: {
          main: newsArticles[2].title,
          style: 'single-line',
          align: 'left'
        },
        content: {
          text: newsArticles[2].content,
          columns: 2,
          fontSize: 12,
          lineHeight: 1.7
        }
      })
    }

    if (newsArticles.length >= 4) {
      // 右中新闻
      newspaperConfig.blocks.push({
        id: 'block-4',
        type: 'single-title',
        position: { x: 390, y: 240 },
        size: { width: 300, height: 220 },
        title: {
          main: newsArticles[3].title,
          style: 'bold',
          align: 'center'
        },
        content: {
          text: newsArticles[3].content.split('\n\n').slice(0, 2).join('\n\n'),
          columns: 1,
          fontSize: 11,
          lineHeight: 1.6
        }
      })
    }

    if (newsArticles.length >= 5) {
      // 右下角引用
      const quoteText = newsArticles[4].content.split('\n\n')[0]
      newspaperConfig.blocks.push({
        id: 'block-5',
        type: 'quote',
        position: { x: 390, y: 480 },
        size: { width: 300, height: 260 },
        content: {
          text: `"${quoteText}"`,
          fontSize: 14,
          lineHeight: 1.8
        }
      })
    }

    setConfig(newspaperConfig)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 py-8 flex items-center justify-center">
      {config && <NewspaperLayout config={config} />}
    </div>
  )
}

export default App
