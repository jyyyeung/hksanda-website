const webcrypto = globalThis.crypto;
export const subtle = webcrypto.subtle;
export const randomUUID = () => {
  return webcrypto.randomUUID();
};
export const getRandomValues = (array) => {
  return webcrypto.getRandomValues(array);
};
export default {
  randomUUID,
  getRandomValues,
  subtle,
  webcrypto
};
