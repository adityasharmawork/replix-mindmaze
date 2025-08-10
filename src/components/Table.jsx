import React from 'react'

function StatusBadge({ status }){
  const cls = status === 'Accepted' ? 'bg-emerald-600' : status === 'Wrong Answer' ? 'bg-amber-500' : 'bg-rose-600'
  return <span className={`px-3 py-1 rounded-full text-sm text-white ${cls}`}>{status}</span>
}

export default function Table({ data = [], onView }){
  return (
    <div className="overflow-x-auto bg-slate-800/60 rounded-lg p-3">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="text-slate-300 text-left text-sm">
            <th className="p-2">Email</th>
            <th className="p-2">Name</th>
            <th className="p-2">Room</th>
            <th className="p-2">Question</th>
            <th className="p-2">Language</th>
            <th className="p-2">Status</th>
            <th className="p-2">Passed</th>
            <th className="p-2">Date</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id} className="border-t border-slate-700 text-sm align-top">
              <td className="p-2">{item.email}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.room}</td>
              <td className="p-2">{item.question}</td>
              <td className="p-2">{item.language}</td>
              <td className="p-2"><StatusBadge status={item.status} /></td>
              <td className="p-2">{item.testCasesPassed ?? 'N/A'}</td>
              <td className="p-2">{item.date ? item.date : new Date(item.Date).toLocaleString()}</td>
              <td className="p-2">
                <button onClick={() => onView(item)} className="px-3 py-1 rounded-md bg-slate-700 text-sm text-white hover:brightness-110">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
