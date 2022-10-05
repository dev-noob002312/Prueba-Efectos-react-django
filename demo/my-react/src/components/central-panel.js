import React from "react";
import Buttons from "./EffectControl";
import Options from "./options";

class Central extends React.Component {
     render() {
       return(
         <div className="central-panel">
             <div className="panel-part1">
                <Options/>
             </div>
             <div className="panel-part2">
                 <Buttons/>
             </div>
         </div>
       );

     }
}

export default Central;