import React from "react";
class Add_post extends React.Component {
  constructor(props) {
    super(props);
    this.cake = props.name;
    this.state = { title: "" };
    this.state = { post: "" };
  }
  handleChange = even => {
    this.setState({ title: even.target.value });
  };
  handleChan = even => {
    this.setState({ post: even.target.value });
  };
  return_post = (e) => {
    if(this.state.title!==""){
    this.props.posts(this.state.title, this.state.post);
    }
    this.setState({
      title: ""
    })
  };
  render() {
    return (
      <div className="col-sm-4 m-4 border">
        <h1 className="text-center">{this.cake}</h1>
        <br />
        <input
          type="text"
          className="form-control"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Title"
        />
        <br />
        <textarea
          type="text"
          className="form-control"
          value={this.state.post}
          onChange={this.handleChan}
          placeholder="Content"
        />
        <br />
        <div className="text-center">
          <button className="btn btn-secondary m-4" onClick={this.return_post}>
            Post
          </button>
        </div>
      </div>
    );
  }
}
export default Add_post;
