import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Post } from './Post';

function App() {
  return (
  <div>
    <Header />
    <Post 
    author="alessandro uleon"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque unde dicta accusamus cum. Non repudiandae, magnam officiis explicabo laborum sed temporibus quibusdam deserunt optio, in, asperiores neque iusto quasi."
   />
  </div>
  )
}

export default App
