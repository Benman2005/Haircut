import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import YesLeft from './YesLeft';
import NoRight from './NoRight';
import ModalNo from './ModalNo';
import './Home.css'



class Home extends PureComponent{
  constructor(props) {
    super(props);
    this.handleNo = this.handleNo.bind(this);
    this.state = {showNo: false, image: null};
    }
  state = { showNo: false, image: null };

  handleNo = async() =>{
    this.setState({showNo: true})
  }
  handleNoClose = () => {
    this.setState({showNo: false})
  }

  render(){
    
    let imageurl= this.state.image
    return(
      <div>
        <div id="demo"></div>
        <h1 className="question">DID YOU GET A HAIRCUT?</h1>
        {this.state.showNo && <ModalNo hide={this.handleNoClose} imageurl={imageurl}/> }
        <div className="yesno" onClick={this.handleNo}>
          <YesLeft className="yesPlease" imageurl={imageurl}/>
          <NoRight imageurl={imageurl}/>
        </div>
      </div>
    )
  }
}

export default connect()(Home)