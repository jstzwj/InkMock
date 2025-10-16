# 贡献指南

感谢您对 InkMock 项目的关注！我们欢迎任何形式的贡献。

## 如何贡献

### 报告 Bug

如果您发现了 Bug，请：

1. 在 Issues 中搜索是否已有相关问题
2. 如果没有，创建新的 Issue，包含：
   - 清晰的标题和描述
   - 复现步骤
   - 期望的行为
   - 实际的行为
   - 截图（如果适用）
   - 环境信息（操作系统、浏览器版本等）

### 提出新功能

如果您有新功能的想法：

1. 先在 Issues 中讨论您的想法
2. 等待维护者反馈
3. 获得批准后再开始开发

### 提交代码

#### 开发流程

1. **Fork 项目**
   ```bash
   # 在 GitHub 上 Fork 本项目
   ```

2. **克隆到本地**
   ```bash
   git clone https://github.com/YOUR_USERNAME/InkMock.git
   cd InkMock
   ```

3. **安装依赖**
   ```bash
   npm install
   ```

4. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

5. **开发和测试**
   ```bash
   npm run dev  # 启动开发服务器
   npm run lint # 检查代码规范
   ```

6. **提交代码**
   ```bash
   git add .
   git commit -m "feat: 添加某某功能"
   # 或
   git commit -m "fix: 修复某某问题"
   ```

7. **推送到远程**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **创建 Pull Request**
   - 在 GitHub 上创建 Pull Request
   - 填写 PR 模板
   - 等待代码审查

#### 提交信息规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

- `feat:` 新功能
- `fix:` Bug 修复
- `docs:` 文档更新
- `style:` 代码格式（不影响代码运行）
- `refactor:` 重构
- `perf:` 性能优化
- `test:` 测试相关
- `chore:` 构建过程或辅助工具的变动

示例：
```
feat: 添加三栏布局支持
fix: 修复标题换行问题
docs: 更新 README 使用说明
```

#### 代码规范

- 使用 TypeScript 编写代码
- 遵循 ESLint 规则
- 使用 Prettier 格式化代码
- 添加必要的注释
- 保持代码简洁清晰

```bash
# 格式化代码
npm run format

# 检查代码规范
npm run lint
```

#### Pull Request 指南

一个好的 PR 应该：

- 解决一个明确的问题
- 包含清晰的描述
- 代码变更尽量小
- 通过所有检查
- 有清晰的提交历史

### 项目结构

在贡献代码前，请了解项目结构：

```
src/
├── components/     # React 组件
│   ├── Layout/     # 布局相关组件
│   ├── Block/      # 内容区块组件
│   └── Title/      # 标题组件
├── types/          # TypeScript 类型定义
├── hooks/          # 自定义 Hooks
└── utils/          # 工具函数
```

### 添加新的布局模板

如果要添加新的布局模板：

1. 在 `src/types/` 中定义类型
2. 在 `src/components/Layout/` 中实现组件
3. 在配置文件中注册模板
4. 添加使用示例
5. 更新文档

### 添加新的内容区块

如果要添加新的内容区块类型：

1. 在 `src/types/` 中定义区块类型
2. 在 `src/components/Block/` 中实现组件
3. 更新区块工厂函数
4. 添加使用示例
5. 更新文档

## 开发建议

- 在提交 PR 前先拉取最新代码
- 保持代码风格一致
- 添加适当的错误处理
- 考虑边界情况
- 编写可读性强的代码
- 及时响应代码审查意见

## 行为准则

- 尊重所有贡献者
- 使用友好和包容的语言
- 接受建设性批评
- 关注对社区最有利的事情

## 获取帮助

如果您有任何问题：

- 查看 [README.md](./README.md)
- 搜索已有的 Issues
- 在 Issues 中提问
- 查看项目 Wiki（如果有）

## 许可

提交代码即表示您同意您的贡献将按照项目的 MIT 许可证进行许可。

---

再次感谢您的贡献！
