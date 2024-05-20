#![allow(non_snake_case)]
#[macro_use]
extern crate rocket;

use dotenv::dotenv;
use routes::{
    arlet::send_arlet,
    location::{add_location_info, get_location_info},
    reference::{add_reference_location, get_reference_location},
};
mod database;
mod models;
mod routes;

#[get("/")]
fn index() -> &'static str {
    "A Hu`ng dit xuong, a Tuan Anh vu to, a Thanh ia nhieu, chi My tuyet voi qua cam on vi da lam mai e heheh"
}

#[launch]
fn rocket() -> _ {
    dotenv().ok();
    // database::mongodb::connect().unwrap();
    rocket::build()
        .mount("/", routes![index])
        .mount("/location", routes![get_location_info, add_location_info])
        .mount(
            "/reference",
            routes![get_reference_location, add_reference_location],
        )
        .mount("/arlet", routes![send_arlet])
}
