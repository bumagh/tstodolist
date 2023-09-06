import useTodolistStore from './modules/todolist'
export default function(){
    return {
        todolist:useTodolistStore()
    }
}