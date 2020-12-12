// 全捕获API路由
export default (req, res) => {
  const { query: { slug } } = req

  res.status(200).json({ '全捕获': slug })
}
