export const createDebouncedSetItem = (
  onSavingChange: (status: boolean) => void,
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (name: string, value: string) => {
    onSavingChange(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      localStorage.setItem(name, value);
      onSavingChange(false);
    }, 1000);
  };
};
