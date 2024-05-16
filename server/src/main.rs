#![allow(non_snake_case)]
#[macro_use]
extern crate rocket;

use dotenv::dotenv;
mod database;

#[get("/")]
fn index() -> &'static str {
    "Hello, World!"
}

#[launch]
fn rocket() -> _ {
    dotenv().ok();
    database::mongodb::connect();
    rocket::build().mount("/", routes![index])
}
