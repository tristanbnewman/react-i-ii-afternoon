import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProfileDisplay from './components/ProfileDisplay/ProfileDisplay';
import UserProfile from './components/UserProfile/UserProfile';
import userData from './data/data.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      users: userData,
      userIndex: 0,
      firstName: userData[0]['name']['first'],
      lastName: userData[0]['name']['last'],
      title: userData[0]['title'],
      from: userData[0]['country'],
      employer: userData[0]['employer'],
      favoriteMovies: userData[0]['favoriteMovies']
    }
  }

  render(){

    this.loadUser = () =>{
      console.log(this.state.users)
      this.setState({firstName: this.state.users[this.state.userIndex]['name']['first']})
      this.setState({lastName: this.state.users[this.state.userIndex]['name']['last']})
      this.setState({title: this.state.users[this.state.userIndex]['title']})
      this.setState({from: this.state.users[this.state.userIndex]['country']})
      this.setState({employer: this.state.users[this.state.userIndex]['employer']})
      this.setState({favoriteMovies: this.state.users[this.state.userIndex]['favoriteMovies']})
    }

    this.previousUser=()=>{
      let newIndex = this.state.userIndex - 1

      if(this.state.userIndex === 0){
        this.setState({userIndex: 0})
      }
      else{
        this.setState({userIndex: newIndex}, ()=>{this.loadUser()})
      }

      this.loadUser()
    }

    this.nextUser=()=>{
      console.log(this.state.userIndex)
      let newIndex = this.state.userIndex + 1
      console.log(newIndex)

      if(this.state.userIndex === this.state.users.length - 1){
        this.setState({userIndex: this.state.users.length - 1})
      }
      else{
        this.setState({userIndex: newIndex}, ()=>{this.loadUser()})
      }
      
      
    }

    return (
      <div className="App">
        <NavBar />

        <ProfileDisplay 
        numOfUsers= {this.state.users.length}
        userIndex= {this.state.userIndex}
        next={this.nextUser}
        previous={this.previousUser}
        >

          <UserProfile 
          name={`${this.state.firstName} ${this.state.lastName}`}
          title= {this.state.title}
          from= {this.state.from}
          employer= {this.state.employer}
          favoriteMovies= {this.state.favoriteMovies}
          />
        </ProfileDisplay>
      </div>
          
        
  
        
    );
  }
}

export default App;
