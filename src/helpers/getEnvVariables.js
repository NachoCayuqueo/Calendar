export const getEnvVariables = () => {
  //import.meta.env;
  const envVariable = import.meta.env;
  return {
    // ...import.meta.env,
    ...envVariable,
  };
};
