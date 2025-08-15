// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function Reviews() {
//   const [reviews, setReviews] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     axios.get('https://replix-mindmaze-backend.onrender.com/api/reviews/all')
//       .then(res => {
//         const sorted = [...res.data].sort((a, b) => b.rating - a.rating) // highest first
//         setReviews(sorted)
//         setLoading(false)
//       })
//       .catch(err => {
//         setError('Failed to load reviews')
//         setLoading(false)
//       })
//   }, [])

//   const renderStars = (count) => {
//     return (
//       <div className="flex gap-0.5">
//         {Array.from({ length: 5 }, (_, i) => (
//           <span key={i} className={i < count ? 'text-yellow-400' : 'text-slate-500'}>★</span>
//         ))}
//       </div>
//     )
//   }

//   if (loading) return <div>Loading reviews...</div>
//   if (error) return <div className="text-red-500">{error}</div>

//   return (
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Replix Reviews</h1>
//       {reviews.length === 0 && (
//         <div className="text-slate-400">No reviews yet.</div>
//       )}
//       <div className="space-y-4">
//         {reviews.map((rev) => (
//           <div key={rev._id} className="bg-slate-800 rounded-lg p-4 shadow">
//             {rev.email} <br />
//             {rev.name}
//             <div className="flex items-center justify-between mb-2">
//               {renderStars(rev.rating)}
//               <span className="text-xs text-slate-500">
//                 {new Date(rev.submittedAt).toLocaleString()}
//               </span>
//             </div>
//             {rev.tags?.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-2">
//                 {rev.tags.map((tag, idx) => (
//                   <span key={idx} className="px-2 py-0.5 bg-blue-600 text-xs rounded-full">{tag}</span>
//                 ))}
//               </div>
//             )}
//             <p className="text-slate-200">{rev.comment || <span className="italic text-slate-500">No comment provided</span>}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }















import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://replix-mindmaze-backend.onrender.com/api/reviews/all')
      .then(res => {
        const sorted = [...res.data].sort((a, b) => b.rating - a.rating)
        setReviews(sorted)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load reviews')
        setLoading(false)
      })
  }, [])

  const renderStars = (count) => {
    return (
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < count ? 'text-yellow-400' : 'text-slate-500'}>★</span>
        ))}
      </div>
    )
  }

  if (loading) return <div>Loading reviews...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Replix Reviews</h1>
      {reviews.length === 0 && (
        <div className="text-slate-400">No reviews yet.</div>
      )}
      <div className="space-y-4">
        {reviews.map((rev) => (
          <div key={rev._id} className="bg-slate-800 rounded-lg p-4 shadow">
            {/* Header with name, email, and date */}
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold text-lg text-white">{rev.name || 'Anonymous'}</p>
                <p className="text-sm text-slate-400">{rev.email || 'No email provided'}</p>
              </div>
              <span className="text-xs text-slate-500">
                {new Date(rev.submittedAt).toLocaleString()}
              </span>
            </div>

            {/* Stars */}
            <div className="mb-2">
              {renderStars(rev.rating)}
            </div>

            {/* Tags */}
            {rev.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {rev.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-blue-600 text-xs rounded-full">{tag}</span>
                ))}
              </div>
            )}

            {/* Comment */}
            <p className="text-slate-200">
              {rev.comment || <span className="italic text-slate-500">No comment provided</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
