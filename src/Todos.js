import React from 'react';

const Todos = ({todos, deleteItem}) => {

      const todoList = todos.length ? (
        todos.map(todo => {
          return (
            <div className="collection-item" key={todo.id}>
              <span>{todo.content}
                <button 
                  style={{marginLeft: '20px', boxShadow: 'none'}} 
                  className="waves-light btn-small"
                  onClick={() => {deleteItem(todo.id)}}
                >X
                </button>
              </span>
            </div>
          )
        })
      ) : (
        <p className="center">You have no todo's!</p>
      )
    return (
      <div className="todos collection">
      {todoList}
      </div>
    );
}

export default Todos;