import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './MainLayout.css'

export default function MainLayout() {
  return (
    <div className="main-layout space-background">
      <Navbar />
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}