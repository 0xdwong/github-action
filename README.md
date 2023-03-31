# GitHub Actions 简介
![](https://img.shields.io/badge/license-MIT-green)
[![codecov](https://codecov.io/gh/0xdwong/github-action/branch/main/graph/badge.svg?token=YNOWFE7ZVH)](https://codecov.io/gh/0xdwong/github-action)


## GitHub Actions 是什么
GitHub Actions 是 GitHub 的持续集成服务，于2018年10月推出。

> GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动化构建、测试和部署流程。


CI（持续集成）：在软件开发过程中，将开发人员的代码持续集成到主干代码库中，同时进行相关自动化测试和构建，以确保代码质量和稳定性

CD（持续交付/部署）：将已经通过了测试和构建的软件版本自动发布到生产环境中

CI/CD 常用来指称这种持续集成和持续交付的一体化流程，使得软件的开发、测试、部署过程更加自动化、高效、安全


## 基本概念
- Workflow （工作流程）：一个可配置的自动化过程，它将运行一个或多个作业。

- Events （事件）：触发工作流程运行的特定活动：比如 push、pull_request、workflow_dispatch、schedule 等

- Jobs （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务

- steps（步骤）：每个 job 由多个 step 构成，一步步完成。 每个步骤要么是一个将要执行的 shell 脚本，要么是一个将要运行的动作

- Actions （动作）：每个 step 可以依次执行一个或多个命令（action）

- Runners （运行器）：运行器是触发工作流时运行工作流的服务器。 GitHub 提供 Ubuntu Linux、Microsoft Windows 和 macOS 运行器


详细解释见: [https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions](https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions)

## GitHub Actions 使用
- 在项目仓库新建 .github/workflows目录。生成 workflow 文件
- 编写 xx.yml 文件，添加工作流程、任务、步骤、动作等
- GitHub 平台发现了 workflow 文件以后，就会自动运行
- 可以在网站上实时查看运行日志


### workflow 文件
GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的 .github/workflows 目录。

workflow 文件采用 YAML 格式，文件名可以任意取，但是后缀名统一为 .yml/.yaml

以下是一个简单的示例 YAML 文件，该文件定义了一个在每次 push 到主分支时自动运行的工作流，以便测试和构建项目：

ci.yml
```
name: Build and Test
on:
  push:
    branches: [ main ]
jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Build
        run: npm install && npm run build

      - name: Test
        run: npm run test
```
此 YAML 文件执行以下操作：
- 设置工作流名称为“Build and Test”
- 根据 push 事件的主分支自动触发工作流
- 在一个名为“build-and-test”的工作区中运行 Ubuntu
- 步骤 1：执行 checkout 操作，从 GitHub 存储库中拉取最新代码
- 步骤 2：在安装并构建应用程序
- 步骤 3：在应用程序成功构建后，运行“Test”


### 更多例子
- [提交到main分支时自动测试，生成测试报告](./.github/workflows/contract.yaml)
- [定时运行脚本检测线上服务心跳](./.github/workflows/timer.yaml)
- [自动部署 nodejs 项目](./.github/workflows/nodejs.yaml)
- [手动触发更新部署 nodejs 项目](./.github/workflows/manual.yaml)
- [自动打包部署 vue 项目](./.github/workflows/vue.yaml)


## 总结

GitHub Actions 是一种强大的工具，可以帮助开发者自动化开发流程，并提高代码质量和可靠性。通过它，我们可以定义定制工作流并自动运行，在很短的时间内完成复杂的任务。GitHub Actions 可以大大提高开发效率。



## 参考：
- [GitHub Actions 官方文档](https://docs.github.com/zh/actions)
- [GitHub Actions 入门教程](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)