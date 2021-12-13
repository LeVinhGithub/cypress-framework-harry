//Button
export const buttonAhrefLocator = function (name: string) {
  return `//a[text()='${name}']`;
};

export const buttonValueLocator = function (value: string) {
  return `input[value='${value}']`;
};

//Textbox
export const textboxIdLocator = function (id: string) {
  return `input#${id}`;
};

export const suffixSvgLocator = `/*[local-name() = 'svg']`;
