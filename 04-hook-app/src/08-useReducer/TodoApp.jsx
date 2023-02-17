import { useTodos } from "../hooks/useTodos"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

    return (
        <>
            <h1>TodoApp {todosCount} <small> Pendientes: {pendingTodosCount}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <TodoForm onNewTodo={handleNewTodo} />
                </div>
            </div>

        </>
    )
}
