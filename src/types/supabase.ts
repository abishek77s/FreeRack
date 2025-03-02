export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      resources: {
        Row: {
          id: string
          title: string
          description: string
          url: string
          type: string
          categories: string[]
          author: string | null
          stars: number | null
          dateAdded: string
          approved: boolean
          tags: string[] | null
        }
        Insert: {
          id?: string
          title: string
          description: string
          url: string
          type: string
          categories: string[]
          author?: string | null
          stars?: number | null
          dateAdded?: string
          approved?: boolean
          tags?: string[] | null
        }
        Update: {
          id?: string
          title?: string
          description?: string
          url?: string
          type?: string
          categories?: string[]
          author?: string | null
          stars?: number | null
          dateAdded?: string
          approved?: boolean
          tags?: string[] | null
        }
      }
    }
  }
}