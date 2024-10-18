
//Array de tarefas
let tasks = ['Comprar leite', 'Ler um livro', 'Estudar JavaScript'];
//Função para atualizar a lista de tarefas na página
function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; //Limpar a lista
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}
