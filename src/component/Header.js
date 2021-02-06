import React from 'react';
import './Header.css';

class Header extends React.Component{
    constructor(){
        super();

        this.state={
            title:'Developer Funnel',
            keyword:'user text here'
        }
    }

    handleChange=(event) => {
        this.setState({keyword:event.target.value?event.target.value:'user text here'})
        this.props.userText( event.target.value)
    }

    render(){
        return(
            <React.Fragment>
             <header>
                 <div className="logo">{this.state.title}</div>               
              <center>
                <input onChange={this.handleChange}/>
                <div>{this.state.keyword}</div>
              </center>

             </header>
           </React.Fragment>
        )
    }
}

// const Header = () =>{
//     return(
//         <div>
//         <center>
//             <h1>developer funnel</h1>
//         </center>
//     </div>
//     )
// }

export default Header;