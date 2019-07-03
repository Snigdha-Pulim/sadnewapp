import React from "react";
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state={comment:""};
    this.state = {
      j: false
  }
  }
  /*fdel = w => {
    this.props.acdel(w);
  };*/
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
      <div className="col-sm-12 m-4 border">
        <br />
        <h2>{this.props.aaa.title}</h2>
        <div>{this.props.aaa.post}</div>
        <div className="row">
    <div className="col-*-* m-4"><button className="btn btn-secondary" onClick={this.likes} >{this.props.aaa.likes} Likes</button></div>
    <div className="col-*-* m-4"><button className="btn btn-secondary" onClick={this.delete} >Delete</button></div>
    <div className="col-*-* m-4"><button className="btn btn-secondary"onClick={this.cclick}><input onChange={this.comchange} placeholder="comment here"/>Add Comment</button></div>
    <div className="col-*-* m-4"><button className="btn btn-secondary"onClick={this.showcomments}>{this.state.j?this.props.aaa.comments.map(i=>{
                        return (
                            <li>{i}</li>
                            );
                }):"Show Comments"}</button></div>
  </div>
        {/*<ol className="list-group">
                {this.props.tasks.map(i=>{
                        return (
                            <li><List_Comp g={i.id} h={i.title} fdel={this.fdel}  ></List_Comp></li>
                            );
                })}
            </ol>*/}
      </div>
    );
  }
}
export default Post;