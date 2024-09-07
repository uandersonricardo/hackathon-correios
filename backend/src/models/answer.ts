interface Answer {
  id: string
  content: string
  authorId: string
  questionId: string
  upvotes: number
  downvotes: number
  createdAt: Date
  updatedAt: Date
  accepted: boolean
}

export default Answer
