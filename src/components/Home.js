/**
 * Created by Arslan on 11-Nov-25.
 */

import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="jumbotron text-center bg-light p-4">
                <h1 className="display-4 text-success">Welcome to Little Lemon</h1>

                <p className="lead">Fresh. Local. Delicious Cuisine.</p>
                <Link className="btn btn-success btn-lg" to="/reservation">Book your Table</Link>
            </div>

            <section className="my-5 text-center">
                <h2 className="text-success mb-4">Top Dishes</h2>

                <div className="row">
                    {["Biryani", "Karahi", "Nihari"].map((dish, i) => (
                        <div className="col-md-4 mb-3" key={i}>
                            <div className="card h-100">
                                <img src="/assets/img_biryani.jpg" className="card-img-top"
                                     alt={dish}/>

                                <div className="card-body">
                                    <h5 className="card-title">{dish}</h5>

                                    <p className="card-text">A popular Pakistani delicacy made with authentic
                                        spices.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;
