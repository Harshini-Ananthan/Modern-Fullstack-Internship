interface Task {
    id : number,
    title : string,
    priority : "Low" | "Medium" | "High",
    isCompleted : boolean
};

let tasks : Task[] = [];

function addTask(task : Task) : void{
    //check for duplicate id
    if(tasks.find(t => t.id === task.id))
    {
        console.log("Task with ID already exists");
        return;
    }
    tasks.push(task);
    console.log("Task added successfully")
}

function deleteTask(id: number): void {
    tasks = tasks.filter(task => task.id !== id);
    console.log("Task deleted successfully");
}

function showTasks():void
{
    //check if there are no tasks
    if(tasks.length === 0)
    {
        console.log("No tasks to show");
        return;
    }
    // console.log("All Tasks:", tasks);

    tasks.forEach(task => {
        console.log(
            `ID: ${task.id}, 
            Title: ${task.title}, 
            Priority: ${task.priority}, 
            Completed: ${task.isCompleted}`
        )
    });
}

function updateTask(id:number, updatedTask: Task) : void
{
    const task = tasks.find(task => task.id === id);
    if(task)    {
        task.title = updatedTask.title;
        task.isCompleted = updatedTask.isCompleted;
        task.priority = updatedTask.priority;
        console.log("Task updated successfully");
        console.log("Updated Task:", task);
    }
    else
    {
        console.log("Task not found");
    }
}

function searchTask(id:number): Task | undefined
{
    return tasks.filter(task => task.id === id)[0];
}

function getCompletedTasks(): Task[]
{
    return tasks.filter(task => task.isCompleted);
}

let task : Task = {
    id : 1,
    title : "Leetcode",
    priority : "High",
    isCompleted : true
}
addTask(task);

// update task invoked
let updatedTask:Task = {
    id:1,
    title:"Leetcode - Updated",
    priority:"High",
    isCompleted:true
}
updateTask(1, updatedTask);

// search task 
console.log("Searched Task:", searchTask(1));

// get completed tasks 
console.log("Completed Tasks:", getCompletedTasks());

// delete task 
deleteTask(3);

// show task 
showTasks();

updateTask(1, {
    id:1,
    title:"Go to Gym", 
    priority:"Medium",
    isCompleted:false
});

showTasks();