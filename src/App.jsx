import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Executions from './pages/Executions'
import Accepted from './pages/Accepted'
import Rejected from './pages/Rejected'
import SearchEmail from './pages/SearchEmail'
import SearchRoom from './pages/SearchRoom'
import SearchWinnersByRoom from './pages/SearchWinnersByRoom'
import Reviews from './pages/Reviews'
import Wrong from './pages/Wrong'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-6 md:p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/executions" element={<Executions />} />
          <Route path="/accepted" element={<Accepted />} />
          <Route path="/rejected" element={<Rejected />} />
          <Route path="/wrong" element={<Wrong />} />
          <Route path="/search/email" element={<SearchEmail />} />
          <Route path="/search/room" element={<SearchRoom />} />
          <Route path="/search/winners/room" element={<SearchWinnersByRoom />} />
          <Route path="/reviews" element={<Reviews />} />

        </Routes>
      </main>
      <footer className="text-center py-4 text-sm text-slate-400">© {new Date().getFullYear()} Replix - Mindmaze</footer>
    </div>
  )
}
