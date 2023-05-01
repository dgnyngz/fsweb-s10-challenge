import { NOT_EKLE, NOT_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: JSON.parse(localStorage.getItem(s10chLocalStorageKey)) || [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export function reducer(state = baslangicDegerleri, action) {
  switch (action.type) {
    case NOT_EKLE:
      localStorageStateYaz(s10chLocalStorageKey, [
        ...state.notlar,
        action.payload,
      ]);

      console.log(localStorage.getItem(s10chLocalStorageKey));
      return {
        ...state,
        notlar: [action.payload, ...state.notlar],
      };

    case NOT_SIL:
      return {
        ...state,
        notlar: state.notlar.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
