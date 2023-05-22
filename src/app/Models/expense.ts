export class Expense {
  id: number;
  name: string;
  earning: number;
  releaseDate: Date;

  constructor(name?: string, earning?: number, releaseDate?: Date) {
    // this.id = id;
    this.name = name || '';
    this.earning = earning || 0;
    this.releaseDate = releaseDate || new Date();
  }
}
