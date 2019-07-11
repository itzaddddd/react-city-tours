import React, { Component } from 'react'
//import london from '../../img/london.jpeg';
// import newyork from '../../img/newyork.jpeg';
// import paris from '../../img/paris.jpeg';
// import tokyo from '../../img/tokyo.jpeg';
import './Tour.scss'

export default class Tour extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showInfo: false
        }
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    
    render() {
        let {id, city, img, name, info} = this.props.tour;
        let {removeTour} = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt={name}/>
                    <span className="close-btn" onClick={()=>removeTour(id)}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        Info{" "}
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        )
    }
}
