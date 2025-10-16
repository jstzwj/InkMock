import type { NewspaperConfig } from '../../types'
import { ContentBlock } from '../Block'

interface NewspaperLayoutProps {
  config: NewspaperConfig
  className?: string
}

export const NewspaperLayout = ({ config, className = '' }: NewspaperLayoutProps) => {
  const { pageSize, blocks, style } = config

  const getPageSizeClass = () => {
    switch (pageSize) {
      case 'a4':
        return 'w-[210mm] h-[297mm]'
      case 'a3':
        return 'w-[297mm] h-[420mm]'
      case 'letter':
        return 'w-[8.5in] h-[11in]'
      case 'tabloid':
        return 'w-[11in] h-[17in]'
      default:
        return 'w-[210mm] h-[297mm]'
    }
  }

  const getGlobalStyle = () => ({
    fontFamily: style?.fontFamily || 'Times New Roman, serif',
    backgroundColor: style?.backgroundColor || '#f5f1e8',
    color: style?.textColor || '#2c2c2c',
    borderColor: style?.borderColor || '#d4c5a9'
  })

  return (
    <div className={`newspaper-page bg-white shadow-2xl ${getPageSizeClass()} ${className}`}
         style={getGlobalStyle()}>
      {/* 报纸边框 */}
      <div className="h-full border-2 border-newspaper-border p-8">
        {/* 报纸页眉 */}
        <div className="mb-6 text-center border-b border-newspaper-border pb-4">
          <h1 className="text-4xl font-bold text-newspaper-headline mb-2">
            示例报纸
          </h1>
          <p className="text-sm text-newspaper-text">
            {new Date().toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long'
            })}
          </p>
        </div>

        {/* 内容区块 */}
        <div className="relative" style={{ height: 'calc(100% - 120px)' }}>
          {blocks.map((block) => (
            <div
              key={block.id}
              className="absolute"
              style={{
                left: `${block.position.x}px`,
                top: `${block.position.y}px`,
                width: `${block.size.width}px`,
                height: `${block.size.height}px`
              }}
            >
              <ContentBlock block={block} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
