
import styles from "./movieComments.module.css";
import userImage from "../../images/user.png";

export function MovieComments() {
    return (
        <div >
            <div className={styles.titleGroup}>
                <h3 className={styles.title}>Comentários</h3>
                <span className={styles.line}></span>
            </div>
            <div className={styles.comment}>
                <div>
                    <figure>
                        <img src={userImage} className={styles.userImage} alt="usuário" />
                    </figure>
                </div>
                <div>
                    <div className={styles.commentUserName}>
                        Senhor Carvalho
                    </div>
                    <div className={styles.commentText}>
                        <p>
                            Após ver um filme, uma das primeiras coisas que faço é ouvir a banda sonora. Acredito que a imagem e o som conseguem (pelo menos na maior parte dos casos) contar tão bem a história como as próprias personagens em si. E mais do que isso: parece que o filme se prolonga e que o vou vendo e revendo na minha cabeça, mantendo-o perto mesmo depois do fim.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}