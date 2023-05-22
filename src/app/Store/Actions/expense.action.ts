import { createAction, props } from "@ngrx/store";
import { Expense } from "src/app/Models/expense";

export const getExpenses = createAction('[Expense] Get Expense');
export const addExpenses = createAction(
    '[Expense] Add Expense',
    props<{ expense: Expense }>()
);
export const addExpensesSuccess = createAction(
    '[Expense] Add Expense Success',
    props<{ expense: Expense }>()
);