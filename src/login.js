import React from "react";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Username: "" };
    this.state = { password: "",success:true,error1:true};
  }
  handleChange = even => {
    this.setState({ Username: even.target.value });
  };
  handleChan = even => {
    this.setState({ password: even.target.value });
  };
  enter=(e)=>{
    if(e.key==='Enter' ){
        this.setState({
            success:true
        });
        this.props.logdetails.map(x => {
            if(x.username===this.state.Username ){
                this.setState({
                    error1:false
                });
                if(x.password===this.state.password){ 
                    this.props.userpage_f(this.state.Username)
                    this.setState({
                        success:false
                    });
                }
                }
                
            });
        }
    }
  return_post = () => {
    this.setState({
      success:true
  });
  this.props.logdetails.map(x => {
      if(x.username===this.state.Username ){
          this.setState({
              error1:false
          });
          if(x.password===this.state.password){ 
              this.props.userpage_f(this.state.Username)
              this.setState({
                  success:false
              });
          }
          }
          
      });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" id="row_style">
            <h4 className="text-center col-sm-12">LogIn here</h4>
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
              <input
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={this.handleChan}
                placeholder="password"
                onKeyDown={this.enter}
              />
              {this.state.error1?<div className="small text-danger">username does not exist</div>:""}
              {this.state.success?<div className="small text-danger">wrong password</div>:""}
              <br />
              <div className="form-group">
                <button
                  className="btn btn-primary display-block"
                  onClick={this.return_post}
                >
                  LogIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;