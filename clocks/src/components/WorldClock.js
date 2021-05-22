import React from 'react';
import { nanoid } from 'nanoid';
import WorldClockModel from './WorldClockModel';

class WorldClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            title: '',
            hour: '',
            clocks: []
        }
    }

    handleDataChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault(); 
        const clocks = new WorldClockModel(nanoid(), this.state.title, this.state.hour);
        this.setState({
            clocks: [...this.state.clocks, clocks]
        }) 
    }

    componentDidMount() {
        this.time = setInterval(() => {
            this.setState({
                time: new Date(Date.now() + this.state.hour*60*60*1000).toLocaleTimeString()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }

    render() {
        return (
            <>
              <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    value={this.state.title} 
                    onChange={this.handleDataChange} 
                    placeholder="Название"/>
                <input 
                    type="number" 
                    name="hour" 
                    value={this.state.hour} 
                    onChange={this.handleDataChange} 
                    placeholder="Временная зона"/>
                <button type="submit">Добавить</button>
              </form>     
              <div>
              </div>
            </>
        )
    }
}

export default WorldClock