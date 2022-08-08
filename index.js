let myList = []

const submitBtn = document.getElementById("submit-btn");
const clearListBtn = document.getElementById("clearList-btn");
const inputEl = document.getElementById("input-btn");
const olEl =  document.getElementById("ol-el");
const doneBtn =  document.getElementById("done-btn");

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myList"))

if (leadFromLocalStorage) {  
    myList = leadFromLocalStorage;
    render(myList);
}

function render(leads) {
    let listItems = " ";
    for ( let i = 0; i < leads.length; i++) {
        listItems +=  
            `<li id = " ">
                ${leads[i]} <button id= "done-btn" onclick = "deleteButton(${i})">X</button>
            </li>
            `;
        }
    olEl.innerHTML = listItems;
}

submitBtn.addEventListener("click", function() {
    myList.push(inputEl.value);
    inputEl.value = " ";
    localStorage.setItem("myList", JSON.stringify(myList))
    render(myList);
})

clearListBtn.addEventListener("click", function() {
    myList = [];
    render(myList)
})

function deleteButton(index) {
    myList.splice(index, 1); 
    render(myList);
}