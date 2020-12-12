export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ course: 123 }))

  // 简化版
  // res.status(200).json({ course: 123 })
}
