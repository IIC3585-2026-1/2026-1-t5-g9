import { getUnit } from "../data/units.js";

function convertTemperature(value, from, to) {
  if (from === to) {
    return value;
  }

  if (from === "c" && to === "f") return (value * 9 / 5) + 32;
  if (from === "c" && to === "k") return value + 273.15;
  if (from === "f" && to === "c") return (value - 32) * 5 / 9;
  if (from === "f" && to === "k") return (value - 32) * 5 / 9 + 273.15;
  if (from === "k" && to === "c") return value - 273.15;
  if (from === "k" && to === "f") return (value - 273.15) * 9 / 5 + 32;

  return NaN;
}

export function convertUnit(value, from, to, categoryId) {
  if (categoryId === "temperature") {
    return convertTemperature(value, from, to);
  }

  const fromUnit = getUnit(categoryId, from);
  const toUnit = getUnit(categoryId, to);

  if (!fromUnit || !toUnit) {
    return NaN;
  }

  return value * fromUnit.factor / toUnit.factor;
}
