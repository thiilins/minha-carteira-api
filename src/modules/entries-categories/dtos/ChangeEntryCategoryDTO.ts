export interface ChangeEntryCategoryDTO {
  id: string
  user_id: string
  name: string
  icon: string
  reminder?: boolean
  remind_time?: string
}
