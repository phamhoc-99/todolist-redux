import React, { memo } from 'react';
import {connect} from 'react-redux'
import {filterByStatus} from './../helpers/todosHelper'
import {setStatusFilter,clearCompleted} from './../store/actions'

const Footer=memo(props=>{

const {status,setStatusFilter,numOfTodosLeft,numOfTodos,clearCompleted}=props

const FilterBtns=[
    {
        title:'All',
        isActived:status==='ALL',
        onClick:()=>setStatusFilter('ALL'),
        link:''
    },
    {
        title:'Active',
        isActived:status==='ACTIVE',
        onClick:()=>setStatusFilter('ACTIVE'),
        link:'active'
    },
    {
        title:'Completed',
        isActived:status==='COMPLETED',
        onClick:()=>setStatusFilter('COMPLETED'),
        link:'completed'
    }
]

    return(
        <footer className="footer">
            <span className="todo-count">
            <strong>{numOfTodosLeft}</strong>
            <span></span>
            <span> {numOfTodosLeft<=1?'item':'items'} </span>
            <span>left</span>
            </span>
            <ul className="filters">
                {
                    FilterBtns.map(btn=>(
                        <FilterBtn  key={`btn${btn.title}`} {...btn} />
                        //key
                    ))
                }
            </ul>
           {numOfTodos > numOfTodosLeft && <button  className="clear-completed" onClick={clearCompleted}>Clear completed</button>}
            {/* neu co cai chua hoan thanh thi hien nut */}
        </footer>
    )
})

const FilterBtn=memo(props=>{
    const {title,onClick,link,isActived}=props
return(
    <>
    <li>
        <a href={`#/${link}`}
        className={`${isActived ? 'seleted' : '' }`} 
        onClick={onClick}>
            {title}
        </a>
    </li>
    <span></span>
    </>
)
})

const mapStateToProps=(state)=>{
    const {todosList,status}=state.todos
    return{
        status,
    numOfTodos:todosList.length,
    numOfTodosLeft:filterByStatus(todosList,'ACTIVE').length
    }
}

const mapDispatchToProps={
    setStatusFilter,
    clearCompleted
}


export default connect(mapStateToProps,mapDispatchToProps) (Footer)