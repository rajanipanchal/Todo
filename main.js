const form = document.querySelector("form")
const input = document.querySelector("input")
const listGroup = document.querySelector("ul")


function saveTodo(e){
    e.preventDefault()
    let newText  = input.value
    let newLi = document.createElement("li")
    newLi.innerText = newText
    listGroup.appendChild(newLi)
    newLi.className="list-group-item position-relative"

   

    let delbtn = document.createElement("button")
    delbtn.className ="btn btn-danger position-sticky  l-0 b-0 rounded-0"
    delbtn.innerText ="Delete"
    newLi.appendChild(delbtn)
    
    
    let bckbtn = document.createElement("button")
    bckbtn.className = "btn btn-primary  position-sticky l-0 b-0 rounded-0"
    bckbtn.innerText = "Back UP "
    newLi.appendChild(bckbtn)


form.reset()
}   

form.addEventListener("submit", saveTodo)

function deleteTodo(e){
    if(e.target.className.includes("btn-danger")){
        let li = e.target.parentElement
         listGroup .removeChild(li)
    }
    
}

listGroup.addEventListener("click",deleteTodo)
