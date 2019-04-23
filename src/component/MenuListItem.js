import React from 'react';
class ListItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="menuItem jumbotron">
        <div className="menuItem__pic">
          <img src="" alt=""/>
        </div>
        <div className="menuItem__product">
          商品名
        </div>
        <div className="menuItem__seller">
          商品名
        </div>
      </div>
    )
  }

}
export default ListItem;