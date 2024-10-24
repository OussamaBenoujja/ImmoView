const selectElement = document.getElementById("filter_type");


const partHouses = document.getElementById("sep1");
const partApartments = document.getElementById("sep2");
const partVillas = document.getElementById("sep3");


const filterBtn = document.getElementById("Mfilterbtn");
const filterBurger = document.getElementById("filterburger");

filterBurger.style.display = "none";


selectElement.addEventListener("change", function() {
    const selectedValue = selectElement.value; 

    partHouses.style.display = "none";
    partApartments.style.display = "none";
    partVillas.style.display = "none";
    
    if (selectedValue === "1") {
        partHouses.style.display = "block"; 
    } else if (selectedValue === "2") {
        partApartments.style.display = "block"; 
    } else if (selectedValue === "3") {
        partVillas.style.display = "block"; 
    }else{
        partHouses.style.display = "block";
        partApartments.style.display = "block";
        partVillas.style.display = "block";
    }

});

filterBtn.addEventListener("click", displayFilterOptions); 

function displayFilterOptions(){
    filterBurger.style.display = "block";
    filterBtn.style.display = "none";
}