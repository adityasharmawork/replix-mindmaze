import React, { useEffect, useState } from 'react'
import { fetchRejected } from '../utils/api'
import Table from '../components/Table'
import DetailsModal from '../components/DetailsModal'

export default function Rejected(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchRejected().then(d => setItems(d)).catch(err => console.error(err)).finally(() => setLoading(false))
  }, [])

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Rejected</h2>
      {loading ? <div className="text-slate-400">Loading...</div> : <Table data={items} onView={setSelected} />}
      <DetailsModal item={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
