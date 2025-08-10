import React, { useState } from 'react'
import { fetchByEmail } from '../utils/api'
import Table from '../components/Table'
import DetailsModal from '../components/DetailsModal'

export default function SearchEmail(){
  const [email, setEmail] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try{
      const data = await fetchByEmail(email)
      setItems(data)
    }catch(err){
      console.error(err)
      setItems([])
    }finally{setLoading(false)}
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Search by Email</h2>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" className="flex-1 p-2 rounded bg-slate-800 border border-slate-700" />
        <button className="px-4 py-2 bg-accent rounded text-black">Search</button>
      </form>

      {loading ? <div className="text-slate-400">Loading...</div> : <Table data={items} onView={setSelected} />}
      <DetailsModal item={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
