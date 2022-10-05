import React from "react";

class Options extends React.Component {
     render() {
        return(
            <div className="first-options">
                <ul className="options">
                    <li className="options-buttons">
                       <button class="btn-on">On</button>
                    </li>
                    <li className="options-buttons">
                       <button className="btn-off">Off</button>
                    </li>
                </ul>
                <form method="POST" className="sub_form">
                     <select className="selec-options">
                        <option>circle</option>
                        <option>Cube</option>
                        <option>Words</option>
                     </select>
                     <select className="selec-options">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                     </select>
                     <input type="submit" name="sub_button" className="submit_button" value="Cargar"></input>
                </form>
            </div>
        );
     }
}
export default Options;