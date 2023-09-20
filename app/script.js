const selectElement = document.getElementById('category');
    
// Get the selected value and move to the respected page when the button is clicked
document.getElementById('proceed').addEventListener('click', function() {
    var selectedValue = selectElement.value;
    if(selectedValue == "Computer Science"){
        window.location.href = 'comp.html';
    }else{
        window.location.href = 'bio.html';
    }
});