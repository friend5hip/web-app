import React, { useEffect, useState } from "react";
import { getOne } from "../../api/todoAPI";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};

function ReadComp({ tno }) {
  const [todo, setTodo] = useState(initState);

  const { moveToList, moveToModify } = useCustomMove();

  const makeDiv = (title, value) => (
    <div className="flex">
      <div className="w-3/12 font-bold">{title}</div>
      <div>{value}</div>
    </div>
  );

  useEffect(() => {
    getOne(tno).then((res) => {
      setTodo(res);
    });
  }, [tno]);

  return (
    <div>
      {makeDiv("NO. ", todo.tno)}
      {makeDiv("TITLE", todo.title)}
      {makeDiv("DATE", todo.dueDate)}

      <div className="flex justify-center gap-4">
        <button
          className="p-2 rounded bg-blue-300 text-white"
          onClick={() => moveToModify(tno)}
        >
          수정
        </button>
        <button
          className="p-2 rounded bg-blue-300 text-white"
          onClick={() => moveToList()}
        >
          목록
        </button>
      </div>
    </div>
  );
}

export default ReadComp;
