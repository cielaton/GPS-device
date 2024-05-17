use crate::models::locationInfo::LocationInfo;
use mongodb::{
    bson::doc,
    sync::{Client, Collection},
};
use std::env;

// pub fn connect() -> mongodb::error::Result<Client> {
//     let clientURI = env::var("MONGODB_URI").expect("Error: No MONGODB_URI var!");
//     let client = Client::with_uri_str(clientURI)?;
//
//     client
//         .database("GPS-device")
//         .run_command(doc! {"ping": 1}, None);
//     println!("Pinged sucessfully, you have connected to MongoDb");
//
//     Ok(client)
// }


pub fn get_collection<T>(name: &'static str) -> mongodb::error::Result<Collection<T>> {
    let clientURI = env::var("MONGODB_URI").expect("Error: No MONGODB_URI var!");
    let client = Client::with_uri_str(clientURI)?;

    let collection = client.database("GPS-device").collection(name);

    Ok(collection)
}
