import { inject, Injectable, Service, Signal, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger.service";

@Service()
export class TodoService {
  #todos = signal<Todo[]>([]);
  todos = this.#todos.asReadonly();
  loggerService = inject(LoggerService);
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Signal<Todo[]> {
    return this.todos;
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.#todos.update((todos) => [...todos, todo])
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): void {
    this.#todos.update(todos =>todos.filter(todoElement => todoElement != todo));
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.loggerService.logger({todos: this.#todos()})
  }
}
