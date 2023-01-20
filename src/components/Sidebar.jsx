import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://xesque.rocketseat.dev/users/avatar/profile-d3073b26-4738-4055-99ad-c0b225bd4781-1674083140242.jpg" />
                <strong>Alessandro Uleon</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}