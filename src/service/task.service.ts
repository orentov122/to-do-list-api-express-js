import type { Task, CreateTaskRequest, DeleteTaskRequest } from "../types";

// Экспорт класса
export class TaskService {
  // Создаём масив tasks у которого элемент Task
  private static tasks: Task[] = [];
  // Создаём переменную idCounter которая по умолчанию = 1
  private static idCounter = 1;

  // Метод просмотра тасков
  static read(): Task[] {
    // Возвращаем весь массив tasks
    return this.tasks;
  }
// Метод создания таска
  static create(body: CreateTaskRequest): Task {
    // Проверка на размер
    if (this.tasks.length === 0) {
      // Обращение к idCounter
      this.idCounter = 1;
    }
 // Создание констаты Task
    const task: Task = {
     // Обращаемся к id
      id: this.idCounter++, // Плюсуем к idCounter 1
      // Обращение к тексту 
      text: body.text || "",
      // Статус выполнение таска
      done: body.done ?? false,
    };
 // Создаём с помощью метода push
    this.tasks.push(task);
    // Возвращаем наш task
    return task;
  }
 // Метод создание
  static update(id: number, body: Partial<CreateTaskRequest>): Task | null {
    // Находим наш таск по id

    const task = this.tasks.find((t) => t.id === id);
    // Проверка на таск

    if (!task) return null;
// Проверка на наличие text и done
    if (body.text !== undefined) task.text = body.text;
    if (body.done !== undefined) task.done = body.done;
// Возвращаем наш task
    return task;
  }
// Метод для удаление тасков
  static delete(body: DeleteTaskRequest): Task | null {
    // ищем taskId который равняется id

    const taskId = Number(body.id);
    // Ищем индекс таска по taskId

    const index = this.tasks.findIndex((t) => t.id === taskId);

    // Проверка на число index
    if (index === -1) return null;

    // Возвращаем и удаляем
    return this.tasks.splice(index, 1)[0];
  }
}
