import React from 'react'
import MainLayout from './layouts/MainLayout'
import { Route , Routes} from 'react-router'

import HomePage from './pages/homePage'
import ExplorePage from './pages/explorePage'
import GamePage from './pages/gamePage'
import AboutPage from './pages/aboutPage'
import ErrorPage from './pages/errorPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="explore" element={<ExplorePage/>}/>
        <Route path="game" element={<GamePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
  )
}