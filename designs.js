var canvas= document.getElementById ('pixelCanvas');
var sizePicker = document.getElementById('sizePicker');
var gridHeight = document.getElementById ('inputHeight');
var gridWidth =   document.getElementById('inputWidth');
var colorPick = document.getElementById ('colorPicker');




// When size is submitted by the user, call makeGrid()

sizePicker.addEventListener( 'submit', function(event) {
    event.preventDefault();
    

    // if gridCells is present , clear the grids that have been filled in
    while ( canvas.firstChild ){
        canvas.removeChild(canvas.firstChild)
    }
    
    makeGrid();
})

 // function to create gridCells and gridRows

function makeGrid() {
   for (let j = 0; j< gridHeight.value; j++) {
       let gridRow = canvas.insertRow(j);
       for (let k = 0; k < gridWidth.value; k++) {
         let gridCell = gridRow.insertCell(k);
         
       //  fills gridCells with selected color
         gridCell.addEventListener('mousedown', function(){
             gridCell.style.backgroundColor = colorPick.value;
         })
         
        
        }
      
   }
      
}



