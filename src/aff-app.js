class AfApp extends Polymer.Element {
  static get is() {
    return "af-app";
  }

  static get properties() {
    return {
      revenue: {
        type: Object,
        value: revenue
      }
    };
  }
}

const revenue = {
  name: "Crédito",
  amount: 1358030,
  sub: [
    {
      name: "Administración Gubernamental",
      amount: 78429,
      sub: [
        { name: "Administración Fiscal", amount: 2367 },
        { name: "Control de la Gestión Pública", amount: 1163 },
        { name: "Dirección Superior Ejecutiva", amount: 10172 },
        { name: "Información y Estadística Básicas", amount: 601 },
        { name: "Judicial", amount: 21812 },
        { name: "Legislativa", amount: 7763 },
        { name: "Relaciones Exteriores", amount: 6016 },
        { name: "Relaciones Interiores", amount: 28533 }
      ]
    },
    {
      name: "Deuda Pública",
      amount: 109613,
      sub: [{ name: "Servicio de la Deuda Pública", amount: 109613 }]
    },
    {
      name: "Defensa y Seguridad",
      amount: 74135,
      sub: [
        { name: "Defensa", amount: 25114 },
        { name: "Inteligencia", amount: 2978 },
        { name: "Seguridad Interior", amount: 40570 },
        { name: "Sistema Penal", amount: 5472 }
      ]
    },
    {
      name: "Servicios Ecónomicos",
      amount: 265576,
      sub: [
        { name: "Agricultura", amount: 6540 },
        { name: "Comercio, Turismo y Otros Servicios", amount: 3913 },
        { name: "Comunicaciones", amount: 9092 },
        { name: "Ecología y Medio Ambiente", amount: 2546 },
        { name: "Energía, Combustibles y Minería", amount: 157478 },
        { name: "Industria", amount: 5353 },
        { name: "Seguros y Finanzas", amount: 454 },
        { name: "Transporte", amount: 80200 }
      ]
    },
    {
      name: "Servicios Sociales",
      amount: 830278,
      sub: [
        { name: "Agua Potable y Alcantarillado", amount: 13634 },
        { name: "Ciencia y Técnica", amount: 17918 },
        { name: "Educación y Cultura", amount: 87525 },
        { name: "Promoción y Asistencia Social", amount: 20892 },
        { name: "Salud", amount: 51233 },
        { name: "Seguridad Social", amount: 605346 },
        { name: "Trabajo", amount: 6245 },
        { name: "Vivienda y Urbanismo", amount: 27485 }
      ]
    }
  ]
};

window.customElements.define(AfApp.is, AfApp);
