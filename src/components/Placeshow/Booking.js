import React, { useState, useEffect } from "react";
import "./Booking.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiFileMinus, FiMinus, FiPlus } from "react-icons/fi";

const Booking = ({ closeModal }) => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [availableTime, setAvailableTime] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    const availableTimesFunction = () => {
        const mockAvailable = [
            '09: 00',
            '09: 30',
            '10: 00',
            '10: 30',
            '11: 00',
            '11: 30',
            '12: 00',
            '12: 30',
            '1: 00',
            '1: 30',
            '3: 00',
            '3: 30',
            '4: 00',
            '4: 30'

        ];
        setAvailableTime(mockAvailable);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleAdding = () => {
        var cnt = 0;
        cnt=cnt + 1;
    }

    useEffect(() => {
        availableTimesFunction();
    }, []);

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    return (
        <div className="overlay">
            <div className="modal">
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <div className="bookingPage">
                    <form>
                        <label className="bookingLabel"> Which date you want to go ?</label>
                            <ReactDatePicker
                                value={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                            />
                            {selectedDate && (
                                <p>You have selected: {selectedDate.toLocaleDateString()}</p>
                            )}
                        
                        <label  className="bookingLabel"> Which time you want to choose
                            <select value={selectedTime} onChange={handleTimeChange}>
                                <option value="">Select a time</option>
                                {availableTime.map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <br />
                        <label  className="bookingLabel">Ticket for </label>
                        <div className="quantity">
                            <span>
                                
                                    <FiMinus className="icon" />
                                    <span>Adult</span>
                                    <FiPlus className="icon" onClick={handleAdding}/>
                                
                            </span>
                            <span>
                               
                                    <FiMinus className="icon" />
                                    <span>Child</span>
                                    <FiPlus className="icon" />
                                
                            </span>
                        </div>
                        <span className="total">total</span>
                        <div className="onlinePayment">online payment</div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Booking;
