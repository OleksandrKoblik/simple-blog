export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  expiresIn?: number
  idToken?: string
}

export interface Post {
  title: string
  text: string
  author: string
  id?: string
  date: Date
}

export interface FbCreateResponse {
  name?: string
}
