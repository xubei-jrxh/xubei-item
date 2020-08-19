const express = require('express')
const app = express()

// 详情页中间件
const detailList = require('./datas/detail.json')
app.get('/detail/:goodsId', (req, res) => {
  const { goodsId } = req.params
  // console.log(typeof goodsId)
  const detail = detailList.find((item) => item.id === goodsId)
  // console.log(detail)
  if (detail) {
    res.json({
      code: 200,
      data: detail,
    })
  } else {
    res.json({
      code: 404,
      data: {},
    })
  }
})
app.listen(8000, () => {
  console.log('启动成功')
})
