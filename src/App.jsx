import { Header } from './components/Header.jsx';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar.jsx';

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
        </main>
      </div>
    </div>
  )
}

export default App
