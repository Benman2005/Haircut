import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import './Home.css'

class TestGif extends PureComponent{

    render(){
        
        return(
            <div className="">
                <div className="">
                <h1 className='answer'>TEST!</h1>
                <img src="https://media3.giphy.com/media/IrQcyTog3X8VW/giphy.gif" alt="fab"/>
                
                {/* <div style={{width:"100vw", height:"0", paddingBottom:"73%",position:"relative"}}>
                    <iframe src="https://giphy.com/embed/IrQcyTog3X8VW" width="100vmin" height="100vmax" style={{position:""}} frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div> */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = function (state) {
    return {
        base: state.base
    }
}
export default connect (mapStateToProps)(TestGif)