// Taux de conversion approximatifs (base : Dirham Marocain - MAD)
// 1 MAD ≈ 65.5 XAF (Franc CFA d'Afrique Centrale - BEAC)
export const RATE_MAD_TO_FCFA = 65.5;

/**
 * Formate un prix en MAD et en FCFA côte à côte.
 * @param {number} priceMad - Prix en Dirham Marocain
 * @returns {{ mad: string, fcfa: string }}
 */
export const formatPrices = (priceMad) => {
  const fcfa = Math.round(priceMad * RATE_MAD_TO_FCFA);
  return {
    mad: `${priceMad} MAD`,
    fcfa: `${fcfa.toLocaleString('fr-FR')} FCFA`,
  };
};

/**
 * Calcule et retourne une chaîne de prix double devise.
 * @param {number} priceMad
 * @returns {string}  ex: "45 MAD / 2 948 FCFA"
 */
export const dualPrice = (priceMad) => {
  const { mad, fcfa } = formatPrices(priceMad);
  return `${mad} / ${fcfa}`;
};
