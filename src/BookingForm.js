import './App.css';
import { useState } from 'react';


function BookingForm() {
    const [room, setRoom] = useState("")

    const handleRoom = (event) => {
        const input = event.target.value;
        setRoom(input)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("You clicked")
        // Kald serveren og gem data 
    }

    return (
        <form >
            <input type="text" placeholder="Lokale" name="room" 
                value={room} onChange={handleRoom}/>

            <button onClick={handleSubmit} >Gem booking</button>
        </form>
    )

}

export default BookingForm;