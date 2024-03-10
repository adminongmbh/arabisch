const woerter = [
  { deutsch: "Ein Student", arabisch: "طَالِبٌ وَاحِدٌ", arabischSingular: "طَالِبٌ", deutschSingular: "Student" },
  { deutsch: "Zwei Katzen", arabisch: "قِطَّتَانِ", arabischSingular: "قِطَّةٌ", deutschSingular: "Katze" },
  { deutsch: "Drei Stifte", arabisch: "ثَلَاثَةُ أَقْلَامٍ", arabischSingular: "قَلَمٌ", deutschSingular: "Stift" },
  { deutsch: "Vier Bücher", arabisch: "أَرْبَعَةُ كُتُبٍ", arabischSingular: "كِتَابٌ", deutschSingular: "Buch" },
  { deutsch: "Fünf Uhren", arabisch: "خَمْسُ سَاعَاتٍ", arabischSingular: "سَاعَةٌ", deutschSingular: "Uhr" },
  { deutsch: "Sechs Schlüssel", arabisch: "سِتُّ مَفَاتِيحَ", arabischSingular: "مِفْتَاحٌ", deutschSingular: "Schlüssel" },
  { deutsch: "Sieben Teller", arabisch: "سَبْعُ صُحُونٍ", arabischSingular: "صَحْنٌ", deutschSingular: "Teller" },
  { deutsch: "Acht Blumen", arabisch: "ثَمَانِيَةُ أَزْهَارٍ", arabischSingular: "زَهْرَةٌ", deutschSingular: "Blume" },
  { deutsch: "Neun Taschen", arabisch: "تِسْعُ حَقَائِبَ", arabischSingular: "حَقِيبَةٌ", deutschSingular: "Tasche" },
  { deutsch: "Zehn Regale", arabisch: "عَشْرُ رُفُوفٍ", arabischSingular: "رَفٌّ", deutschSingular: "Regal" },
  { deutsch: "Ein Ball", arabisch: "كُرَّةٌ وَاحِدَةٌ", arabischSingular: "كُرَّةٌ", deutschSingular: "Ball" },
  { deutsch: "Zwei Computer", arabisch: "حَاسُوبَانِ", arabischSingular: "حَاسُوبٌ", deutschSingular: "Computer" },
  { deutsch: "Drei Handys", arabisch: "ثَلَاثَةُ هَوَاتِفَ", arabischSingular: "هَاتِفٌ", deutschSingular: "Handy" },
  { deutsch: "Vier Fenster", arabisch: "أَرْبَعَةُ نَوَافِذَ", arabischSingular: "نَافِذَةٌ", deutschSingular: "Fenster" },
  { deutsch: "Fünf Filme", arabisch: "خَمْسَةُ أَفْلَامٍ", arabischSingular: "فِلْمٌ", deutschSingular: "Film" },
  { deutsch: "Sechs Tische", arabisch: "سِتُّ طَاوِلَاتٍ", arabischSingular: "طَاوِلَةٌ", deutschSingular: "Tisch" },
  { deutsch: "Sieben Stühle", arabisch: "سَبْعُ كُرَاسِيَّ", arabischSingular: "كُرْسِيٌّ", deutschSingular: "Stuhl" },
  { deutsch: "Acht Gemälde", arabisch: "ثَمَانِيَةُ لَوْحَاتٍ", arabischSingular: "لَوْحَةٌ", deutschSingular: "Gemälde" },
  { deutsch: "Neun Autos", arabisch: "تِسْعُ سَيَّارَاتٍ", arabischSingular: "سَيَّارَةٌ", deutschSingular: "Auto" },
  { deutsch: "Zehn Türen", arabisch: "عَشْرَةُ أَبْوَابٍ", arabischSingular: "بَابٌ", deutschSingular: "Tür" },
  { deutsch: "Ein Stift", arabisch: "قَلَمٌ وَاحِدٌ", arabischSingular: "قَلَمٌ", deutschSingular: "Stift" },
  { deutsch: "Zwei Bäume", arabisch: "شَجَرَتَانِ", arabischSingular: "شَجَرَةٌ", deutschSingular: "Baum" },
  { deutsch: "Drei Körbe", arabisch: "ثَلَاثُ سَلَّاتٍ", arabischSingular: "سَلَّةٌ", deutschSingular: "Korb" },
  { deutsch: "Vier Gläser", arabisch: "أَرْبَعُ كَآسَاتٍ", arabischSingular: "كَأْسٌ", deutschSingular: "Glas" },
  { deutsch: "Fünf Messer", arabisch: "خَمْسُ سَكَّاكِينَ", arabischSingular: "سِكِّينٌ", deutschSingular: "Messer" },
  { deutsch: "Sechs Löffel", arabisch: "سِتُّ مَلَاعِقَ", arabischSingular: "مِلْعَقَةٌ", deutschSingular: "Löffel" },
  { deutsch: "Sieben Gabeln", arabisch: "سَبْعُ شَوَاكٍ", arabischSingular: "شَوْكَةٌ", deutschSingular: "Gabel" },
  { deutsch: "Acht Lampen", arabisch: "ثَمَانِيَةُ مَصَابِيحَ", arabischSingular: "مِصْبَاحٌ", deutschSingular: "Lampe" },
  { deutsch: "Neun Sofas", arabisch: "تِسْعُ أَرَائِكَ", arabischSingular: "أَرِيكَةٌ", deutschSingular: "Sofa" },
  { deutsch: "Zehn Fahrräder", arabisch: "عَشْرُ دَرَاجَاتٍ", arabischSingular: "دَرَّاجَةٌ", deutschSingular: "Fahrrad" },
  { deutsch: "Ein Buch", arabisch: "كِتَابٌ وَاحِدٌ", arabischSingular: "كِتَابٌ", deutschSingular: "Buch" },
  { deutsch: "Zwei Autos", arabisch: "سَيَّارَتَانِ", arabischSingular: "سَيَّارَةٌ", deutschSingular: "Auto" },
  { deutsch: "Drei Äpfel", arabisch: "ثَلَاثَةُ تُفَّاحَاتٍ", arabischSingular: "تُفَّاحَةٌ", deutschSingular: "Apfel" },
  { deutsch: "Vier Angestellte", arabisch: "أَرْبَعَةُ مُوَظَّفِينَ", arabischSingular: "مُوَظَّفٌ", deutschSingular: "Angestellter" },
  { deutsch: "Fünf Klammern", arabisch: "خَمْسَةُ بَرَاوِيزَ", arabischSingular: "بَرْوَازٌ", deutschSingular: "Klammer" },
  { deutsch: "Sechs Schuhe", arabisch: "سِتَّةُ أَحْذِيَةٍ", arabischSingular: "حِذَاءٌ", deutschSingular: "Schuh" },
  { deutsch: "Sieben Gewehre", arabisch: "سَبْعُ بَنَادِقَ", arabischSingular: "بُنْدُقِيَّةٌ", deutschSingular: "Gewehr" },
  { deutsch: "Acht Mützen", arabisch: "ثَمَانِيَةُ قُبَعَاتٍ", arabischSingular: "قُبَّعَةٌ", deutschSingular: "Mütze" },
  { deutsch: "Neun Armbänder", arabisch: "تِسْعُ أَسَاوِرَ", arabischSingular: "سِوَارٌ", deutschSingular: "Armband" },
  { deutsch: "Zehn Regenschirme", arabisch: "عَشْرُ أَمْطَارٍ", arabischSingular: "مِظَلَّةٌ", deutschSingular: "Regenschirm" }
];


let aktuellerIndex = 0;

async function naechstesWort() {
  const deutschesWort = document.getElementById('deutschesWort');
  const arabischesWort = document.getElementById('arabischesWort');
  const arabischSingular = document.getElementById('arabischSingular');
  const weiterBtn = document.getElementById('weiterBtn');
  const bild = document.getElementById('bild');

  if (aktuellerIndex < woerter.length) {
    const aktuell = woerter[aktuellerIndex];
    deutschesWort.textContent = aktuell.deutsch;
    arabischesWort.textContent = aktuell.arabisch;
    arabischSingular.textContent = 'Singular: ' + aktuell.arabischSingular;
    arabischesWort.style.display = 'none';
    arabischSingular.style.display = 'none';
    weiterBtn.textContent = 'Weiter';

    try {
      const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(aktuell.deutschSingular)}&image_type=photo&safesearch=true&per_page=3&min_width=400&min_height=400&exclude=people,face,fashion,family,girl,female`);
      const data = await response.json();
      if (data.hits.length > 0) {
        bild.src = data.hits[0].webformatURL;
        bild.alt = aktuell.deutschSingular;
      } else {
        bild.src = '';
        bild.alt = '';
      }
    } catch (error) {
      console.error('Fehler beim Abrufen des Bildes:', error);
      bild.src = '';
      bild.alt = '';
    }

    weiterBtn.onclick = () => {
      arabischesWort.style.display = 'block';
      arabischSingular.style.display = 'block';
      weiterBtn.textContent = 'Nächstes Wort';
      weiterBtn.onclick = naechstesWort;
    };
    aktuellerIndex++;
  } else {
    deutschesWort.textContent = 'Keine Wörter mehr übrig.';
    arabischesWort.style.display = 'none';
    arabischSingular.style.display = 'none';
    weiterBtn.style.display = 'none';
    bild.src = '';
    bild.alt = '';
  }
}

naechstesWort();