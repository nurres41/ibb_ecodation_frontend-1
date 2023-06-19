
// Dark mode
let darkMode = () => {
    window.document.classList.toggle("dark_mode")
}

$(document).ready(function(){
    const searchApi = ["Kocaeli","Adana","Antep","Bursa","Edirne"];
    $("tags").autocomplete({
        source:searchApi
    })    
});

//footer

let newDate=()=>{
    document.getElementById("date_id").innerHTML = new Date().getFullYear()
}

newDate()