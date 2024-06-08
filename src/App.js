import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import MyBookshelf from './components/MyBookshelf';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='bookshelf' element={<MyBookshelf />} />
      </Route>
    </Routes>
  );
}

export default App;
