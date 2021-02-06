import React from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDiaplay from './NewsDisplay';

class Home extends React.Component{
    constructor(){
        super();

        this.state = {
            news:JSON,
            filtered:JSON
        }

    }

    filterNews=(userInput) =>{
        const Output = this.state.news.filter((data) =>{
            return data.title.indexOf(userInput)>-1
        })
        this.setState({filtered:Output})

    }

    render(){
        return(
            <React.Fragment>
                <Header userText = {(data) => {this.filterNews(data)}}/>
                <hr/>
               <NewsDiaplay newsData={this.state.filtered}/>
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