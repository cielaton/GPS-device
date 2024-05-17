use mongodb::sync::{Client, Collection};
use std::env;

pub fn get_collection<T>(name: &'static str) -> mongodb::error::Result<Collection<T>> {
    let clientURI = env::var("MONGODB_URI").expect("Error: No MONGODB_URI var!");
    let client = Client::with_uri_str(clientURI)?;

    let collection = client.database("GPS-device").collection(name);

    Ok(collection)
}
