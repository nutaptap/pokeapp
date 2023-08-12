export function formatHeight(height: number) {
  const meters = height / 10;
  const totalInches = meters * 39.3701;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.floor(totalInches % 12);
  return `${meters}m ( ${feet}"${inches}' )`;
}
