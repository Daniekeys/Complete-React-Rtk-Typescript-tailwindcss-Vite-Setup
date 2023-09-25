const local = window.localStorage;

export const getStorageValue = (key: string) => {
  return JSON.parse(local.getItem(key)!);
};

export const setStorageValue = ({
  key,
  value,
}: {
  key: string;
  value: string | boolean;
}) => {
  return local.setItem(key, JSON.stringify(value));
};

export const removeStorageValue = (key: string) => {
  return local.removeItem(key);
};
