import type { Block } from '../../types'
import { Title } from '../Title'

interface ContentBlockProps {
  block: Block
  className?: string
}

export const ContentBlock = ({ block, className = '' }: ContentBlockProps) => {
  const { type, title, content, style } = block

  const getBlockStyle = () => {
    return {
      backgroundColor: style?.backgroundColor || 'transparent',
      borderColor: style?.borderColor || '#d4c5a9',
      borderWidth: style?.borderWidth ? `${style.borderWidth}px` : '0',
      padding: style?.padding ? `${style.padding}px` : '16px',
      margin: style?.margin ? `${style.margin}px` : '0'
    }
  }

  const renderText = () => {
    const columns = content.columns || 1
    const fontSize = content.fontSize || 14
    const lineHeight = content.lineHeight || 1.6

    return (
      <div
        className="text-newspaper-text"
        style={{
          columnCount: columns,
          columnGap: '20px',
          fontSize: `${fontSize}px`,
          lineHeight
        }}
      >
        {content.text || '这里是正文内容。可以填充多段文字，支持多栏布局。报纸排版讲究整洁美观，文字应该清晰可读。每个段落之间应该有适当的间距，以提高可读性。'}
      </div>
    )
  }

  const renderImageText = () => {
    return (
      <div className="space-y-4">
        {content.images && content.images.map((img, index) => (
          <div key={index} className="border border-newspaper-border">
            <div className="bg-gray-200 flex items-center justify-center"
                 style={{ height: img.height || '200px' }}>
              <span className="text-gray-500">图片占位</span>
            </div>
            {img.caption && (
              <p className="text-sm text-center text-newspaper-text py-2">
                {img.caption}
              </p>
            )}
          </div>
        ))}
        {renderText()}
      </div>
    )
  }

  const renderQuote = () => {
    return (
      <div className="border-l-4 border-newspaper-headline pl-4 italic bg-gray-50">
        <p className="text-lg text-newspaper-text leading-relaxed">
          {content.text || '"这里是引用内容或重要语句。"'}
        </p>
      </div>
    )
  }

  return (
    <div
      className={`content-block ${className}`}
      style={getBlockStyle()}
    >
      {title && type !== 'text-only' && (
        <Title config={title} className="mb-4" />
      )}

      {type === 'image-text' && renderImageText()}
      {type === 'quote' && renderQuote()}
      {(type === 'single-title' || type === 'double-title' || type === 'vertical-title' || type === 'text-only') && renderText()}
    </div>
  )
}
