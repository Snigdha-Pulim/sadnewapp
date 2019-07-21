import React from "react";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Username: "" ,password: "",repassword:"",error:false,error1:false,onclick:false,error2:false};
  }
  handleChange = even => {
    this.setState({ Username: even.target.value });
    this.setState({
        error2:false
    });
  };
  handleChan = even => {
    this.setState({ password: even.target.value });
  };
  handleCha = even => {
    this.setState({ repassword: even.target.value });
  };
  enter=(e)=>{
    if(e.key==='Enter' ){
      this.props.logdetails.map(x => {
        if(x.username==this.state.Username){
          console.log(x.username)
            this.setState({
                error2:true
            });
        }
      });
      if(this.state.Username==="" || this.state.password==="" || this.state.repassword===""){
        this.setState({
          error:true
        });
      }else if(this.state.password===this.state.repassword && this.state.error2!==true){
      this.props.addetails(this.state.Username, this.state.password);
      this.setState({
        Username: "",
        password:"",
        repassword:"",
        error:false,
        error1:false
      });
    }
     else{
        this.setState({
            error1:true,
            error:false
          });
     }
    }
  }
  signup = () => {
    this.setState({
      error2:false
    });
    this.props.logdetails.map(x => {
      if(x.username==this.state.Username){
        console.log(x.username)
          this.setState({
              error2:true
          });
      }
    });
    console.log(this.state.error2)
    if(this.state.Username==="" || this.state.password==="" || this.state.repassword===""){
      this.setState({
        error:true
      });
    }
    else if(this.state.password!==this.state.repassword)
    {
      this.setState({
        error1:true
      });
    }
    else if(this.state.error2!==true){
    this.props.addetails(this.state.Username, this.state.password);
    this.setState({
      Username: "",
      password:"",
      repassword:"",
      error:false,
      error1:false
    });
  }
   else{
      this.setState({
          error1:true,
          error:false
        });
  };
}
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" id="row_style">
            <h4 className="text-center col-sm-12">SignUp here</h4>
            <div className="col-md-3   col-md-offset-4" />
            <div className="col-md-6   col-md-offset-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.Username}
                  onChange={this.handleChange}
                  placeholder="Username"
                  onKeyDown={this.enter}
                />
              </div>
              <div className="form-group">
              <input
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={this.handleChan}
                placeholder="password"
                onKeyDown={this.enter}
              />
              </div>
              <input
                type="password"
                className="form-control"
                value={this.state.repassword}
                onChange={this.handleCha}
                placeholder="re-enter password"
                onKeyDown={this.enter}
              />
              {this.state.error?<div className="small text-danger">No Username or password!</div>:""}
              {this.state.error1?<div className="small text-danger">Password does not match!</div>:""}
              {this.state.error2?<div className="small text-danger">Username Already Exist</div>:""}
              <br />
              <div className="form-group"> 
                <button
                  className="btn btn-primary display-block"
                  onClick={this.signup}
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;