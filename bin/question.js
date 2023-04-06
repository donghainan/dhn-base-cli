const inquirer = require('inquirer')
const { templateList } = require('./utils')
const questions = [
  {
    type: 'list',
    name: 'templateType',
    message: '请选择项目类型',
    default: 'h5',
    choices: templateList
  }
]

module.exports = () => inquirer.prompt(questions)
