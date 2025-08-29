export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface TodoState { items: Todo[] }