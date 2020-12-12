import React from 'react'
import { fetchUser } from '../core/api'
import useData from '../core/useData'

const User = ({ staticContext }) => {
  const [data, setData] = useData(staticContext, {}, fetchUser)
  return (
    <main>
      <h1>User Page</h1>
      <p>{JSON.stringify(data)}</p>
      <button onClick={() => alert('user!')}>click</button>
    </main>
  )
}

User.getData = fetchUser
export default User