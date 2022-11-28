import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
      <h2>Good Morning</h2>
      <Link href="app-arm64-v8a-release.apk" download="hello">Download File</Link>
    </div>
  )
}

export default index