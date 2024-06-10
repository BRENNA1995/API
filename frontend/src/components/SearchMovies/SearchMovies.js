import { useState } from "react";
import styles from "./searchMovies.module.css";

export function SearchMovies({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    function handleOnSubmit(event) {
        event.preventDefault();
        onSearch(searchQuery);
        setSearchQuery('');
    }

    return (
        <div className={styles.container}>
             <form className={styles.form} onSubmit={handleOnSubmit}>
                <input className={styles.input} type="text" value={searchQuery} placeholder="Digite o título" onChange={(event) => setSearchQuery(event.target.value)} />
                <button id={styles.btnSearch} className="btn waves-effect waves-light light-blue accent-3" type="submit" name="action">Buscar
                    <i class="material-icons right">search</i>
                </button>
            </form>
        </div>
    )
}
