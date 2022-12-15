import React from "react";
import one from "../../../Resources/Assets/01.svg";
import darksquare from "../../../Resources/Assets/darksquare.svg";
import lightsquare from "../../../Resources/Assets/lightsquare.svg";
import two from "../../../Resources/Assets/02.svg";
import three from "../../../Resources/Assets/03.svg";
import { useSelector } from "react-redux";
import "./Title.css";
function Title({ title }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  console.log(title);
  return (
    <div className={title===currentLocal.home.AccountingManager?"Title dark":"Title"}>
      {title ===currentLocal.home.generalManager&&  
        <>
          <img src={one} alt="one" />
          <img src={darksquare} alt="darksquare"className={currentLocal.language==="العربيه"?"arItgensqare":"gensqare"} />
        </>
}
      {title ===currentLocal.home.AccountingManager&& (
        <>
          <img src={two} alt="two" />
          <img src={lightsquare} alt="darksquare" className={currentLocal.language==="العربيه"?"arsqare":"sqare"} />
        </>
      )}
      {title === currentLocal.home.ITManager && (
        <>
          <img src={three} alt="three" />
          <img src={darksquare} alt="darksquare" className={currentLocal.language==="العربيه"?"arItsqare":"itsqare"} />
        </>
      )}
      <h1>{title}</h1>
      {title === currentLocal.home.ITManager && <p className="dark">{currentLocal.home.Advantages}</p>}
      {title === currentLocal.home.generalManager && <p className="dark">{currentLocal.home.Advantages}</p>}
      {title ===currentLocal.home.AccountingManager&& <p className="light">{currentLocal.home.Advantages}</p>}
    </div>
  );
}

export default Title;
