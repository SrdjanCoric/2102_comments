import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: (e) => {
        setValue(e.target.value);
      },
    },
  };
};

export default useInput;
