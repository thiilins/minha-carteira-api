export interface CreateEntryDTO {
  title: string
  date: string
  amount: number
  recurrent?: boolean
  recurrent_number?: number
  category_id: string
  user_id: string
}
