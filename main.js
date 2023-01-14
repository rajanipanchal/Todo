const form = document.querySelector("form")
const input = document.querySelector("input")
const listGroup = document.querySelector("ul")
const label = document.querySelector("lbl") 


function saveTodo(e){
    e.preventDefault()
    let newText  = input.value
    let newLi = document.createElement("li")
    newLi.innerText = newText
    listGroup.appendChild(newLi)
    newLi.className="list-group-item position-relative d-flex"

    // let lbl = document.createElement("label")
    // lbl.className  =" formlLabel position-absolute l-0"
    // lbl.innerText = "Add Tasks"
    // newLi.appendChild(lbl)
  

    let delbtn = document.createElement("button")
    delbtn.className ="btn btn-danger position-absolute fixed-bottom rounded-0"
    delbtn.innerText ="Delete"
    newLi.appendChild(delbtn)


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
