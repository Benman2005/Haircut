import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import './Home.css'

class YesLeft extends PureComponent{
    render(){
        return(
            <div className="yesLeft">
                <div className="noContainer">
                <h1 className='answer'>YES!</h1>
                </div>
            </div>
        )
    }
}
export default connect ()(YesLeft)