import React from "react";
import ReadComp from "../../components/todo/ReadComp";
import { useParams } from "react-router-dom";

function ReadPage() {
  const num = useParams();

  return (
    <div>
      <ReadComp tno={num.tno} />
    </div>
  );
}

export default ReadPage;
