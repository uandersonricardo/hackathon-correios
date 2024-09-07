interface User {
  id: string
  name: string
  email: string
  role: 'attendant' | 'moderator' | 'admin'
  avatarUrl?: string
  reputation: number
  createdAt: Date
  updatedAt: Date
}

export default User
