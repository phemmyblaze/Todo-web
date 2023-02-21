const form = document.querySelector("#new-form-task")
const list_el = document.querySelector("#tasks")
let todos = JSON.parse(localStorage.getItem("todos"));
let arr = []
form.addEventListener("submit", (e) => {
    const input = document.querySelector("#new-task-input").value
    e.preventDefault();
    if(input.length == 0){
        // alert("Please enter a task")
        console.log("okay");
    }else{
        let data = {
            task : input
        }
        arr.push(data)
        localStorage.setItem("task", JSON.stringify(arr))

    }
});

// function render(){

// }
// render()

// function del(){

// }






