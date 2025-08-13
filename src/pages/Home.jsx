import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to Replix - Mindmaze</h1>
      <p className="text-slate-400 mb-6">Dashboard to view competitive programming execution results from the backend - Powered by Replix</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/executions" className="p-4 bg-slate-800 rounded shadow hover:scale-[1.01] transition">
          <div className="text-lg font-semibold">Executions</div>
          <div className="text-sm text-slate-400">View all execution submissions</div>
        </Link>

        <Link to="/accepted" className="p-4 bg-slate-800 rounded shadow hover:scale-[1.01] transition">
          <div className="text-lg font-semibold">Accepted</div>
          <div className="text-sm text-slate-400">View accepted submissions</div>
        </Link>

        <Link to="/rejected" className="p-4 bg-slate-800 rounded shadow hover:scale-[1.01] transition">
          <div className="text-lg font-semibold">Rejected</div>
          <div className="text-sm text-slate-400">View rejected submissions</div>
        </Link>

        <Link to="/search/email" className="p-4 bg-slate-800 rounded shadow hover:scale-[1.01] transition">
          <div className="text-lg font-semibold">Search by Email</div>
          <div className="text-sm text-slate-400">Fetch all submissions by an email</div>
        </Link>

        <Link to="/search/email" className="p-4 bg-slate-800 rounded shadow hover:scale-[1.01] transition">
          <div className="text-lg font-semibold">Search by Room</div>
          <div className="text-sm text-slate-400">Fetch all submissions in a room</div>
        </Link>

        <Link to="/search/email" className="p-4 bg-slate-800 rounded shadow hover:scale-[1.01] transition">
          <div className="text-lg font-semibold">Search Winners by Room</div>
          <div className="text-sm text-slate-400">Fetch all Winners in a room</div>
        </Link>

        <Link to="/reviews" className="p-4 bg-slate-800 rounded shadow hover:scale-[1.01] transition">
          <div className="text-lg font-semibold">Reviews</div>
          <div className="text-sm text-slate-400">See what people say about Replix</div>
        </Link>

      </div>
    </div>
  )
}
