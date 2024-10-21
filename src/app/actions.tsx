"use server";

export const getComponents = async () => {
  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(<div>Kip en ei2!</div>);
    }, 5000);
  });
  return result;
};
