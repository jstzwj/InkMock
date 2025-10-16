import { useState } from 'react'
import { NewspaperLayout } from './components/Layout'
import { NewspaperConfig } from './types'
import { layoutTemplates } from './utils/templates'

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(0)

  // 创建示例配置
  const createExampleConfig = (): NewspaperConfig => {
    const template = layoutTemplates[selectedTemplate]

    return {
      layout: template.layout,
      pageSize: 'a4',
      blocks: template.blocks.map((block, index) => ({
        ...block,
        id: `block-${index}`,
        content: {
          text: '这是示例文本内容。报纸排版是一门艺术，需要平衡美观与可读性。传统报纸通常采用多栏布局，这样可以更好地利用空间，同时让读者的视线更容易追踪。标题要醒目突出，正文要清晰易读。在数字化时代，我们依然可以从传统报纸排版中学到很多宝贵经验。',
          columns: 1,
          fontSize: 14,
          lineHeight: 1.8
        }
      })),
      style: {
        fontFamily: 'Times New Roman, serif',
        backgroundColor: '#f5f1e8',
        textColor: '#2c2c2c',
        borderColor: '#d4c5a9'
      }
    }
  }

  const [config, setConfig] = useState<NewspaperConfig>(createExampleConfig())

  const handleTemplateChange = (index: number) => {
    setSelectedTemplate(index)
    setConfig(createExampleConfig())
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* 头部 */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            InkMock 报纸排版生成器
          </h1>
          <p className="text-gray-600">
            自动生成报纸排版，用于 OCR 模型训练数据
          </p>
        </div>

        {/* 控制面板 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">选择布局模板</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {layoutTemplates.map((template, index) => (
              <button
                key={template.id}
                onClick={() => handleTemplateChange(index)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedTemplate === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-300'
                }`}
              >
                <h3 className="font-semibold text-sm mb-1">{template.name}</h3>
                <p className="text-xs text-gray-600">{template.description}</p>
              </button>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              导出为图片
            </button>
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              批量生成
            </button>
            <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              自定义配置
            </button>
          </div>
        </div>

        {/* 预览区域 */}
        <div className="flex justify-center">
          <div className="scale-75 origin-top">
            <NewspaperLayout config={config} />
          </div>
        </div>

        {/* 使用说明 */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">使用说明</h2>
          <div className="space-y-2 text-gray-700">
            <p>1. 选择上方的布局模板，预览不同的报纸排版样式</p>
            <p>2. 点击"导出为图片"可以将当前报纸页面保存为图片</p>
            <p>3. 使用"批量生成"功能可以一次性生成多个训练样本</p>
            <p>4. 点击"自定义配置"可以详细调整每个区块的参数</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
