import { TodoType } from "../App";
import { css } from "../../styled-system/css";
import { buttonStyle } from "./Form";
import { useState } from "react";
type ItemProps = {
  todo: TodoType;
  todosDelete: (id: string) => void;
  checkOnChange: (id: string,isCheck: boolean) => void;
};

const Item = ({ todo, todosDelete, checkOnChange }: ItemProps) => {
  const [check, setCheck] = useState(false);

  const dispatchCheck = (id:string,isCheck:boolean) => {
    setCheck((prev)=>!prev)
    checkOnChange(id,isCheck)
  }
  return (
    <>
      <div
        className={css({
          display: "flex",
          width: "300px",
          m: "0 auto",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <li
          className={css({
            m: "12px 8px",
            ...(check && {
              color:"#777",
              textDecoration:"line-through",
            })
          })}
        >
          <input
            type="checkbox"
            className={css({
              marginRight: "8px",
            })}
            onClick={()=>dispatchCheck(todo.id, check)}
          />
          {todo.text}
        </li>
        <button
          onClick={() => todosDelete(todo.id)}
          className={css(buttonStyle, {
            height: "30px",
            display: "flex",
            alignItems: "center",
          })}
        >
          削除
        </button>
      </div>
    </>
  );
};

export default Item;
