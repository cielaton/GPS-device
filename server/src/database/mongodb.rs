use mongodb::{bson::doc, options::ClientOptions, Client, Collection};
use std::env;
use tokio;
use crate::models::locationInfo::LocationInfo;

#[tokio::main]
pub async fn connect() -> mongodb::error::Result<Client> {
    let clientURI = env::var("MONGODB_URI").expect("Error: No MONGODB_URI var!");
    let clientOpt = ClientOptions::parse_async(clientURI).await?;
    let client = Client::with_options(clientOpt)?;

    client
        .database("GPS-device")
        .run_command(doc! {"ping": 1}, None)
        .await?;
    println!("Pinged sucessfully, you have connected to MongoDb");

    Ok(client)
}

#[tokio::main]
pub async fn location_info_collection() -> mongodb::error::Result<Collection<LocationInfo>> {
    let client = connect().unwrap();

    let collection: Collection<LocationInfo> = client
        .database("GPS-device")
        .collection("location_info");

    Ok(collection)
}

#[tokio::main]
pub async fn device_list_collection() -> mongodb::error::Result<Collection<LocationInfo>> {
    let client = connect().unwrap();

    let collection: Collection<LocationInfo> = client
        .database("GPS-device")
        .collection("device_list");

    Ok(collection)
}
