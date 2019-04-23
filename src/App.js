import React, { Component } from 'react';
import './App.css';
import CommentList from './component/CommentList'
import CommentBox from './component/CommentBox'
import MenuList from './component/MenuList'
import MenuHeader from './component/MenuHeader'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments:['this is my first project','hello']
    }
    this.handleComment=this.handleComment.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
  }
  handleComment(comments){
    this.setState({
      comments:[...this.state.comments,comments]
    })
  }
  deleteRow(index){
    console.log(index)
    const comments = [...this.state.comments];
    comments.splice(index, 1);
    this.setState({comments});
  }
  render() {
    const { comments }=this.state
    return (
      <div className="App">
        {/*<CommentList comments={comments}  onDeleteComment={this.deleteRow} />*/}
        {/*<CommentBox onAddComment={this.handleComment}*/}
                    {/*commentsLength={comments.length}/>*/}
                    <MenuHeader></MenuHeader>
        <MenuList></MenuList>
      </div>
    );
  }
}

export default App;
