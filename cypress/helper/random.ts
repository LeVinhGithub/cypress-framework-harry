export const randomTimestamp = function () {
  const value =
    new Date()
      .toISOString()
      .split("T")[1]
      .replace(/:/g, "")
      .replace(".", "")
      .replace("Z", "") + Math.floor(1000 + Math.random() * 9000);
  return value;
};
