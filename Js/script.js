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
                // console.log(all_task[0].todos)

                li.innerHTML = `${all_task[0].todos}

                        <button class="delete" onClick=" del(${element.id})">delete</button>
                        <button class="edit" onClick=" del(${element.id})">edit</button>`
                    
                        // console.log(li.innerText)
                        list.append(li)
                        li.classList.add("li")
        })

       
        error.innerHTML =''



    }

    
    
})




// let todo = []
// // let list = document.getElementById("task-item")
// let parent = document.getElementById("task")
// let butt = document.getElementById("button")
// butt.addEventListener("click", function add (){
//     let todoInput = document.getElementById("text").value 
//     console.log(todoInput);
// let error = document.getElementById("error")
// if(todoInput.length == 0){
//    error.append("nothing to add")
// }else{
//    let input = {
//         todo_list : todoInput,
//         id: Date.now()
//     }
//     todo.push(input)
//     let storing = localStorage.setItem("todolist", JSON.stringify(todo))

//     let all_list = JSON.parse(localStorage.getItem("todolist"))

//     list.innerHTML = ''
    
//       all_list.forEach(function (item, index){
//         const li = document.createElement('li');
//         li.setAttribute("id", "listItem")
//         li.setAttribute("data-key", item.id)
//         li.innerHTML = `${item.todo_list}
//                         <button class="delete" onClick=" del(${item.id})">delete</button>`
//         list.append(li)
//         li.classList.add("li")
//     })
//     error.innerHTML =''

// }
// })
// window.onload = function(){
//     let checker = JSON.parse(localStorage.getItem("todolist"))
//     if(checker != null){
//           // Yes there is data then set the new local storage 
//           localStorage.setItem("reLoad", JSON.stringify(checker));

//           // Then get the data back and push it to our users global array
//           let todolists = JSON.parse(localStorage.getItem("reLoad"));
//           console.log(todolists);
          
//           todolists.forEach(function (item, index) {
//             todo.push(item)
//           });
//     }
//           // terminate the localStorage
//           localStorage.removeItem("reLoad")
    

// }
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










































// const form = document.querySelector("#new-form-task")
// const list_el = document.querySelector("#tasks")
// let todos = JSON.parse(localStorage.getItem("todos"));
// let arr = []
// form.addEventListener("submit", (e) => {
//     const input = document.querySelector("#new-task-input").value
//     e.preventDefault();
//     if(input.length == 0){
//         // alert("Please enter a task")
//         console.log("okay");
//     }else{
//         let data = {
//             task : input
//         }
//         arr.push(data)
//         localStorage.setItem("task", JSON.stringify(arr))

//     }
// });

// function render(){

// }
// render()

// function del(){

// }






