import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://lh3.googleusercontent.com/ogw/AAEL6sjjvNGz2kl2tAY5BNxceJ7eU3YS6J6UPRgWEMlb=s32-c-mo" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alessandro Uleon</strong>
                            <time title='11 de maio as 08:13' dateTime="2022-05-11 08:13:50">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar commentário'>
                            <Trash size={24} />
                        </button>

                    </header>
                    <p>Muito bom Devon, parabéns!! 👋👋</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                  
                </footer>

            </div>
        </div>
    )
}