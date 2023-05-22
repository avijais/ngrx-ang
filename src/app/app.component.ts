import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
import { Expense } from './Models/expense';
import { DataService } from './Service/data.service';
// import { addMovies, getMovies } from './Store/Actions/movie.action';

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
  // , private store: Store) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    // this.store.dispatch(getMovies());
    this.dataService.getExpenses().subscribe((movies: Expense[]) => {
      this.expenses = movies;
    });
  }

  addNewExpenses(): void {
    // this.store.dispatch(addMovies(this.newMovie));
    this.dataService.addExpenses(this.newExpense).subscribe((res) => {
      this.getAllMovies();
      this.newExpense = new Expense();
    });
  }
}
