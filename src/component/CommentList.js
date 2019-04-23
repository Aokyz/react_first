import React from 'react'
class CommentList extends React.Component{
  constructor(props){
    super(props);
  }
  deleteComment(deleteIndex){
    // console.log(e.target===this)
    // let deleteIndex = e.target.dataset.index
    this.props.onDeleteComment(deleteIndex)
    // console.log(deleteIndex)
  }
  render(){
    return (
      <div className="comment-list-component">
        <label > 评论列表</label>
        <ul className="list-group mb-3">
          {
            this.props.comments.map((comment,index)=>
              <li key={index} className="list-group-item">{comment}
                {/*<button className="btn btn-primary" onClick={this.deleteComment} data-index={index}>删除</button>*/}
                <button className="btn btn-primary" onClick={()=>this.deleteComment(index)} data-index={index}>删除</button>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
export default CommentList;