import React from "react";
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state={comment:""};
    this.state = {
      j: false
  }
  }
  cclick = () => {
    this.props.addcom(this.state.comment,this.props.aaa.id);
  }
  comchange = even => {
    this.setState({ comment: even.target.value });
  }
  likes=()=>{
    this.props.f(this.props.aaa.id);
  }
  delete=()=>{
    this.props.d(this.props.aaa.id);
  }
  showcomments=()=>{
    if(this.state.j){
      this.setState({
        j: false
    })
    }
    else{
      this.setState({
        j: true
    })
    }
  }
  render() {
return (
      <div className="row shadow p-3 mb-5 bg-white rounded">
        <div className="col-sm-12">
          <h4>{this.props.aaa.title}</h4>
          
          <hr />
        </div>
        <div className="col-sm-2">
          <button className="btn btn-sm btn-info" onClick={this.delete}>Delete</button> 
        </div>
        <div className="col-sm-10">
          <p>{this.props.aaa.post}</p>
         
          <div className="row">
        <div className="col-lg-2">
          <button className="btn btn-sm btn-info" onClick={this.likes}>
            {this.props.aaa.likes} LIKES
          </button>
        </div>


            <div className="col-lg-10">
        <div className="row">
          <div className="col-lg-3">Comments</div>
          <div className="col-lg-6 form-group w-100">
            <input className="col-*-* mt-4 mb-4 ml-4" onChange={this.comchange} placeholder="comment here"/>
          </div>
          <div className="col-lg-3">
                    <button className="btn btn-default btn-sm" onClick={this.showcomments}>View Comments</button>
                </div>
        </div>
      </div>

      <div>{this.state.j?
      <div>
      {this.props.aaa.comments.map(i => {
          return <div className="col-sm-12 shadow p-3 mb-5 bg-white rounded">
          {i}
      </div>
        })}
      </div>:""}</div>
      </div>


        </div>
      </div>
    );
  }
}
export default Post;