import React from "react";
import { useParams } from "react-router-dom";
import ModifyComp from "../../components/todo/ModifyComp";

function ModifyPage() {
  const { tno } = useParams();

  return (
    <div>
      <ModifyComp tno={tno} />
    </div>
  );
}

export default ModifyPage;
