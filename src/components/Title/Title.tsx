import type { TitleConfig } from '../../types'

interface TitleProps {
  config: TitleConfig
  className?: string
}

export const Title = ({ config, className = '' }: TitleProps) => {
  const { main, subtitle, style, align } = config

  const getAlignClass = () => {
    switch (align) {
      case 'left':
        return 'text-left'
      case 'center':
        return 'text-center'
      case 'right':
        return 'text-right'
      default:
        return 'text-left'
    }
  }

  const getStyleClass = () => {
    switch (style) {
      case 'single-line':
        return 'text-3xl font-bold'
      case 'double-line':
        return 'text-4xl font-bold border-b-2 border-newspaper-border pb-2'
      case 'vertical':
        return 'writing-mode-vertical text-2xl font-bold'
      case 'bold':
        return 'text-3xl font-black'
      case 'underline':
        return 'text-3xl font-bold underline'
      default:
        return 'text-2xl font-semibold'
    }
  }

  if (style === 'vertical') {
    return (
      <div className={`flex justify-center items-center ${className}`}>
        <h1 className={`${getStyleClass()} text-newspaper-headline`}
            style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
          {main}
        </h1>
      </div>
    )
  }

  return (
    <div className={`${getAlignClass()} ${className}`}>
      <h1 className={`${getStyleClass()} text-newspaper-headline mb-2`}>
        {main}
      </h1>
      {subtitle && (
        <h2 className="text-xl text-newspaper-text opacity-80 font-medium">
          {subtitle}
        </h2>
      )}
    </div>
  )
}
