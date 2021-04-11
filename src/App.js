import './css/Todo.css';
import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
//components
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const isNotCheckedAll=(todos=[])=>todos.find(todo=>!todo.isCompleted)//checkall 1

const filterByStatus=(todos=[],status='',id='')=>{
  switch (status) {
    case 'ACTIVE':
      return todos.filter(todo=>!todo.isCompleted)
    case 'COMPLETED':
      return todos.filter(todo=>todo.isCompleted)
    case 'REMOVE':
        return todos.filter(todo=>todo.id!=id)
    default:
        return todos
  }
}
class App extends React.PureComponent { 
    render(){                                                                     
    return (
      <Provider store={store}>
      <div className="todoapp">
        <Header /> 
        <TodoList/> 
        <Footer />
      </div>
      </Provider>
    );
  }
}

export default App;
//cac chuc nang:
//1.hien thi 
//  add
//2.edit      (doubleClick:nhay vao input)(enter,blur:luu lai)
// mark 
//select all :khi tat ca deu check thi nut checkall se active
//check all
// filter 
//clear completed
// remove

//luong du lieu redux:
//action(const,type)
//->reducer











