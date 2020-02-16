function obojiZuto() {

    var slike = document.querySelectorAll('img');

    for(var i = 0; i < slike.length; i++) {

        slike[i].addEventListener('click', function() {
            this.setAttribute("style", "border: thick solid yellow;");
          });

    }
    
}

obojiZuto();