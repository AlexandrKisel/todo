const getCategories = async () => {
    const response = await fetch('http://localhost:8081/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

const getTasks = async () => {
    const response = await fetch('http://localhost:8081/tasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

const createTask = async (data = {}) => {
    const response = await fetch('http://localhost:8081/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

const deleteTask = async () => {};


export default {
    getCategories,
    getTasks,
    createTask,
    deleteTask
  };
