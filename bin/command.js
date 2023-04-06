const program = require('commander')
const chalk = require('chalk')
const fse = require('fs-extra')
const version = require('../package.json').version
const questions = require('./question')
const { projectTemplate, downloadProject } = require('./utils')

const command = () => {
	// 设置版本查看命令
	program.version(version, '-v --version', '查看当前版本号')
	// 初始化项目
	program
		.command('init <project-name>')
		.description('初始化模版')
		.alias('i')
		.action(async (projectName) => {
			if (typeof projectName !== 'string') {
				console.log(
					chalk.red(
						`请输入项目名称，请运行base-cli -h 查看帮助信息${projectName}`
					)
				)
				// 退出程序
				process.exit(1)
			}
			console.log(
				chalk.cyan(
					`👏🏻👏🏻👏🏻欢迎使用医朵云脚手架创建项目，您当前使用的版本号为：${version}，如有问题及时沟通😊😊😊`
				)
			)
			// 判断当前目录下文件夹是否已经存在
			if (fse.existsSync(projectName)) {
				console.log(chalk.red(`❌❌❌ 文件夹已经存在！`))
				// 退出程序
				process.exit(1)
			}
			const { templateType } = await questions()
      console.log(templateType, 'templateTypetemplateTypetemplateType')
			if (templateType === 'h5') {
				await downloadProject(projectTemplate[0], projectName)
			} else if (templateType === 'admin') {
				await downloadProject(projectTemplate[1], projectName)
			} else if (templateType === 'taro') {
				await downloadProject(projectTemplate[2], projectName)
			} else if (templateType === 'uni-app') {
				await downloadProject(projectTemplate[3], projectName)
			} else {
				console.log(chalk.red(`🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️ 模板工程不存在，请联系管理员添加`))
        process.exit(1)
			}
		})
	// 查看所有模板列表
	program
		.command('--list')
		.alias('-l')
		.description('查看模版列表1111')
		.action(() => {
			console.log('查看模版列表成功')
		})

	program.command('*').action(() => {
		console.log(chalk.red('输入的命令行有误，请运行base-cli -h 查看帮助信息'))
	})
	program.parse(process.argv)
}

module.exports = command
