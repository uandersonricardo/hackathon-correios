import api from '@/config/api'

export const createAnswer = async (data: CreateAnswerRequest) => {
  const response = await api.post<CreateAnswerResponse>('/answers', data)
  return response.data
}
