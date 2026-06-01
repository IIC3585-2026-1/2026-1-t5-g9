import { writable } from "svelte/store";
import { categories, getCategory } from "../data/units.js";
import { convertUnit } from "../utils/converters.js";

const initialCategory = categories[0];

const initialState = {
  category: initialCategory.id,
  units: initialCategory.units,
  value: "",
  from: initialCategory.units[0].id,
  to: initialCategory.units[1].id,
  result: null,
  error: "",
};

function resetUnitsForCategory(categoryId) {
  const units = getCategory(categoryId)?.units ?? [];

  return {
    units,
    from: units[0]?.id ?? "",
    to: units[1]?.id ?? units[0]?.id ?? "",
  };
}

function createConverterStore() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    set,
    reset: () => set(initialState),
    setCategory: (categoryId) => update((state) => ({
      ...state,
      category: categoryId,
      ...resetUnitsForCategory(categoryId),
      result: null,
      error: "",
    })),
    swapUnits: () => update((state) => ({
      ...state,
      from: state.to,
      to: state.from,
      result: null,
      error: "",
    })),
    convert: () => update((state) => {
      const trimmedValue = String(state.value).trim();
      const numericValue = Number(state.value);

      if (trimmedValue === "" || !Number.isFinite(numericValue)) {
        return {
          ...state,
          result: null,
          error: "Ingresa un valor numérico válido",
        };
      }

      if (state.from === state.to) {
        return {
          ...state,
          result: null,
          error: "Selecciona unidades distintas",
        };
      }

      const convertedValue = convertUnit(
        numericValue,
        state.from,
        state.to,
        state.category,
      );

      if (!Number.isFinite(convertedValue)) {
        return {
          ...state,
          result: null,
          error: "Error en la conversión",
        };
      }

      return {
        ...state,
        result: convertedValue,
        error: "",
      };
    }),
  };
}

export const converter = createConverterStore();
