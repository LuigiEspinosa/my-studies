import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [
      {
        id: 1,
        name: 'First todo',
        completed: true
      },
      {
        id: 2,
        name: 'Second todo',
        completed: false
      }
    ]
  }),

  getters: {
    completedTodos: (state) => {
      return state.todos.filter((todo) => todo.completed)
    }
  },

  actions: {
    async addTodo(name: string) {
      new Promise((resolve, reject) => {
        try {
          setTimeout(() => {
            // this.todos.push({
            //   id: Math.random() * 1000,
            //   name,
            //   completed: false
            // })

            this.createTodo(name)

            resolve(true)
          }, 3000)
        } catch (error) {
          reject(error)
        }
      })
    },

    // MUTATIONS
    createTodo(name: string) {
      this.todos.push({
        id: Math.random() * 1000,
        name,
        completed: false
      })
    }
  }
})
