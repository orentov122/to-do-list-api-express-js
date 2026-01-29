import express from "express";
import mainRouter from "./router/mainRouter.js";
import cors from "cors";

// Создаём app
const app = express();
// Делаем констату для порта
const PORT = 4200;

// Использование json
app.use(express.json());
// Используем cors
app.use(cors());

// роут для /
app.use("/", mainRouter);

// роут для /tasks
app.use("/tasks", mainRouter);

// Слушаем порт из констаты
app.listen(PORT, () => {
  // Выводим сообщение
  console.log(`Server running on port ${PORT}`);
});
