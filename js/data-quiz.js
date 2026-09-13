/* ================================================
   DATA: Dhikr (recuerdos de Allah) y Quiz
   Fuentes: Corán y hadices auténticos.
   ================================================ */
window.DHIKR_DATA = [
  {
    id: "subhanallah", phrase: "SubhanAllah", ar: "سُبْحَانَ اللَّهِ",
    trans: "Glorificado sea Allah",
    target: 33, source: "Muslim 2576 — 'quien diga Subhanallah 33 veces, Alhamdulillah 33 y Allahu Akbar 33 al final de cada oración, serán completadas a 99 con la Shahada, y se le perdonarán sus faltas aunque fueran como la espuma del mar.'"
  },
  {
    id: "alhamdulillah", phrase: "Alhamdulillah", ar: "الْحَمْدُ لِلَّهِ",
    trans: "Alabado sea Allah",
    target: 33, source: "Muslim 2576"
  },
  {
    id: "allahuakbar", phrase: "Allahu Akbar", ar: "اللَّهُ أَكْبَرُ",
    trans: "Allah es más Grande",
    target: 34, source: "Muslim 2576"
  },
  {
    id: "la-ilaha", phrase: "La ilaha illallah", ar: "لَا إِلَهَ إِلَّا اللَّهُ",
    trans: "No hay más dios que Allah",
    target: 100, source: "Al-Bujari y Muslim — 'la mejor palabra de dhikr' (at-Tirmidhi)."
  },
  {
    id: "astaghfirullah", phrase: "Astaghfirullah", ar: "أَسْتَغْفِرُ اللَّهَ",
    trans: "Pido perdón a Allah",
    target: 100, source: "Muslim 2702 — el Profeta ﷺ pedía perdón más de setenta veces al día."
  },
  {
    id: "halq", phrase: "Tasbih completo", ar: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَاللَّهُ أَكْبَرُ",
    trans: "Glorifica a Allah, alaba a Allah y engrandece a Allah",
    target: 33, source: "Hadiz auténtico — combinación de las tres alabanzas (ver Muslim 2576)."
  },
  {
    id: "salawat", phrase: "Salat sobre el Profeta ﷺ", ar: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ",
    trans: "Oh Allah, envía bendiciones sobre Muhammad",
    target: 100, source: "Muslim 384 — 'quien bendice al Profeta, Allah le bendice diez veces.'"
  },
  {
    id: "shahada-begin", phrase: "La Shahada", ar: "لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ",
    trans: "No hay más dios que Allah y Muhammad es Su mensajero",
    target: 10, source: "Hadiz auténtico — la mejor forma de dhikr."
  }
];

window.DHIKR_META = {
  note: "Estos son recuerdos de Allah auténticos. Los objetivos (33/100 etc.) siguen las prácticas recomendadas de hadices auténticos."
};

/* ================================================
   QUIZ DATA — preguntas con explicación
   ================================================ */
window.QUIZ_DATA = {
  categories: ["Corán", "Profetas", "Salah", "Wudu", "Historia", "Pilares", "Ramadan", "General"],
  levels: ["Fácil", "Medio", "Difícil"],
  questions: [
    // --- CORÁN ---
    { cat: "Corán", level: "Fácil", q: "¿Cuántas suras tiene el Corán?", options: ["99", "100", "114", "120"], correct: 2, expl: "El Corán tiene 114 suras. Los 99 son los nombres de Allah." },
    { cat: "Corán", level: "Fácil", q: "¿Cuál es la primera sura del Corán?", options: ["Al-Baqarah", "Al-Fatihah", "Al-Ikhlas", "An-Nas"], correct: 1, expl: "Al-Fatihah (La Apertura) es la primera sura y se recita en cada rak'ah de la oración." },
    { cat: "Corán", level: "Medio", q: "¿Qué sura completa se dedica a la historia del profeta Yusuf?", options: ["Surah Yusuf", "Surah Ibrahim", "Surah Nuh", "Surah Maryam"], correct: 0, expl: "La sura 12 (Yusuf) narra su historia completa, 'el más bello de los relatos' según el Corán (12:3)." },
    { cat: "Corán", level: "Medio", q: "¿Cómo se llama la noche en que descendió la primera revelación?", options: ["Laylat al-Isra", "Laylat al-Qadr", "Laylat al-Bara'ah", "Laylat al-Mi'raj"], correct: 1, expl: "Laylat al-Qadr (la noche del Decreto), en el mes de Ramadan, cuando descendió el Corán." },
    { cat: "Corán", level: "Difícil", q: "¿Qué sura es descrita como 'el corazón del Corán' en algunos hadices?", options: ["Ya-Sin", "Al-Mulk", "Al-Fatihah", "Al-Ikhlas"], correct: 0, expl: "La sura Ya-Sin (36) se ha descrito tradicionalmente así; es una atribución de hadiz cuya autenticidad es debatida." },
    // --- PROFETAS ---
    { cat: "Profetas", level: "Fácil", q: "¿Quién es el último profeta y mensajero?", options: ["'Isa", "Musa", "Muhammad ﷺ", "Ibrahim"], correct: 2, expl: "Muhammad ﷺ es el sello de los profetas (Al-Ahzab 33:40)." },
    { cat: "Profetas", level: "Fácil", q: "¿Qué profeta construyó el arca por orden de Allah?", options: ["Musa", "Nuh", "Yunus", "Salih"], correct: 1, expl: "Nuh (Noé) construyó el arca (Hud 11:36-38) y en ella se salvaron los creyentes del diluvio." },
    { cat: "Profetas", level: "Medio", q: "¿A quién llaman los musulmanes 'Jalilullah' (el amigo íntimo de Allah)?", options: ["Musa", "'Isa", "Ibrahim", "Dawud"], correct: 2, expl: "Ibrahim (Abraham) recibió ese título; el hadiz de al-Bujari y Muslim lo confirma." },
    { cat: "Profetas", level: "Medio", q: "¿Qué profeta fue engullido por un pez y luego invocó a su Señor?", options: ["Ayyub", "Zakariyya", "Yunus", "Ilyas"], correct: 2, expl: "Yunus (Jonás) invocó 'La ilaha illa anta subhanaka inni kuntu minaz-zalimin' (Al-Anbiya' 21:87)." },
    { cat: "Profetas", level: "Difícil", q: "¿Quién fue llamado 'Kalim Allah' (el interlocutor de Allah)?", options: ["Harun", "'Isa", "Dawud", "Musa"], correct: 3, expl: "Musa recibió la palabra de Allah directamente en el monte Sinaí (An-Nisa 4:164)." },
    // --- SALAH ---
    { cat: "Salah", level: "Fácil", q: "¿Cuántas oraciones obligatorias hay al día?", options: ["3", "5", "7", "2"], correct: 1, expl: "Fajr, Dhuhr, 'Asr, Maghrib e 'Isha' son las cinco oraciones diarias obligatorias." },
    { cat: "Salah", level: "Fácil", q: "¿Cuántas rak'ahs tiene la oración del Fajr?", options: ["4", "3", "2", "5"], correct: 2, expl: "Fajr tiene 2 rak'ahs obligatorias." },
    { cat: "Salah", level: "Medio", q: "¿Qué significa 'takbir'?", options: ["Decir 'Allahu Akbar'", "Postrarse", "Inclinarse", "Levantar la cabeza"], correct: 0, expl: "El takbir es decir 'Allahu Akbar' (Allah es más Grande), con el que se inicia la oración." },
    { cat: "Salah", level: "Medio", q: "¿En qué dirección se realiza la oración musulmana?", options: ["Hacia Jerusalén", "Hacia la Kaaba (La Meca)", "Hacia el Este", "Cualquier dirección"], correct: 1, expl: "La qiblah es la Kaaba en La Meca (Al-Baqarah 2:144)." },
    { cat: "Salah", level: "Difícil", q: "¿Qué sura es la primera que se recibe en cada rak'ah?", options: ["Al-Ikhlas", "Al-Falaq", "Al-Fatihah", "An-Nas"], correct: 2, expl: "Al-Fatihah es imprescindible en cada rak'ah; 'no hay oración para quien no recita la Fatihah' (al-Bujari y Muslim)." },
    // --- WUDU ---
    { cat: "Wudu", level: "Fácil", q: "¿Cuál es el primer paso del wudu?", options: ["Lavarse la cara", "La intención y el bismillah", "Lavarse los pies", "El takbir"], correct: 1, expl: "Se inicia con la intención en el corazón y diciendo 'Bismillah' al empezar." },
    { cat: "Wudu", level: "Medio", q: "¿Qué partes NO se lavan en el wudu?", options: ["Cara", "Brazos", "Cabeza (masah)", "Espalda"], correct: 3, expl: "El wudu cubre cara, manos y brazos hasta los codos, cabeza y orejas (masah) y pies hasta los tobillos." },
    { cat: "Wudu", level: "Medio", q: "¿Qué invalida el wudu?", options: ["Comer", "Dormir y salir gases", "Hablar", "Sonreír"], correct: 1, expl: "Ir al baño (orina/heces/gases), dormir profundo, perder el conocimiento y otras causas invalida el wudu. Comer no lo invalida." },
    { cat: "Wudu", level: "Difícil", q: "¿Cuándo se realiza el ghusl (baño ritual mayor)?", options: ["Antes de cada oración", "Tras la relación conyugal, el flujo menstrual y similares", "Solo en viernes", "Nunca"], correct: 1, expl: "El ghusl es necesario en ciertos estados de impureza mayor; el wudu solo en la impureza menor." },
    // --- HISTORIA ---
    { cat: "Historia", level: "Fácil", q: "¿A qué ciudad emigró el Profeta ﷺ en la Hégira (622 d. C.)?", options: ["La Meca", "Medina", "Jerusalén", "Ta'if"], correct: 1, expl: "La Hégira marca el inicio del calendario islámico y el traslado a Medina." },
    { cat: "Historia", level: "Medio", q: "¿Cómo se llaman los cuatro califas bien guiados?", options: ["Abu Bakr, 'Umar, 'Uthman, 'Ali", "Hasan, Husayn, Abbas, Hamzah", "Bilal, Salman, Suhayb, Zayd", "Aisha, Khadijah, Fatimah, Maryam"], correct: 0, expl: "Los cuatro califas rashidun gobernaron tras la muerte del Profeta ﷺ." },
    { cat: "Historia", level: "Difícil", q: "¿Qué dinastía gobernó al-Ándalus durante más tiempo?", options: ["Los abbasíes", "Los omeyas", "Los fatimíes", "Los selyúcidas"], correct: 1, expl: "Los omeyas de al-Ándalus gobernaron el Emirato/Califato de Córdoba durante cerca de tres siglos." },
    // --- PILARES ---
    { cat: "Pilares", level: "Fácil", q: "¿Cuáles son los cinco pilares del Islam?", options: ["Shahada, Salah, Zakat, Sawm, Hajj", "Salah, Zakat, Wudu, Ghusl, Dhikr", "Corán, Sunnah, Ijma, Qiyas, Shura", "Iman, Islam, Ihsan, Tawhid, Sabr"], correct: 0, expl: "El hadiz de Gabriel (Muslim) enumera los cinco pilares." },
    { cat: "Pilares", level: "Medio", q: "¿Qué es el Zakat?", options: ["El ayuno del Ramadan", "La caridad obligatoria anual sobre la riqueza excedente", "La peregrinación", "La oración del viernes"], correct: 1, expl: "El Zakat se paga anualmente sobre lo excedente; el Corán lo menciona junto a la oración." },
    { cat: "Pilares", level: "Difícil", q: "¿En qué mes lunar se realiza el Hajj?", options: ["Ramadan", "Shawwal", "Dhu al-Hijjah", "Muharram"], correct: 2, expl: "El Hayy se realiza en el mes de Dhu al-Hijjah (Al-Baqarah 2:197)." },
    // --- RAMADAN ---
    { cat: "Ramadan", level: "Fácil", q: "¿Qué es el ayuno del Ramadan?", options: ["Abstenerse de comer, beber y otras cosas de la aurora a la puesta del sol", "Comer solo pan", "Ayunar los lunes y jueves", "No dormir de día"], correct: 0, expl: "El sawm consiste en abstenerse de comer, beber, relaciones conyugales y otras cosas desde el amanecer hasta el ocaso." },
    { cat: "Ramadan", level: "Medio", q: "¿Cómo se llama la comida antes del ayuno?", options: ["Iftar", "Suhur", "Taraweeh", "Tasbih"], correct: 1, expl: "Suhur es la comida previa al amanecer; Iftar es la ruptura del ayuno al atardecer." },
    { cat: "Ramadan", level: "Difícil", q: "¿Qué sura describe el mando del ayuno?", options: ["Al-Baqarah 2:183-187", "Al-Fatihah", "Al-Ikhlas", "Al-Asr"], correct: 0, expl: "El Corán establece el ayuno obligatorio en Al-Baqarah, aleyas 183 a 187." },
    // --- GENERAL ---
    { cat: "General", level: "Fácil", q: "¿Qué significa 'Islam'?", options: ["Sumisión y paz hacia Allah", "Guerra", "Fiesta", "Fe ciega"], correct: 0, expl: "Islam proviene de la raíz 'salama': sumisión a Allah y paz, en su sentido de entrega." },
    { cat: "General", level: "Medio", q: "¿Qué diferencia hay entre wudu y ghusl?", options: ["Wudu es mayor y ghusl menor", "Wudu es la ablución menor y ghusl el baño completo", "Son lo mismo", "Ghusl solo se hace en viernes"], correct: 1, expl: "Wudu lava partes específicas (impureza menor); ghusl es el lavado completo (impureza mayor)." },
    { cat: "General", level: "Medio", q: "¿Qué significa 'Insha'Allah'?", options: ["Alabado sea Allah", "Si Allah quiere", "Glorificado sea Allah", "Perdón"], correct: 1, expl: "Insha'Allah significa 'si Allah quiere', expresando dependencia de la voluntad divina." },
    { cat: "General", level: "Difícil", q: "¿Cuál es el mes primero del calendario islámico?", options: ["Ramadan", "Muharram", "Rabi' al-Awwal", "Rajab"], correct: 1, expl: "Muharram es el primer mes del calendario lunar islámico." }
  ]
};