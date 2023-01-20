import { Header } from './components/Header.jsx';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar.jsx';
import { Post } from './components/Post.jsx';
import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="alessandro uleon"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque unde dicta accusamus cum. Non repudiandae, magnam officiis explicabo laborum sed temporibus quibusdam deserunt optio, in, asperiores neque iusto quasi."
          />

          <Post
            author="Xandy Matos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque unde dicta accusamus cum. Non repudiandae, magnam officiis explicabo laborum sed temporibus quibusdam deserunt optio, in, asperiores neque iusto quasi."
          />
        </main>
      </div>
    </div>
  )
}

export default App
