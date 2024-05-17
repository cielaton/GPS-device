use crate::models::locationInfo::LocationInfo;
use mongodb::{
    bson::doc,
    sync::{Client, Collection},
};
use std::env;

pub fn connect() -> mongodb::error::Result<Client> {
    let clientURI = env::var("MONGODB_URI").expect("Error: No MONGODB_URI var!");
    let client = Client::with_uri_str(clientURI)?;

    client
        .database("GPS-device")
        .run_command(doc! {"ping": 1}, None);
    println!("Pinged sucessfully, you have connected to MongoDb");

    Ok(client)
}

pub fn location_info_collection() -> mongodb::error::Result<Collection<LocationInfo>> {
    let clientURI = env::var("MONGODB_URI").expect("Error: No MONGODB_URI var!");
    let client = Client::with_uri_str(clientURI)?;

    let collection: Collection<LocationInfo> =
        client.database("GPS-device").collection("location_info");

    Ok(collection)
}

pub fn device_list_collection() -> mongodb::error::Result<Collection<LocationInfo>> {
    let client = connect().unwrap();

    let collection: Collection<LocationInfo> =
        client.database("GPS-device").collection("device_list");

    Ok(collection)
}

pub fn get_collection<T>(name: &'static str) -> mongodb::error::Result<Collection<T>> {
    let client = connect().unwrap();

    let collection = client.database("GPS-device").collection(name);

    Ok(collection)
}
