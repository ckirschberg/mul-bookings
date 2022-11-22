import { useState } from "react";

export default function BookingForm({ setBookings }) {
  const [room, setRoom] = useState("");
  const [date, setDate] = useState(""); // date

  const handleRoom = (event) => {
    const input = event.target.value;
    setRoom(input);
  };
  const handleDate = (event) => {
    // date
    setDate(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("You clicked");
    let booking = { room: room, date: date };
    const response = await fetch(
      "https://mul-3rd-sem-default-rtdb.europe-west1.firebasedatabase.app/bookings.json",
      {
        method: "POST",
        body: JSON.stringify(booking),
      }
    );
    const result = await response.json();
    console.log(result);
    booking.id = result.name;
    setBookings((previousValue) => {
      return [...previousValue, booking];
    });
  };

  return (
    <form>
      <div>
        <label>Lokale</label>
        <input
          type="text"
          placeholder="Lokale"
          name="room"
          value={room}
          onChange={handleRoom}
        />
      </div>

      <div>
        <label>Dato</label>
        <input
          type="text"
          placeholder="Dato - f.eks. 15-10-2022"
          name="date"
          value={date}
          onChange={handleDate}
        />
      </div>
      <button onClick={handleSubmit}>Gem booking</button>
    </form>
  );
}
