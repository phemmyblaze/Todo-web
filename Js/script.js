let todos = []
let list = document.querySelector("#tasks")
let btn = document.querySelector("#new-task-submit")

btn.addEventListener("click", function(e){
    e.preventDefault();
    let tasks = document.querySelector("#new-task-input").value;

        ///THIS IS TO DISPLAY AN ERROR MESSAGE WHEN THERE IS NO TASK ADDED
        let error = document.getElementById("error")

    if (tasks.length == 0) {
        error.style.display = "block"
    } else {
        let details = {
            todos: tasks,
            id: Date.now()
        }

        todos.push(details)

        /////ADDING TASK TO LOCAL STORAGE
        let localBox = localStorage.setItem("todoDetails", JSON.stringify(todos))


        let all_task = JSON.parse(localStorage.getItem("todoDetails"))

        tasks.innerHTML = ""

            all_task.forEach(function(element, index){
                let li = document.createElement("div");
                li.setAttribute("id", "listItem")
                li.setAttribute("data-key", element.id)

                li.innerHTML = `${all_task[0].todos}

                        <div class=""> 
                            <button class="edit" onClick=" etd(${element.id})">edit</button>
                            <button class="delete" onClick=" del(${element.id})">delete</button>
                        </div>
                        `
                    
                        list.append(li)
        })

       
        error.innerHTML =''


    }
   
})
window.onload = function(){
    let checkTask = JSON.parse(localStorage.getItem("todoDetails"))
    if (checkTask != null) {
        localStorage.setItem("todoDetails", JSON.stringify(checkTask));

        let todoTask = JSON.parse(localStorage.getItem("todoDetails"));
        todoTask.forEach(function(element, index){
            todos.push(element[0])

        });
        
    }

    localStorage.removeItem("todoDetails")


}

// function render() {
//     let all_task = JSON.parse(localStorage.getItem("todoDetails"))

//     tasks.innerHTML = ""

//         all_task.forEach(function(element, index){
//             let li = document.createElement("div");
//             li.setAttribute("id", "listItem")
//             li.setAttribute("data-key", element.id)

//             li.innerHTML = `${all_task[0].todos}

//                     <div class=""> 
//                         <button class="edit" onClick=" etd(${element.id})">edit</button>
//                         <button class="delete" onClick=" del(${element.id})">delete</button>
//                     </div>
//                     `
                
//                     list.append(li)
//     })

// }
// render();

function del(id) {
    todos = todos.filter(function(element) {
        return element.id != id;
    });
    localStorage.setItem("todoDetails", JSON.stringify(todos));


    location.reload()

    

}

// function render(){
//     let all_list = JSON.parse(localStorage.getItem("todolist"))
//     list.innerHTML = ''
//       all_list.forEach(function (item, index){
//         const li = document.createElement('li');
//         li.setAttribute("id", "listItem")
//         li.setAttribute("data-key", item.id)
//         li.innerHTML = `<span id="itemize">${item.todo_list}</span>
//                         <button class="delete " id= "delete" onClick="del(${item.id})">delete</button>`
//         list.append(li)
//         li.classList.add("li")
       
//     })
// }
// render()

// function del(id){
//   todo = todo.filter((item)=>{
//     console.log('Hello');
//     return item.id != id
//   })
//   localStorage.setItem("todolist", JSON.stringify(todo))
//   render()
//   location.reload()

// }










































// function render(){

// }
// render()

// function del(){

// }






