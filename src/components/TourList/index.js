import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour'
import tourData from '../../tourData';
export default class TourList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tours:tourData
        }
    }

    removeTour = id => {
        let {tours} = this.state;
        let sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours:sortedTours
        });
    }
    
    render() {
        let { tours } = this.state;
        console.log(tours);
        return (
            <section className="tourlist">
                {
                    tours.map(tour => {
                        return <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                    })
                }
            </section>
                
        )
    }
}

