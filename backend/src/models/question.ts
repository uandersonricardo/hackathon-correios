interface Question {
  id: string
  title: string
  content: string
  authorId: string
  tags: string[]
  views: number
  upvotes: number
  downvotes: number
  createdAt: Date
  updatedAt: Date
  resolved: boolean
  acceptedAnswerId?: string
}

export default Question
