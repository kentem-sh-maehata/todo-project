import { useState } from "react";
import { v4 as uuid } from "uuid";
import { css } from "../styled-system/css";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export type TodoType = {
  id: string;
  text: string;
  date: number;
  isCheck: boolean;
};
function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [checkList, setCheckList] = useState<string[]>([]);

  const todosAdd = (text: string) => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: uuid(),
          text: text,
          date: Number(new Date()),
          isCheck: false,
        },
      ];
    });
  };
  const todosDelete = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };
  const checkOnChange = (id: string, isCheck: boolean) => {
    if (isCheck) setCheckList((prev) => prev.filter((item) => item !== id));
    else setCheckList((prev) => [...prev, id]);
  };
  const todosAllDelete = () => {
    setTodos(
      todos.filter((todo) => {
        return !checkList?.includes(todo.id);
      })
    );
  };

  return (
    <div
      className={css({
        // textAlign: "center",
        m: "0 auto",
        w: "300px",
      })}
    >
      <Form todosAdd={todosAdd} todosAllDelete={todosAllDelete} />
      <List
        todos={todos}
        todosDelete={todosDelete}
        checkOnChange={checkOnChange}
      />
    </div>
  );
}

export default App;
