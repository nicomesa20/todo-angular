import { Todo } from "./todo";

export interface ICard {
    user: string;
    todoSatus: ITodoStatus;
}

interface ITodoStatus {
    completed: number,
    active: number,
    total: number
}
