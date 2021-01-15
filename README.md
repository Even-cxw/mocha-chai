### 单元测试
1. test01
  - mocha执行单个文件， node_modules/mocha/bin/mocha 文件名
  - (chai断言库网站)[https://www.chaijs.com]
  - (chai博库)[https://www.jianshu.com/p/f200a75a15d2/]
  - (mocha命令)[https://www.cnblogs.com/wjlbk/p/12633321.html]
  - --recursive : 执行test下所有的js文件，深层次检索
  - npm升级到指定版本 npm install -g npm@5.6.0
2. [test02](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)
  - only\skip : it.only()/ describe.only() :只执行一个，可以多个only
  - mocha函数钩子
  - 异步测试  测试套件设置：this.timeout(10000);
  - node-fetch第三方库
  - mochawesome 插件，生成漂亮的html测试报表
  - mocha配置命令文件 mocha.opts 未生效
3. test03
  - 浏览器中运行测试脚本，....mocha init 文件名
4. test04
  - istanbul 插件 

#### mocha命令
1. --recursive： 行test下所有的js文件，深层次检索
2. --timeout 5000 : 设置超时时间为5000毫秒 
3. --slow 5000 : 设置异步高亮显示时长
4. --bail : 只要有一个测试永烈没通过，就停止测试
5. --grep : 参数用于搜索测试用例的名称（即it块的第一个参数），然后只执行匹配的测试用例。

#### babel理解与应用
 --compilers js:babel-core/regist
1. @babel/core： 把js代码分析成ast
  - ast(Abstract Syntax Tree):  是一种标准的树结构，将函数等拆分成对象的形式
  - @babel/cli: 命令集成工具
  - @babel/preset-env: es6转码核心

#### 代码覆盖率
- 行覆盖率(line coverage) : 是否每一行都执行？
- 函数覆盖率(function coverage)：是否每个函数都执行？
- 分支覆盖率(branch coverage)：是否每个if代码块都执行？
- 语句覆盖率(statement coverage)：是否每个语句都执行？