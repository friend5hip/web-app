import React, { useState } from "react";
import { postAdd } from "../../api/todoAPI";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  title: "",
  writer: "",
  dueDate: "",
};

function AddComp() {
  const [todo, setTodo] = useState({ ...initState });
  const [result, setResult] = useState(null);
  const { moveToList } = useCustomMove();

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };

  const handleClickAdd = () => {
    postAdd(todo)
      .then((result) => {
        console.log(result);
        setResult(result.TNO);
        setTodo({ ...initState });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const closeModal = () => {
    setResult(null);
    moveToList();
  };

  return (
    <div className="container">
      {result ? (
        <ResultModal
          title="글 쓰기 추가"
          content={`${result}번 글 추가`}
          callbackFn={closeModal}
        />
      ) : null}
      <div className="titleWrap flex m-4">
        <div className="w-2/12">제목</div>
        <input
          className="w-10/12 border-2 rounded border-blue-300"
          type="text"
          name="title"
          onChange={handleChangeTodo}
        />
      </div>
      <div className="writerWrap flex m-4">
        <div className="w-2/12">작성자</div>
        <input
          className="w-10/12 border-2 rounded border-blue-300"
          type="text"
          name="writer"
          onChange={handleChangeTodo}
        />
      </div>
      <div className="dueDateWrap flex m-4">
        <div className="w-2/12">작성일</div>
        <input
          className="w-10/12 border-2 rounded border-blue-300"
          type="date"
          name="dueDate"
          onChange={handleChangeTodo}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="p-2 rounded bg-blue-300 text-white"
          onClick={() => {
            handleClickAdd();
          }}
        >
          작성
        </button>
      </div>
    </div>
  );
}

export default AddComp;
