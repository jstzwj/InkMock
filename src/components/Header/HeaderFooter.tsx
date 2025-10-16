import type { HeaderFooterTemplate } from '../../utils/headerFooterTemplates'

interface HeaderProps {
  template: HeaderFooterTemplate
  newspaperName: string
  pageNumber: string
  date: string
}

export const Header = ({ template, newspaperName, pageNumber, date }: HeaderProps) => {
  // 居中样式
  if (template.headerType === 'center') {
    return (
      <div className="text-center border-b-2 border-newspaper-border pb-3 mb-4">
        <h1 className="text-5xl font-bold text-newspaper-headline mb-2 tracking-wider">
          {newspaperName}
        </h1>
      </div>
    )
  }

  // 左标题右版面样式
  if (template.headerType === 'left-right') {
    return (
      <div className="flex justify-between items-center border-b-2 border-newspaper-border pb-3 mb-4">
        <h1 className="text-4xl font-bold text-newspaper-headline tracking-wider">
          {newspaperName}
        </h1>
        <div className="text-right">
          <p className="text-lg font-semibold text-newspaper-text">{pageNumber}</p>
          <p className="text-sm text-newspaper-text opacity-80">{date}</p>
        </div>
      </div>
    )
  }

  // 左版面右标题样式
  if (template.headerType === 'right-left') {
    return (
      <div className="flex justify-between items-center border-b-2 border-newspaper-border pb-3 mb-4">
        <div className="text-left">
          <p className="text-lg font-semibold text-newspaper-text">{pageNumber}</p>
          <p className="text-sm text-newspaper-text opacity-80">{date}</p>
        </div>
        <h1 className="text-4xl font-bold text-newspaper-headline tracking-wider">
          {newspaperName}
        </h1>
      </div>
    )
  }

  return null
}

interface FooterProps {
  template: HeaderFooterTemplate
  newspaperName: string
  pageNumber: string
  date: string
  footerInfo?: {
    newspaperInfo: string
    weatherInfo: string
  }
}

export const Footer = ({ template, newspaperName, pageNumber, date, footerInfo }: FooterProps) => {
  // 无页脚
  if (template.footerType === 'none') {
    return null
  }

  // 单栏页脚（完整信息）
  if (template.footerType === 'single-column' && footerInfo) {
    return (
      <div className="border-t border-newspaper-border pt-2 mt-4">
        <p className="text-xs text-newspaper-text leading-relaxed">
          {footerInfo.newspaperInfo} │ {footerInfo.weatherInfo}
        </p>
      </div>
    )
  }

  // 双栏页脚（分栏显示）
  if (template.footerType === 'double-column' && footerInfo) {
    return (
      <div className="border-t border-newspaper-border pt-2 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <p className="text-xs text-newspaper-text leading-relaxed">
            {footerInfo.newspaperInfo}
          </p>
          <p className="text-xs text-newspaper-text leading-relaxed border-l border-newspaper-border pl-4">
            {footerInfo.weatherInfo}
          </p>
        </div>
      </div>
    )
  }

  // 简单页脚（只有报社信息）
  if (template.footerType === 'simple' && footerInfo) {
    return (
      <div className="border-t border-newspaper-border pt-2 mt-4">
        <p className="text-xs text-newspaper-text text-center">
          {footerInfo.newspaperInfo}
        </p>
      </div>
    )
  }

  // 居中样式（原有的简单样式）
  if (template.footerType === 'center') {
    return (
      <div className="text-center border-t border-newspaper-border pt-3 mt-4">
        <p className="text-sm text-newspaper-text">{date}</p>
      </div>
    )
  }

  // 左日期右版面样式
  if (template.footerType === 'left-right') {
    return (
      <div className="flex justify-between items-center border-t border-newspaper-border pt-3 mt-4">
        <p className="text-sm text-newspaper-text">{date}</p>
        <p className="text-sm font-medium text-newspaper-text">{pageNumber}</p>
      </div>
    )
  }

  // 左版面右日期样式
  if (template.footerType === 'right-left') {
    return (
      <div className="flex justify-between items-center border-t border-newspaper-border pt-3 mt-4">
        <p className="text-sm font-medium text-newspaper-text">{pageNumber}</p>
        <p className="text-sm text-newspaper-text">{date}</p>
      </div>
    )
  }

  return null
}
