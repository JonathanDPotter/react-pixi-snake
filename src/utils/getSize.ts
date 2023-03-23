const getSize = (): number => {
  return window.innerHeight < window.innerWidth
    ? window.innerHeight - window.innerHeight * 0.06
    : (window.innerWidth = window.innerHeight * 0.06);
};

export default getSize();
