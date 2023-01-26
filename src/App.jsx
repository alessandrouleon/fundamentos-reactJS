import { Header } from './components/Header.jsx';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar.jsx';
import { Post } from './components/Post.jsx';
import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/58829459?v=4',
      name: 'Alessandro Uleon',
      role: 'Analista de Sistema'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: ' 👉 jane.design/doctorcare' },

      { type: 'paragraph', content: '#novoprojeto #nlw #rocketseat' }

    ],
    publishedAt: new Date('2023-05-04 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://xesque.rocketseat.dev/users/avatar/profile-d3073b26-4738-4055-99ad-c0b225bd4781-1674083140242.jpg',
      name: 'Matheus Fernado',
      role: 'Lider de Equipe'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: ' 👉 jane.design/doctorcare' },

      { type: 'paragraph', content: '#novoprojeto #nlw #rocketseat' }

    ],
    publishedAt: new Date('2023-03-08 22:00:00')
  }

]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
          }
        </main>
      </div>
    </div>
  )
}

export default App
