/** 
 * https://www.babeljs.cn/docs/babel-register
 * https://babeljs.io/docs/en/babel-preset-react#via-node-api
 */
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
})
const express = require('express');
const app = express();
const appRouter = require('./server/appRouter')
const apiRouter = require('./server/apiRouter')

app.use("/api/", apiRouter);
app.use("/build", express.static('build'));
app.use("/", appRouter);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
