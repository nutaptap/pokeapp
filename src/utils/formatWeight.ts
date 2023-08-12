export function formatWeight(weight: number) {
  const kilograms = weight / 10;
  const pounds = (kilograms * 2.20462).toFixed(2);
  return `${kilograms}kg ${pounds}lbs`;
}
