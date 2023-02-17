import React from "react";
import One from "../logo/one.png";
import Two from "../logo/two.png";
import Right from "../logo/right.png";
import Left from "../logo/left.png";

function NumberOfPages() {
    return (
        <div className="numbers-box">
            <img className="number left" src={Left} alt="previous page" />
            <img className="number one" src={One} alt="number one" />
            <img className="number two" src={Two} alt="number two" />
            <img className="number right" src={Right} alt="next page" />
        </div>
    );
}
export default NumberOfPages;