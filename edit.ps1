$content = Get-Content "js\app.js"

$index = 0

for ($i = 0; $i -lt $content.Length; $i++) {

  if ($content[$i] -eq "];") {

    $index = $i

    break

  }

}

$newLines = @"

  {fi:"Toimisto", en:"Office", ph:"toy-mis-toh", cat:"work", ex:"Toimisto on keskustassa. / The office is in the city center.", starter:true},
  {fi:"Työntekijä", en:"Employee", ph:"tü-ön-tek-i-yä", cat:"work", ex:"Hän on hyvä työntekijä. / He/She is a good employee.", starter:true},
  {fi:"Pomo", en:"Boss", ph:"poh-moh", cat:"work", ex:"Pomo on matkalla. / The boss is on a trip.", starter:true},
  {fi:"Tehtävä", en:"Task", ph:"teh-tä-vä", cat:"work", ex:"Tämä on tärkeä tehtävä. / This is an important task.", starter:true},
  {fi:"Raportti", en:"Report", ph:"rah-por-ti", cat:"work", ex:"Kirjoitan raportin. / I am writing the report.", starter:true},
  {fi:"Sähköposti", en:"Email", ph:"säh-kö-pos-ti", cat:"work", ex:"Lähetän sähköpostin. / I am sending an email.", starter:true},
  {fi:"Puhelin", en:"Phone", ph:"pu-he-lin", cat:"work", ex:"Puhelin soi. / The phone is ringing.", starter:true},
  {fi:"Tietokone", en:"Computer", ph:"tie-toh-ko-neh", cat:"work", ex:"Käytän tietokonetta. / I use a computer.", starter:true},
  {fi:"Kollega", en:"Colleague", ph:"kol-leh-gah", cat:"work", ex:"Kollega auttaa minua. / The colleague helps me.", starter:true},
  {fi:"Palaveri", en:"Meeting (informal)", ph:"pah-lah-ve-ri", cat:"work", ex:"Meillä on palaveri. / We have a meeting.", starter:true},
  {fi:"Aikataulu", en:"Schedule", ph:"ay-kah-tah-lu", cat:"work", ex:"Tarkista aikataulu. / Check the schedule.", starter:true},
  {fi:"Projekt", en:"Project", ph:"pro-yek-ti", cat:"work", ex:"Projekti on valmis. / The project is ready.", starter:true},
  {fi:"Budjetti", en:"Budget", ph:"bud-yet-ti", cat:"work", ex:"Budjetti on pieni. / The budget is small.", starter:true},
  {fi:"Sopimus", en:"Contract", ph:"soh-pi-mus", cat:"work", ex:"Allekirjoitan sopimuksen. / I sign the contract.", starter:true},

];

"@

$content[$index] = $newLines

Set-Content "js\app.js" $content