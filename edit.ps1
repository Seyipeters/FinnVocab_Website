$content = Get-Content "js\app.js"

$index = 0

for ($i = 0; $i -lt $content.Length; $i++) {

  if ($content[$i] -eq "];") {

    $index = $i

    break

  }

}

$newLines = @"

  {fi:"Leipä", en:"Bread", ph:"lay-pä", cat:"food", ex:"Syön leipää. / I eat bread.", starter:true},
  {fi:"Maito", en:"Milk", ph:"may-toh", cat:"food", ex:"Juon maitoa. / I drink milk.", starter:true},
  {fi:"Liha", en:"Meat", ph:"li-hah", cat:"food", ex:"Liha on hyvä. / The meat is good.", starter:true},
  {fi:"Kala", en:"Fish", ph:"kah-lah", cat:"food", ex:"Syön kalaa. / I eat fish.", starter:true},
  {fi:"Vihannekset", en:"Vegetables", ph:"vi-han-nek-set", cat:"food", ex:"Vihannekset ovat terveellisiä. / Vegetables are healthy.", starter:true},
  {fi:"Hedelmät", en:"Fruits", ph:"he-del-mät", cat:"food", ex:"Hedelmät ovat makeita. / Fruits are sweet.", starter:true},
  {fi:"Juusto", en:"Cheese", ph:"yus-toh", cat:"food", ex:"Juusto on valkoinen. / The cheese is white.", starter:true},
  {fi:"Voi", en:"Butter", ph:"voy", cat:"food", ex:"Voi on pöydällä. / The butter is on the table.", starter:true},
  {fi:"Sokeri", en:"Sugar", ph:"soh-ke-ri", cat:"food", ex:"Lisään sokeria. / I add sugar.", starter:true},
  {fi:"Suola", en:"Salt", ph:"su-oh-lah", cat:"food", ex:"Suola on välttämätöntä. / Salt is necessary.", starter:true},
  {fi:"Kahvi", en:"Coffee", ph:"kah-vi", cat:"food", ex:"Juon kahvia. / I drink coffee.", starter:true},
  {fi:"Tee", en:"Tea", ph:"teh", cat:"food", ex:"Tee on kuuma. / The tea is hot.", starter:true},
  {fi:"Mehu", en:"Juice", ph:"meh-hu", cat:"food", ex:"Mehu on hyvä. / The juice is good.", starter:true},
  {fi:"Olut", en:"Beer", ph:"oh-lut", cat:"food", ex:"Juon olutta. / I drink beer.", starter:true},
  {fi:"Viini", en:"Wine", ph:"vi-ni", cat:"food", ex:"Viini on punainen. / The wine is red.", starter:true},
  {fi:"Aamiainen", en:"Breakfast", ph:"ah-mi-ay-nen", cat:"food", ex:"Syön aamiaisen. / I eat breakfast.", starter:true},
  {fi:"Lounas", en:"Lunch", ph:"loh-nas", cat:"food", ex:"Lounas on valmis. / Lunch is ready.", starter:true},
  {fi:"Päivällinen", en:"Dinner", ph:"päi-väl-li-nen", cat:"food", ex:"Päivällinen on hyvä. / Dinner is good.", starter:true},
  {fi:"Pasta", en:"Pasta", ph:"pas-tah", cat:"food", ex:"Syön pastaa. / I eat pasta.", starter:true},
  {fi:"Riisi", en:"Rice", ph:"ri-si", cat:"food", ex:"Riisi on valkoinen. / The rice is white.", starter:true},
  {fi:"Peruna", en:"Potato", ph:"peh-ru-nah", cat:"food", ex:"Peruna on hyvä. / The potato is good.", starter:true},
  {fi:"Sipuli", en:"Onion", ph:"si-pu-li", cat:"food", ex:"Sipuli on punainen. / The onion is red.", starter:true},
  {fi:"Valkosipuli", en:"Garlic", ph:"val-koh-si-pu-li", cat:"food", ex:"Valkosipuli on vahva. / Garlic is strong.", starter:true},

];

"@

$content[$index] = $newLines

Set-Content "js\app.js" $content