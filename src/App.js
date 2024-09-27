import logo from './logo.svg';
import './App.css';
import Joko from './components/cihuy'
import Komeng from './components/uhuy'
import Uhuk from './components/reflek'

function App() {
  return (
    <div className="App">
      <Joko/>
      <Komeng/>
      <Uhuk name="siswa kelas XI PPLG 2"/>
      <Uhuk name="saat ini sedang mengikuti program KIDI"/>
      <Uhuk name="harap, saya dapat memahami semua materi yang akan diberikan dan dapat mengimplementasikannya nanti"/>
    </div>
  );
}

export default App;
