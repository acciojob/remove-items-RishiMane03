//your JS code here. If required.
const deleteBtn = document.getElementById("deleteBtn");
const dropDown = document.getElementById("colorSelect");

let selectedValue;

deleteBtn.addEventListener('click', ()=>{
    selectedValue =  dropDown.value
    colorFinder(selectedValue);
})

function colorFinder(value){

    for (let index = 0; index < dropDown.length; index++) {
        // console.log(dropDown[index].value);
        var color = dropDown[index].value;
    
        if(color == value){
            dropDown[index].remove(); //option delete
        }
    
    }
}
