export interface ChangeBudgetCategoryDTO {
  id: string
  budget: number
  user_id: string
  month: string
  category_id?: string
  budget_id?: string
}
