import api from '@/config/api'

export const ask = async (q: string) => {
  const response = await api.get<string>('/ai/ask', { params: { q } })
  return response.data
}
