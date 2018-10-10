import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import './Home.css'

class NoRight extends PureComponent{
  state = { showNo: false, image: null };

  handleNo = () =>{
    this.setState({showNo: !this.state.showNo})  
  }

  render(){
    return(     
      <div className="noRight">
        <h1 className="answer">NO!</h1>
      </div>
    )
  }
}

export default connect ()(NoRight)