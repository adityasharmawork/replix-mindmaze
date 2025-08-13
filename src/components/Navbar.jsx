import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/executions', label: 'Executions' },
  { to: '/accepted', label: 'Accepted' },
  { to: '/rejected', label: 'Rejected' },
  { to: '/search/email', label: 'Search Email' },
  { to: '/search/room', label: 'Search Room' },
  { to: '/search/winners/room', label: 'Winners' },
  { to: '/reviews', label: 'Reviews' }
]

export default function Navbar() {
  return (
    <header className="bg-slate-800/60 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center gap-6 p-4">
        <div className="flex items-center gap-3">
          <img src="/replix_logo.png" alt="Replix logo" className="w-10 h-10 rounded-md object-cover" />
          <div>
            <div className="text-xl font-semibold">Replix <span className="text-accent">- Mindmaze</span></div>
            <div className="text-xs text-slate-400">Competitive Programming Dashboard</div>
          </div>
        </div>

        <nav className="ml-auto flex items-center gap-3">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `px-3 py-2 rounded-md text-sm ${isActive ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700/50'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
