/* ================================================
   DATA: Profetas mencionados en el Corán
   Se distingue: Corán / Hadiz auténtico / Tradición
   / Autenticidad discutida.
   ================================================ */
window.PROPHETS_DATA = [
  {
    id: "adam", name: "Adán", ar: "آدم", title: "Primer ser humano y primer profeta",
    roles: ["Primer hombre", "Profeta"],
    time: "Inicio de la creación humana",
    summary: "Primer ser humano, creado por Allah del barro y dotado de conocimiento. Padre de la humanidad, su historia muestra el arrepentimiento sincero.",
    story: [
      ["Creación", "Corán — Sura Al-Baqarah 2:30-39", "Allah creó a Adán con Sus manos, sopló en él Su espíritu y le enseñó los nombres de todas las cosas. Fue creado como sucesor (jálifa) en la tierra."],
      ["El paraíso y el error", "Corán — Suras Al-Baqarah 2:35-36, Al-A'raf 7:19-25", "Adán y su esposa habitaron el jardín, donde el Demonio (Iblís) les susurró, desobedecieron la prohibición y cayeron a la tierra."],
      ["Arrepentimiento", "Corán — Sura Al-A'raf 7:23", "Adán y Hawa (Eva) dijeron: '¡Señor nuestro! Hemos sido injustos con nosotros mismos; si no nos perdonas y te apiadas de nosotros, seremos de los perdedores'. Allah aceptó su arrepentimiento."]
    ],
    teachings: "La humildad para reconocer el error y el retorno sincero a Allah. La vida en la tierra como prueba, no como castigo sin esperanza.",
    quranRefs: ["Al-Baqarah 2:30-39", "Al-A'raf 7:11-25", "Ta-Ha 20:115-123", "Al-Isra 17:61-65", "Sad 38:71-85"],
    hadithNote: "El hadiz relatado por Abu Hurayrah ('Cuando Allah creó a Adán con Su mano...') es mencionado por al-Bukhari y Muslim y habla de la dignidad de la humanidad.",
    authenticity: "quran"
  },
  {
    id: "nuh", name: "Nuh (Noé)", ar: "نُوح", title: "El profeta del diluvio",
    roles: ["Profeta", "Mensajero"],
    time: "Generaciones antes de Ibrahim",
    summary: "Llamó a su pueblo durante unos 950 años. Su pueblo persistió en el rechazo y Allah envió el diluvio; se salvaron Nuh y quienes creyeron con él.",
    story: [
      ["La llamada", "Corán — Sura Nuh 71:1-4", "Nuh llamó a su pueblo al monoteísmo día y noche, de forma pública y privada, durante un largo período."],
      ["El arca", "Corán — Suras Hud 11:36-48, Al-Mu'minun 23:23-30", "Por mandato divino construyó un arca y embarcó a los creyentes y a las especies. Su hijo, que no creyó, pereció en el diluvio."],
      ["El pacto", "Corán — Sura Hud 11:47", "Nuh pidió protección por su familia y Allah le aseguró que le daría un pueblo justo tras el castigo."]
    ],
    teachings: "La perseverancia en el esfuerzo da'wah (invitación) pese al rechazo. La obediencia a Allah sobre los lazos familiares cuando estos se oponen a la fe.",
    quranRefs: ["Nuh 71", "Hud 11:25-49", "Al-Isra 17:3", "Al-Ahqaf 46:21-26"],
    hadithNote: "Nuh es mencionado como el primer mensajero enviado a la tierra en el hadiz de la intercesión (al-Bujari).",
    authenticity: "quran"
  },
  {
    id: "hud", name: "Hud", ar: "هُود", title: "Profeta del pueblo de 'Ad",
    roles: ["Profeta", "Mensajero"],
    time: "Tras Nuh",
    summary: "Enviado al pueblo de 'Ad, una civilización poderosa del sur de Arabia. Les exhortó a dejar la soberbia y adorar solo a Allah.",
    story: [
      ["La advertencia", "Corán — Sura Hud 11:50-57", "Hud llamó a su pueblo a adorar solo a Allah y los reprendió por su arrogancia y por construir monumentos para jactarse."],
      ["El castigo", "Corán — Sura Al-Haqqah 69:6-8", "Pese a la advertencia, el pueblo persistió y fue aniquilado por un viento muy fuerte, mientras que Hud y los creyentes se salvaron."]
    ],
    teachings: "La grandeza material no exime de responsabilidad espiritual. El orgullo conduce a la ruina.",
    quranRefs: ["Hud 11:50-60", "Al-A'raf 7:65-72", "Adh-Dhariyat 51:41-42"],
    authenticity: "quran"
  },
  {
    id: "salih", name: "Salih", ar: "صَالِح", title: "Profeta del pueblo de Thamud",
    roles: ["Profeta", "Mensajero"],
    time: "Tras 'Ad",
    summary: "Enviado a Thamud, pueblo tallador de casas en la roca. Allah les dio la camella como señal y exigió dejarla en paz; la mataron y fueron castigados.",
    story: [
      ["La señal", "Corán — Sul Sura Hud 11:61-68, Al-A'raf 7:73-79", "Salih les presentó la camella como señal de Allah y les pidió no dañarla. Su pueblo la sacrificó desafiando la orden."],
      ["El castigo", "Corán — Sura Al-A'raf 7:78", "Fueron sorprendidos por un gran estruendo que acabó con ellos, mientras Salih y los creyentes se salvaron."]
    ],
    teachings: "Las señales de Allah se respetan y no se desafían. La incredulidad endurece el corazón hasta la perdición.",
    quranRefs: ["Al-A'raf 7:73-79", "Hud 11:61-68", "Ash-Shu'ara 26:141-159"],
    authenticity: "quran"
  },
  {
    id: "ibrahim", name: "Ibrahim (Abraham)", ar: "إِبْرَاهِيم", title: "El amigo íntimo de Allah (Jalil)",
    roles: ["Profeta", "Mensajero", "Padre de los profetas", "Imam de la fe"],
    time: "Siglo aprox. XIX-XVIII a. C.",
    summary: "Pilar del monoteísmo. Luchar contra la idolatría de su pueblo, construir la Kaaba junto a su hijo Ismail, y superar la prueba de su esposa y su hijo por obediencia a Allah.",
    story: [
      ["La búsqueda de Dios", "Corán — Sura Al-An'am 6:74-79", "Ibrahim reflexionó sobre los astros y llegó a la certeza de que solo Allah, el Creador, merece adoración."],
      ["Contra la idolatría", "Corán — Suras Al-Anbiya' 21:51-70, As-Saffat 37:83-98", "Destruyó los ídolos de su pueblo y fue lanzado al fuego, que por orden divina fue fresco y saludable para él."],
      ["La Kaaba", "Corán — Sura Al-Baqarah 2:127", "Ibrahim e Ismail elevaron los cimientos de la Casa sagrada (la Kaaba)."],
      ["El sacrificio", "Corán — Sura As-Saffat 37:100-111", "En sueños se le ordenó sacrificar a su hijo; al someterse ambos, Allah los redimió con un sacrificio grande. Se recuerda en el 'Id al-Adha."]
    ],
    teachings: "La sumisión total a Allah incluso en las pruebas más duras. La fe que se transmite como herencia a los hijos.",
    quranRefs: ["Al-Baqarah 2:124-129", "An-Nisa 4:125", "Al-An'am 6:74-83", "Ibrahim 14:35-41", "As-Saffat 37:83-113"],
    hadithNote: "El Profeta Muhammad ﷺ dijo: 'Allah tomó a Ibrahim como amigo íntimo' (al-Bujari y Muslim). Se le llama 'al-Jalil' (el amigo íntimo).",
    authenticity: "quran"
  },
  {
    id: "lut", name: "Lut (Lot)", ar: "لُوط", title: "Profeta enviado a Sodoma",
    roles: ["Profeta"],
    time: "Coetáneo de Ibrahim",
    summary: "Sobrino de Ibrahim, enviado a un pueblo que cometía una gran inmoralidad. Advirtió sin éxito y su pueblo fue destruido.",
    story: [
      ["La advertencia", "Corán — Sura Al-A'raf 7:80-84", "Lut reprendió a su pueblo por sus prácticas abominables, pero prefirieron continuar y amenazaron con expulsarlo."],
      ["El castigo", "Corán — Sul Sura Hud 11:77-83", "Los ángeles visitaron a Lut, y al llegar la noche, su pueblo fue destruido. Lut y su familia se salvaron, excepto su esposa."]
    ],
    teachings: "Defender la verdad aunque la sociedad entera la corrompa. La gravedad de las prácticas que corrompen la naturaleza humana.",
    quranRefs: ["Al-A'raf 7:80-84", "Hud 11:77-83", "Al-Hijr 15:61-77", "Ash-Shu'ara 26:160-175"],
    authenticity: "quran"
  },
  {
    id: "ismail", name: "Isma'il (Ismael)", ar: "إِسْمَاعِيل", title: "Profeta, primogénito de Ibrahim",
    roles: ["Profeta", "Mensajero", "Antepasado del Profeta Muhammad ﷺ"],
    time: "Coetáneo de Ibrahim",
    summary: "Hijo primogénito de Ibrahim y Hajar. Instalado en el valle de La Meca con su madre, fue el protagonista de la prueba del sacrificio y ayudó a construir la Kaaba.",
    story: [
      ["El pozo de Zamzam", "Corán: referencia implícita; detalle en hadiz — al-Bujari", "Por mandato de Allah, Ibrahim dejó a Hajar e Ismail en un valle árido de La Meca. Al agotarse el agua, apareció el pozo de Zamzam."],
      ["La prueba", "Corán — Sura As-Saffat 37:101-107", "Isma'il respondió a la visión de su padre con obediencia y sumisión. Fue redimido con un sacrificio grande."],
      ["La Kaaba", "Corán — Sura Al-Baqarah 2:127", "Con su padre Ibrahim reconstruyó los cimientos de la Kaaba."]
    ],
    teachings: "La obediencia de los hijos a los padres cuando no contradice lo establecido. La confianza en Allah en la adversidad.",
    quranRefs: ["Al-Baqarah 2:125-129", "Ibrahim 14:37", "As-Saffat 37:101-107", "Maryam 19:54"],
    hadithNote: "La narración del pozo de Zamzam y el asentamiento de Hajar e Ismail es un hadiz largo auténtico relatado por Ibn 'Abbas (al-Bujari).",
    authenticity: "quran"
  },
  {
    id: "ishaq", name: "Ishaq (Isaac)", ar: "إِسْحَاق", title: "Profeta, hijo de Ibrahim",
    roles: ["Profeta"],
    time: "Coetáneo de Ibrahim",
    summary: "Hijo de Ibrahim y Sara, padre de Ya'qub. Allah le otorgó descendencia. Nacido de un milagro en la vejez de sus padres.",
    story: [
      ["La buena nueva", "Corán — Sura Hud 11:69-73", "Los ángeles anunciaron a Ibrahim y Sara el nacimiento de Ishaq, a pesar de su avanzada edad, como muestra del poder de Allah."],
      ["Profeta", "Corán — Sura Maryam 19:49", "Allah le concedió a Ishaq el rango de profeta y lo bendijo con descendencia."]
    ],
    teachings: "El poder de Allah supera toda expectativa humana.",
    quranRefs: ["Hud 11:69-74", "Maryam 19:49", "As-Saffat 37:112-113"],
    authenticity: "quran"
  },
  {
    id: "yaqub", name: "Ya'qub (Jacob)", ar: "يَعْقُوب", title: "Profeta, llamado 'Israel'",
    roles: ["Profeta"],
    time: "Hijo de Ishaq",
    summary: "Hijo de Ishaq, padre de Yusuf. Hombro y fortaleza del Islam, hijo de Ishaq. Sufrió la separación de su hijo Yusuf con paciencia.",
    story: [
      ["La paciencia", "Corán — Sura Yusuf 12:82-87", "Cuando Yusuf fue separado, Ya'qub sufrió pero mantuvo la esperanza en Allah y la paciencia bella."],
      ["El reencuentro", "Corán — Sura Yusuf 12:100-101", "Al final reunió a toda su descendencia en Egipto, reconociendo la misericordia de Allah."]
    ],
    teachings: "La 'paciencia bella' (sabr yamil) que no se queja de la voluntad de Allah y mantiene la esperanza.",
    quranRefs: ["Al-Baqarah 2:132-133", "Yusuf 12", "Maryam 19:49"],
    authenticity: "quran"
  },
  {
    id: "yusuf", name: "Yusuf (José)", ar: "يُوسُف", title: "El profeta de la hermosa sura que lleva su nombre",
    roles: ["Profeta"],
    time: "Hijo de Ya'qub",
    summary: "Su historia es la única narrada de forma íntegra en el Corán. Vendido por sus hermanos, esclavizado y encarcelado, llegó a ser gobernador de Egipto gracias a su fe y carácter.",
    story: [
      ["El sueño y los hermanos", "Corán — Sura Yusuf 12:3-18", "El sueño de Yusuf reveló su elevado rango. Sus hermanos lo arrojaron a un pozo por celos, pero Yusuf fue rescatado y vendido en Egipto."],
      ["La tentación y la prisión", "Corán — Sura Yusuf 12:23-42", "Resistió una gran tentación por temor a Allah y prefirió la cárcel antes que la transgresión. Jesús en prisión interpretó sueños."],
      ["El gobierno de Egipto", "Corán — Sura Yusuf 12:43-57", "Por su honradez y sabiduría, el rey de Egipto lo puso a cargo del tesoro del país. Se reunió con su familia y su padre."]
    ],
    teachings: "La castidad, la honradez y el perdón brillan incluso en las peores circunstancias. Yusuf perdonó a sus hermanos y reconoció la sabiduría de Allah en sus pruebas.",
    quranRefs: ["Sura Yusuf 12 (completa)"],
    hadithNote: "El Profeta ﷺ mencionó la dignidad de Yusuf, 'el noble, hijo del noble, hijo del noble, hijo del noble' (al-Bujari).",
    authenticity: "quran"
  },
  {
    id: "ayyub", name: "Ayyub (Job)", ar: "أَيُّوب", title: "El ejemplo de paciencia en la enfermedad",
    roles: ["Profeta"],
    time: "Época antigua, tras Yusuf (variantes en la tradición)",
    summary: "Probar por Allah con la pérdida de bienes, hijos y salud. Su paciencia inquebrantable le devolvió la salud y multiplicó sus bendiciones.",
    story: [
      ["La prueba", "Corán — Sura Sad 38:41-44", "Ayyub perdió su riqueza y su salud, pero no dejó de invocar a Allah, reconociéndole como el más misericordioso de los misericordiosos."],
      ["La recuperación", "Corán — Sura Sad 38:42-43", "Allah le ordenó golpear el suelo y manar agua para curarse; le restituyó su familia y le multiplicó la descendencia. La sura Al-Anbiya' 21:83-84 narra su súplica."]
    ],
    teachings: "La paciencia ante la adversidad como forma de adoración. Allah no desampara al siervo que Le invoca.",
    quranRefs: ["Sad 38:41-44", "Al-Anbiya' 21:83-84", "An-Nisa 4:163"],
    authenticity: "quran"
  },
  {
    id: "shuayb", name: "Shu'ayb", ar: "شُعَيْب", title: "Profeta de Madián",
    roles: ["Profeta", "Mensajero"],
    time: "Coetáneo de Musa (según la tradición)",
    summary: "Enviado al pueblo de Madián, que defraudaba en las medidas y pesas. Exhortó a la justicia y fue rechazado.",
    story: [
      ["La justicia en el comercio", "Corán — Sura Hud 11:84-93", "Shu'ayb llamó a su pueblo a la justicia en las medidas y pesas, y a no corromper la tierra después de estar enmendada."],
      ["El castigo", "Corán — Sura Al-A'raf 7:91-93", "Su pueblo fue tomado por un gran estremecimiento que lo aniquiló."]
    ],
    teachings: "La justicia en las transacciones comerciales es parte de la fe. El dinero no se gana oprimiendo.",
    quranRefs: ["Al-A'raf 7:85-93", "Hud 11:84-95", "Ash-Shu'ara 26:176-191"],
    authenticity: "quran"
  },
  {
    id: "musa", name: "Musa (Moisés)", ar: "مُوسَى", title: "El profeta más mencionado en el Corán",
    roles: ["Profeta", "Mensajero", "Interlocutor de Allah (Kalim Allah)"],
    time: "Época del Faraón",
    summary: "Salvado del Faraón de niño, criado en su propio palacio, recibió la Torá en el Sinaí y liberó de la tiranía a los hijos de Israel.",
    story: [
      ["El nacimiento y la salvación", "Corán — Sura Ta-Ha 20:38-40", "Librada por orden divina en el río y recogida por la familia del Faraón, Allah lo devolvió a su madre para que criera tranquila."],
      ["La vocación", "Corán — Sura Ta-Ha 20:9-16, Al-Qasas 28:29-35", "En el monte Sinaí, Allah le habló directamente (de ahí 'Kalim Allah') y le ordenó ir al Faraón."],
      ["La liberación", "Corán — Sura Ash-Shu'ara 26:52-68", "Tras las señales y el cruce del mar, los hijos de Israel se salvaron y el Faraón y su ejército perecieron."],
      ["La Torá", "Corán — Sura Al-A'raf 7:143-145, Al-Baqarah 2:53", "Allah le entregó a Musa las tablas de la ley con dirección y luz."]
    ],
    teachings: "La valentía de enfrentarse a la tiranía con la verdad. La confianza en Allah cuando las evidencias humanas fallan.",
    quranRefs: ["Al-Baqarah 2:49-61", "Al-A'raf 7:103-171", "Ta-Ha 20", "Al-Qasas 28", "An-Nazi'at 79:15-25"],
    hadithNote: "El Corán y hadices auténticos relatan que en el Cielo el Profeta Muhammad ﷺ se encontró con Musa (al-Bujari, Muslim) en el viaje nocturno.",
    authenticity: "quran"
  },
  {
    id: "harun", name: "Harun (Aarón)", ar: "هَارُون", title: "Hermano de Musa",
    roles: ["Profeta"],
    time: "Coetáneo de Musa",
    summary: "Hermano de Musa, elegido por Allah para apoyarle en su misión frente al Faraón.",
    story: [
      ["El apoyo", "Corán — Sura Ta-Ha 20:29-36", "Musa pidió a Allah que su hermano Harun le ayudase en su misión y Allah se lo concedió."],
      ["El becerro", "Corán — Sura Ta-Ha 20:83-98", "Mientras Musa estaba ausente, el pueblo adoró un becerro; Harun les advirtió pero no fueron controlados. La responsabilidad es de quienes transgredieron."]
    ],
    teachings: "La cooperación en el bien entre hermanos con roles distintos.",
    quranRefs: ["Ta-Ha 20:29-36, 83-98", "Al-A'raf 7:142-150", "Ash-Shu'ara 26:12-13"],
    authenticity: "quran"
  },
  {
    id: "dawud", name: "Dawud (David)", ar: "دَاوُود", title: "El profeta rey, de bella voz",
    roles: ["Profeta", "Mensajero", "Rey"],
    time: "Hacia el siglo X a. C.",
    summary: "Fue profeta y rey. Allá le dio el Zabur (Salmos), le sometió las montañas y los pájaros que glorificaban, y le enseñó el arte de forjar la armadura.",
    story: [
      ["El Zabur", "Corán — Sura An-Nisa 4:163, Al-Isra 17:55", "Allah le entregó el Zabur (Salmos) y le dio un reino fuerte."],
      ["La batalla contra Goliat", "Corán — Sura Al-Baqarah 2:249-251", "Jóvenes creyentes con Dawud vencieron al ejército de Goliat, 'y Dawud mató a Goliat, y Allah le concedió el reino y la sabiduría'."],
      ["Al-Hakam", "Corán — Sura Sad 38:21-26", "El Corán menciona el episodio de dos litigantes que le pidieron juicio, y la rectificación que Allah le señaló."]
    ],
    teachings: "La justicia como base de la autoridad. La belleza de la voz que recita el recuerdo de Allah.",
    quranRefs: ["Al-Baqarah 2:249-251", "An-Nisa 4:163", "Al-Isra 17:55", "Sad 38:17-26", "Al-Anbiya' 21:78-80"],
    hadithNote: "El Profeta ﷺ dijo: 'La oración más amada por Allah es la de Dawud...' (al-Bujari) sobre el ayuno y la oración alternos de Dawud.",
    authenticity: "quran"
  },
  {
    id: "sulayman", name: "Sulayman (Salomón)", ar: "سُلَيْمَان", title: "El profeta rey",
    roles: ["Profeta", "Mensajero", "Rey"],
    time: "Siglo X a. C.",
    summary: "Hijo de Dawud, recibió un reino concedido como milagro. Entendía el lenguaje de las aves, gobernaba el viento y tenía poder sobre los yinns que le habían sometido.",
    story: [
      ["El reino sin igual", "Corán — Sura Sad 38:35-39", "Sulayman pidió a Allah un reino que nadie tuviese después, y Allah se lo concedió."],
      ["La hormiga y la abubilla", "Corán — Sura An-Naml 27:15-44", "Escuchó a una hormiga advertir a su pueblo y a la abubilla llegar con noticias del reino de Saba. Al final, la reina Bilqis se sometió con Sulayman a Allah."],
      ["La muerte", "Corán — Sura Saba 34:14", "Ni siquiera los yinns percibieron su muerte hasta que un gusano comió su bastón, mostrando el límite del conocimiento de lo oculto."]
    ],
    teachings: "El poder y la riqueza deben usarse con sabiduría y gratitud. Nadie conoce lo oculto salvo Allah.",
    quranRefs: ["An-Naml 27:15-44", "Sad 38:30-40", "Saba 34:12-14", "Al-Baqarah 2:102"],
    authenticity: "quran"
  },
  {
    id: "yunus", name: "Yunus (Jonás)", ar: "يُونُس", title: "El profeta del pez",
    roles: ["Profeta", "Mensajero"],
    time: "Época antigua, tradición posterior a Sulayman",
    summary: "Enviado a Nínive. Cuando dejó su pueblo sin permiso de Allah, lo engulló el pez; su súplica desde la oscuridad es ejemplo de arrepentimiento.",
    story: [
      ["La huida y el pez", "Corán — Sura As-Saffat 37:139-148", "Yunus se marchó en una embarcación, fue arrojado al mar y un pez lo engulló. Desde las tinieblas invocó: 'No hay dios sino Tú. Glorificado seas. Fui de los injustos'."],
      ["El perdón", "Corán — Sura Al-Anbiya' 21:87-88", "Allah aceptó su súplica y lo sacó de la angustia, librándolo con una calabaza a la orilla. Su pueblo creyó más tarde y se salvó."]
    ],
    teachings: "Nunca desconfiar de la misericordia de Allah, incluso en las tinieblas más profundas. La súplica del arrepentimiento es de las más nobles.",
    quranRefs: ["As-Saffat 37:139-148", "Al-Anbiya' 21:87-88", "Yunus 10:98", "Al-Qalam 68:48-50"],
    hadithNote: "Hadiz auténtico: 'La súplica de mi hermano Yunus: cuando el siervo la invoca, Allah le responde' (at-Tirmidhi, considerado auténtico por algunos eruditos).",
    authenticity: "quran"
  },
  {
    id: "zakariya", name: "Zakariyya (Zacarías)", ar: "زَكَرِيَّا", title: "El profeta que invocó en el santuario",
    roles: ["Profeta"],
    time: "Antes de 'Isa",
    summary: "Custodio de Maryam. Invocó a Allah por un hijo a pesar de su vejez, y Allah le dio a Yahya como favorecida.",
    story: [
      ["La súplica", "Corán — Sura Maryam 19:1-15", "Zakariyya invocó a su Señor en secreto, a pesar de su edad avanzada y su esposa estéril, y Allah le concedió a Yahya."],
      ["El signo", "Corán — Sura Al-Imran 3:37-41", "Le fue señalado no hablar durante tres días salvo por señas, como signo del cumplimiento de la promesa."]
    ],
    teachings: "La súplica sincera puede obtener milagros donde la razón no ve posibilidad.",
    quranRefs: ["Al-Imran 3:37-41", "Maryam 19:1-15", "Al-Anbiya' 21:89-90"],
    authenticity: "quran"
  },
  {
    id: "yahya", name: "Yahya (Juan)", ar: "يَحْيَى", title: "El profeta puro",
    roles: ["Profeta"],
    time: "Contemporáneo de 'Isa",
    summary: "Hijo de Zakariyya, una sorpresa de Allah. Puro, devoto y desapegado del mundo. Confirmó la palabra de Allah.",
    story: [
      ["El nacimiento", "Corán — Sura Maryam 19:7-15", "Dado a Zakariyya en la vejez como respuesta a su súplica. Desde pequeño se le dio juicio, pureza y piedad."],
      ["El carácter", "Corán — Sura Maryam 19:12-15", "Se le ordenó aferrarse a la Escritura. Fue piadoso con sus padres, no fue arrogante ni desobediente."]
    ],
    teachings: "La pureza y la rectitud desde la juventud. La honra a los padres.",
    quranRefs: ["Maryam 19:7-15", "Al-Anbiya' 21:89-90"],
    authenticity: "quran"
  },
  {
    id: "isa", name: "'Isa (Jesús)", ar: "عِيسَى", title: "El Mesías, hijo de Maryam",
    roles: ["Profeta", "Mensajero", "El Mesías (al-Masih)"],
    time: "Siglo I d. C.",
    summary: "Nacido por milagro de Maryam, habló en la cuna, curó a los enfermos con permiso de Allah, recibió el Evangelio (Injil) y llamó al monoteísmo. No fue crucificado, según la fe islámica: Allah lo elevó.",
    story: [
      ["El nacimiento", "Corán — Sura Maryam 19:16-34", "Maryam concibió milagrosamente. Nada más nacer, 'Isa habló desde la cuna proclamando que era un siervo de Allah y profeta."],
      ["Los milagros", "Corán — Sura Al-Imran 3:45-51, Al-Ma'idah 5:110-115", "Con permiso de Allah: curó al ciego y al leproso, dio vida a los muertos y formó un pájaro de barro que cobraba vida."],
      ["La elevación", "Corán — Sura An-Nisa 4:157-158", "No lo mataron ni lo crucificaron, sino que se les asemejó; Allah lo elevó hacia Él."],
      ["El Evangelio", "Corán — Sura Al-Imran 3:3-4, Al-Ma'idah 5:46", "'Isa recibió el Injil (Evangelio) como guía para los hijos de Israel."]
    ],
    teachings: "Los musulmanes lo honran como uno de los más grandes mensajeros, no como hijo de Dios. Su mensaje fue puro monoteísmo.",
    quranRefs: ["Al-Imran 3:45-59", "An-Nisa 4:156-159", "Maryam 19:16-36", "Al-Ma'idah 5:110-118"],
    hadithNote: "Hadices auténticos refieren el retorno de 'Isa en los últimos tiempos para restablecer la justicia (al-Bujari, Muslim).",
    authenticity: "quran"
  },
  {
    id: "muhammad", name: "Muhammad ﷺ", ar: "مُحَمَّد", title: "El último mensajero, sello de los profetas",
    roles: ["Profeta", "Mensajero", "Sello de los profetas"],
    time: "570—632 d. C.",
    summary: "Último mensajero de Allah, enviado a toda la humanidad. Recibió el Corán, la guía definitiva. Su vida (la Sunnah) es el modelo de conducta para los musulmanes.",
    story: [
      ["El advenimiento", "Sirá y hadiz — fuentes auténticas", "Nació en La Meca (aprox. 570 d. C.). Antes del Islam ya era conocido como 'al-Amin' (el confidente) por su honradez."],
      ["La revelación", "Corán y hadiz — al-Bujari", "A los 40 años recibió la primera revelación en la cueva de Hira (Corán 96:1-5) por el ángel Gabriel."],
      ["La predicación", "Corán y sirá", "Predicó el monoteísmo en La Meca soportando persecución, hasta la Hégira (622 d. C.) a Medina, donde construyó la primera comunidad islámica."],
      ["El Mensaje completo", "Corán — Sura Al-Ma'idah 5:3", "Se completó la religión con el Islam. Falleció en Medina en el año 632 d. C., tras haber cumplido su misión."]
    ],
    teachings: "Practicar el Corán en la vida diaria. La misericordia hacia las criaturas, la honradez, la justicia y la excelencia en el carácter.",
    quranRefs: ["Al-Ahzab 33:40 (sello de los profetas)", "Al-Isra 17:79-81"],
    hadithNote: "La biografía del Profeta ﷺ se conoce por fuentes auténticas (Corán, hadiz auténtico y obras de sirá reconocidas). El amor y respeto hacia él forma parte de la fe.",
    authenticity: "quran"
  },
  {
    id: "idris", name: "Idris (Henoc)", ar: "إِدْرِيس", title: "Elevado a un lugar eminente",
    roles: ["Profeta"],
    time: "Época temprana (antes de Nuh)", 
    summary: "Mencionado en el Corán como verdadero y profeta, elevado a un lugar eminente. La tradición dice que fue el primero en escribir con pluma.",
    story: [
      ["Su mención", "Corán — Sura Maryam 19:56-57 y Al-Anbiya' 21:85-86", "Allah lo menciona como hombre veraz y profeta, y dice que lo elevó a un lugar elevado (en la tradición comentarista se relaciona con su ascensión)."]
    ],
    teachings: "La veracidad y la constancia en las buenas obras.",
    quranRefs: ["Maryam 19:56-57", "Al-Anbiya' 21:85-86"],
    hadithNote: "Algunos relatos de la tradición sobre él (como el primero en escribir) se consideran relatos israelitas o tradiciones cuya autenticidad es discutida; pertenecen a 'relatos tradicionales', no a Corán/hadiz auténtico.",
    authenticity: "tradicion"
  },
  {
    id: "ilyas", name: "Ilyas (Elías)", ar: "إِلْيَاس", title: "Profeta enviado a su pueblo",
    roles: ["Profeta", "Mensajero"],
    time: "Época antigua de los hijos de Israel",
    summary: "Enviado a su pueblo para llamarlos a la adoración exclusiva de Allah y apartarlos del culto a Ba'al.",
    story: [
      ["La llamada", "Corán — Sura As-Saffat 37:123-132", "Ilyas llamó a su pueblo a temer a Allah y dejar la adoración de Ba'al. La mayoría lo desmintió."]
    ],
    teachings: "La lucha contra el politeísmo y las falsas deidades.",
    quranRefs: ["As-Saffat 37:123-132", "Al-An'am 6:85"],
    authenticity: "quran"
  },
  {
    id: "alyasa", name: "Alyasa' (Eliseo)", ar: "الْيَسَع", title: "Profeta mencionado entre los elegidos",
    roles: ["Profeta"],
    time: "Continuador de Ilyas",
    summary: "Mencionado en el Corán entre los profetas elegidos. La tradición lo vincula como sucesor de Ilyas.",
    story: [
      ["Su mención", "Corán — Sura Al-An'am 6:86 y Sad 38:48", "Allah lo menciona entre los elegidos y los buenos."]
    ],
    teachings: "Ser parte de los que actúan bien es un honor mencionado por Allah.",
    quranRefs: ["Al-An'am 6:86", "Sad 38:48"],
    authenticity: "quran"
  },
  {
    id: "dhul-kifl", name: "Dhu-l-Kifl", ar: "ذُو الْكِفْل", title: "De los pacientes y constantes",
    roles: ["Profeta (según la mayoría de comentaristas)"],
    time: "Época antigua",
    summary: "Mencionado en el Corán junto a otros hombres constantes. Habitualmente se le cuenta entre los profetas, aunque su historia concreta no se detalla en el Corán.",
    story: [
      ["Su mención", "Corán — Suras Al-Anbiya' 21:85-86 y Sad 38:48", "Allah lo menciona entre los pacientes y los buenos."]
    ],
    teachings: "La constancia y la paciencia como cualidad profética.",
    quranRefs: ["Al-Anbiya' 21:85-86", "Sad 38:48"],
    hadithNote: "Los detalles sobre quién fue exactamente Dhu-l-Kifl son de tradición exegética; el Corán solo lo menciona por su nombre.",
    authenticity: "tradicion"
  },
  {
    id: "ulul-azm", name: "Los Profetas de Resolución Firme", ar: "أُولُو الْعَزْم", title: "Los cinco mensajeros de mayor constancia",
    roles: ["Nuh", "Ibrahim", "Musa", "'Isa", "Muhammad ﷺ"],
    time: "A lo largo de la historia",
    summary: "El Corán menciona a los mensajeros de resolución firme (ulú al-'azm). La tradición entiende generalmente que son Nuh, Ibrahim, Musa, 'Isa y Muhammad ﷺ.",
    story: [
      ["Corán", "Corán — Sura Al-Ahqaf 46:35 y Ash-Shura 42:13", "Se menciona 'los mensajeros de resolución firme' al pedir paciencia como la tuvieron los grandes mensajeros."]
    ],
    teachings: "La constancia firme en la misión, sin importar las dificultades.",
    quranRefs: ["Al-Ahqaf 46:35", "Ash-Shura 42:13"],
    hadithNote: "La identificación de los cinco es de tradición exegética ampliamente aceptada (tradición), no un detalle definido explícitamente en el texto coránico.",
    authenticity: "tradicion"
  }
];

window.PROPHETS_META = {
  note: "Las historias se basan en el Corán y la Sunnah auténtica. La 'tradición' (sirá y comentarios reconocidos) se usa con cautela. No se han incluido relatos de autenticidad discutida como hechos.",
  categories: {
    quran: "Información directamente mencionada en el Corán.",
    hadiz: "Información basada en hadices auténticos.",
    tradicion: "Relato tradicional ampliamente difundido entre los exégetas, cuya autenticidad puede ser discutida."
  }
};