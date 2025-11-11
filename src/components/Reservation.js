import React from "react";

function Reservation() {
    return (

        <div className="col-md-6 offset-md-3">
            <h2 className="text-success mb-4 text-center">Book a Table</h2>
            <div className="card p-4">
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <label>Date & Time</label>
                        <input type="datetime-local" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <label>Number of Guests</label>
                        <input type="number" className="form-control" min="1" required/>
                    </div>

                    <div className="form-group">
                        <label>Occasion</label>
                        <select className="form-control" required>
                            <option value="">Select Occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div class="text-center">
                        <button type="submit" className="btn btn-success btn-block mt-4">
                            Make Reservation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Reservation;
