import { useState } from 'react';

type UseToggleReturn = [boolean, () => void];

const useToggle = (): UseToggleReturn => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(prev => !prev);

  return [toggle, handleToggle];
};

export default useToggle;
