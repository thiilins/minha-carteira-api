export interface CreateBudgetCategoryDTO {
  id: string
  budget: string
  user_id: string
  month: string
  category_id?: string
  budget_id?: string
}
