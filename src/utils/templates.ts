import { LayoutTemplate, LayoutType } from '../types'

export const layoutTemplates: LayoutTemplate[] = [
  {
    id: 'single-column-news',
    name: '单栏新闻',
    description: '整页单栏布局，适合长篇文章',
    layout: 'single-column',
    blocks: [
      {
        type: 'single-title',
        position: { x: 50, y: 50 },
        size: { width: 700, height: 100 },
        title: {
          main: '示例标题',
          style: 'single-line',
          align: 'center'
        }
      },
      {
        type: 'text-only',
        position: { x: 50, y: 150 },
        size: { width: 700, height: 900 }
      }
    ]
  },
  {
    id: 'two-column-mixed',
    name: '双栏混合',
    description: '左右两栏混合布局，最常见报纸样式',
    layout: 'two-column-horizontal',
    blocks: [
      {
        type: 'double-title',
        position: { x: 20, y: 30 },
        size: { width: 350, height: 120 },
        title: {
          main: '主标题',
          subtitle: '副标题',
          style: 'double-line',
          align: 'left'
        }
      },
      {
        type: 'vertical-title',
        position: { x: 400, y: 30 },
        size: { width: 350, height: 120 },
        title: {
          main: '竖向标题',
          style: 'vertical',
          align: 'center'
        }
      },
      {
        type: 'text-only',
        position: { x: 20, y: 160 },
        size: { width: 350, height: 600 }
      },
      {
        type: 'image-text',
        position: { x: 400, y: 160 },
        size: { width: 350, height: 600 }
      }
    ]
  },
  {
    id: 'three-column-grid',
    name: '三栏网格',
    description: '等分三栏布局，适合短新闻',
    layout: 'three-column',
    blocks: [
      {
        type: 'single-title',
        position: { x: 20, y: 30 },
        size: { width: 220, height: 80 },
        title: {
          main: '新闻一',
          style: 'single-line',
          align: 'center'
        }
      },
      {
        type: 'single-title',
        position: { x: 260, y: 30 },
        size: { width: 220, height: 80 },
        title: {
          main: '新闻二',
          style: 'single-line',
          align: 'center'
        }
      },
      {
        type: 'single-title',
        position: { x: 500, y: 30 },
        size: { width: 220, height: 80 },
        title: {
          main: '新闻三',
          style: 'single-line',
          align: 'center'
        }
      }
    ]
  },
  {
    id: 'four-column-brief',
    name: '四栏简讯',
    description: '四栏布局，适合简讯和图片',
    layout: 'four-column',
    blocks: [
      {
        type: 'text-only',
        position: { x: 20, y: 30 },
        size: { width: 160, height: 200 }
      },
      {
        type: 'text-only',
        position: { x: 190, y: 30 },
        size: { width: 160, height: 200 }
      },
      {
        type: 'text-only',
        position: { x: 360, y: 30 },
        size: { width: 160, height: 200 }
      },
      {
        type: 'text-only',
        position: { x: 530, y: 30 },
        size: { width: 160, height: 200 }
      }
    ]
  },
  {
    id: 'mixed-complex',
    name: '混合复杂',
    description: '混合布局，包含各种区块类型',
    layout: 'mixed-layout',
    blocks: [
      {
        type: 'double-title',
        position: { x: 20, y: 30 },
        size: { width: 450, height: 150 },
        title: {
          main: '重要新闻',
          subtitle: '副标题说明',
          style: 'double-line',
          align: 'left'
        }
      },
      {
        type: 'vertical-title',
        position: { x: 490, y: 30 },
        size: { width: 200, height: 150 },
        title: {
          main: '竖标题',
          style: 'vertical',
          align: 'center'
        }
      },
      {
        type: 'text-only',
        position: { x: 20, y: 190 },
        size: { width: 450, height: 300 }
      },
      {
        type: 'quote',
        position: { x: 490, y: 190 },
        size: { width: 200, height: 300 }
      }
    ]
  }
]

export const getTemplateById = (id: string): LayoutTemplate | undefined => {
  return layoutTemplates.find(template => template.id === id)
}

export const getTemplatesByLayout = (layout: LayoutType): LayoutTemplate[] => {
  return layoutTemplates.filter(template => template.layout === layout)
}