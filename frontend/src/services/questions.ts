import api from '@/config/api'

export const listQuestions = async () => {
  const response = await api.get<ListQuestionsResponse>('/questions')
  return response.data
}

export const findQuestion = async (id: string) => {
  const response = await api.get<FindQuestionResponse>(`/questions/${id}`)
  return response.data
}

export const createQuestion = async (data: CreateQuestionRequest) => {
  const response = await api.post<CreateQuestionResponse>('/questions', data)
  return response.data
}
