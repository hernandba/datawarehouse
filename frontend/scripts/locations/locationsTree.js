function locationsTree(toggler){    
    for (var i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function (event) {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
             event.stopPropagation();
            
        });
    }
}