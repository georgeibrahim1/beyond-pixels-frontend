import React from 'react'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        {/*Home*/}
        {/*Explore*/}
        {/*Game*/}
        {/*Rank*/}
        {/*Story*/}
        {/*About*/}
        {/*Not Found*/}
      </Route>
    </Routes>
  )
}
