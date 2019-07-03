import React from "react";
import Add_post from "./addpost";
import Post from "./posts";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={tcop: []}
  }
  add = (x, y) => {
    let d=new Date();
    const id = Date.parse(d);
    const record = { id: id, title: x, post: y, likes:0, comments:[]};
    if(x!==undefined ){
      this.setState({
        tcop: [record,...this.state.tcop]
      });
    }
  };
  add_likes=x=>{
    let r=this.state.tcop.map(o => {
      if(o.id === x)
      {
        o.likes=o.likes+1;
        console.log(o);
      }
      return o;
    });
    this.setState({
      tcop: [...r]
    });
  }
  add_comment=(x,y)=>{
    let r=this.state.tcop.map(o => {
      if(o.id == y)
      {
        o.comments=[x,...o.comments];
      }
      return o;
    });
    this.setState({
      tcop: [...r]
    });
  }
  delete_post=x=>{
    let r = this.state.tcop.filter(item => {
      return item.id !== x;
    }); 
    this.setState({
      tcop: [...r]
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4" />
          <Add_post name="Share here" posts={this.add} />
          <div className="col-sm-5" />
          <h2>Existing Posts</h2>
          <div className="col-sm-4" />
          <br />
          <div>
            {this.state.tcop.map(i => {
              return <Post aaa={i} f={this.add_likes} addcom={this.add_comment} d={this.delete_post}/>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;