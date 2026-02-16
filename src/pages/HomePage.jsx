import { useState, useEffect } from "react";
import { CardNote } from "../components/CardNote";
import axios from "axios";
import formaData from "../utils/formatData";

const apiURL = import.meta.env.VITE_API_URL;

export const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Metemos fetchData aquí adentro para que VS Code no marque error
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/api/note`);
        setNotes(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // El error rojo desaparecerá porque fetchData ahora es interna del efecto

  // Esta función la dejamos afuera para que los botones la puedan llamar
  const refreshData = async () => {
    try {
      const response = await axios.get(`${apiURL}/api/note`);
      setNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    if (confirm("¿Seguro que quieres eliminar?")) {
      try {
        await axios.delete(`${apiURL}/api/note/${id}`);
        refreshData();
      } catch (error) {
        console.error("Error al borrar", error);
      }
    }
  };

  const updateNote = async (id) => {
    const notaActual = notes.find((n) => n._id === id);

    // Si dejas vacío el prompt o cancelas, se queda el valor que ya tenía
    const newTitle =
      prompt("Nuevo título:", notaActual.title) || notaActual.title;
    const newDescription =
      prompt("Nueva descripción:", notaActual.description) ||
      notaActual.description;

    try {
      await axios.put(`${apiURL}/api/note/${id}`, {
        title: newTitle,
        description: newDescription,
      });
      refreshData();
    } catch (error) {
      console.error("Error al editar", error);
    }
  };

  if (loading) return <span>Cargando...</span>;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 mt-16">
      {notes.map((note) => (
        <CardNote
          key={note._id}
          id={note._id}
          title={note.title}
          description={note.description}
          date={formaData(note.createdAt)}
          onDelete={deleteNote}
          onEdit={updateNote}
        />
      ))}
    </div>
  );
};
