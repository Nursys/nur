/* ================================================
   PILARES.JS — Los cinco pilares (tarjetas + modal)
   ================================================ */
(function(){
  const grid = document.getElementById('pilares-grid');
  if(!grid) return;

  const pillars = [
    { id:'shahada', n:1, name:"La Shahada", ar:"الشهادة", desc:"El testimonio de fe: la llave de entrada al Islam.", detail:"La Shahada es 'Ash-hadu an la ilaha illallah wa ash-hadu anna Muhammadan rasulullah': testifico que no hay más dios que Allah y que Muhammad es Su mensajero. Es la puerta de entrada al Islam y resume el mensaje de todos los profetas: el monoteísmo puro.", refs:"Corán 3:18 · 37:35 · Hadiz de Gabriel (Muslim 8)", icon:"ع" },
    { id:'salah', n:2, name:"La Salah (oración)", ar:"الصلاة", desc:"Cinco oraciones diarias que conectan al siervo con Allah.", detail:"La oración se realiza cinco veces al día: Fajr, Dhuhr, 'Asr, Maghrib e 'Isha'. Es el pilar de la religión; no orar es un pecado grave. El Corán dice que la oración impide la indecencia (29:45) y es el primer acto del que se rendirá cuentas.", refs:"Corán 2:43 · 4:103 · 29:45 · Hadiz de Gabriel (Muslim 8)", icon:"ص" },
    { id:'zakat', n:3, name:"El Zakat (caridad)", ar:"الزكاة", desc:"La purificación de la riqueza mediante la donación.", detail:"El zakat es la caridad obligatoria anual: se paga un 2,5% de la riqueza ahorrada que supere lo necesario (nisab) en favor de quienes Allah mencionó en el Corán (9:60: necesitados, pobres, endeudados, viajeros, etc.). El Corán lo menciona junto a la oración decenas de veces.", refs:"Corán 2:43 · 9:60 · 9:103 · Hadiz de Gabriel (Muslim 8)", icon:"ز" },
    { id:'sawm', n:4, name:"El Sawm (ayuno)", ar:"الصوم", desc:"El ayuno de Ramadan, purificación espiritual y autocontrol.", detail:"Se ayuna de la aurora (fajr) al ocaso (maghrib), absteniéndose de comida, bebida y relaciones conyugales. Es obligatorio para todo musulmán adulto y sano durante el mes de Ramadan. Tiene excepciones (enfermo, viajero, menstruación, embarazo, etc.) y es una concesión de facilidad.", refs:"Corán 2:183-187 · Hadiz de Gabriel (Muslim 8)", icon:"ص" },
    { id:'hajj', n:5, name:"El Hajj (peregrinación)", ar:"الحج", desc:"La peregrinación a La Meca, una vez en la vida.", detail:"El Hajj se realiza en el mes de Dhu al-Hijjah, vestidos con el ihram. Es obligatorio una vez en la vida para quien tenga capacidad física y económica. Reúne a musulmanes de todo el mundo en igualdad ante Allah. Las peregrinaciones voluntarias fuera de esa época se llaman 'umrah.", refs:"Corán 2:196-197 · 3:97 · Hadiz de Gabriel (Muslim 8)", icon:"ح" }
  ];

  grid.innerHTML = pillars.map((p, i) => `
    <div class="card glass-tile reveal visible" style="padding:24px;cursor:pointer" data-pillar="${p.id}">
      <div class="gt-ic"><span style="font-size:1.2rem;font-weight:800">${p.icon}</span></div>
      <div class="flex between"><h3 style="font-size:1.05rem">${p.name}</h3><span class="p-arabic" style="font-family:var(--font-arabic);color:var(--gold-soft);font-size:1.15rem">${p.ar}</span></div>
      <p class="muted" style="margin-top:6px">${p.desc}</p>
      <span class="badge-warn" style="margin-top:12px">Pilar ${p.n} de 5</span>
    </div>
  `).join('');

  grid.addEventListener('click', e => {
    const card = e.target.closest('[data-pillar]');
    if(!card) return;
    const p = pillars.find(x => x.id === card.getAttribute('data-pillar'));
    if(!p) return;
    openModal(p.name, `
      <div style="text-align:center;padding:6px 0 14px;border-bottom:1px solid var(--border)">
        <div class="arabic" style="font-size:1.6em;color:var(--gold-soft)">${p.ar}</div>
        <div style="font-weight:700">${p.name}</div>
        <span class="badge-warn">Pilar ${p.n} de 5</span>
      </div>
      <p class="muted" style="margin-top:14px">${p.detail}</p>
      <div class="mt-4"><span class="source">Referencias: ${p.refs}</span></div>
      <div class="flex mt-4">
        <a href="${p.id==='salah'?'oracion.html':(p.id==='sawm'?'ramadan.html':(p.id==='shahada'?'nombres-allah.html':'quran.html'))}" class="btn btn-gold btn-sm">Ver más detalles</a>
      </div>
    `);
  });
})();