import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EditNotePage } from "./pages/EditNotePage";
import { CreateNotePage } from "./pages/CreateNotePage";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto px-3.5">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/createNote" element={<CreateNotePage />}></Route>
          <Route path="/editNote/:id" element={<EditNotePage />}></Route>
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newesOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />
      </div>
    </>
  );
};
