/*
Preču katalogs.

Lauki:
id — unikāls, bez atstarpēm (piem. "gramata-01")
name — nosaukums (latviski; krievu nosaukumus nerakstām)
category — galvenā nodaļa: gramatas, davanas, ziemassvetki, maksla
also — papildu nodaļas, kurās prece arī redzama (piem. ["ziemassvetki"])
price — cena eiro (piem. 12.5). null = “Cena pēc pieprasījuma” un poga “Jautāt”
priceNote — teksts pēc cenas (piem. "/ grāmata")
image — ceļš uz foto
note — īss apraksts (nav obligāts)
wide: true — plata kartīte (horizontāliem attēliem)
*/
window.CATEGORIES = [
{ id: "davanas", name: "Garšīgas dāvanas" },
{ id: "gramatas", name: "Grāmatas" },
{ id: "ziemassvetki", name: "Ziemassvētki" },
{ id: "maksla", name: "Māksla un dekors" }
];

window.PRODUCTS = [
// Grāmatas: jaunumi 22.–23. okt. (rāda pirmos)
{ id: "gramata-n31", name: "Grāmata", category: "gramatas", price: 17, image: "images/jaunumi/n31.jpg" },
{ id: "gramata-n32", name: "Grāmata", category: "gramatas", price: 8.2, image: "images/jaunumi/n32.jpg" },
{ id: "gramata-n33", name: "Grāmata", category: "gramatas", price: 8.8, image: "images/jaunumi/n33.jpg", note: "Mākslas terapija: zīmē pa punktiem" },
{ id: "gramata-n34", name: "Grāmata", category: "gramatas", price: 8.6, image: "images/jaunumi/n34.jpg", note: "Mākslas terapija: zīmē pa punktiem" },
{ id: "gramata-n35", name: "Grāmata", category: "gramatas", price: 8.6, image: "images/jaunumi/n35.jpg", note: "Mākslas terapija: zīmē pa punktiem" },
{ id: "gramata-n36", name: "Grāmata", category: "gramatas", price: 9, image: "images/jaunumi/n36.jpg" },
{ id: "gramata-n37", name: "Grāmata", category: "gramatas", price: 9.55, image: "images/jaunumi/n37.jpg" },
{ id: "gramata-n38", name: "Grāmata", category: "gramatas", price: 17.8, image: "images/jaunumi/n38.jpg" },
{ id: "gramata-n39", name: "Grāmata", category: "gramatas", price: 12, image: "images/jaunumi/n39.jpg" },
{ id: "gramata-n40", name: "Grāmata", category: "gramatas", price: 12, image: "images/jaunumi/n40.jpg" },
{ id: "gramata-n45", name: "Grāmata", category: "gramatas", price: 12, image: "images/jaunumi/n45.jpg" },

// Grāmatas: jaunumi 20. okt.
{ id: "gramata-j01", name: "Grāmata", category: "gramatas", also: ["ziemassvetki"], price: 18, image: "images/jaunumi/01.jpg" },
{ id: "gramata-parsteigums", name: "Grāmata-pārsteigums", category: "gramatas", price: 11, priceNote: "/ grāmata", image: "images/jaunumi/02.jpg", note: "Grāmata dāvanu iesaiņojumā" },
{ id: "gramata-j03", name: "Grāmata", category: "gramatas", price: 23, image: "images/jaunumi/03.jpg" },
{ id: "gramata-j04", name: "Grāmata", category: "gramatas", price: 15, image: "images/jaunumi/04.jpg" },
{ id: "gramata-j05", name: "Grāmata", category: "gramatas", price: 13, image: "images/jaunumi/05.jpg" },
{ id: "gramata-j06", name: "Grāmata", category: "gramatas", price: 17, image: "images/jaunumi/06.jpg" },
{ id: "gramata-j07", name: "Grāmata", category: "gramatas", price: 18, image: "images/jaunumi/07.jpg" },
{ id: "gramata-j08", name: "Grāmata", category: "gramatas", price: null, image: "images/jaunumi/08.jpg" },
{ id: "gramata-j09", name: "Grāmata", category: "gramatas", price: 8.5, image: "images/jaunumi/09.jpg" },
{ id: "gramata-j10", name: "Grāmata", category: "gramatas", price: 22.95, image: "images/jaunumi/10.jpg" },
{ id: "gramata-j11", name: "Grāmata", category: "gramatas", also: ["ziemassvetki"], price: 11.5, image: "images/jaunumi/11.jpg" },
{ id: "gramata-j12", name: "Grāmata", category: "gramatas", price: 16, image: "images/jaunumi/12.jpg" },
{ id: "gramata-j13", name: "Grāmata", category: "gramatas", also: ["ziemassvetki"], price: 17, image: "images/jaunumi/13.jpg" },
{ id: "gramata-j14", name: "Grāmata", category: "gramatas", price: 45, image: "images/jaunumi/14.jpg" },
{ id: "gramata-j15", name: "Grāmata", category: "gramatas", also: ["ziemassvetki"], price: 24.2, image: "images/jaunumi/15.jpg" },
{ id: "gramata-j16", name: "Grāmata", category: "gramatas", price: 8.8, image: "images/jaunumi/16.jpg" },
{ id: "gramata-j17", name: "Grāmata", category: "gramatas", price: 6, image: "images/jaunumi/17.jpg" },
{ id: "gramata-j18", name: "Grāmata", category: "gramatas", also: ["ziemassvetki"], price: 15, image: "images/jaunumi/18.jpg" },
{ id: "gramata-j19", name: "Grāmata", category: "gramatas", price: 8.7, image: "images/jaunumi/19.jpg" },
{ id: "gramata-j20", name: "Grāmata", category: "gramatas", price: 8.7, image: "images/jaunumi/20.jpg" },
{ id: "gramata-j21", name: "Grāmata", category: "gramatas", price: 8.7, image: "images/jaunumi/21.jpg" },
{ id: "gramata-j22", name: "Grāmata", category: "gramatas", price: 11.3, image: "images/jaunumi/22.jpg" },
{ id: "gramata-j23", name: "Grāmata", category: "gramatas", price: 19.8, image: "images/jaunumi/23.jpg" },
{ id: "gramata-j24", name: "Grāmata", category: "gramatas", price: 12, image: "images/jaunumi/24.jpg" },
{ id: "gramata-j25", name: "Grāmata", category: "gramatas", price: 21, image: "images/jaunumi/25.jpg" },

// Grāmatas: iepriekšējās
{ id: "klasikas-serija", name: "Klasikas sērija", category: "gramatas", price: null, image: "images/klasika.jpg", note: "Gēte, Dante, Kerols, Kafka un citi" },
{ id: "hoover-01", name: "Grāmata", category: "gramatas", price: null, image: "images/gramata-hoover.jpg" },
{ id: "atomnye-privychki", name: "Grāmata", category: "gramatas", price: 12, image: "images/atomnye-privychki.jpg" },
{ id: "chego-hotyat-koshki", name: "Grāmata", category: "gramatas", price: 20, image: "images/chego-hotyat-koshki.jpg" },
{ id: "draugi-milakie-sokolade", name: "Aleksandrs Makkols Smits «Draugi, mīļākie, šokolāde»", category: "gramatas", price: 6, image: "images/draugi-milakie-sokolade.jpg" },
{ id: "mumini", name: "«Jaunie piedzīvojumi Muminielejā»", category: "gramatas", price: 20, image: "images/mumini.jpg" },
{ id: "atlas-anatomii", name: "Grāmata", category: "gramatas", price: 19.5, image: "images/atlas-anatomii.jpg" },
{ id: "hoover-02", name: "Grāmata", category: "gramatas", price: null, image: "images/hoover-vse-tvoi.jpg" },
{ id: "lena-sokol-ogon", name: "Grāmata", category: "gramatas", price: null, image: "images/lena-sokol-ogon.jpg" },
{ id: "vizhu-vas-naskvoz", name: "Grāmata", category: "gramatas", price: null, image: "images/vizhu-vas-naskvoz.jpg" },
{ id: "gramatas-izvele", name: "Grāmatas krievu un angļu valodā", category: "gramatas", price: null, image: "images/gramatu-galds.jpg", note: "Pajautājiet, kas šobrīd ir veikalā" },

// Grāmatas: kārtis, spēles, grāmatzīmes, blociņi, pastkartes
{ id: "metaforiskas-kartis-n41", name: "Metaforiskās kārtis", category: "gramatas", price: 11.8, image: "images/jaunumi/n41.webp", note: "40 kārtis" },
{ id: "taro-kartis-n42", name: "Taro kārtis", category: "gramatas", price: 32, image: "images/jaunumi/n42.webp" },
{ id: "metaforiskas-kartis-n74", name: "Metaforiskās asociatīvās kārtis", category: "gramatas", price: 8, priceNote: "/ gab.", image: "images/jaunumi/n74.jpg", note: "Dažādi komplekti" },
{ id: "galda-spele-n44", name: "Galda spēle ar metaforiskajām kārtīm", category: "gramatas", price: 69.5, image: "images/jaunumi/n44.jpg" },
{ id: "gramatzime-n43", name: "Grāmatzīme", category: "gramatas", price: 0.5, priceNote: "/ gab.", image: "images/jaunumi/n43.jpg" },
{ id: "blocins-n77", name: "Blociņš A6", category: "gramatas", price: 2.8, image: "images/jaunumi/n77.jpg" },
{ id: "blocins-n78", name: "Blociņš A6", category: "gramatas", price: 2.8, image: "images/jaunumi/n78.jpg" },
{ id: "blocins-n79", name: "Blociņš A6", category: "gramatas", price: 2.8, image: "images/jaunumi/n79.jpg" },
{ id: "pastkarte-n80", name: "Pastkarte", category: "gramatas", price: 3.7, image: "images/jaunumi/n80.jpg" },

// Garšīgas dāvanas
{ id: "perugina-95-n65", name: "Perugina Nero 95% tumšā šokolāde", category: "davanas", price: 5, image: "images/jaunumi/n65.jpg" },
{ id: "perugina-85-n66", name: "Perugina Nero 85% tumšā šokolāde", category: "davanas", price: 5, image: "images/jaunumi/n66.jpg" },
{ id: "torras-tumsa-n67", name: "Torras tumšā šokolāde bez cukura", category: "davanas", price: 5.6, image: "images/jaunumi/n67.jpg" },
{ id: "torras-piena-n68", name: "Torras piena šokolāde bez cukura", category: "davanas", price: 5.6, image: "images/jaunumi/n68.jpg" },
{ id: "segafredo-n69", name: "Segafredo Pausa maltā kafija", category: "davanas", price: 14.5, image: "images/jaunumi/n69.jpg", note: "450 g" },
{ id: "sviesta-cepumi-n70", name: "Dāņu sviesta cepumi", category: "davanas", price: 9.5, image: "images/jaunumi/n70.jpg" },
{ id: "maison-bruyere-n71", name: "Maison Bruyère Chalumeaux d'Albi", category: "davanas", price: 6.2, image: "images/jaunumi/n71.jpg" },
{ id: "maison-bruyere-n72", name: "Maison Bruyère Croquants Noisettes", category: "davanas", price: 5, image: "images/jaunumi/n72.jpg" },
{ id: "maison-bruyere-n73", name: "Maison Bruyère Macarons Abricot Vanille", category: "davanas", price: 5, image: "images/jaunumi/n73.jpg" },
{ id: "laurence-9996", name: "Laurence 99,96% dark choco", category: "davanas", price: 8.2, image: "images/laurence-9996.jpg" },
{ id: "laurence-85", name: "Laurence Dark Chocolate 85%", category: "davanas", price: 8.2, image: "images/laurence-85.jpg" },
{ id: "laurence-cherry", name: "Laurence Dark Chocolate Cherry", category: "davanas", price: 8.2, image: "images/laurence-cherry.jpg" },
{ id: "laurence-mandeles", name: "Laurence Dark Chocolate ar mandelēm", category: "davanas", price: 8.2, image: "images/laurence-mandeles.jpg" },
{ id: "konfekte", name: "Šokolādes konfekte", category: "davanas", price: 0.8, priceNote: "/ gab.", image: "images/konfekte.jpg" },
{ id: "kaste-medus-sokolade", name: "Dāvanu kaste ar medu un karsto šokolādi", category: "davanas", price: null, image: "images/davanu-kaste.jpg" },

// Ziemassvētki
{ id: "eglites-rotajums-n87", name: "Eglītes rotājums «Mēness»", category: "ziemassvetki", price: 7.8, image: "images/jaunumi/n87.jpg" },
{ id: "eglites-rotajums-n94", name: "Eglītes rotājums «Ziemassvētku māja»", category: "ziemassvetki", price: 7, image: "images/jaunumi/n94.jpg" },
{ id: "eglites-rotajums-n98", name: "Eglītes rotājums «Lācītis»", category: "ziemassvetki", price: 7.2, image: "images/jaunumi/n98.jpg" },
{ id: "eglites-rotajums-n99", name: "Eglītes rotājums «Ziemassvētku vabole»", category: "ziemassvetki", price: 9, image: "images/jaunumi/n99.jpg" },
{ id: "eglites-rotajums-n100", name: "Eglītes rotājums «Krokodils»", category: "ziemassvetki", price: 8.6, image: "images/jaunumi/n100.jpg" },
{ id: "eglites-rotajums-n91", name: "Eglītes rotājums «Ziemas cepure»", category: "ziemassvetki", price: 6.2, image: "images/jaunumi/n91.jpg" },
{ id: "eglites-rotajums-n97", name: "Eglītes rotājums «Bumbieris»", category: "ziemassvetki", price: 6, image: "images/jaunumi/n97.jpg" },
{ id: "eglites-rotajums-n93", name: "Eglītes rotājums «Sarkanā lāse»", category: "ziemassvetki", price: 5.6, image: "images/jaunumi/n93.jpg" },
{ id: "eglites-rotajums-n88", name: "Eglītes rotājums", category: "ziemassvetki", price: 5.4, image: "images/jaunumi/n88.jpg" },
{ id: "eglites-rotajums-n95", name: "Eglītes rotājums «Dzirkstele»", category: "ziemassvetki", price: 5.2, image: "images/jaunumi/n95.jpg" },
{ id: "eglites-rotajums-n101", name: "Eglītes rotājums «Sarkanvīna lāse»", category: "ziemassvetki", price: 5, image: "images/jaunumi/n101.jpg" },
{ id: "eglites-rotajums-n96", name: "Eglītes rotājums «Zaļā lāse»", category: "ziemassvetki", price: 4.5, image: "images/jaunumi/n96.jpg" },
{ id: "eglites-bumba-n89", name: "Eglītes bumba", category: "ziemassvetki", price: 3.8, image: "images/jaunumi/n89.jpg" },
{ id: "eglites-rotajums-n92", name: "Eglītes rotājums «Bungas»", category: "ziemassvetki", price: 3.2, image: "images/jaunumi/n92.jpg" },
{ id: "eglites-rotajums-n90", name: "Eglītes rotājums «Bungas 2»", category: "ziemassvetki", price: 3.2, image: "images/jaunumi/n90.jpg" },
{ id: "ziemassvetku-vaze-n102", name: "Ziemassvētku vāze", category: "ziemassvetki", price: 5, image: "images/jaunumi/n102.jpg" },
{ id: "ziemassvetku-vaze-n103", name: "Ziemassvētku vāze", category: "ziemassvetki", price: 5, image: "images/jaunumi/n103.jpg" },
{ id: "sveces-eglite-n83", name: "9 aromātiskās sveces ar koka eglīti", category: "ziemassvetki", price: 10, image: "images/jaunumi/n83.jpg" },
{ id: "svece-iesainojuma-n104", name: "Svece dāvanu iesaiņojumā", category: "ziemassvetki", price: 4.2, image: "images/jaunumi/n104.jpg" },

// Māksla un dekors
{ id: "glezna-rudens-koki", name: "Glezna ar rudens kokiem", category: "maksla", price: 88, image: "images/glezna-koki.jpg", note: "150 × 50 cm", wide: true },
{ id: "vaze-01", name: "Dekoratīva vāze", category: "maksla", price: 32, image: "images/vaze.jpg" },
{ id: "keramikas-vaze-n46", name: "Keramikas vāze", category: "maksla", price: 21, image: "images/jaunumi/n46.jpg", note: "35 cm" },
{ id: "granatabols-n76", name: "Dekoratīva lādīte «Granātābols»", category: "maksla", price: 12, image: "images/jaunumi/n76.jpg" },
{ id: "drebju-aki-n48", name: "Drēbju āķis «Lauva»", category: "maksla", price: 15, priceNote: "/ gab.", image: "images/jaunumi/n48.jpg" },
{ id: "teja-servize-n57", name: "Vintage tējas servīze", category: "maksla", price: 39.2, image: "images/jaunumi/n57.jpg", note: "Tējkanna, 2 tases un vāze" },
{ id: "japanu-teja-n85", name: "Japāņu tējas komplekts", category: "maksla", price: 48.5, image: "images/jaunumi/n85.jpg", note: "6 tasītes" },
{ id: "vintage-skivis-n56", name: "Vintage stikla šķīvis", category: "maksla", price: 8.5, image: "images/jaunumi/n56.jpg" },
{ id: "tase-iesainojuma-n63", name: "Tase ar apakštasīti dāvanu iesaiņojumā", category: "maksla", price: 11.7, image: "images/jaunumi/n63.jpg" },
{ id: "tase-iesainojuma-n64", name: "Tase dāvanu iesaiņojumā", category: "maksla", price: 12, image: "images/jaunumi/n64.jpg" },
{ id: "kristala-vaze-n49", name: "Maza kristāla vāze", category: "maksla", price: 15, image: "images/jaunumi/n49.jpg" },
{ id: "kristala-bloda-n51", name: "Kristāla bļoda", category: "maksla", price: 18, image: "images/jaunumi/n51.jpg", note: "14,5 cm" },
{ id: "kristala-trauki-n52", name: "Vintage kristāla trauki", category: "maksla", price: 19, priceNote: "/ gab.", image: "images/jaunumi/n52.jpg" },
{ id: "kristala-bloda-n54", name: "Vintage kristāla bļoda", category: "maksla", price: 19.5, image: "images/jaunumi/n54.jpg" },
{ id: "kristala-vazite-n55", name: "Kristāla vāzīte sīkumiem", category: "maksla", price: 18, priceNote: "/ gab.", image: "images/jaunumi/n55.jpg" },
{ id: "svece-vina-n84", name: "Svece vīna glāzē", category: "maksla", price: 14.5, image: "images/jaunumi/n84.jpg" },
{ id: "svece-sampanietis-n86", name: "Svece šampanieša glāzē", category: "maksla", price: 14, image: "images/jaunumi/n86.jpg" },
{ id: "sveces-blocins-n82", name: "9 aromātiskās sveces un blociņš", category: "maksla", price: 10, image: "images/jaunumi/n82.jpg" },
{ id: "svece-n81", name: "Svece", category: "maksla", price: 3, priceNote: "/ gab.", image: "images/jaunumi/n81.jpg" },
{ id: "kaklarota-n60", name: "Kaklarota", category: "maksla", price: 30, image: "images/jaunumi/n60.jpg" },
{ id: "aproce-n61", name: "Aproce", category: "maksla", price: 25, priceNote: "/ gab.", image: "images/jaunumi/n61.jpg" }
];
