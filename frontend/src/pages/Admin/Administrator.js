import { MoviesService } from "../../api/MoviesService";
import { useState, useEffect } from "react";
import { UsuarioList } from "../../components/UsuariosList/UsuariosList";

export function Administrator() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        MoviesService.getAllUsuarios()
            .then(({ data }) => setUsuarios(data))
            .catch((error) => {
                // Handle error (e.g., show error message, log error, etc.)
                console.error('Error fetching usuarios:', error);
            });
    }, []);

    return ( 
        <UsuarioList usuarios={usuarios} />
    );
}