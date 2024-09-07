import BaseRepository from './base-repository'
import User from '../models/user'
import Question from '../models/question'
import Answer from '../models/answer'
import Comment from '../models/comment'
import { answers, comments, questions, users } from '../config/seed'

export const userRepository = new BaseRepository<User>(users)
export const questionRepository = new BaseRepository<Question>(questions)
export const answerRepository = new BaseRepository<Answer>(answers)
export const commentRepository = new BaseRepository<Comment>(comments)
