import { NoteForm } from "../components/NoteForm";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const CreateNotePage = () => {
  const navigate = useNavigate();
  const handleCreate = async (note) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_API_URL}/api/note`, note)
        .then((res) => {
          if (res.status !== 201) {
            throw new Error("error al crear nota");
          }
          toast.success("!Nota creada con exito¡", {
            position: "bottom-center",
            autoClose: 3000,
            theme: "colored",
          });
          navigate("/");
        });
    } catch (error) {
      console.log(console.log(error));
    }
  };
  return (
    <>
      <NoteForm
        onSubmit={handleCreate}
        initialDate={{ title: "", content: "" }}
      />
    </>
  );
};
