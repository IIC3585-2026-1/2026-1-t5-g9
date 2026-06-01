export const categories = [
  {
    id: "length",
    label: "Longitud",
    units: [
      { id: "m", label: "Metro", factor: 1 },
      { id: "km", label: "Kilómetro", factor: 1000 },
      { id: "cm", label: "Centímetro", factor: 0.01 },
      { id: "mm", label: "Milímetro", factor: 0.001 },
      { id: "mi", label: "Milla", factor: 1609.344 },
      { id: "ft", label: "Pie", factor: 0.3048 },
      { id: "in", label: "Pulgada", factor: 0.0254 },
    ],
  },
  {
    id: "area",
    label: "Área",
    units: [
      { id: "m2", label: "Metro cuadrado", factor: 1 },
      { id: "km2", label: "Kilómetro cuadrado", factor: 1000000 },
      { id: "cm2", label: "Centímetro cuadrado", factor: 0.0001 },
      { id: "ha", label: "Hectárea", factor: 10000 },
      { id: "acre", label: "Acre", factor: 4046.8564224 },
      { id: "ft2", label: "Pie cuadrado", factor: 0.09290304 },
    ],
  },
  {
    id: "volume",
    label: "Volumen",
    units: [
      { id: "l", label: "Litro", factor: 1 },
      { id: "ml", label: "Mililitro", factor: 0.001 },
      { id: "m3", label: "Metro cúbico", factor: 1000 },
      { id: "gal", label: "Galón", factor: 3.785411784 },
      { id: "floz", label: "Onza líquida", factor: 0.0295735295625 },
    ],
  },
  {
    id: "mass",
    label: "Peso/Masa",
    units: [
      { id: "kg", label: "Kilogramo", factor: 1 },
      { id: "g", label: "Gramo", factor: 0.001 },
      { id: "mg", label: "Miligramo", factor: 0.000001 },
      { id: "lb", label: "Libra", factor: 0.45359237 },
      { id: "oz", label: "Onza", factor: 0.028349523125 },
      { id: "t", label: "Tonelada", factor: 1000 },
    ],
  },
  {
    id: "temperature",
    label: "Temperatura",
    units: [
      { id: "c", label: "Celsius" },
      { id: "f", label: "Fahrenheit" },
      { id: "k", label: "Kelvin" },
    ],
  },
  {
    id: "time",
    label: "Tiempo",
    units: [
      { id: "s", label: "Segundo", factor: 1 },
      { id: "min", label: "Minuto", factor: 60 },
      { id: "h", label: "Hora", factor: 3600 },
      { id: "day", label: "Día", factor: 86400 },
      { id: "week", label: "Semana", factor: 604800 },
    ],
  },
  {
    id: "speed",
    label: "Velocidad",
    units: [
      { id: "ms", label: "Metro por segundo", factor: 1 },
      { id: "kmh", label: "Kilómetro por hora", factor: 0.2777777777777778 },
      { id: "mph", label: "Milla por hora", factor: 0.44704 },
      { id: "kn", label: "Nudo", factor: 0.5144444444444445 },
    ],
  },
];

export function getCategory(categoryId) {
  return categories.find((category) => category.id === categoryId);
}

export function getUnit(categoryId, unitId) {
  return getCategory(categoryId)?.units.find((unit) => unit.id === unitId);
}
