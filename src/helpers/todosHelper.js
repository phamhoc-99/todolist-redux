export const isNotCheckedAll=(todos=[])=>todos.find(todo=>!todo.isCompleted)//checkall 1

export const filterByStatus=(todos=[],status='',id='')=>{
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