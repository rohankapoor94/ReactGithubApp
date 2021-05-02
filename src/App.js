import React ,{Component} from 'react';
// import './App.css';
import Navbar from './Components/Layout/Navbar';
import Users from './Users/Users'
import axios from 'axios'
import Search from './Users/Search';
import Alerta from './Components/Layout/Alert';
class App extends Component {
  state={
    users:[],
    loading :false,
    alert:null
  }
  // async componentDidMount(){
  //   this.setState({loading:true})
  //   const res= await axios.get(`https://api.github.com/users?CLIENT_ID=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users:res.data,loading:false})
  //   console.log(res.data);
  // }
  searchUsers= async text=>{
    this.setState({loading:true})
    const res= await axios.get(`https://api.github.com/search/users?q=${text}&CLIENT_ID=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users:res.data.items,loading:false})

  }
  clearState=()=>this.setState({users:[],loading:false});
  setAlert=(msg,color)=>{
    this.setState({alert:{msg:msg,color:color}})
  }
  render(){
    const title='Github Finder'
    const icon="fab fa-github"
    return (
      <div className="App">
        <Navbar title={title} icon ={icon} />
        <Alerta alert={this.state.alert} />
        <Search searchUsers={this.searchUsers}  clearState ={this.clearState} showClear={this.state.users.length>0?true:false} setAlert={this.setAlert} />
        <div className="container"><Users  loading={this.state.loading} users={this.state.users} /></div>
      </div>
    );

  }
}

export default App;
