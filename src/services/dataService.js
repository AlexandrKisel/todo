const getTasks = async () => {
    const response = await fetch('http://localhost:8081/tasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json';
        },
    });
    const data = await responce.json();
    return data;
}

const createTask = async (data = {}) => {
    const response = await fetch('http://localhost:8081/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json';
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

const deleteTask = async () => {};


export default {
    getTasks,
    createTask,
    deleteTask
  };
