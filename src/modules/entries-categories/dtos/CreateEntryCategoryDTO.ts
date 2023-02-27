export interface CreateEntryCategoryDTO {
  user_id: string
  name: string
  icon: string
  reminder?: boolean
  remind_time?: string
}
