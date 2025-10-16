// 报社地址信息
export const newspaperAddresses = [
  '北京市朝阳区',
  '北京市东城区',
  '北京市西城区',
  '上海市黄浦区',
  '广州市天河区',
  '深圳市福田区'
]

// 电话号码生成
export function generatePhoneNumber(): string {
  const mainLine = Math.floor(Math.random() * 900000) + 100000
  const subLine = Math.floor(Math.random() * 900000) + 100000
  return `${mainLine}、${subLine}`
}

// 电报挂号生成
export function generateTelegramNumber(): string {
  return String(Math.floor(Math.random() * 9000) + 1000)
}

// 版数选项
export const pageCount = ['四版', '六版', '八版', '十二版', '十六版']

// 价格信息
export const priceInfo = [
  { monthly: '一元五角', single: '五分' },
  { monthly: '二元', single: '一角' },
  { monthly: '二元五角', single: '一角五分' },
  { monthly: '三元', single: '二角' }
]

// 天气信息
export const weatherConditions = [
  '晴', '多云', '阴', '小雨', '小雪', '雨夹雪', '晴转多云', '多云转阴', '阴转晴'
]

export const windDirections = [
  '东', '南', '西', '北', '东北', '东南', '西北', '西南'
]

export const windLevels = [
  '一二级', '二三级', '三四级', '四五级', '五六级', '三四级转五六级', '五六级转二级'
]

// 生成随机天气信息
export function generateWeatherInfo(): string {
  const city = ['北京', '上海', '广州', '深圳', '天津', '重庆'][Math.floor(Math.random() * 6)]

  const dayCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)]
  const dayWindDirection = windDirections[Math.floor(Math.random() * windDirections.length)]
  const dayWindLevel = windLevels[Math.floor(Math.random() * windLevels.length)]
  const maxTemp = Math.floor(Math.random() * 30) - 5

  const nightCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)]
  const nightWindDirection = windDirections[Math.floor(Math.random() * windDirections.length)]
  const nightWindLevel = windLevels[Math.floor(Math.random() * windLevels.length)]
  const minTemp = maxTemp - Math.floor(Math.random() * 10) - 5

  const tempSuffix = minTemp < 0 || maxTemp < 0 ? '°' : '°'
  const maxTempStr = maxTemp < 0 ? `零下${Math.abs(maxTemp)}${tempSuffix}` : `${maxTemp}${tempSuffix}`
  const minTempStr = minTemp < 0 ? `零下${Math.abs(minTemp)}${tempSuffix}` : `${minTemp}${tempSuffix}`

  return `${city}城区天气预报 白天 ${dayCondition} 风向 ${dayWindDirection} 风力 ${dayWindLevel} 最高气温 ${maxTempStr} 夜间 ${nightCondition} 风向 ${nightWindDirection} 风力 ${nightWindLevel} 最低气温 ${minTempStr}`
}

// 生成完整的页脚信息
export function generateFooterInfo() {
  const address = newspaperAddresses[Math.floor(Math.random() * newspaperAddresses.length)]
  const telegram = generateTelegramNumber()
  const phone = generatePhoneNumber()
  const pages = pageCount[Math.floor(Math.random() * pageCount.length)]
  const price = priceInfo[Math.floor(Math.random() * priceInfo.length)]
  const weather = generateWeatherInfo()

  return {
    newspaperInfo: `本报社址：${address}  电报挂号${telegram}  电话中继线${phone}  定价每月${price.monthly}  今日${pages}  零售价每份${price.single}`,
    weatherInfo: weather
  }
}

// 页脚布局类型
export type FooterLayoutType = 'single-column' | 'double-column' | 'simple' | 'none'

// 随机选择页脚布局
export function getRandomFooterLayout(): FooterLayoutType {
  const layouts: FooterLayoutType[] = ['single-column', 'double-column', 'simple', 'none']
  const weights = [40, 35, 20, 5] // 单栏40%，双栏35%，简单20%，无页脚5%

  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0)
  let random = Math.random() * totalWeight

  for (let i = 0; i < layouts.length; i++) {
    random -= weights[i]
    if (random <= 0) {
      return layouts[i]
    }
  }

  return 'single-column'
}
