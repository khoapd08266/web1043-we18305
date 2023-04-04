let btnAddTaskEl = document.querySelector('button')
let tasknameEl = document.querySelector('#content')

btnAddTaskEl.addEnventListener('click', function(){
    if (!btnAddTaskEl.value){
        alert('Vui lòng nhập')
        return false
    }
    let task = []
    tasks.push({name: tasknameEl.value})

    console.log(tasks)

    tasknameEl.value = ''
})

function renderTasks(tasks=[]){
    let content = '<ul>'

    tasks.forEach((task)) => {
        content += <li>
        <div class="task-name">${task.name}</div>
        <a href="#">Sửa</a>
        <a href="#">Xóa</a>
        </li>
    }
}