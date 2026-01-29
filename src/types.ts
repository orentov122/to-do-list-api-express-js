// Экспорт типа Task
export type Task = {

// id должно быть цифрой
  id: number;

  // Текст строкой
  text: string;

  // done должен быть boolean значением
  done: boolean;
};
// Экспорт типа CreateTaskRequest
export type CreateTaskRequest = {

  // Текст строкой
  text: string;

  // done должен быть boolean значением
  done?: boolean;
};
export type task = {
  // Текст строкой
  text: string;

  // done должен быть boolean значением
  done?: boolean;
};

export type DeleteTaskRequest = {
  // id должно быть цифрой
  id: number;
};

export type UpdateTaskRequest = {
  // Текст строкой
  text: string;

  // done должен быть boolean значением
  done?: boolean;
};