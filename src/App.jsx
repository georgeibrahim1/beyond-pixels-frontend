import React from 'react'
import MainLayout from './layouts/MainLayout'
import { Route , Routes} from 'react-router'

import HomePage from './pages/homePage'
import ExplorePage from './pages/explorePage'
import GamePage from './pages/gamePage'
import StoryPage from './pages/storyPage'
import AboutPage from './pages/aboutPage'
import ErrorPage from './pages/errorPage'
import UsersPage from './pages/usersPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/explore" element={<ExplorePage/>}/>
        <Route path="/game" element={<GamePage/>}/>
        <Route path="game/users" element={<UsersPage/>} />
        <Route path="/story" element={<StoryPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
  )
}