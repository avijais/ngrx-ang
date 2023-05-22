import { createReducer, on } from "@ngrx/store";
import { Expense } from "src/app/Models/expense";
import { addExpenses, getExpenses } from "../Actions/expense.action";

export interface ExpenseState {
    expenses: ReadonlyArray<Expense>;
}

const initialState: ReadonlyArray<Expense> = [];

export const expenseReducer = createReducer(
    initialState,
    on(getExpenses, (state: any) => [...mockExpenses()]),
    on(addExpenses, (state: any, expense: any) => [...state, expense])
)

function mockExpenses(): Expense[] {
    const expense = new Expense(
      'Electricity',
      48,
      new Date('26 Apr, 2019 05:30:00')
    );
    expense.id = 1;

    const expense1 = new Expense(
      'Payment',
      17500,
      new Date('27 Apr, 2018 05:30:00')
    );
    expense1.id = 2;

    const expense2 = new Expense(
      'Tkt',
      2000,
      new Date('01 May, 2015 05:30:00')
    );
    expense2.id = 3;

    const expenses = [expense, expense1, expense2];
    return expenses;
}