// Universal fetch function
async function request(url, options) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// GET all tasks
async function getAllTasks(callback) {
  const data = await request("http://localhost:3004/tasks");
  callback(data);
}

// POST a new task
async function addTask(title) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      isCompleted: false,
    }),
  };
  const data = await request("http://localhost:3004/tasks", options);
  console.log(data);
}

// DELETE a task by ID
async function deleteTask(id) {
  const options = {
    method: "DELETE",
  };
  const response = await request(`http://localhost:3004/tasks/${id}`, options);
  console.log(response);
}

// PUT update a task by ID
async function updateTask(id, isCompleted) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isCompleted }),
  };
  const data = await request(`http://localhost:3004/tasks/${id}`, options);
  console.log(data);
}

export { getAllTasks, addTask, deleteTask, updateTask };
