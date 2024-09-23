import React, { useEffect, useState } from "react";
import { deleteOne, getOne, putOne } from "../../api/todoAPI";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/ResultModal";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: "",
  complete: false,
};

function ModifyComp({ tno }) {
  const [todo, setTodo] = useState({ ...initState });
  const [result, setResult] = useState(null);
  const { moveToList, moveToRead } = useCustomMove();

  useEffect(() => {
    getOne(tno).then((res) => {
      console.log(res);
      setTodo(res);
    });
  }, []);

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };

  const handleChangeTodoComplete = (e) => {
    const value = e.target.value;
    todo.complete = value === "Y";
    setTodo({ ...todo });
  };

  const handleClickModify = () => {
    console.log("Modified" + todo);
    putOne(todo).then((data) => {
      setResult("수정");
    });
  };

  const handleClickDelete = () => {
    console.log("Deleted " + todo);
    deleteOne(todo).then((data) => {
      setResult("삭제");
    });
  };

  const closeModal = () => {
    if (result === "삭제") {
      moveToList();
    } else {
      moveToRead(tno);
    }
  };

  return (
    <div className="container">
      {result ? (
        <ResultModal
          title="처리 결과"
          content={result}
          callbackFn={closeModal}
        />
      ) : null}
      <div className="titleWrap flex m-4">
        <div className="w-2/12">제목</div>
        <input
          className="w-10/12 border-2 rounded border-blue-300"
          type="text"
          name="title"
          value={todo.title}
          onChange={handleChangeTodo}
        />
      </div>
      <div className="writerWrap flex m-4">
        <div className="w-2/12">작성자</div>
        <input
          className="w-10/12 border-2 rounded border-blue-300"
          type="text"
          name="writer"
          value={todo.writer}
          onChange={handleChangeTodo}
        />
      </div>
      <div className="dueDateWrap flex m-4">
        <div className="w-2/12">작성일</div>
        <input
          className="w-10/12 border-2 rounded border-blue-300"
          type="date"
          name="dueDate"
          value={todo.dueDate}
          onChange={handleChangeTodo}
        />
      </div>
      <div className="completeWrap flex m-4">
        <div className="w-2/12">완료 여부</div>
        <select
          className="border-2 rounded border-blue-300"
          name="status"
          value={todo.complete ? "Y" : "N"}
          onChange={handleChangeTodoComplete}
        >
          <option value="Y">완료&nbsp;</option>
          <option value="N">진행중&nbsp;</option>
        </select>
      </div>
      <div className="flex justify-end gap-4">
        <button
          className="p-2 rounded bg-blue-300 text-white"
          onClick={() => {
            handleClickModify();
          }}
        >
          수정
        </button>
        <button
          className="p-2 rounded bg-red-400 text-white"
          onClick={() => {
            handleClickDelete();
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default ModifyComp;
