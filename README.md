### 单元测试
1. test01
  - mocha执行单个文件， node_modules/mocha/bin/mocha 文件名
  - (chai断言库网站)[https://www.chaijs.com]
  - (chai博库)[https://www.jianshu.com/p/f200a75a15d2/]
  - (mocha命令)[https://www.cnblogs.com/wjlbk/p/12633321.html]
  - --recursive : 执行test下所有的js文件，深层次检索
  - npm升级到指定版本 npm install -g npm@5.6.0
2. test02
  - only\skip : it.only()/ describe.only() :只执行一个，可以多个only
  - mocha函数钩子
  - 异步测试  测试套件设置：this.timeout(10000);
  - node-fetch第三方库
3. test03
  - 浏览器中运行测试脚本，....mocha init 文件名
  - es6 模块化构建无法走通

#### mocha命令
1. --recursive： 行test下所有的js文件，深层次检索
2. --timeout 5000 : 设置超时时间为5000毫秒 
3. --slow 5000 : 设置异步高亮显示时长