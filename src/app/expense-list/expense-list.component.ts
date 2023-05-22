import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../Models/expense';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  @Input()
  expenses: Expense[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}
