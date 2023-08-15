export class Todo {
  private static readonly defaultEffort = "00:00";

  constructor(public title: string, public timeEffort?: string) {
    this.timeEffort = timeEffort || Todo.defaultEffort;
  }
}
