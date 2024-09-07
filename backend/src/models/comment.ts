interface Comment {
  id: string
  content: string
  authorId: string
  questionId?: string
  answerId?: String
  createdAt: Date
  updatedAt: Date
}

export default Comment
