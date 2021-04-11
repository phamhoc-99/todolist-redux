import React,{memo,useState} from 'react';
import {connect} from 'react-redux'
import {addTodo} from './../store/actions'

const Header=memo(props=>{
    const [text,setText]=useState('')
    const {addTodo,isCheckedAll}=props
    const onAddTodo=(e={})=>{     //e={}    value defaulf
        if(e.key==='Enter'&&text){      
                //console.log("text" ,text)//2.su kien:khi enter tra ve 1 props
             addTodo({
                 id:new Date().valueOf(),
                 text,
                 isCompleted:false
             })                               //3.gui props nay.header->app->todolist
             setText('')                      //enter xong thi input trong
        }                                  
    }
    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" 
            value={text}
            onChange={(e)=>setText(e.target.value)}//1.event luu gia tri
            onKeyPress={(e)=>onAddTodo(e)}
            checked={isCheckedAll}
            />
        </header>
    )
})

const mapStateToProps=(state)=>{
    return {
        isCheckedAll:state.todos.isCheckedAll
    }
}

const mapDispatchToProps={
    addTodo
}

export default connect(mapStateToProps,mapDispatchToProps) (Header)
