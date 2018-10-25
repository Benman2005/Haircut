import React, {PureComponent} from 'react'
import './Home.css'

class ModalNo extends PureComponent{
  state={}
  onDialogClick(event) {
    event.stopPropagation();
  }
  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.hide();
    }
  }
  componentDidMount(){
    window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
    document.getElementById("modalContain").classList.remove("modalContainer")
    setTimeout(function() {document.getElementById("modalContain").classList.add("modalContainer");}, 50); 
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=hd09HuLaKps9GPQeO7wUcw9X3w9CYNMd&tag=fabulous&hair&haircut`)
    .then(res => res.json())
    .then(data => {data.data.image_url ? this.setState({image: data.data.image_url}) : this.setState({image: "https://media2.giphy.com/media/IrQcyTog3X8VW/giphy.webp"});
    })
    .catch(err => console.error(err));
  }

  render(){
    let fabGif = this.state.image
    return(
      <div className="modalNo" onClick={this.props.hide}>
        <div style={{margin: "auto"}} id="modalContain" className="modalContainer" onClick={this.onDialogClick}>
        <div className="newDiv">

          <h1 >CUZ YOU LOOK FABULOUS!!</h1>
          <br />
          <div className ="watermarked">
            <img className="fabGif" src={fabGif} alt="fab"/>
          </div>
          <div className="closeButton" >
            <button onClick={this.props.hide}>close</button>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default ModalNo