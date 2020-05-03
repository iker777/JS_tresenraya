 
    //This function write in the cell with 'x' (row, column) 
function writeX(x, y) {

    // Find a <table> element with id="myTable"
    var table = document.getElementById("myTable");
    
        //Find the cell
    var element = table.rows[x].cells.item(y);
       //write in HTML in the cell 
    element.innerHTML = `<i class="fas fa-times"></i>`;
};

function writeO(x, y) {

    // Find a <table> element with id="myTable"
    var table = document.getElementById("myTable");
    
        //Find the cell
    var element = table.rows[x].cells.item(y);

        //write in HTML in the cell 
    element.innerHTML = `<i class="far fa-circle"></i>`;
};


writeX(1, 0);
writeO(1, 1);

    //Mi problema es que quiero decir que a = 1 cada vez clicken en cell1
 function hello(){

    alert("Mañana más y mejor");
};


var cell1 = document.getElementById("cell1");
cell1.addEventListener("click", hello);





