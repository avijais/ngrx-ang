import { createAction, props } from "@ngrx/store";
import { Expense } from "src/app/Models/expense";

export const getExpenses = createAction('[Expense] Get Expense');

export const addExpenses = createAction(
    '[Expense] Add expense',
    (expense: Expense) => expense
    // props<{ expense: Expense }>()
);
export const addExpensesSuccess = createAction(
    '[Expense] Add expense success',
    props<{ expense: Expense }>()
);