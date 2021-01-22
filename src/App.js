import { Provider } from 'react-redux'
import CourseList from './components/CourseList/courseList'
// DISPONIBILIZAR ESSE STORE DE FORMA GLOBAL, 
//TODOS ELEMENTOS QUE ESTIVEREM DENTRO DO PROVIDER VÃO TER ACESSO AO STORE
import store from './store/store'


function App() {
  return (
    <Provider store={store}>
      <CourseList/>
    </Provider>
  );
}

export default App;
