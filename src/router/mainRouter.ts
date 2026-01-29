import { Router } from "express";
import { TaskService } from "../service/task.service";

const router = Router();

// Создание гет запроса для чтение тасков
router.get("/", (req, res) => {
  // Обращаемся к нашему сервису и  используем метод read
  res.json(TaskService.read());
});

// Создание post запроса для создание тасков
router.post("/", (req, res) => {
  // Обращаемся к методу create из Task Service
  const task = TaskService.create(req.body);
  // Отправляем status 201
  res.status(201).json(task);
});

// Создание put запроса для изменение  тасков
router.put("/:id", (req, res) => {
  // Ищем id
  const id = Number(req.params.id);
  // И обращаемся к нашему методу
  const task = TaskService.update(id, req.body);

  // Если таск не найден выводим Task Not Found с помощью json
  if (!task) return res.status(404).json({ error: "Task Not Found" });
  res.json(task);
});

// Создание delete запроса для удаление тасков
router.delete("/:id", (req, res) => {
  // Находим id
  const id = Number(req.params.id);
  // Обращаемся к нашему методу delete
  const task = TaskService.delete({ id });
// Если таска нету выводим Task Not Found с помощью json
  if (!task) return res.status(404).json({ error: "Task Not Found" });
  // отправляем ответ с таском
  res.json(task);
});

// Экспортируем роуты
export default router;
