const list = document.querySelector("#list");

function addItem (){
        const newItem = document.createElement("li")
        newItem.textContent = 'newItem'
       list.appendChild(newItem);

       
}
function removeItem (){
        if(list.lastChild){
                list.removeChild(list.lastChild);
        }else{
                console.log("fadlan iska hubi wax la saaro ma ha dhine!")
        }
}