/// <reference types="vite/client" />

declare module 'markdown-it-image-figures'

type Answer = {
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

type ForumComment = {
  id: string
  content: string
  authorId: string
  questionId?: string
  answerId?: String
  createdAt: Date
  updatedAt: Date
}

type Question = {
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

type User = {
  id: string
  name: string
  email: string
  role: 'attendant' | 'moderator' | 'admin'
  avatarUrl?: string
  reputation: number
  createdAt: Date
  updatedAt: Date
}

type ListQuestionsResponse = (Question & { author: User; answers: number })[]
type FindQuestionResponse =
  | (Question & {
      author: User
      answers: (Answer & { author: User; comments: (ForumComment & { author: User })[] })[]
      comments: (ForumComment & { author: User })[]
    })
  | null
type AskAIResponse = { response: string; document: string }
