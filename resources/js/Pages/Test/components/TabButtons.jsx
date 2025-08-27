
import { useState } from 'react';
export default function TabButtons({children,onSelect,isSelected}) {

  const [tabIndex, setTabIndex] = useState("1");

  return(
    <li><button className={isSelected ? 'active' : ''} onClick={onSelect} >{children}</button></li>
  );
}
