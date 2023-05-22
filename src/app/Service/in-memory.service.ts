import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Expense } from '../Models/expense';

@Injectable({
  providedIn: 'root',
})
export class InMemoryService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      expenses: this.mockMovies(),
    };
  }

  private mockMovies(): Expense[] {
    const expense = new Expense(
      'Room Rent',
      7000,
      new Date('26 Apr, 2019 05:30:00')
    );
    expense.id = 1;

    const expense1 = new Expense(
      'Axis CC Payment',
      17500,
      new Date('27 Apr, 2018 05:30:00')
    );
    expense1.id = 2;

    const expense2 = new Expense(
      'Ticket NDLS to MTH',
      2000,
      new Date('01 May, 2015 05:30:00')
    );
    expense2.id = 3;

    const expenses = [expense, expense1, expense2];
    return expenses;
  }
}
