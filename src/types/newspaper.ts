export interface NewspaperConfig {
  layout: LayoutType
  pageSize: PageSize
  blocks: Block[]
  style?: GlobalStyle
  header?: HeaderFooterConfig
}

export interface HeaderFooterConfig {
  newspaperName: string
  pageNumber: string
  date: string
  template: {
    headerType: 'center' | 'left-right' | 'right-left'
    footerType: 'center' | 'left-right' | 'right-left' | 'single-column' | 'double-column' | 'simple' | 'none'
  }
  footerInfo?: {
    newspaperInfo: string
    weatherInfo: string
  }
}

export interface Block {
  id: string
  type: BlockType
  position: Position
  size: Size
  title?: TitleConfig
  content: ContentConfig
  style?: BlockStyle
}

export interface Position {
  x: number
  y: number
}

export interface Size {
  width: number
  height: number
}

export type LayoutType =
  | 'single-column'
  | 'two-column-horizontal'
  | 'two-column-vertical'
  | 'three-column'
  | 'four-column'
  | 'mixed-layout'

export type PageSize =
  | 'a4'
  | 'a3'
  | 'letter'
  | 'tabloid'

export type BlockType =
  | 'single-title'
  | 'double-title'
  | 'vertical-title'
  | 'text-only'
  | 'image-text'
  | 'quote'

export interface TitleConfig {
  main?: string
  subtitle?: string
  style: TitleStyle
  align: TextAlign
}

export type TitleStyle =
  | 'single-line'
  | 'double-line'
  | 'vertical'
  | 'bold'
  | 'underline'

export type TextAlign = 'left' | 'center' | 'right'

export interface ContentConfig {
  text?: string
  images?: ImageConfig[]
  columns?: number
  fontSize?: number
  lineHeight?: number
}

export interface ImageConfig {
  url: string
  caption?: string
  width?: number
  height?: number
}

export interface GlobalStyle {
  fontFamily?: string
  backgroundColor?: string
  textColor?: string
  borderColor?: string
}

export interface BlockStyle {
  backgroundColor?: string
  borderColor?: string
  borderWidth?: number
  padding?: number
  margin?: number
}

export interface LayoutTemplate {
  id: string
  name: string
  description: string
  layout: LayoutType
  blocks: Omit<Block, 'id' | 'content'>[]
}