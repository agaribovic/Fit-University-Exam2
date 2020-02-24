
$(function () {
  jQuery.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-z\s]+$/i.test(value);
  }, "Samo slova");

  jQuery.validator.addMethod('phoneUS', function (phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, '');
    return this.optional(element) || phone_number.length > 9 &&
      phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
  }, 'Molimo unesite telefon u pravilnom formatu');

  $("form[name='registration']").validate({
    rules: {
      dostavaIme: {
        required: true,
        lettersonly: true
      },
      Address: {
        required: true,
        lettersonly: true
      },
      postalcode: {
        required: true,
        number: true,
        minlength: 5
      },
      Phone: {
        required: true,
        phoneUS: true
      },
    },
    messages: {
      dostavaIme: {
        required: "Ime je obavezno",
        lettersonly: "Samo su slova dozvoljena"
      },
      Address: {
        required: "Adresa je obavezna",
        lettersonly: "Samo su slova dozvoljena"
      },
      postalcode: {
        required: "Postanski broj je obavezan",
        number: "Samo su brojevi dozvoljeni",
        minlength: "Minimalna duzina 5 brojeva"
      },
      Phone: {
        required: "Telefon je obavezan",
        phoneUS: "Molimo unesite broj u pravilnom formatu (US number format)"
      },
    },
    submitHandler: function () {

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
        body: JSON.stringify({ dostavaIme: dostavaIme, dostavaAdresa: dostavaAdresa, dostavaPostanskiBroj: postalcode, dostavaTelefon: phone, napomena: napomena })
      }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
        .finally(document.getElementById("registration").reset())
    }

  });
});