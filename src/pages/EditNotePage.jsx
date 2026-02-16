import axios from "axios";
import { toast } from "react-toastify";
import { NoteForm } from "../components/NoteForm";
export const EditNotePage = () => {
  const handleCreate = async (note) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_API_URL}/api/note`, note)
        .then((res) => {
          if (!res.status !== 201) {
            throw new Error("Erro al crear nota");
          }
          toast.success("!Nota creada con exito¡", {
            position: "bottom-center",
            autoClose: 3000,
            theme: "colored",
          });
        });
    } catch (error) {
      console.log(`an error ocurred while creating note ${error}`);
    }
  };
  return (
    <>
      <div>
        <NoteForm
          onSubmit={handleCreate}
          initialDate={{ title: "", content: "" }}
        />
      </div>
    </>
  );
};
