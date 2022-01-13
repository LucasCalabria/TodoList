import Api from './api'

const ToDoService = { 
    getAllTasks: async () => {
        const { data } = await Api.get(`/tasks`)
        return data
    },

    getTaskById: async (id) => {
        const { data } = await Api.get(`/tasks/${id}`, id)
        return data
    },

    createNewTask: async (task) => {
        const { data } = await Api.post(`/tasks`, task)
        return data
    },

    updateTask: async (id, task) => {
        const { data } = await Api.post(`/tasks/${id}`, task)
        return data
    },

    deleteTask: async (id) => {
        const { data } = await Api.delete(`/tasks/${id}`, id)
        return data
    }
}

export default ToDoService