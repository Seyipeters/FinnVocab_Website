// ═══════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════
var STARTER = [
  {fi:"Hei",         en:"Hello",                  ph:"hey",          cat:"greeting", ex:"Hei! Miten menee? / Hello! How are you?", starter:true},
  {fi:"Kiitos",      en:"Thank you",               ph:"kee-toss",     cat:"greeting", ex:"Kiitos paljon! / Thank you very much!", starter:true},
  {fi:"Anteeksi",    en:"Excuse me / Sorry",       ph:"an-tek-si",    cat:"greeting", ex:"Anteeksi, missä on WC? / Excuse me, where is the toilet?", starter:true},
  {fi:"Ole hyvä",    en:"You're welcome",           ph:"o-leh hü-vä",  cat:"greeting", ex:"Ole hyvä! Ei se mitään. / You're welcome! No problem.", starter:true},
  {fi:"Kyllä",       en:"Yes",                     ph:"kül-lä",       cat:"daily",    ex:"Kyllä, se on oikein. / Yes, that is correct.", starter:true},
  {fi:"Ei",          en:"No",                      ph:"ay",           cat:"daily",    ex:"Ei, en tiedä. / No, I don't know.", starter:true},
  {fi:"Hyvää huomenta", en:"Good morning",         ph:"hü-vää huo-men-ta", cat:"greeting", ex:"Hyvää huomenta! Nukuitko hyvin? / Good morning! Did you sleep well?", starter:true},
  {fi:"Hyvää yötä",  en:"Good night",              ph:"hü-vää yö-tä", cat:"greeting", ex:"Hyvää yötä! Nähdään huomenna. / Good night! See you tomorrow.", starter:true},
  {fi:"Missä",       en:"Where",                   ph:"mis-sä",       cat:"daily",    ex:"Missä on lähin kauppa? / Where is the nearest shop?", starter:true},
  {fi:"Paljonko maksaa", en:"How much does it cost", ph:"pal-yon-ko mak-saa", cat:"daily", ex:"Paljonko tämä maksaa? / How much does this cost?", starter:true},
  {fi:"Vesi",        en:"Water",                   ph:"ve-si",        cat:"daily",    ex:"Saanko vettä, kiitos? / May I have water, please?", starter:true},
  {fi:"Ruoka",       en:"Food",                    ph:"ruo-ka",       cat:"daily",    ex:"Ruoka on valmis! / The food is ready!", starter:true},
  {fi:"Työ",         en:"Work / Job",              ph:"tü-ö",         cat:"work",     ex:"Menen töihin nyt. / I am going to work now.", starter:true},
  {fi:"Ystävä",      en:"Friend",                  ph:"üs-tä-vä",     cat:"daily",    ex:"Hän on hyvä ystävä. / He/She is a good friend.", starter:true},
  {fi:"Auta minua",  en:"Help me",                 ph:"au-ta mi-nu-a", cat:"emergency", ex:"Voitko auttaa minua? / Can you help me?", starter:true},
  {fi:"En ymmärrä",  en:"I don't understand",      ph:"en üm-mär-rä", cat:"daily",    ex:"En ymmärrä, voitko toistaa? / I don't understand, can you repeat?", starter:true},
  {fi:"Puhutko englantia", en:"Do you speak English", ph:"pu-hut-ko eng-lan-ti-a", cat:"daily", ex:"Puhutko englantia? Olen uusi täällä. / Do you speak English? I am new here.", starter:true},
  {fi:"Sairaala",    en:"Hospital",                ph:"sai-raa-la",   cat:"emergency", ex:"Missä on lähin sairaala? / Where is the nearest hospital?", starter:true},
  {fi:"Kauppa",      en:"Shop / Store",            ph:"kaup-pa",      cat:"daily",    ex:"Menen kauppaan. / I am going to the shop.", starter:true},
  {fi:"Bussi",       en:"Bus",                     ph:"bus-si",       cat:"daily",    ex:"Milloin bussi tulee? / When does the bus come?", starter:true},

  {fi:"Kokous", en:"Meeting", ph:"koh-kohs", cat:"work", ex:"Kokous alkaa kello kolme. / The meeting starts at three o'clock.", starter:true},


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


  {fi:"Auto", en:"Car", ph:"au-toh", cat:"transport", ex:"Auto on punainen. / The car is red.", starter:true},
  {fi:"Juna", en:"Train", ph:"yu-nah", cat:"transport", ex:"Juna tulee. / The train is coming.", starter:true},
  {fi:"Lentokone", en:"Airplane", ph:"len-toh-ko-neh", cat:"transport", ex:"Lentokone lentää. / The airplane flies.", starter:true},
  {fi:"Pyörä", en:"Bicycle", ph:"pü-ör-ä", cat:"transport", ex:"Pyörä on nopea. / The bicycle is fast.", starter:true},
  {fi:"Taksi", en:"Taxi", ph:"tak-si", cat:"transport", ex:"Otan taksin. / I take a taxi.", starter:true},
  {fi:"Metro", en:"Metro", ph:"meh-troh", cat:"transport", ex:"Metro on täynnä. / The metro is full.", starter:true},
  {fi:"Laiva", en:"Ship", ph:"lay-vah", cat:"transport", ex:"Laiva on iso. / The ship is big.", starter:true},
  {fi:"Lentokenttä", en:"Airport", ph:"len-toh-kent-tä", cat:"transport", ex:"Lentokenttä on kaukana. / The airport is far.", starter:true},
  {fi:"Asema", en:"Station", ph:"ah-seh-mah", cat:"transport", ex:"Asema on lähellä. / The station is near.", starter:true},
  {fi:"Lippu", en:"Ticket", ph:"lip-pu", cat:"transport", ex:"Ostan lipun. / I buy a ticket.", starter:true},
  {fi:"Matkalaukku", en:"Suitcase", ph:"mat-kah-lauk-ku", cat:"transport", ex:"Matkalaukku on painava. / The suitcase is heavy.", starter:true},
  {fi:"Kartta", en:"Map", ph:"kar-tah", cat:"transport", ex:"Katson karttaa. / I look at the map.", starter:true},
  {fi:"Tie", en:"Road", ph:"ti-eh", cat:"transport", ex:"Tie on pitkä. / The road is long.", starter:true},
  {fi:"Polkupyörä", en:"Bike", ph:"pol-ku-pü-ör-ä", cat:"transport", ex:"Polkupyörä on hyvä. / The bike is good.", starter:true},
  {fi:"Moottoripyörä", en:"Motorcycle", ph:"mo-oh-tor-i-pü-ör-ä", cat:"transport", ex:"Moottoripyörä on nopea. / The motorcycle is fast.", starter:true},
  {fi:"Raitiovaunu", en:"Tram", ph:"ray-ti-oh-vah-nu", cat:"transport", ex:"Raitiovaunu tulee. / The tram is coming.", starter:true},
  {fi:"Vene", en:"Boat", ph:"veh-neh", cat:"transport", ex:"Vene on järvellä. / The boat is on the lake.", starter:true},
  {fi:"Lentäjä", en:"Pilot", ph:"len-tä-yä", cat:"transport", ex:"Lentäjä lentää. / The pilot flies.", starter:true},
  {fi:"Kuljettaja", en:"Driver", ph:"kul-yet-tah-yah", cat:"transport", ex:"Kuljettaja ajaa. / The driver drives.", starter:true},
  {fi:"Lääkäri", en:"Doctor", ph:"lä-ä-kä-ri", cat:"health", ex:"Lääkäri auttaa. / The doctor helps.", starter:true},
  {fi:"Sairaanhoitaja", en:"Nurse", ph:"sai-raan-hoi-tah-yah", cat:"health", ex:"Sairaanhoitaja hoitaa. / The nurse cares.", starter:true},
  {fi:"Apteekki", en:"Pharmacy", ph:"ap-te-ek-ki", cat:"health", ex:"Apteekki on auki. / The pharmacy is open.", starter:true},
  {fi:"Lääke", en:"Medicine", ph:"lä-ä-keh", cat:"health", ex:"Otan lääkkeen. / I take medicine.", starter:true},
  {fi:"Kipu", en:"Pain", ph:"ki-pu", cat:"health", ex:"Minulla on kipu. / I have pain.", starter:true},
  {fi:"Kuume", en:"Fever", ph:"ku-veh-meh", cat:"health", ex:"Minulla on kuume. / I have a fever.", starter:true},
  {fi:"Yskä", en:"Cough", ph:"üs-kä", cat:"health", ex:"Yskä on paha. / The cough is bad.", starter:true},
  {fi:"Flunssa", en:"Flu", ph:"flun-sah", cat:"health", ex:"Minulla on flunssa. / I have the flu.", starter:true},
  {fi:"Hammaslääkäri", en:"Dentist", ph:"ham-mas-lä-ä-kä-ri", cat:"health", ex:"Hammaslääkäri tarkistaa. / The dentist checks.", starter:true},
  {fi:"Verenpaine", en:"Blood pressure", ph:"veh-ren-pay-neh", cat:"health", ex:"Verenpaine on korkea. / The blood pressure is high.", starter:true},
  {fi:"Rokotus", en:"Vaccination", ph:"roh-ko-tus", cat:"health", ex:"Saan rokotuksen. / I get a vaccination.", starter:true},
  {fi:"Terveys", en:"Health", ph:"ter-veys", cat:"health", ex:"Terveys on tärkeä. / Health is important.", starter:true},
  {fi:"Hoito", en:"Treatment", ph:"hoy-toh", cat:"health", ex:"Hoito auttaa. / The treatment helps.", starter:true},
  {fi:"Oire", en:"Symptom", ph:"oy-reh", cat:"health", ex:"Oireet ovat pahat. / The symptoms are bad.", starter:true},
  {fi:"Hammas", en:"Tooth", ph:"ham-mas", cat:"health", ex:"Hammas sattuu. / The tooth hurts.", starter:true},
  {fi:"Silmä", en:"Eye", ph:"sil-mä", cat:"health", ex:"Silmä on sininen. / The eye is blue.", starter:true},
  {fi:"Korva", en:"Ear", ph:"kor-vah", cat:"health", ex:"Korva kuulee. / The ear hears.", starter:true},
  {fi:"Nenä", en:"Nose", ph:"neh-ä", cat:"health", ex:"Nenä on pitkä. / The nose is long.", starter:true},
  {fi:"Talo", en:"House", ph:"tah-loh", cat:"home", ex:"Talo on iso. / The house is big.", starter:true},
  {fi:"Asunto", en:"Apartment", ph:"ah-sun-toh", cat:"home", ex:"Asunto on pieni. / The apartment is small.", starter:true},
  {fi:"Keittiö", en:"Kitchen", ph:"key-ti-ö", cat:"home", ex:"Keittiö on siisti. / The kitchen is clean.", starter:true},
  {fi:"Olohuone", en:"Living room", ph:"oh-loh-hu-oh-neh", cat:"home", ex:"Olohuone on lämmin. / The living room is warm.", starter:true},
  {fi:"Makuuhuone", en:"Bedroom", ph:"mah-ku-hu-oh-neh", cat:"home", ex:"Makuuhuone on hiljainen. / The bedroom is quiet.", starter:true},
  {fi:"Kylpyhuone", en:"Bathroom", ph:"kül-pü-hu-oh-neh", cat:"home", ex:"Kylpyhuone on kylmä. / The bathroom is cold.", starter:true},
  {fi:"Sänky", en:"Bed", ph:"sän-kü", cat:"home", ex:"Sänky on pehmeä. / The bed is soft.", starter:true},
  {fi:"Pöytä", en:"Table", ph:"pöy-tä", cat:"home", ex:"Pöytä on puinen. / The table is wooden.", starter:true},
  {fi:"Tuoli", en:"Chair", ph:"tu-oh-li", cat:"home", ex:"Tuoli on mukava. / The chair is comfortable.", starter:true},
  {fi:"Kaappi", en:"Cabinet", ph:"kaap-pi", cat:"home", ex:"Kaappi on täynnä. / The cabinet is full.", starter:true},
  {fi:"Ovi", en:"Door", ph:"oh-vi", cat:"home", ex:"Ovi on auki. / The door is open.", starter:true},
  {fi:"Ikkuna", en:"Window", ph:"ik-ku-nah", cat:"home", ex:"Ikkuna on puhdas. / The window is clean.", starter:true},
  {fi:"Lattia", en:"Floor", ph:"lat-ti-ah", cat:"home", ex:"Lattia on kylmä. / The floor is cold.", starter:true},
  {fi:"Katto", en:"Ceiling", ph:"kat-toh", cat:"home", ex:"Katto on korkea. / The ceiling is high.", starter:true},
  {fi:"Puutarha", en:"Garden", ph:"pu-tar-hah", cat:"home", ex:"Puutarha on kaunis. / The garden is beautiful.", starter:true},
  {fi:"Pesukone", en:"Washing machine", ph:"peh-su-ko-neh", cat:"home", ex:"Pesukone pesee. / The washing machine washes.", starter:true},
  {fi:"Liesi", en:"Stove", ph:"li-eh-si", cat:"home", ex:"Liesi on kuuma. / The stove is hot.", starter:true},
  {fi:"Jääkaappi", en:"Refrigerator", ph:"yä-kahp-pi", cat:"home", ex:"Jääkaappi on kylmä. / The refrigerator is cold.", starter:true},
  {fi:"Mikroaaltouuni", en:"Microwave", ph:"mi-kroh-al-toh-ou-ni", cat:"home", ex:"Mikroaaltouuni lämmittää. / The microwave heats.", starter:true},
  {fi:"Televisio", en:"Television", ph:"teh-leh-vi-sio", cat:"home", ex:"Televisio on päällä. / The television is on.", starter:true},
  {fi:"Aurinko", en:"Sun", ph:"au-rin-koh", cat:"weather", ex:"Aurinko paistaa. / The sun shines.", starter:true},
  {fi:"Pilvi", en:"Cloud", ph:"pil-vi", cat:"weather", ex:"Pilvi on valkoinen. / The cloud is white.", starter:true},
  {fi:"Sade", en:"Rain", ph:"sah-deh", cat:"weather", ex:"Sade tulee. / The rain is coming.", starter:true},
  {fi:"Lumi", en:"Snow", ph:"lu-mi", cat:"weather", ex:"Lumi sataa. / The snow falls.", starter:true},
  {fi:"Tuuli", en:"Wind", ph:"tu-u-li", cat:"weather", ex:"Tuuli puhaltaa. / The wind blows.", starter:true},
  {fi:"Ukkonen", en:"Thunder", ph:"uk-koh-nen", cat:"weather", ex:"Ukkonen jyrisee. / The thunder rumbles.", starter:true},
  {fi:"Salama", en:"Lightning", ph:"sah-lah-mah", cat:"weather", ex:"Salama välähtää. / The lightning flashes.", starter:true},
  {fi:"Sää", en:"Weather", ph:"sä-ä", cat:"weather", ex:"Sää on hyvä. / The weather is good.", starter:true},
  {fi:"Kuuma", en:"Hot", ph:"ku-u-mah", cat:"weather", ex:"Ilma on kuuma. / The air is hot.", starter:true},
  {fi:"Kylmä", en:"Cold", ph:"kül-mä", cat:"weather", ex:"Ilma on kylmä. / The air is cold.", starter:true},
  {fi:"Koulu", en:"School", ph:"koh-lu", cat:"education", ex:"Koulu on lähellä. / The school is near.", starter:true},
  {fi:"Opettaja", en:"Teacher", ph:"oh-pet-tah-yah", cat:"education", ex:"Opettaja opettaa. / The teacher teaches.", starter:true},
  {fi:"Oppilas", en:"Student", ph:"op-pi-las", cat:"education", ex:"Oppilas oppii. / The student learns.", starter:true},
  {fi:"Kirja", en:"Book", ph:"kir-yah", cat:"education", ex:"Kirja on mielenkiintoinen. / The book is interesting.", starter:true},
  {fi:"Kynä", en:"Pen", ph:"kün-ä", cat:"education", ex:"Kynä on musta. / The pen is black.", starter:true},
  {fi:"Paperi", en:"Paper", ph:"pah-peh-ri", cat:"education", ex:"Paperi on valkoinen. / The paper is white.", starter:true},
  {fi:"Luokka", en:"Classroom", ph:"lu-ok-kah", cat:"education", ex:"Luokka on täynnä. / The classroom is full.", starter:true},
  {fi:"Tentti", en:"Exam", ph:"ten-ti", cat:"education", ex:"Tentti on vaikea. / The exam is difficult.", starter:true},
  {fi:"Arvosana", en:"Grade", ph:"ar-voh-sah-nah", cat:"education", ex:"Arvosana on hyvä. / The grade is good.", starter:true},
  {fi:"Oppikirja", en:"Textbook", ph:"op-pi-kir-yah", cat:"education", ex:"Oppikirja on painava. / The textbook is heavy.", starter:true},
  {fi:"Koulutus", en:"Education", ph:"koh-lu-tus", cat:"education", ex:"Koulutus on tärkeä. / Education is important.", starter:true},
  {fi:"Kurssi", en:"Course", ph:"kur-si", cat:"education", ex:"Kurssi on pitkä. / The course is long.", starter:true},
  {fi:"Tutkinto", en:"Degree", ph:"tut-kin-toh", cat:"education", ex:"Tutkinto on valmis. / The degree is ready.", starter:true},
  {fi:"Yliopisto", en:"University", ph:"ü-li-oh-pis-toh", cat:"education", ex:"Yliopisto on iso. / The university is big.", starter:true},
  {fi:"Kirjasto", en:"Library", ph:"kir-yas-toh", cat:"education", ex:"Kirjasto on hiljainen. / The library is quiet.", starter:true},
  {fi:"Oppitunti", en:"Lesson", ph:"op-pi-tun-ti", cat:"education", ex:"Oppitunti alkaa. / The lesson starts.", starter:true},
  {fi:"Harjoitus", en:"Exercise", ph:"har-yoy-tus", cat:"education", ex:"Harjoitus on helppo. / The exercise is easy.", starter:true},
  {fi:"Tutkimus", en:"Research", ph:"tut-ki-mus", cat:"education", ex:"Tutkimus jatkuu. / The research continues.", starter:true},
  {fi:"Diplom", en:"Diploma", ph:"di-plo-mi", cat:"education", ex:"Diplom on seinällä. / The diploma is on the wall.", starter:true},
  {fi:"Urheilu", en:"Sport", ph:"ur-hei-lu", cat:"hobbies", ex:"Urheilu on hauskaa. / Sport is fun.", starter:true},
  {fi:"Musiikki", en:"Music", ph:"mu-si-ik-ki", cat:"hobbies", ex:"Musiikki soi. / The music plays.", starter:true},
  {fi:"Taide", en:"Art", ph:"tay-deh", cat:"hobbies", ex:"Taide on kaunis. / Art is beautiful.", starter:true},
  {fi:"Lukeminen", en:"Reading", ph:"lu-ke-mi-nen", cat:"hobbies", ex:"Lukeminen rentouttaa. / Reading relaxes.", starter:true},
  {fi:"Matkustaminen", en:"Traveling", ph:"mat-kus-tah-mi-nen", cat:"hobbies", ex:"Matkustaminen on jännittävää. / Traveling is exciting.", starter:true},
  {fi:"Valokuvaus", en:"Photography", ph:"vah-loh-ku-vah-us", cat:"hobbies", ex:"Valokuvaus on harrastus. / Photography is a hobby.", starter:true},
  {fi:"Ruuanlaitto", en:"Cooking", ph:"ru-an-lay-toh", cat:"hobbies", ex:"Ruuanlaitto on hauskaa. / Cooking is fun.", starter:true},
  {fi:"Puutarhanhoito", en:"Gardening", ph:"pu-tar-han-hoy-toh", cat:"hobbies", ex:"Puutarhanhoito rentouttaa. / Gardening relaxes.", starter:true},
  {fi:"Tanssi", en:"Dance", ph:"tan-si", cat:"hobbies", ex:"Tanssi on kaunis. / Dance is beautiful.", starter:true},
  {fi:"Elokuva", en:"Movie", ph:"eh-loh-ku-vah", cat:"hobbies", ex:"Elokuva on hyvä. / The movie is good.", starter:true},
  {fi:"Teatteri", en:"Theater", ph:"teh-at-teh-ri", cat:"hobbies", ex:"Teatteri on mielenkiintoinen. / Theater is interesting.", starter:true},
  {fi:"Käsityö", en:"Craft", ph:"kä-si-tü-ö", cat:"hobbies", ex:"Käsityö on luova. / Craft is creative.", starter:true},
  {fi:"Kalastus", en:"Fishing", ph:"kah-las-tus", cat:"hobbies", ex:"Kalastus on rauhallista. / Fishing is peaceful.", starter:true},
  {fi:"Vaellus", en:"Hiking", ph:"vah-el-lus", cat:"hobbies", ex:"Vaellus on hyvä liikunta. / Hiking is good exercise.", starter:true},
  {fi:"Pyöräily", en:"Cycling", ph:"pü-ör-äi-lü", cat:"hobbies", ex:"Pyöräily on hauskaa. / Cycling is fun.", starter:true},
  {fi:"Piirtäminen", en:"Drawing", ph:"pi-ir-tä-mi-nen", cat:"hobbies", ex:"Piirtäminen on luova. / Drawing is creative.", starter:true},
  {fi:"Laulaminen", en:"Singing", ph:"lau-lah-mi-nen", cat:"hobbies", ex:"Laulaminen on hauskaa. / Singing is fun.", starter:true},
  {fi:"Soittaminen", en:"Playing (instrument)", ph:"soy-tah-mi-nen", cat:"hobbies", ex:"Soittaminen on vaikea. / Playing is difficult.", starter:true},
  {fi:"Kuntosali", en:"Gym", ph:"kun-toh-sah-li", cat:"hobbies", ex:"Kuntosali on hyvä. / The gym is good.", starter:true},
  {fi:"Uinti", en:"Swimming", ph:"uin-ti", cat:"hobbies", ex:"Uinti on hyvä liikunta. / Swimming is good exercise.", starter:true},
  {fi:"Matka", en:"Trip", ph:"mat-kah", cat:"travel", ex:"Matka on pitkä. / The trip is long.", starter:true},
  {fi:"Hotelli", en:"Hotel", ph:"ho-tel-li", cat:"travel", ex:"Hotelli on mukava. / The hotel is comfortable.", starter:true},
  {fi:"Lentolippu", en:"Flight ticket", ph:"len-toh-lip-pu", cat:"travel", ex:"Lentolippu on kallis. / The flight ticket is expensive.", starter:true},
  {fi:"Passi", en:"Passport", ph:"pas-si", cat:"travel", ex:"Passi on tärkeä. / The passport is important.", starter:true},
  {fi:"Viisumi", en:"Visa", ph:"vi-su-mi", cat:"travel", ex:"Viisumi on valmis. / The visa is ready.", starter:true},
  {fi:"Matkailu", en:"Tourism", ph:"mat-kay-lu", cat:"travel", ex:"Matkailu kasvaa. / Tourism is growing.", starter:true},
  {fi:"Retki", en:"Excursion", ph:"ret-ki", cat:"travel", ex:"Retki on hauska. / The excursion is fun.", starter:true},
  {fi:"Opas", en:"Guide", ph:"oh-pas", cat:"travel", ex:"Opas kertoo. / The guide tells.", starter:true},
  {fi:"Museo", en:"Museum", ph:"mu-seh-oh", cat:"travel", ex:"Museo on mielenkiintoinen. / The museum is interesting.", starter:true},
  {fi:"Kirkko", en:"Church", ph:"kirk-koh", cat:"travel", ex:"Kirkko on vanha. / The church is old.", starter:true},
  {fi:"Ravintola", en:"Restaurant", ph:"rah-vin-toh-lah", cat:"travel", ex:"Ravintola on hyvä. / The restaurant is good.", starter:true},
  {fi:"Pankki", en:"Bank", ph:"pank-ki", cat:"travel", ex:"Pankki on auki. / The bank is open.", starter:true},
  {fi:"Poliisi", en:"Police", ph:"poh-li-si", cat:"travel", ex:"Poliisi auttaa. / The police help.", starter:true},
  {fi:"Ranta", en:"Beach", ph:"ran-tah", cat:"travel", ex:"Ranta on kaunis. / The beach is beautiful.", starter:true},
  {fi:"Vuori", en:"Mountain", ph:"vu-oh-ri", cat:"travel", ex:"Vuori on korkea. / The mountain is high.", starter:true},
  {fi:"Järvi", en:"Lake", ph:"yär-vi", cat:"travel", ex:"Järvi on sininen. / The lake is blue.", starter:true},
  {fi:"Metsä", en:"Forest", ph:"mets-ä", cat:"travel", ex:"Metsä on vihreä. / The forest is green.", starter:true},
  {fi:"Saari", en:"Island", ph:"sah-ri", cat:"travel", ex:"Saari on pieni. / The island is small.", starter:true},
  {fi:"Kello", en:"Clock", ph:"kel-loh", cat:"daily", ex:"Kello on kahdeksan. / The clock is eight.", starter:true},
  {fi:"Avain", en:"Key", ph:"ah-vay-n", cat:"daily", ex:"Avain on taskussa. / The key is in the pocket.", starter:true},
  {fi:"Lompakko", en:"Wallet", ph:"lom-pak-koh", cat:"daily", ex:"Lompakko on pöydällä. / The wallet is on the table.", starter:true},
  {fi:"Ku", en:"Moon", ph:"ku", cat:"weather", ex:"Ku on täynnä. / The moon is full.", starter:true},
  {fi:"Tähti", en:"Star", ph:"täh-ti", cat:"weather", ex:"Tähti loistaa. / The star shines.", starter:true},
  {fi:"Maa", en:"Earth", ph:"mah", cat:"daily", ex:"Maa on pyöreä. / The earth is round.", starter:true},
  {fi:"Tuli", en:"Fire", ph:"tu-li", cat:"daily", ex:"Tuli on kuuma. / The fire is hot.", starter:true},

];






var PHRASES = [
  {cat:"At Work",   fi:"Hyvää huomenta kaikille!", ph:"hü-vää huo-men-ta", en:"Good morning everyone!", ctx:"Use when arriving at the workplace"},
  {cat:"At Work",   fi:"Missä on kahvi?",          ph:"mis-sä on kah-vi",  en:"Where is the coffee?",   ctx:"Very important in Finnish workplaces! 😄"},
  {cat:"At Work",   fi:"Tarvitsen apua.",           ph:"tar-vi-tsen a-pu-a",en:"I need help.",            ctx:"Say this when you need assistance from a colleague"},
  {cat:"At Work",   fi:"En ymmärrä. Voitko selittää?", ph:"en üm-mär-rä", en:"I don't understand. Can you explain?", ctx:"Colleagues appreciate honesty"},
  {cat:"At Work",   fi:"Olen valmis.",              ph:"o-len val-mis",     en:"I am ready.",             ctx:"Use when a task is complete"},
  {cat:"Shopping",  fi:"Paljonko tämä maksaa?",     ph:"pal-yon-ko tä-mä", en:"How much does this cost?",ctx:"Essential for any shop visit"},
  {cat:"Shopping",  fi:"Onko teillä...?",           ph:"on-ko teil-lä",     en:"Do you have...?",         ctx:"Start a request in a shop"},
  {cat:"Shopping",  fi:"Missä on kassa?",           ph:"mis-sä on kas-sa",  en:"Where is the checkout?",  ctx:"Finding the till"},
  {cat:"Shopping",  fi:"Saanko kupongin?",          ph:"saa-nko ku-pon-gin",en:"Can I get a receipt?",    ctx:"Always useful to have"},
  {cat:"Transport", fi:"Milloin bussi lähtee?",     ph:"mil-loin bus-si läh-tee", en:"When does the bus leave?", ctx:"At a bus stop"},
  {cat:"Transport", fi:"Missä on lähin metro?",     ph:"mis-sä on lä-hin", en:"Where is the nearest metro?", ctx:"In Helsinki or Tampere"},
  {cat:"Transport", fi:"Yksi lippu, kiitos.",       ph:"ük-si lip-pu",      en:"One ticket, please.",     ctx:"Buying a transport ticket"},
  {cat:"Transport", fi:"Pysähdyttekö tässä?",       ph:"pü-säh-düt-te-kö", en:"Do you stop here?",       ctx:"Asking the driver"},
  {cat:"Emergency", fi:"Soittakaa ambulanssi!",     ph:"soit-ta-kaa",       en:"Call an ambulance!",      ctx:"Medical emergency — 112 is the Finnish emergency number"},
  {cat:"Emergency", fi:"Olen eksynyt.",             ph:"o-len ek-sü-nüt",   en:"I am lost.",              ctx:"When you've lost your way"},
  {cat:"Emergency", fi:"Tarvitsen lääkäriä.",       ph:"tar-vi-tsen lää-kä-ri-ä", en:"I need a doctor.",  ctx:"At a health centre"},
  {cat:"Social",    fi:"Mitä kuuluu?",              ph:"mi-tä kuu-luu",     en:"How are you? / What's up?", ctx:"Casual greeting between friends"},
  {cat:"Social",   fi:"Hauska tutustua!",           ph:"haus-ka tu-tus-tua", en:"Nice to meet you!",      ctx:"When meeting someone for the first time"},
  {cat:"Social",   fi:"Oletko kotoisin suomesta?",  ph:"o-let-ko",          en:"Are you from Finland?",   ctx:"Starting a conversation"},
  {cat:"Social",   fi:"Opiskelen suomea.",          ph:"o-pis-ke-len",       en:"I am learning Finnish.",  ctx:"A great ice-breaker!"},
];

var GRAMMAR = [
  {icon:"🔤", bg:"#e8f5ee", title:"Vowel Harmony", sub:"The foundation of Finnish pronunciation",
   body:`<p>Finnish divides its vowels into two groups that cannot mix within a word:</p>
   <table class="g-table"><tr><th>Group</th><th>Vowels</th><th>Example</th></tr>
   <tr><td>Back</td><td class="fi">a, o, u</td><td>talo (house)</td></tr>
   <tr><td>Front</td><td class="fi">ä, ö, y</td><td>tyttö (girl)</td></tr>
   <tr><td>Neutral</td><td class="fi">i, e</td><td>Both groups</td></tr></table>
   <p>Suffixes change to match: <em>talossa</em> vs <em>tytössä</em> (in the house / in the girl)</p>
   <div class="tip-box"><span class="tip-icon">💡</span>When learning a new word, pay attention to whether it uses back or front vowels — it affects every suffix you add!</div>`},
  {icon:"📐", bg:"#e8eef8", title:"Noun Cases — The 15 Cases", sub:"Finnish has no prepositions — cases do that job",
   body:`<p>Instead of words like "in", "from", or "to", Finnish changes the ending of the noun. Here are the most important ones:</p>
   <table class="g-table"><tr><th>Case</th><th>Ending</th><th>Meaning</th><th>Example</th></tr>
   <tr><td>Nominative</td><td class="fi">—</td><td>subject</td><td>talo (house)</td></tr>
   <tr><td>Genitive</td><td class="fi">-n</td><td>possession</td><td>talon (house's)</td></tr>
   <tr><td>Partitive</td><td class="fi">-a/-ä</td><td>partial, some</td><td>taloa</td></tr>
   <tr><td>Inessive</td><td class="fi">-ssa/-ssä</td><td>in</td><td>talossa (in the house)</td></tr>
   <tr><td>Elative</td><td class="fi">-sta/-stä</td><td>from/out of</td><td>talosta</td></tr>
   <tr><td>Illative</td><td class="fi">-VVn</td><td>into</td><td>taloon (into the house)</td></tr>
   <tr><td>Allative</td><td class="fi">-lle</td><td>onto/to</td><td>talolle</td></tr>
   <tr><td>Ablative</td><td class="fi">-lta/-ltä</td><td>from/off</td><td>talolta</td></tr></table>
   <div class="tip-box"><span class="tip-icon">💡</span>Don't try to memorise all 15 at once. Start with -ssa (in), -sta (from), and -lle (to) — these cover 80% of daily conversations.</div>`},
  {icon:"🔄", bg:"#fdf3e3", title:"Verb Conjugation", sub:"Present tense for everyday speech",
   body:`<p>Finnish verbs conjugate by person and number. Here is <em>puhua</em> (to speak):</p>
   <table class="g-table"><tr><th>Person</th><th>Finnish</th><th>English</th></tr>
   <tr><td>minä (I)</td><td class="fi">puhun</td><td>I speak</td></tr>
   <tr><td>sinä (you)</td><td class="fi">puhut</td><td>you speak</td></tr>
   <tr><td>hän (he/she)</td><td class="fi">puhuu</td><td>he/she speaks</td></tr>
   <tr><td>me (we)</td><td class="fi">puhumme</td><td>we speak</td></tr>
   <tr><td>te (you pl.)</td><td class="fi">puhutte</td><td>you speak</td></tr>
   <tr><td>he (they)</td><td class="fi">puhuvat</td><td>they speak</td></tr></table>
   <div class="tip-box"><span class="tip-icon">💡</span>Finnish does not have a word for "it" — hän means both he and she. Gender-neutral language is built into Finnish!</div>`},
  {icon:"❌", bg:"#fdecea", title:"Negation", sub:"One special negative verb does all the work",
   body:`<p>Finnish uses a dedicated <strong>negative verb</strong> that conjugates, while the main verb stays in its base form:</p>
   <table class="g-table"><tr><th>Person</th><th>Neg. verb</th><th>Full sentence</th></tr>
   <tr><td>minä</td><td class="fi">en</td><td>En puhu suomea. (I don't speak Finnish.)</td></tr>
   <tr><td>sinä</td><td class="fi">et</td><td>Et ymmärrä. (You don't understand.)</td></tr>
   <tr><td>hän</td><td class="fi">ei</td><td>Ei tule. (He/She is not coming.)</td></tr>
   <tr><td>me</td><td class="fi">emme</td><td>Emme tiedä. (We don't know.)</td></tr>
   <tr><td>te</td><td class="fi">ette</td><td>Ette kuule. (You don't hear.)</td></tr>
   <tr><td>he</td><td class="fi">eivät</td><td>Eivät puhu. (They don't speak.)</td></tr></table>`},
  {icon:"❓", bg:"#f3e8f8", title:"Question Words", sub:"The who, what, where of Finnish",
   body:`<table class="g-table"><tr><th>Finnish</th><th>English</th><th>Example</th></tr>
   <tr><td class="fi">Missä?</td><td>Where? (location)</td><td>Missä on pysäkki? (Where is the stop?)</td></tr>
   <tr><td class="fi">Minne?</td><td>Where? (direction)</td><td>Minne menet? (Where are you going?)</td></tr>
   <tr><td class="fi">Milloin?</td><td>When?</td><td>Milloin bussi tulee? (When does the bus come?)</td></tr>
   <tr><td class="fi">Mikä?</td><td>What?</td><td>Mikä tämä on? (What is this?)</td></tr>
   <tr><td class="fi">Kuka?</td><td>Who?</td><td>Kuka se on? (Who is that?)</td></tr>
   <tr><td class="fi">Miksi?</td><td>Why?</td><td>Miksi olet täällä? (Why are you here?)</td></tr>
   <tr><td class="fi">Miten?</td><td>How?</td><td>Miten menee? (How is it going?)</td></tr>
   <tr><td class="fi">Paljonko?</td><td>How much?</td><td>Paljonko maksaa? (How much does it cost?)</td></tr></table>`},
  {icon:"🔢", bg:"#e8f5ee", title:"Numbers 1–20", sub:"Count in Finnish",
   body:`<table class="g-table"><tr><th>Finnish</th><th>#</th><th>Finnish</th><th>#</th></tr>
   <tr><td class="fi">yksi</td><td>1</td><td class="fi">yksitoista</td><td>11</td></tr>
   <tr><td class="fi">kaksi</td><td>2</td><td class="fi">kaksitoista</td><td>12</td></tr>
   <tr><td class="fi">kolme</td><td>3</td><td class="fi">kolmetoista</td><td>13</td></tr>
   <tr><td class="fi">neljä</td><td>4</td><td class="fi">neljätoista</td><td>14</td></tr>
   <tr><td class="fi">viisi</td><td>5</td><td class="fi">viisitoista</td><td>15</td></tr>
   <tr><td class="fi">kuusi</td><td>6</td><td class="fi">kuusitoista</td><td>16</td></tr>
   <tr><td class="fi">seitsemän</td><td>7</td><td class="fi">seitsemäntoista</td><td>17</td></tr>
   <tr><td class="fi">kahdeksan</td><td>8</td><td class="fi">kahdeksantoista</td><td>18</td></tr>
   <tr><td class="fi">yhdeksän</td><td>9</td><td class="fi">yhdeksäntoista</td><td>19</td></tr>
   <tr><td class="fi">kymmenen</td><td>10</td><td class="fi">kaksikymmentä</td><td>20</td></tr></table>
   <div class="tip-box"><span class="tip-icon">💡</span>Finnish numbers 11–19 follow a pattern: base number + <em>toista</em> (meaning "of the second ten"). Very logical!</div>`},
  {icon:"🎨", bg:"#e8eef8", title:"Common Adjectives", sub:"Describe the world around you",
   body:`<table class="g-table"><tr><th>Finnish</th><th>English</th><th>Finnish</th><th>English</th></tr>
   <tr><td class="fi">hyvä</td><td>good</td><td class="fi">huono</td><td>bad</td></tr>
   <tr><td class="fi">iso</td><td>big</td><td class="fi">pieni</td><td>small</td></tr>
   <tr><td class="fi">kaunis</td><td>beautiful</td><td class="fi">ruma</td><td>ugly</td></tr>
   <tr><td class="fi">nopea</td><td>fast</td><td class="fi">hidas</td><td>slow</td></tr>
   <tr><td class="fi">kallis</td><td>expensive</td><td class="fi">halpa</td><td>cheap</td></tr>
   <tr><td class="fi">kuuma</td><td>hot</td><td class="fi">kylmä</td><td>cold</td></tr>
   <tr><td class="fi">väsynyt</td><td>tired</td><td class="fi">energinen</td><td>energetic</td></tr></table>`},
];

var ACHIEVEMENTS = [
  {icon:"🌱", name:"First Word",    desc:"Added first word",     key:"firstWord"},
  {icon:"🃏", name:"Card Flipper",  desc:"Studied 10 flashcards",key:"flipper"},
  {icon:"🎯", name:"Quiz Starter",  desc:"Completed first quiz", key:"quizDone"},
  {icon:"⭐", name:"Star Student",  desc:"Scored 10/10 on quiz", key:"perfect"},
  {icon:"📚", name:"Word Hoarder",  desc:"Added 10 custom words",key:"words10"},
  {icon:"🔥", name:"On Fire",       desc:"3-day study streak",   key:"streak3"},
];

// ═══════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════
var state = {
  dark: false,
  ci: 0,          // card index
  qMode: 'fi-en', // quiz mode
  qWords: [], qi: 0, qs: 0, qLives: 3,
  filter: 'all',
  sortAsc: true,
  xp: 0, streak: 1,
  seenCards: [],
  settings: { showPhonetic:true, autoAdvance:false, showExample:true },
  achievements: {},
  activity: [],
  favs: {},
  phraseFilter: 'At Work',
};

function loadState() {
  try {
    var s = JSON.parse(localStorage.getItem('fv_state') || '{}');
    if (s.dark !== undefined) state.dark = s.dark;
    if (s.xp !== undefined) state.xp = s.xp;
    if (s.streak !== undefined) state.streak = s.streak;
    if (s.settings) state.settings = Object.assign(state.settings, s.settings);
    if (s.achievements) state.achievements = s.achievements;
    if (s.activity) state.activity = s.activity;
    if (s.favs) state.favs = s.favs;
  } catch(e){}
}

function saveState() {
  localStorage.setItem('fv_state', JSON.stringify({
    dark: state.dark, xp: state.xp, streak: state.streak,
    settings: state.settings, achievements: state.achievements,
    activity: state.activity, favs: state.favs
  }));
}

function loadUserWords() {
  try { return JSON.parse(localStorage.getItem('fv_words') || '[]'); } catch { return []; }
}
function saveUserWords(w) { localStorage.setItem('fv_words', JSON.stringify(w)); }
function allWords() { return STARTER.concat(loadUserWords()); }

// ═══════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════
var currentScreen = 'home';
function go(id) {
  closeDrawer();
  document.querySelectorAll('.screen').forEach(function(s){ s.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(function(b){ b.classList.remove('active'); });
  var ni = document.getElementById('ni-'+id);
  if (ni) ni.classList.add('active');
  currentScreen = id;
  document.getElementById('fab').classList.toggle('show', id === 'vocab');
  if (id === 'flashcard') initFlashcard();
  if (id === 'quiz') initQuiz();
  if (id === 'grammar') renderGrammar();
  if (id === 'vocab') renderVocab();
  if (id === 'phrasebook') renderPhrasebook();
  if (id === 'progress') renderProgress();
  if (id === 'home') renderHome();
  window.scrollTo(0,0);
}

function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('overlay').classList.add('show');
}
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

// ═══════════════════════════════════════════════════════
// THEME
// ═══════════════════════════════════════════════════════
function toggleTheme() {
  state.dark = !state.dark;
  applyTheme();
  saveState();
}
function applyTheme() {
  document.body.classList.toggle('dark', state.dark);
  document.getElementById('theme-btn').textContent = state.dark ? '☀️' : '🌙';
  var dt = document.getElementById('dark-toggle');
  if (dt) dt.className = 'toggle ' + (state.dark ? 'on' : 'off');
}

// ═══════════════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════════════
function renderHome() {
  var ws = allWords();
  var uw = loadUserWords();
  document.getElementById('s-words').textContent = ws.length;
  document.getElementById('s-streak').textContent = state.streak;
  document.getElementById('s-xp').textContent = state.xp;
  document.getElementById('d-words').textContent = ws.length;
  document.getElementById('d-streak').textContent = state.streak;
  document.getElementById('d-score').textContent = state.xp;
  document.getElementById('streak-num').textContent = state.streak;
  var pct = Math.min(100, Math.round((state.xp / 100) * 100));
  document.getElementById('hero-fill').style.width = pct + '%';
  document.getElementById('hero-label').textContent = Math.min(state.xp, 100) + ' / 100 XP to next level';
  var recent = ws.slice(0, 5);
  var h = '';
  for (var i = 0; i < recent.length; i++) {
    var w = recent[i];
    h += '<div class="word-card"><div class="wc-stripe cat-' + (w.cat||'daily') + '"></div>';
    h += '<div class="wc-body"><div class="wc-top"><div><div class="wc-finnish">' + w.fi + '</div>';
    h += '<div class="wc-english">' + w.en + '</div></div></div></div></div>';
  }
  document.getElementById('home-recent').innerHTML = h;
}

// ═══════════════════════════════════════════════════════
// FLASHCARD
// ═══════════════════════════════════════════════════════
var flipCount = 0;
function initFlashcard() {
  state.ci = 0;
  state.seenCards = [];
  updateCard();
  renderDots();
}
function updateCard() {
  var ws = allWords();
  var w = ws[state.ci];
  document.getElementById('fc-inner').classList.remove('flip');
  document.getElementById('fc-fi').textContent = w.fi;
  document.getElementById('fc-en').textContent = w.en;
  document.getElementById('fc-ph').textContent = w.ph || '';
  document.getElementById('fc-ph').style.display = (state.settings.showPhonetic && w.ph) ? '' : 'none';
  document.getElementById('fc-cat-f').textContent = w.cat || 'word';
  document.getElementById('fc-cat-b').textContent = w.cat || 'word';
  var exEl = document.getElementById('fc-ex');
  if (state.settings.showExample && w.ex) {
    var parts = w.ex.split('/');
    exEl.innerHTML = '<em>' + (parts[0]||w.ex).trim() + '</em>' + (parts[1] ? '<br/>' + parts[1].trim() : '');
    exEl.style.display = '';
  } else {
    exEl.style.display = 'none';
  }
  document.getElementById('fc-count').textContent = (state.ci + 1) + ' / ' + ws.length;
  renderDots();
}
function renderDots() {
  var ws = allWords();
  var h = '';
  for (var i = 0; i < Math.min(ws.length, 20); i++) {
    var cls = i === state.ci ? 'current' : (state.seenCards.indexOf(i) > -1 ? 'seen' : '');
    h += '<div class="p-dot ' + cls + '"></div>';
  }
  document.getElementById('fc-dots').innerHTML = h;
}
function flipCard() {
  document.getElementById('fc-inner').classList.toggle('flip');
  flipCount++;
  if (flipCount === 10) unlockAchievement('flipper');
}
function nextCard() {
  var ws = allWords();
  if (state.seenCards.indexOf(state.ci) === -1) state.seenCards.push(state.ci);
  state.ci = (state.ci + 1) % ws.length;
  updateCard();
}
function prevCard() {
  var ws = allWords();
  state.ci = (state.ci - 1 + ws.length) % ws.length;
  updateCard();
}
function markCard(difficulty) {
  var xpMap = {easy:3, ok:2, hard:1};
  addXP(xpMap[difficulty] || 1);
  showToast(difficulty === 'easy' ? '✅ Easy! +3 XP' : difficulty === 'ok' ? '🙂 Good! +2 XP' : '😓 Keep practising! +1 XP');
  if (state.settings.autoAdvance) nextCard();
}

// ═══════════════════════════════════════════════════════
// QUIZ
// ═══════════════════════════════════════════════════════
function setMode(m, btn) {
  state.qMode = m;
  document.querySelectorAll('.quiz-mode-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  initQuiz();
}
function initQuiz() {
  var ws = allWords();
  state.qWords = shuf(ws).slice(0, Math.min(10, ws.length));
  state.qi = 0; state.qs = 0; state.qLives = 3;
  renderQuestion();
}
function renderQuestion() {
  var bar = document.getElementById('q-prog');
  var lbl = document.getElementById('q-prog-label');
  var livesEl = document.getElementById('q-lives');
  var scoreEl = document.getElementById('q-score-live');
  var pct = (state.qi / state.qWords.length) * 100;
  bar.style.width = pct + '%';
  lbl.textContent = 'Question ' + (state.qi + 1) + ' of ' + state.qWords.length;
  livesEl.textContent = '❤️'.repeat(state.qLives) + '🖤'.repeat(3 - state.qLives);
  scoreEl.textContent = state.qs + ' pts';
  var body = document.getElementById('quiz-body');
  if (state.qi >= state.qWords.length || state.qLives <= 0) {
    var trophy = state.qs >= 9 ? '🏆' : state.qs >= 7 ? '🥇' : state.qs >= 5 ? '🥈' : '🥉';
    var grade = state.qs >= 9 ? 'Outstanding!' : state.qs >= 7 ? 'Excellent!' : state.qs >= 5 ? 'Good job!' : 'Keep practising!';
    var msg = state.qs >= 9 ? 'Erinomainen! You are amazing!' : state.qs >= 7 ? 'Hyvä! Great work!' : state.qs >= 5 ? 'Hyvin! You\'re getting there!' : 'Harjoittele lisää! Practise more!';
    body.innerHTML = '<div class="quiz-end"><span class="quiz-end-trophy">' + trophy + '</span>'
      + '<div class="quiz-end-score">' + state.qs + '/' + state.qWords.length + '</div>'
      + '<div class="quiz-end-grade">' + grade + '</div>'
      + '<div class="quiz-end-msg">' + msg + '</div>'
      + '<button class="btn-primary" onclick="initQuiz()" style="margin-right:10px">Try Again</button>'
      + '<button class="btn-outline" onclick="go(\'home\')">Home</button></div>';
    var xpEarned = state.qs * 5;
    addXP(xpEarned);
    unlockAchievement('quizDone');
    if (state.qs === state.qWords.length) unlockAchievement('perfect');
    logActivity('Completed quiz', '🧪', state.qs + '/' + state.qWords.length);
    return;
  }
  var w = state.qWords[state.qi];
  var allW = allWords();
  var wrong = shuf(allW.filter(function(x){ return x.fi !== w.fi; })).slice(0, 3);
  var opts = shuf([w].concat(wrong));
  var letters = ['A','B','C','D'];
  var qText = state.qMode === 'fi-en' ? w.fi : w.en;
  var promptText = state.qMode === 'fi-en' ? 'What does this Finnish word mean?' : 'Which Finnish word means this?';
  var h = '<div class="quiz-card"><div class="q-cat">' + (w.cat || 'vocabulary') + '</div>'
    + '<div class="q-prompt">' + promptText + '</div>'
    + '<div class="q-word">' + qText + '</div></div>';
  h += '<div class="quiz-options">';
  for (var i = 0; i < opts.length; i++) {
    var optText = state.qMode === 'fi-en' ? opts[i].en : opts[i].fi;
    var correctText = state.qMode === 'fi-en' ? w.en : w.fi;
    h += '<button class="q-opt" onclick="checkAns(this,\'' + optText.replace(/'/g,"\\'") + '\',\'' + correctText.replace(/'/g,"\\'") + '\')">'
      + '<span class="q-opt-badge">' + letters[i] + '</span>' + optText + '</button>';
  }
  h += '</div><div class="quiz-feedback-bar" id="qfb"></div>'
    + '<div class="quiz-score-row"><span>Score: ' + state.qs + ' pts</span><span>' + (state.qWords.length - state.qi) + ' remaining</span></div>';
  body.innerHTML = h;
}
function checkAns(btn, chosen, correct) {
  document.querySelectorAll('.q-opt').forEach(function(b){ b.disabled = true; });
  var fb = document.getElementById('qfb');
  if (chosen === correct) {
    btn.classList.add('correct'); state.qs++;
    fb.className = 'quiz-feedback-bar correct'; fb.textContent = '✅ Oikein! Correct! +5 XP';
  } else {
    btn.classList.add('wrong'); state.qLives--;
    fb.className = 'quiz-feedback-bar wrong'; fb.textContent = '❌ Väärin! Wrong. It means: ' + correct;
    document.querySelectorAll('.q-opt').forEach(function(b){
      if (b.textContent.trim().indexOf(correct) > -1 && !b.classList.contains('wrong')) b.classList.add('correct');
    });
  }
  state.qi++;
  setTimeout(renderQuestion, 1400);
}

// ═══════════════════════════════════════════════════════
// PHRASEBOOK
// ═══════════════════════════════════════════════════════
function renderPhrasebook() {
  var cats = [];
  PHRASES.forEach(function(p){ if (cats.indexOf(p.cat) === -1) cats.push(p.cat); });
  var h = '';
  cats.forEach(function(c){
    h += '<button class="phrase-cat ' + (c === state.phraseFilter ? 'active' : '') + '" onclick="setPhraseCat(\'' + c + '\')">' + c + '</button>';
  });
  document.getElementById('phrase-cats').innerHTML = h;
  var filtered = PHRASES.filter(function(p){ return p.cat === state.phraseFilter; });
  h = '';
  filtered.forEach(function(p){
    h += '<div class="phrase-item">'
      + '<div class="phrase-fi">' + p.fi + '</div>'
      + '<div class="phrase-phonetic">/ ' + p.ph + ' /</div>'
      + '<div class="phrase-en">' + p.en + '</div>'
      + '<div class="phrase-context">💡 ' + p.ctx + '</div>'
      + '</div>';
  });
  document.getElementById('phrase-list').innerHTML = h;
}
function setPhraseCat(cat) {
  state.phraseFilter = cat;
  renderPhrasebook();
}

// ═══════════════════════════════════════════════════════
// GRAMMAR
// ═══════════════════════════════════════════════════════
function renderGrammar() {
  var h = '';
  GRAMMAR.forEach(function(g, i){
    h += '<div class="grammar-card">'
      + '<button class="grammar-head" onclick="toggleG(this)" aria-expanded="false">'
      + '<div class="grammar-head-left">'
      + '<div class="grammar-badge" style="background:' + g.bg + '">' + g.icon + '</div>'
      + '<div><div class="grammar-head-title">' + g.title + '</div>'
      + '<div class="grammar-head-sub">' + g.sub + '</div></div>'
      + '</div><span class="grammar-chevron">▾</span></button>'
      + '<div class="grammar-body">' + g.body + '</div></div>';
  });
  document.getElementById('grammar-list').innerHTML = h;
}
function toggleG(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('show');
  btn.setAttribute('aria-expanded', btn.classList.contains('open'));
}

// ═══════════════════════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════════════════════
var panelOpen = true;
function togglePanel() {
  panelOpen = !panelOpen;
  document.getElementById('add-panel').style.display = panelOpen ? '' : 'none';
}
function scrollToAdd() {
  if (!panelOpen) { panelOpen = true; document.getElementById('add-panel').style.display = ''; }
  document.getElementById('add-panel').scrollIntoView({behavior:'smooth'});
}
function addWord() {
  var f = document.getElementById('iF').value.trim();
  var e = document.getElementById('iE').value.trim();
  var p = document.getElementById('iP').value.trim();
  var x = document.getElementById('iX').value.trim();
  var c = document.getElementById('iC').value;
  if (!f || !e) { showToast('⚠️ Please fill in Finnish and English fields'); return; }
  var ws = loadUserWords();
  ws.unshift({fi:f, en:e, ph:p, ex:x, cat:c, id:Date.now(), fav:false});
  saveUserWords(ws);
  document.getElementById('iF').value = '';
  document.getElementById('iE').value = '';
  document.getElementById('iP').value = '';
  document.getElementById('iX').value = '';
  addXP(10);
  unlockAchievement('firstWord');
  if (loadUserWords().length >= 10) unlockAchievement('words10');
  logActivity('Added word: ' + f, '📝', '+10 XP');
  renderVocab(); renderHome();
  showToast('✅ "' + f + '" added! +10 XP');
}
function deleteWord(id) {
  if (!confirm('Remove this word?')) return;
  saveUserWords(loadUserWords().filter(function(w){ return w.id !== id; }));
  renderVocab(); renderHome();
  showToast('🗑️ Word removed');
}
function toggleFav(id) {
  var ws = loadUserWords();
  ws.forEach(function(w){ if (w.id === id) w.fav = !w.fav; });
  saveUserWords(ws);
  renderVocab();
}
var vocabFilter = 'all';
function setFilter(f, btn) {
  vocabFilter = f;
  document.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  renderVocab();
}
function toggleSort() {
  state.sortAsc = !state.sortAsc;
  renderVocab();
}
function renderVocab() {
  var q = (document.getElementById('si') || {value:''}).value.toLowerCase();
  var uw = loadUserWords();
  var all = STARTER.map(function(w){ return Object.assign({}, w, {starter:true}); }).concat(uw);
  var filtered = all;
  if (vocabFilter === 'starter') filtered = all.filter(function(w){ return w.starter; });
  else if (vocabFilter === 'custom') filtered = uw;
  else if (vocabFilter === 'fav') filtered = uw.filter(function(w){ return w.fav; });
  if (q) filtered = filtered.filter(function(w){ return w.fi.toLowerCase().indexOf(q) > -1 || w.en.toLowerCase().indexOf(q) > -1; });
  if (state.sortAsc) filtered.sort(function(a,b){ return a.fi.localeCompare(b.fi); });
  document.getElementById('vc-count').textContent = filtered.length + ' of ' + all.length + ' words';
  if (!filtered.length) {
    document.getElementById('vocab-list').innerHTML = '<div class="empty-state"><span class="empty-icon">🔍</span><div class="empty-title">No words found</div><div class="empty-sub">Try a different search or filter</div></div>';
    return;
  }
  var h = '';
  filtered.forEach(function(w){
    var isFav = w.fav || state.favs[w.fi];
    h += '<div class="word-card">'
      + '<div class="wc-stripe cat-' + (w.cat||'daily') + '"></div>'
      + '<div class="wc-body"><div class="wc-top"><div>'
      + '<div class="wc-finnish">' + w.fi + '</div>'
      + (w.ph ? '<div style="font-size:11px;color:var(--text3);font-style:italic">/ ' + w.ph + ' /</div>' : '')
      + '<div class="wc-english">' + w.en + '</div>'
      + (w.ex ? '<div class="wc-example">' + w.ex + '</div>' : '')
      + '</div><div class="wc-cat-tag">' + (w.cat||'word') + (w.starter?' · starter':'') + '</div></div></div>'
      + '<div class="wc-actions">'
      + (!w.starter ? '<button class="wc-btn fav ' + (isFav?'on':'') + '" onclick="toggleFav(' + w.id + ')" title="Favourite">' + (isFav?'⭐':'☆') + '</button>' : '')
      + (!w.starter ? '<button class="wc-btn del" onclick="deleteWord(' + w.id + ')" title="Delete">🗑️</button>' : '')
      + '</div></div>';
  });
  document.getElementById('vocab-list').innerHTML = h;
}

// ═══════════════════════════════════════════════════════
// PROGRESS
// ═══════════════════════════════════════════════════════
var LEVELS = ['Beginner','Elementary','Pre-Intermediate','Intermediate','Upper-Intermediate','Advanced'];
function renderProgress() {
  var lvlIdx = Math.min(Math.floor(state.xp / 100), LEVELS.length - 1);
  var lvlXP = state.xp % 100;
  document.getElementById('lvl-name').textContent = LEVELS[lvlIdx];
  document.getElementById('lvl-fill').style.width = lvlXP + '%';
  document.getElementById('lvl-xp').textContent = lvlXP + ' / 100 XP to next level';
  var ach = '';
  ACHIEVEMENTS.forEach(function(a){
    var earned = !!state.achievements[a.key];
    ach += '<div class="ach-card ' + (earned?'':'locked') + '"><span class="ach-icon">' + a.icon + '</span>'
      + '<div class="ach-name">' + a.name + '</div>'
      + '<div class="ach-desc">' + a.desc + '</div></div>';
  });
  document.getElementById('ach-grid').innerHTML = ach;
  var acts = state.activity.slice(0,8);
  if (!acts.length) {
    document.getElementById('activity-list').innerHTML = '<div class="empty-state"><span class="empty-icon">📊</span><div class="empty-title">No activity yet</div><div class="empty-sub">Start learning to see your history</div></div>';
    return;
  }
  var h = '';
  acts.forEach(function(a){
    h += '<div class="activity-item"><div class="act-icon">' + a.icon + '</div><div class="act-text"><div class="act-label">' + a.label + '</div><div class="act-time">' + a.time + '</div></div><div class="act-xp">' + a.detail + '</div></div>';
  });
  document.getElementById('activity-list').innerHTML = h;
}

function addXP(n) {
  state.xp += n;
  document.getElementById('s-xp').textContent = state.xp;
  document.getElementById('d-score').textContent = state.xp;
  saveState();
}
function unlockAchievement(key) {
  if (state.achievements[key]) return;
  state.achievements[key] = true;
  var a = ACHIEVEMENTS.find(function(a){ return a.key === key; });
  if (a) showToast('🏆 Achievement: ' + a.name + '!');
  saveState();
}
function logActivity(label, icon, detail) {
  var now = new Date();
  state.activity.unshift({ label:label, icon:icon, detail:detail, time: now.toLocaleDateString('en-GB',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}) });
  if (state.activity.length > 20) state.activity.pop();
  saveState();
}

// ═══════════════════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════════════════
function toggleSetting(key, btn) {
  state.settings[key] = !state.settings[key];
  btn.className = 'toggle ' + (state.settings[key] ? 'on' : 'off');
  saveState();
}
function exportVocab() {
  var ws = allWords();
  var txt = 'FinnVocab Export\n================\n\n';
  ws.forEach(function(w){ txt += w.fi + ' — ' + w.en + (w.ph?' ['+w.ph+']':'') + (w.ex?'\nExample: '+w.ex:'') + '\n\n'; });
  var a = document.createElement('a');
  a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt);
  a.download = 'finnvocab-export.txt';
  a.click();
  showToast('📄 Vocabulary exported!');
}
function resetProgress() {
  if (!confirm('Reset all XP and achievements? Your words will be kept.')) return;
  state.xp = 0; state.achievements = {}; state.activity = [];
  saveState(); renderHome();
  showToast('🔄 Progress reset');
}

// ═══════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════
var toastTimer;
function showToast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ t.classList.remove('show'); }, 2800);
}

// ═══════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════
function shuf(a) {
  var b = a.slice();
  for (var i = b.length-1; i > 0; i--) { var j = Math.floor(Math.random()*(i+1)); var t=b[i]; b[i]=b[j]; b[j]=t; }
  return b;
}

// ═══════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════
window.addEventListener('DOMContentLoaded', function() {
  loadState();
  applyTheme();
  renderHome();
  renderGrammar();
  renderVocab();
  renderPhrasebook();
  // Apply saved settings toggles
  var pt = document.getElementById('phon-toggle');
  if (pt) pt.className = 'toggle ' + (state.settings.showPhonetic ? 'on' : 'off');
  var at = document.getElementById('auto-toggle');
  if (at) at.className = 'toggle ' + (state.settings.autoAdvance ? 'on' : 'off');
  var et = document.getElementById('ex-toggle');
  if (et) et.className = 'toggle ' + (state.settings.showExample ? 'on' : 'off');
  // Hide splash
  setTimeout(function(){
    document.getElementById('splash').classList.add('gone');
  }, 2000);
});


