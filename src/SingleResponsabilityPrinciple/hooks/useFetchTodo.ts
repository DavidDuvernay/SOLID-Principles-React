import { useEffect, useState } from "react";
import { TodoType, fetchTodos } from "../services/todos";

export const useFetchTodo = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchTodos()
      .then(todos => setTodo(todos))
      .finally(() => setIsFetching(false))
  }, [])

  return { todo, isFetching }
};