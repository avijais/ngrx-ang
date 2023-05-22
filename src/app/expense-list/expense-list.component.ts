import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../Models/expense';
import { DataService } from '../Service/data.service';
import { Store } from '@ngrx/store';
import { ExpenseState } from '../Store/Reducers/expense.reducers';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  @Input()
  expenses: Expense[] = [];
  expenses$ = this.store.select('expenses');

  constructor(
    private dataService: DataService,
    private store: Store<ExpenseState>
  ) {}

  ngOnInit(): void {}
}
