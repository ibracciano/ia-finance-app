export const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue === undefined) {
      throw new Error(`Variable d'environnement ${key} n'est pas définie`);
    }
    return defaultValue;
  }
  return value;
};
