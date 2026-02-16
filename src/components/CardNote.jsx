import { SquarePen, Trash } from "lucide-react";

// Agregamos id, onDelete y onEdit a las props
export const CardNote = ({
  id,
  title,
  description,
  date,
  onDelete,
  onEdit,
}) => {
  return (
    <>
      <div className="card bg-base-300 w-full lg:text-2xl">
        <div className="card-body">
          <h2 className="card-title text-accent font-bold ">{title}</h2>
          <p className="text-blue-600">{description}</p>
          <div className="flex justify-between items-center mt-6">
            <time dateTime={date}>{date}</time>
            <div className="flex gap-4">
              {/* Botón Editar */}
              <SquarePen
                className="text-white cursor-pointer"
                onClick={() => onEdit(id)}
              />
              {/* Botón Eliminar */}
              <Trash
                className="text-red-400 cursor-pointer"
                onClick={() => onDelete(id)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
