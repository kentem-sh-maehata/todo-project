import { useState } from "react";
import { css } from "../../styled-system/css";

export const buttonStyle = {
  marginLeft: "4px",
  borderRadius: "4px",
  p: "4px 10px",
  bg: "#a8bbd1",
};
type FormProps = {
  todosAdd: (text: string) => void;
  todosAllDelete: () => void;
};
const Form = ({ todosAdd, todosAllDelete }: FormProps) => {
  const [text, setText] = useState("");
  const addTodo = (text: string) => {
    setText("");
    todosAdd(text);
  };
  return (
    <>
      <h1
        className={css({
          fontSize: "48px",
          m: "16px",
          fontWeight: "bold",
          textAlign: "center",
        })}
      >
        Todo
      </h1>
      <div
        className={css({
          textAlign: "right",
          marginBottom: "10px",
        })}
      >
        <button className={css(buttonStyle)} onClick={todosAllDelete}>
          チェックを削除
        </button>
      </div>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        })}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={css({
            border: "1px solid #000",
            borderRadius: "4px",
            p: "4px",
            width: "200px",
            flex: "4",
          })}
        />
        <button
          onClick={() => addTodo(text)}
          className={css(buttonStyle, {
            flex: "1",
          })}
        >
          登録
        </button>
      </div>
    </>
  );
};

export default Form;
