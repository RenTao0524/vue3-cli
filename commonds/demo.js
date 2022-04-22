const inquirer = require("inquirer")

const promptList = [{
    type: 'list',
    message: '请选择一种水果:',
    name: 'fruit',
    choices: [
        "Apple",
        "Pear",
        "Banana"
    ],
    filter: function (val) { // 使用filter将回答变为小写
        return val.toLowerCase();
    }
},
{
  type: 'input',
  message: '设置一个用户名:',
  name: 'name',
  default: "test_user" // 默认值
},
];

async function run() {
  try {
    const answers = await inquirer.prompt(promptList)
    console.log("answers:", answers)
  } catch (error) {
    console.error('error info:', error)
  }
}

run()
