function obojiZuto() {

    var slike = document.querySelectorAll('img');

    for(var i = 0; i < slike.length; i++) {

        slike[i].addEventListener('click', function() {
            this.setAttribute("style", "border: thick solid yellow;");
          });

    }
    
}

obojiZuto();

fetch('http://onlineshop.wrd.app.fit.ba/api/ispit20190622/Narudzba/GetAll')
        .then((res) => { return res.json() })
        .then((data) => {
            let rezultat = '';
            data.forEach((kupac) => {
                const { narudzbaId, datumNarudzbe, dostavaIme, dostavaAdresa, dostavaPostanskiBroj, dostavaTelefon, napomena } = kupac
                 rezultat +=
                    `<tdead>
                    <tr>
                    <td>${narudzbaId}</td>
                    <td>${datumNarudzbe}</td>
                    <td>${dostavaIme}</td>
                    <td>${dostavaAdresa}</td>
                    <td>${dostavaPostanskiBroj}</td>
                    <td>${dostavaTelefon}</td>
                    <td>${napomena}</td>
                    </tr>
                    </tdead>
                    <tbody>
                    </tbody>`;
                    });
                    document.getElementById('table').innerHTML += rezultat;
                })
            

document.getElementById('registration').addEventListener('submit', registration);

 function registration(event){
            event.preventDefault();

            let dostavaIme = document.getElementById('dostavaIme').value;
            let dostavaAdresa = document.getElementById('Address').value;
            let postalcode = document.getElementById('postalcode').value;
            let phone = document.getElementById('Phone').value;
            let napomena = document.getElementById('napomena').value;
            
            fetch('http://onlineshop.wrd.app.fit.ba/api/ispit20190622/Narudzba/Dodaj', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({dostavaIme: dostavaIme, dostavaAdresa: dostavaAdresa, dostavaPostanskiBroj: postalcode, dostavaTelefon: phone, napomena: napomena})
            }).then((res) => res.json())  
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
        }

        function filter() {
     
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("filtiranje");
            filter = input.value.toUpperCase();
            table = document.getElementById("table");
            tr = table.getElementsByTagName("tr");
          
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[2];
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }
            }
          }