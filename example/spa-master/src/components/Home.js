import React from 'react'
import { fetchHome } from '../core/api'
import useData from '../core/useData'

const Home = ({staticContext}) => {
  const [data, setData] = useData(staticContext, { title: '', desc: ''}, fetchHome)
  console.log('staticContext', staticContext, data)
  return (
    <main>
      <h1>Home Page</h1>
      <p>{JSON.stringify(data)}</p>
    </main>
  )
}

Home.getData = fetchHome
export default Home