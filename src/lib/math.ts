export const sum = (numbers: number[]) => {
  const result = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
  }, 0);

  return result;
}

export const randomBetween = (min = 0, max = 100) => {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  );
}
