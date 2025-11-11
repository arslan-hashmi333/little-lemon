/**
 * Created by Arslan on 11-Nov-25.
 */

import React from "react";

function Contact() {
    return (
        <div className="col-md-6 offset-md-3">
            <h2 className="text-success mb-4 text-center">Contact Us</h2>

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
                        <label>Email</label>
                        <input type="email" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" rows="4" required></textarea>
                    </div>
                    <button className="btn btn-success btn-block">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;

