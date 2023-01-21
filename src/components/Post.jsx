import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://xesque.rocketseat.dev/users/avatar/profile-d3073b26-4738-4055-99ad-c0b225bd4781-1674083140242.jpg" />
                    <div className={styles.authorInfo}>
                        <strong>Alessandro Uleon</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de maio as 08:13' dateTime="2022-05-11 08:13:50">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p> 👉 <a href="">jane.design/doctorcare</a></p>

               <p> <a href="">#novoprojeto #nlw #rocketseat </a></p>
            </div>

            <form className={styles.commentForm}>
               <strong>Deixe seu comentatio</strong>

               <textarea 
               placeholder='Deixe seu comentário...'
                />

              <footer>
              <button type='submit'>Publicar</button>
              </footer>
            </form>

            <div className={styles.commentList}>
              <Comment />
            </div>

        </article>
    )
}