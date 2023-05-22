import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
import { Expense } from './Models/expense';
import { DataService } from './Service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  expenses: Expense[] = [];
  newExpense: Expense = new Expense();
  title = 'movieApp';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.dataService.getExpenses().subscribe((movies: Expense[]) => {
      this.expenses = movies;
    });
  }

  addNewExpenses(): void {
    this.dataService.addExpenses(this.newExpense).subscribe((res) => {
      this.getAllMovies();
      this.newExpense = new Expense();
    });
  }
}
