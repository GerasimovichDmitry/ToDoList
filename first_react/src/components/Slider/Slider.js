import React, {Component} from 'react';
import './Slider.css'

class Slider extends Component {

    constructor(props){
        super();
        this.state = {
            images : props.images,
            currentIndex : 0,
            goPrev : true,
            goNext : false
        }
    }

    showImage(e){
        let newIndex =  this.state.currentIndex;
        if (e.currentTarget.dataset.direction === 'next') {
            if (newIndex < this.state.images.length -1) {
                newIndex = this.state.currentIndex + 1;
                this.setState({goPrev : false});
                if(newIndex === this.state.images.length - 1) {
                    this.setState({goNext : true});
                }
            }
        }
          else if(newIndex > 0){
              newIndex = this.state.currentIndex -1;
            this.setState({goNext : false});
            if (newIndex === 0){
                this.setState({goPrev : true});
            }
        }
          this.setState({currentIndex: newIndex})
    }

    render() {
        return (
            <div className="slider">
                <button disabled={this.state.goPrev} data-direction="prev" onClick={this.showImage.bind(this)}>
                    PREV
                </button>
                <img src={this.state.images[this.state.currentIndex]}/>
                <button disabled={this.state.goNext} data-direction="next" onClick={this.showImage.bind(this)}>
                    NEXT
                </button>
            </div>

        )
    }
};

export default Slider;