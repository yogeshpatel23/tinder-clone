import React, {
    useState,
    useEffect
} from 'react'
import TinderCard from 'react-tinder-card'

import axios from './axios';
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/card');

            setPeople(req.data)
        }

        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log('removngs: ' + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + 'Left rh scrrens')
    }

    return (
        <div className="tinderCards" >
            <div className="tinderCards__cardsContainer" > {
                people.map((person) => (<TinderCard className="swipe"
                    key={
                        person.name
                    }
                    preventSwipe={
                        ['up', 'down']
                    }
                    onSwipe={
                        (dir) => swiped(dir, person.name)
                    }
                    onCardLeftScreen={
                        () => outOfFrame(person.name)
                    } >
                    <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card" >
                        <h3 > {person.name} </h3>
                    </div>
                </TinderCard >
                ))
            } </div>
        </div >
    )
}

export default TinderCards