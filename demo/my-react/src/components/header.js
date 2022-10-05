import React from 'react';

class Header extends React.Component {
     constructor(props) {
        super(props);
        this.state = {Title: 'Demo'}
     }
     render() {
        return (
           <div className='header'>
               <h1 className='title'>
                  { this.state.Title }
               </h1>
           </div>
        );

     }
}

export default Header;