export default function Home() {
  // get请求
  fetch('http://localhost:3000/api/method')
    .then(res => res.json())
    .then(json => alert(json.method))

  // post请求
  // fetch('http://localhost:3000/api/method', { method: 'POST' })
  //   .then(res => res.json())
  //   .then(json => alert(json.method))

  return (
    <h1>Get & Post</h1>
  )
}