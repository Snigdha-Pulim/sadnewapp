import React from "react";
import Add_post from "./Addpost";
import Post from "./Posts";
import Navbar from "./Navbar";
import Login from "./login";
import Signup from "./signUp";
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Redirect } from 'react-router'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={user:[],logind:[],sent:false,redirect:false,tem:"",tem1:"",tpt:false,sent1:false,tolod:false}
  }
  Login =()=>{
    return(
    <div>
      <Login logdetails={this.state.logind} userpage_f={this.userss} ></Login>
    </div>
      );
  };
  Signup =()=>{
    return(
      <Signup logdetails={this.state.logind} addetails={this.add_to_logind}></Signup>
      );
    
  };
  userss=x=>{
    this.setState({
      redirect:true,
      tem:x
    });
  }
  add_to_logind=(x,y)=>{
    const record = { username: x, password: y};
    this.setState({
      logind: [record,...this.state.logind]
    });
    axios.post(`http://localhost:3000/log_details`,record)
    .then(response=>{
      this.setState({sent1:true})
    })
    .catch(err=>{
      console.log(err)
    })
    this.setState({
      tolod:true
    });
  }

  add = (a,x, y) => {
    let d=new Date();
    const id = Date.parse(d);
    const record = { username: a,id: id, title: x, post: y, likes:0, comments:[]};
    if(x!==undefined ){
      this.setState({
        user: [record,...this.state.user]
      });
    }
    axios.post(`http://localhost:3000/posts`,record)
    .then(response=>{
      this.setState({sent:true})
    })
    .catch(err=>{
      console.log(err)
    })
    // if(true){
    //   axios.get(`http://localhost:3000/posts`,record)
    //  .then(res=>{
    //    console.log("post gotten")
    //    this.setState({user:[...res.data],sent:false})
    //  }).catch(err=>{
    //    console.log(err)
    //  })
    //  }
  };
  Index =()=>{
    return<div>
    <div className="container">
      <div className="row mb-2" id="row_style">
        <h4 className="text-center col-sm-12"></h4>
        <div className="col-md-5   " />
        
          <div className="col-md-1">
              <Link to="/login" ><button
              className="btn btn-primary display-block"
            >Login</button></Link>
          </div>
          <div className="col-md-1">
              <Link to="/signup"><button
              className="btn btn-primary display-block"
            >Signup
            </button></Link>
            </div>
        </div>
        <div className="col-md-5  "/>
     
    </div>
    </div>
  };
  User_page =()=>{
    return<div>
    <Navbar user={this.state.tem} />
      <Add_post user_name={this.state.tem} posts={this.add} />
      <div>
    <div className="container">
      <div className="col-md-1" />
      <div className="col-md-11">
        <div className="row">
          <div className="col-sm-12">
            <h1>
              <i className="glyphicon glyphicon-asterisk" /> posts
            </h1>
          </div>
        </div>
        {this.state.user.map(i => {
          return <Post post={i} user_name={this.state.tem} toggle={this.toggle} likes={this.add_likes} addcom={this.add_comment} del={this.delete_post}/>;
        })}
        
      </div>
    </div>
  </div>
  </div>;
  };
  add_likes=x=>{
    let r=this.state.user.map(o => {
      if(o.id === x)
      {
        o.likes=o.likes+1;
        
      }
      return o;
    });
    this.setState({
      user: [...r]
    });
    let k=this.state.user.filter(o => {
      return o.id===x;
      
    });
  
    axios.put(`http://localhost:3000/posts/${x}`,k[0])
    .then(response=>{
      
    })
    .catch(err=>{
      console.log(err)
    })

  }
  add_comment=(x,y)=>{
    console.log("hi")
    let r=this.state.user.map(o => {
      if(o.id === y)
      {
        o.comments=[x,...o.comments];
      }
      return o;
    });
    this.setState({
      user: [...r]
    });
  }
  toggle = (v,y) =>{
    let r=this.state.user.map(o => {
      if(o.id === y)
      {
        o.toggle=v
      }
      return o;
    });
    this.setState({
      user: [...r]
    })
  }
  delete_post=x=>{
    let r = this.state.user.filter(item => {
      return item.id !== x;
    }); 
    this.setState({
      user: [...r]
    });
  }

  componentDidMount() {
    axios.get('http://localhost:3000/posts')
    .then(a=>{
      console.log("componenentss")
      const persons = a.data.reverse();
        this.setState({user: [...persons]});
    })
    axios.get('http://localhost:3000/log_details')
    .then(a=>{
      console.log("componenentss")
      const persons = a.data.reverse();
        this.setState({logind: [...persons]});
         this.url_fix()
    })
}
url_fix=()=>{
  this.setState({
    tpt:true
  });
}
  

componentWillUpdate(){
  var x=30;
  if(x>0){
  setTimeout(axios.get('http://localhost:3000/posts')
  .then(a=>{
    
    const persons = a.data.reverse();
    
      this.setState({user: [...persons] ,sent:false});
      x--;
  }).catch(err=>{console.log(err)}), 20000); 
}
}

  render() {
    return (
      <Router>{this.state.tolod?<Redirect to ="/login"/>:""}
  {this.state.redirect?<div><Route path ={`/${this.state.tem}`} component={this.User_page}/><Redirect to={`/${this.state.tem}`} /></div>:""}  
  <Route path="/signup" component={this.Signup}/>
  <Route path="/" exact component={this.Index} />
  <Route path="/login" component={this.Login} />
      </Router>
    );
  }
}

export default App;