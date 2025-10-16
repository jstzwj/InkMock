// 预定义的报纸背景颜色方案
export const newspaperColorSchemes = [
  {
    name: '经典白色',
    weight: 60, // 60% 概率
    backgroundColor: '#ffffff',
    textColor: '#1a1a1a',
    borderColor: '#cccccc'
  },
  {
    name: '泛黄纸张',
    weight: 25, // 25% 概率
    backgroundColor: '#f5f1e8',
    textColor: '#2c2c2c',
    borderColor: '#d4c5a9'
  },
  {
    name: '复古米黄',
    weight: 8, // 8% 概率
    backgroundColor: '#faf8f0',
    textColor: '#2d2d2d',
    borderColor: '#e0d5b7'
  },
  {
    name: '淡米色',
    weight: 5, // 5% 概率
    backgroundColor: '#fefcf6',
    textColor: '#2a2a2a',
    borderColor: '#e8dcc8'
  },
  {
    name: '微黄纸质',
    weight: 2, // 2% 概率
    backgroundColor: '#fcf9f0',
    textColor: '#252525',
    borderColor: '#ddd3bc'
  }
]

// 根据权重随机选择颜色方案
export function getRandomColorScheme() {
  // 计算总权重
  const totalWeight = newspaperColorSchemes.reduce((sum, scheme) => sum + scheme.weight, 0)

  // 生成随机数
  let random = Math.random() * totalWeight

  // 选择颜色方案
  for (const scheme of newspaperColorSchemes) {
    random -= scheme.weight
    if (random <= 0) {
      return {
        backgroundColor: scheme.backgroundColor,
        textColor: scheme.textColor,
        borderColor: scheme.borderColor
      }
    }
  }

  // 默认返回第一个方案
  return {
    backgroundColor: newspaperColorSchemes[0].backgroundColor,
    textColor: newspaperColorSchemes[0].textColor,
    borderColor: newspaperColorSchemes[0].borderColor
  }
}
