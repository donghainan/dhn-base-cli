const program = require('commander')

const options = () =>
	program
		.version(
			require('../package.json').version,
			'-v --version',
			'查看当前版本号'
		)
		.option('-h --help', '查看帮助信息')
		// .option('i init', '初始化模版')
		.option('l list', '查看模版列表')
		.option('i init <project-name>', '初始化项目')

module.exports = options
