/**
 * Created by Arslan on 11-Nov-25.
 */

import React from "react";

function Menu() {
    const dishes = [
        {name: "Chicken Biryani", price: "Rs. 550"},
        {name: "Beef Karahi", price: "Rs. 850"},
        {name: "Mutton Korma", price: "Rs. 950"},
        {name: "Haleem", price: "Rs. 450"},
        {name: "Chapli Kebab", price: "Rs. 400"},
        {name: "Seekh Kebab", price: "Rs. 350"},
        {name: "Chicken Handi", price: "Rs. 750"},
        {name: "Nihari", price: "Rs. 600"},
        {name: "Paratha Roll", price: "Rs. 250"},
        {name: "Pulao", price: "Rs. 500"},
        {name: "Tikka Boti", price: "Rs. 400"},
        {name: "Lassi", price: "Rs. 150"},
    ];

    return (
        <div className="text-center">
            <h2 className="text-success mb-4">Our Menu</h2>

            <div className="row">
                {dishes.map((dish, i) => (
                    <div className="col-md-3 mb-4" key={i}>
                        <div className="card h-100">
                            <img src="/assets/img_biryani.jpg" className="card-img-top"
                                 alt={dish.name}/>

                            <div className="card-body">
                                <h5 className="card-title">{dish.name}</h5>

                                <p className="card-text text-success font-weight-bold">{dish.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
