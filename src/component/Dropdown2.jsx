import React, { useState } from "react";

// const Dropdown = () => {
   

function Dropdown2({selected, setSelected}) {
    const [isActive,setIsActive] = useState(false)
    const options = ['code', 'short-write', 'option'];
   return(
    <div className="dropdown">
        <div className="dropdown-btn" onClick={e => 
            setIsActive(!isActive)}>
            문제유형
            <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
        <div className="dropdown-content">
            {options.map((option) =>(
                <div 
                    onClick={e => {
                        setSelected(option);
                        setIsActive(false);
                }}
                className="dropdown-item"
            >
                {option}
                </div>
              ))}
        </div>
        )}
    </div>
   );
  }
  
  export default Dropdown2;