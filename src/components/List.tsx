
import { TodoType } from "../App";
import Item from "./Item";

type ListProps = {
  todos: TodoType[];
  todosDelete: (id: string) => void;
  checkOnChange: (id: string, isCheck: boolean) => void;
};
const List = ({ todos, todosDelete, checkOnChange }: ListProps) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            todo={todo}
            todosDelete={todosDelete}
            checkOnChange={checkOnChange}
          />
        );
      })}
    </ul>
  );
};

export default List;
