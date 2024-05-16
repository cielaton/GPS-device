use mongodb::{
    bson::doc,
    options::{ClientOptions, ServerApi, ServerApiVersion},
    Client,
};
use std::env;
use std::error::Error;
use tokio;

#[tokio::main]
pub async fn connect() -> mongodb::error::Result<()> {
    let clientURI = env::var("MONGODB_URI").expect("Error: No MONGODB_URI var!");
    let mut clientOpt = ClientOptions::parse_async(clientURI).await?;
    let client = Client::with_options(clientOpt)?;

    client
        .database("GPS-device")
        .run_command(doc! {"ping": 1}, None)
        .await?;
    println!("Pinged sucessfully, you have connected to MongoDb");

    Ok(())
}

