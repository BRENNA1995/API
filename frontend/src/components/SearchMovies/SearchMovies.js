import { useState } from "react";
import styles from "./searchMovies.module.css";

export function SearchMovies({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    function handleOnSubmit(event) {
        event.preventDefault();
        onSearch(searchQuery);
    }
    function resetSearch() {
        setSearchQuery("");
        onSearch("");
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="Digite o título" onChange={(event) => setSearchQuery(event.target.value)} />
                <button id={styles.btnSearch} type="submit">Buscar</button>
                <button id={styles.btnClear} state="reset" onClick={resetSearch}>Limpar</button>
            </form>
        </div>
    )
}
