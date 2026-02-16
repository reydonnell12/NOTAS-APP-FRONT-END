import { format } from "date-fns";
import { es } from "date-fns/locale";

const formaData = (isoString) => {
  const date = new Date(isoString);
  return format(date, "dd 'de' MMM 'de' yyyy", { locale: es });
};

export default formaData;
