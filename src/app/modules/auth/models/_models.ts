export interface AuthModel {
  api_token: string
  refreshToken?: string
}

export interface UserModel {
  id: number
  username: string
  password: string | undefined
  email: string
  phone?: string
  role?: string
  profilePic?: string
}
