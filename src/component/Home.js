import React from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDiaplay from './NewsDisplay';

class Home extends React.Component{
    constructor(){
        super();

        this.state = {
            data:JSON
        }

    }
    render(){
        console.log(this.state.data)
        return(
            <React.Fragment>
                <Header/>
                <hr/>
               <NewsDiaplay newsData={this.state.data}/>
               <hr/>
               <Footer year='2019'/>
               </React.Fragment>
        )
    }
}
// const Home = () =>{
//     return(
//         <div>
//             <Header/>
//             <hr/>
//             <h1>This is my react application</h1>
//             <h1>Suraj Reddy</h1>
//             <hr/>
//             <Footer/>
//         </div>
//     )
// }

export default Home;