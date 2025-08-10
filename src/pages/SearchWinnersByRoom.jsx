import React, { useState } from 'react'
import { fetchByRoom, fetchWinnersByRoom } from '../utils/api'
import Table from '../components/Table'
import DetailsModal from '../components/DetailsModal'

export default function SearchWinnersByRoom(){
  const [room, setRoom] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!room) return
    setLoading(true)
    try{
      const data = await fetchWinnersByRoom(room)
      setItems(data)
    }catch(err){
      console.error(err)
      setItems([])
    }finally{setLoading(false)}
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Search Winners by Room</h2>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input value={room} onChange={e => setRoom(e.target.value)} placeholder="Enter room number (e.g., 200b)" className="flex-1 p-2 rounded bg-slate-800 border border-slate-700" />
        <button className="px-4 py-2 bg-accent rounded text-black">Search</button>
      </form>

      {loading ? <div className="text-slate-400">Loading...</div> : <Table data={items} onView={setSelected} />}
      <DetailsModal item={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
