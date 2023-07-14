const oddOrEven = (inputs = []) => {
  return inputs.reduce((prev, current) => prev + current, 0) % 2 === 0
    ? "even"
    : "odd";
};
