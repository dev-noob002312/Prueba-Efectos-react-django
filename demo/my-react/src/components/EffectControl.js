import React from "react";


class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { btn1: 'Effect1',
                       btn2: 'Effect2',
                       btn3: 'Effect3',
                       btn4: 'Effect4',
                       btn5: 'Effect5',
                       btn6: 'Effect6',
                       btn7: 'Effect7',
                       btn8: 'Effect8',
                       btn9: 'Effect9',
                       btn10: 'Effect10',
                    };
    }
    render() {
        return(
            <div className="btns-mark">
                <ul className="Effects">
                   <li className="Effect-opt">
                     <button className="btns">{this.state.btn1}</button>
                   </li>
                   <li className="Effect-opt">
                      <button className="btns">{this.state.btn2}</button>
                   </li>
                   <li className="Effect-opt">
                      <button className="btns">{this.state.btn3}</button>
                   </li>
                   <li className="Effect-opt">
                      <button className="btns">{this.state.btn4}</button>
                   </li>
                   <li className="Effect-opt">
                      <button className="btns">{this.state.btn5}</button>
                   </li>
                   <li className="Effect-opt">
                      <button className="btns">{this.state.btn6}</button>
                   </li>
                   <li className="Effect-opt">
                      <button className="btns">{this.state.btn7}</button>
                   </li>
                   <li className="Effect-opt">
                      <button className="btns">{this.state.btn8}</button>
                   </li>
                   <li className="Effect-opt">
                      <button className="btns">{this.state.btn9}</button>
                   </li>
                   <li className="Effect-opt">
                      <button className="btns">{this.state.btn10}</button>
                   </li>
                </ul>
            </div>
        );
    }
}

export default Buttons;