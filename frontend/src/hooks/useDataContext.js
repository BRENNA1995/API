import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function useDataContext() {
    const context = useContext(DataContext)
    if (context === undefined)
        throw new Error('não está dentro do contexto');
    return context
}
