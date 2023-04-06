const download = require('download-git-repo')
const ora = require('ora')
const spinner = ora()
const chalk = require('chalk')
/**
 * 项目模版地址
 */
const projectTemplate = ['donghainan/request-utils.git', 'donghainan/AS-UI']

/**
 *
 * @param {远程地址} projectUrl
 * @param {下载的文件名} projectName
 */
const downloadProject = async (projectUrl, projectName) => {
	spinner.start(chalk.yellow('正在拉取模板工程，请稍后...'))
	download(projectUrl, projectName, { clone: true }, (err) => {
		spinner.stop()
		err
			? chalk.red(err)
			: (chalk.green('项目创建成功'),
			  chalk.blue(`cd ${projectName}`),
			  chalk.blue('npm install'),
			  chalk.blue('npm run start'))
	})
}

// 模版类型
const templateList = ['h5', 'admin', 'taro', 'uni-app']

module.exports = {
	projectTemplate,
	downloadProject,
  templateList
}
