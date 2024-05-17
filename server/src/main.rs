#![allow(non_snake_case)]
#[macro_use]
extern crate rocket;

use dotenv::dotenv;
use routes::location::get_location;
mod database;
mod models;
mod routes;

#[get("/")]
fn index() -> &'static str {
    "Hello, World!"
}

#[launch]
fn rocket() -> _ {
    dotenv().ok();
    // database::mongodb::connect().unwrap();
    rocket::build()
        .mount("/", routes![index])
        .mount("/location", routes![get_location])
}
