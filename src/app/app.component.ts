import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
import { Expense } from './Models/expense';
import { DataService } from './Service/data.service';
import { Store } from '@ngrx/store';
import { addExpenses, getExpenses } from './Store/Actions/expense.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  expenses: Expense[] = [];
  newExpense: Expense = new Expense();
  title = 'movieApp';

  constructor(
    private dataService: DataService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getAllExpenses();
  }

  getAllExpenses(): void {
    this.store.dispatch(getExpenses());

    this.dataService.getExpenses().subscribe((movies: Expense[]) => {
      this.expenses = movies;
    });
  }

  addNewExpenses(): void {
    this.store.dispatch(addExpenses({ expense: this.newExpense}));
    
    this.dataService.addExpenses(this.newExpense).subscribe((res) => {
      this.getAllExpenses();
      this.newExpense = new Expense();
    });
  }
}
