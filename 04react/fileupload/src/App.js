import { ToastContainer } from "react-toastify";
import { getFileList } from "./api/apiFile";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useEffect, useState } from "react";
import ImageList from "./components/ImageList";
import UploadFile from "./components/UploadFile";

function App() {
  const [imgData, setImgData] = useState([]);
  const [imageUpload, setImageUpload] = useState(false);

  useEffect(() => {
    fetchData();
  }, [imageUpload]);

  const fetchData = async () => {
    const upadateImgList = await getFileList(); // axios를 사용하지 않으면 이미지가 불러와지지 않는다.
    setImgData(upadateImgList);
  };

  const handleImageUpload = () => {
    setImageUpload(!imageUpload);
  };

  return (
    <div className="App">
      <h2>사진첩</h2>
      <UploadFile handleImageUpload={handleImageUpload} />
      <ImageList imgData={imgData}></ImageList>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
