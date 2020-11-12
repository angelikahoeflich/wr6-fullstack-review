import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feed extends Component{

  render(){
    return(
    <div>
      {!this.props.isLoggedIn ?
      <div>this is the feed component</div>
      :
      <div>welcome,{this.props.user.username} to the bird feeder</div>
    }</div>
    )
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Feed); 

