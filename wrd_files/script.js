function obojiZuto() {

  var slike = document.querySelectorAll('img');

  for (var i = 0; i < slike.length; i++) {

    slike[i].addEventListener('click', function () {
      this.setAttribute("style", "border: thick solid yellow;");
    });

  }

}

obojiZuto();
dobaviPodatke();

function dobaviPodatke() {

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