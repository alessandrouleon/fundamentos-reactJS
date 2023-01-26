import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment() {
       onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_960_720.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alessandro Uleon</strong>
                            <time title='11 de maio as 08:13' dateTime="2022-05-11 08:13:50">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar commentário'>
                            <Trash size={24} />
                        </button>

                    </header>
                    <p>{content} 👋👋</p>
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