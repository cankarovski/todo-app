import { useState } from "react";

function useToggleState(initVal = false) {
  const [state, setState] = useState(initVal);

  const toggleState = () => {
    setState(!state);
  };

  return [state, toggleState];
}

export default useToggleState;
