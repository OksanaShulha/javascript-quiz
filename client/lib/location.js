export const location = () => {
  try {
    return new Error().stack
      .replace(new RegExp(window.location.origin, 'g'), '')
      .split('\n')
      .filter((line) => line)
      .map((line) => line.trim())
      .filter((line) => line.includes('/client/src/'));
  } catch (err) {
    return '(undetectable)';
  }
};
