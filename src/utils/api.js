import axios from 'axios'

const BASE = 'https://replix-mindmaze-backend.onrender.com/api/admin'

export const fetchExecutions = () => axios.get(`${BASE}/executions`).then(r => r.data)
export const fetchAccepted = () => axios.get(`${BASE}/accepted`).then(r => r.data)
export const fetchRejected = () => axios.get(`${BASE}/rejected`).then(r => r.data)
export const fetchByEmail = (email) => axios.get(`${BASE}/email/${encodeURIComponent(email)}`).then(r => r.data)
export const fetchByRoom = (room) => axios.get(`${BASE}/room/${encodeURIComponent(room)}`).then(r => r.data)
export const fetchWinnersByRoom = (room) => axios.get(`${BASE}/winners/${encodeURIComponent(room)}`).then(r => r.data)
