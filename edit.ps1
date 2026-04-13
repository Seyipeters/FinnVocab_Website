$content = Get-Content "js\app.js"

$index = 0

for ($i = 0; $i -lt $content.Length; $i++) {

  if ($content[$i] -eq "];") {

    $index = $i

    break

  }

}

$newLines = @"

  {fi:"Ostos", en:"Purchase", ph:"os-tos", cat:"store", ex:"Teen ostoksia. / I am shopping.", starter:true},
  {fi:"Hinta", en:"Price", ph:"hin-tah", cat:"store", ex:"Hinta on korkea. / The price is high.", starter:true},
  {fi:"Alennus", en:"Discount", ph:"ah-len-nus", cat:"store", ex:"Saan alennuksen. / I get a discount.", starter:true},
  {fi:"Kassa", en:"Cash register", ph:"kas-sah", cat:"store", ex:"Menen kassalle. / I go to the cash register.", starter:true},
  {fi:"Ostoskärry", en:"Shopping cart", ph:"os-tos-kär-rü", cat:"store", ex:"Tarvitsen ostoskärryn. / I need a shopping cart.", starter:true},
  {fi:"Ostoslista", en:"Shopping list", ph:"os-tos-lis-tah", cat:"store", ex:"Tarkistan ostoslistan. / I check the shopping list.", starter:true},
  {fi:"Tuote", en:"Product", ph:"tuo-teh", cat:"store", ex:"Tämä tuote on hyvä. / This product is good.", starter:true},
  {fi:"Myyjä", en:"Salesperson", ph:"müü-yä", cat:"store", ex:"Myyjä auttaa minua. / The salesperson helps me.", starter:true},
  {fi:"Ostaja", en:"Buyer", ph:"os-tah-yah", cat:"store", ex:"Ostaja tulee. / The buyer is coming.", starter:true},
  {fi:"Maksu", en:"Payment", ph:"mak-su", cat:"store", ex:"Teen maksun. / I make the payment.", starter:true},
  {fi:"Kuitti", en:"Receipt", ph:"kuit-ti", cat:"store", ex:"Saan kuitin. / I get the receipt.", starter:true},
  {fi:"Paketti", en:"Package", ph:"pah-ket-ti", cat:"store", ex:"Paketti on iso. / The package is big.", starter:true},
  {fi:"Laatikko", en:"Box", ph:"lay-tik-koh", cat:"store", ex:"Avaa laatikko. / Open the box.", starter:true},
  {fi:"Hylly", en:"Shelf", ph:"hül-lü", cat:"store", ex:"Kirja on hyllyssä. / The book is on the shelf.", starter:true},
  {fi:"Varasto", en:"Warehouse", ph:"vah-ras-toh", cat:"store", ex:"Varasto on täynnä. / The warehouse is full.", starter:true},

];

"@

$content[$index] = $newLines

Set-Content "js\app.js" $content