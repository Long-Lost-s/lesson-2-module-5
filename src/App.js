import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/lesson-3/Welcome';
import { AddComponent } from './components/lesson-3/AddComponent';
import { AddComponents } from './components/lesson-3/AddComponents';
import { Alert } from './components/lesson-3/Alert';

function App() {
  return (
    <div className='App'>
      <Welcome name = "Long"></Welcome>
      <AddComponent firstNumber={1} secondNumber={5} />
      <AddComponents firstNumber={1} secondNumber={2} /> 
      <Alert text={'Cảnh báo ! Tài nguyên bạn vừa truy cập không tồn tại'} />
    </div>
  );
}

export default App;
