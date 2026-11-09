/* ============================================================
   DATOS EDITABLES: tarifas y tours.
   Para cambiar un precio u horario, modifica solo este archivo.
   Orden de precios: [Auto/SUV (3), Minivan (6), Mercedes 10, Mercedes 15]
   Precios en USD.
   ============================================================ */
window.WHATSAPP_PHONE = '51936413189'; // país + número, sin + ni espacios

window.TRASLADOS = [
  { ruta: 'Aeropuerto → Hotel / Centro de Cusco / Estación de tren', duracion: '15 min', precios: [15, 20, 35, 50] },
  { ruta: 'Aeropuerto / Hotel / Centro de Cusco → Ollantaytambo / Hotel / Estación de tren', duracion: '1 h 45 min', precios: [60, 70, 100, 131] },
  { ruta: 'Aeropuerto / Hotel / Centro de Cusco → Estación de tren de Poroy', duracion: '45 min', precios: [20, 30, 50, 55] },
  { ruta: 'Aeropuerto / Hotel / Centro de Cusco → Urubamba / Hotel / Estación de tren', duracion: '1 h 30 min', precios: [60, 70, 100, 130] },
  { ruta: 'Cusco / Hotel → Estaciones de tren (Wanchaq, Av. El Sol, San Pedro)', duracion: '20 min', precios: [10, 15, 20, 25] },
  { ruta: 'Aeropuerto / Hotel → Pisac / Parque Arqueológico', duracion: '1 h', precios: [45, 60, 75, 90] }
];

window.TOURS = [
  { ruta: 'City Tour Cusco (medio día)', precios: [50, 65, 95, 125] },
  { ruta: 'Valle Sagrado (día completo)', precios: [120, 160, 170, 200] },
  { ruta: 'Montaña de Colores – Vinicunca (día completo)', precios: [120, 150, 180, 220] },
  { ruta: 'Laguna Humantay (día completo)', precios: [120, 150, 180, 220] },
  { ruta: '7 Lagunas de Ausangate', precios: [130, 160, 200, 240] },
  { ruta: 'Cusco – Hidroeléctrica (ida y vuelta)', precios: [220, 255, 320, 420] },
  { ruta: 'Cusco – Puno', precios: [300, 350, 400, 450] },
  { ruta: 'Maras, Moray y Salineras (Cusco – Ollantaytambo)', precios: [90, 110, 140, 180] },
  { ruta: 'Montaña Palcoyo', precios: [130, 160, 210, 249] },
  { ruta: 'Montaña Pallay Punchu', precios: [130, 160, 210, 250] },
  { ruta: 'Glaciar Quelccaya', precios: [280, 430, 480, 600] },
  { ruta: 'Puente Q\'eswachaka y 4 Lagunas (medio día)', precios: [160, 200, 220, 250] },
  { ruta: 'Laguna Singrenacocha', precios: [130, 150, 200, 250] },
  { ruta: 'Valle Sur', precios: [80, 100, 150, 180] },
  { ruta: 'Super Valle Sagrado (VIP)', precios: [120, 160, 170, 200] },
  { ruta: 'Waqrapukara', precios: [150, 200, 270, 290] }
];

(function () {
  var VEH = ['Auto / SUV', 'Minivan', 'Mercedes 10 pax', 'Mercedes 15 pax'];

  function wa(texto) {
    return 'https://wa.me/' + window.WHATSAPP_PHONE + '?text=' + encodeURIComponent(texto);
  }

  function render(tbodyId, lista, esTraslado) {
    var tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    var html = '';
    lista.forEach(function (r) {
      var celdas = r.precios.map(function (p, i) {
        return '<td class="text-center" data-label="' + VEH[i] + '"><strong>$' + p + '</strong></td>';
      }).join('');
      var dur = esTraslado ? '<small class="d-block text-muted"><i class="far fa-clock mr-1"></i>' + r.duracion + ' · solo ida</small>' : '';
      var msg = 'Hola, quisiera una cotización para: ' + r.ruta + '.';
      html += '<tr><td data-label="Ruta"><span class="font-weight-bold">' + r.ruta + '</span>' + dur + '</td>' +
        celdas +
        '<td class="text-center"><a class="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer" href="' + wa(msg) + '">Cotizar</a></td></tr>';
    });
    tbody.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    render('tbody-traslados', window.TRASLADOS, true);
    render('tbody-tours', window.TOURS, false);
    // Enlaces de WhatsApp con mensaje para botones marcados con data-wa
    document.querySelectorAll('[data-wa]').forEach(function (a) {
      a.href = wa(a.getAttribute('data-wa'));
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    });
  });
})();
