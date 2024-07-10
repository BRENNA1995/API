import { MoviesService } from "../../api/MoviesService";
import { useState, useEffect } from "react";
import { UsuarioList } from "../../components/UsuariosList/UsuariosList";
import useDataContext from "../../hooks/useDataContext";

export function Administrator() {
    const [usuarios, setUsuarios] = useState([]);
    const { delUsuario, statusUsuario } = useDataContext()

    useEffect(() => {
        MoviesService.getAllUsuarios()
            .then(({ data }) => setUsuarios(data))
            .catch((error) => {
                console.error('Error fetching usuarios:', error);
            });
    }, [delUsuario, statusUsuario]);

    return (
        <UsuarioList usuarios={usuarios} />
    );
}
