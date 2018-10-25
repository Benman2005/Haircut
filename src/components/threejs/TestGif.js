import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import './Home.css'
// import threeEntryPoint from './threejs/SceneSubject';
import ThreeTest from './ThreeTest'
import ThreeRendererTest from './ThreeRendererTest'
import R3RTest from './R3RTest'


class TestGif extends PureComponent{

  componentDidMount() {
  }

    render(){
        
        return(

                <div className="">
                <div>
                <R3RTest />
                </div>
                <ThreeTest />
                <ThreeRendererTest />
                <h1 className='answer'>TEST!</h1>
                <img src="https://media3.giphy.com/media/IrQcyTog3X8VW/giphy.gif" alt="fab"/>
                </div>

        )
    }
}

export default connect ()(TestGif)