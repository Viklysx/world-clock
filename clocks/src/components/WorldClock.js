import React from 'react';
import { nanoid } from 'nanoid';

class WorldClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            name: '',
            hour: '',
            clocks: []
        }
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
              <form>
                <input type="text" name="name" placeholder="Название"/>
                <input type="number" name="timezone" placeholder="Временная зона"/>
                <button type="submit">Добавить</button>
              </form>     
              <div>
              </div>
            </>
        )
    }
}

export default WorldClock