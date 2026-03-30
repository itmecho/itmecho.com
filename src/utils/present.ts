import { format } from "date-fns";

export const presentDate = (date: Date) => format(date, "do MMM, yyyy");
