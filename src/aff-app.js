class AfApp extends Polymer.Element {
  static get is() {
    return "af-app";
  }

  static get properties() {
    return {
      revenue: {
        type: Object,
        value: revenue
      },
      spending: {
        type: Object,
        value: spending
      }
    };
  }

  toRevenue() {
    this.$.landing.style.display = "none";
    this.$.revenue.style.display = "";
  }

  toSpending() {
    this.$.landing.style.display = "none";
    this.$.spending.style.display = "";
  }

  toLanding() {
    this.$.revenue.style.display = "none";
    this.$.spending.style.display = "none";
    this.$.landing.style.display = "";
  }
}

const revenue = {
  name: "Recursos",
  amount: 1212308,
  sub: [
    {
      name: "Ingresos Tributarios",
      amount: 670317,
      sub: [
        { name: "Otros Impuestos", amount: 26765 },
        { name: "Comercio Exterior", amount: 106146 },
        { name: "Patrimonio", amount: 7686 },
        { name: "Producción, Consumo y Transacciones", amount: 329734 },
        { name: "Ingresos", amount: 199987 }
      ]
    },
    {
      name: "Aportes y Contribuciones",
      amount: 356721,
      sub: [
        { name: "Seguridad Social", amount: 349268 },
        { name: "Otras Contribuciones", amount: 7453 }
      ]
    },
    {
      name: "Ingresos No Tributarios",
      amount: 30647,
      sub: [
        { name: "Alquileres", amount: 75 },
        { name: "Derechos", amount: 9928 },
        { name: "Multas", amount: 1082 },
        { name: "Otros", amount: 6283 },
        { name: "Regalías", amount: 720 },
        { name: "Tasas", amount: 12559 }
      ]
    },
    { name: "Préstamos de Corto Plazo", amount: 2 },
    { name: "Préstamos de Largo Plazo", amount: 192 },
    { name: "Recursos Propios de Capital", amount: 176 },
    {
      name: "Rentas de la Propiedad",
      amount: 144731,
      sub: [
        { name: "Arrendamientos de Tierras y Terrenos", amount: 1 },
        { name: "Intereses por Depósitos", amount: 3510 },
        { name: "Intereses por Préstamos", amount: 4183 },
        { name: "Intereses por Títulos y Valores", amount: 58580 },
        { name: "Utilidades por Inversiones Empresariales", amount: 78457 }
      ]
    },
    {
      name: "Transferencias Corrientes",
      amount: 2803,
      sub: [
        {
          name: "De Gobiernos e Instituciones Provinciales y Municipales",
          amount: 252
        },
        { name: "De Instituciones Públicas no Financieras", amount: 2349 },
        { name: "Del Sector Externo", amount: 202 }
      ]
    },
    {
      name: "Transferencias de Capital",
      amount: 2035,
      sub: [
        { name: "De Instituciones Públicas no Financieras", amount: 2009 },
        { name: "Del Sector Externo", amount: 25 }
      ]
    },
    {
      name: "Venta de Bienes y Servicios",
      amount: 4684,
      sub: [
        { name: "Venta de Bienes", amount: 941 },
        { name: "Venta de Servicios", amount: 3743 }
      ]
    }
  ]
};

const spending = {
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
      amount: 109613
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
