// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let color = document.querySelector("#colorPicker");

const forum = document.getElementById('sizePicker');
forum.addEventListener('submit',function(event){
    let height = document.querySelector('#inputHeight');
    let width = document.querySelector('#inputWidth');

    let h = height.value;   // Storing grid height value
    let w = width.value;    // Storing grid width value

    event.preventDefault();
    gridMaker(h,w);
});

function gridMaker(h,w){
    makeGrid(h,w);   // function call to form the grid
}

 //function to create grid 
function makeGrid(h,w) {

    const grid = document.querySelector('table');
    //clear the existing table rows
    grid.innerHTML = '';

    for (let i = 0; i < h; i++)     // Loop to insert the rows into  grid
    {
        let row = grid.insertRow(i);
        for (let j = 0; j < w; j++)  // Loop to insert the columns into grid
        {
            let cell = row.insertCell(j);

             //to change the background color when user clicks the cell
            cell.addEventListener("click", function(event) {
                cell.style.backgroundColor = color.value;    // updates the background color
              });
        }
    }

}

