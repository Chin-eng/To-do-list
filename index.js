let myList = []

const submitBtn = document.getElementById("submit-btn");
const clearListBtn = document.getElementById("clearList-btn");
const inputEl = document.getElementById("input-btn");
const ulEl =  document.getElementById("ul-el");



    
function render(leads) {
    let listItems = " ";
    for ( let i = 0; i < leads.length; i++) {
        listItems +=  
            `<li>
                ${leads[i]} <button id= "done-btn" onclick = "deleteButton()">X</button>
            </li>
            `;
        }
    ulEl.innerHTML = listItems;
}

submitBtn.addEventListener("click", function() {
    myList.push(inputEl.value);
    inputEl.value = " ";
    render(myList);
})

clearListBtn.addEventListener("click", function() {
    myList = [];
    render(myList)
})

function deleteButton() {
    
}






