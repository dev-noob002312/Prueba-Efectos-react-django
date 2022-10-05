import React from 'react';
import Circle from './circle';
import Cube from  './cube';
import Btns from './EffectControl';
import Options from './options';
import Central from './central-panel';


class General_box extends React.Component {
     render() {
        return(
            <div className='general_box'>
                <div className='box1'>
                    <Central/>
                </div>
                <div className='box2'>
                
                </div>
            </div>
        )
     }
}

export default General_box;