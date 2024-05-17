use crate::models::locationInfo::LocationInfo;
use bson::extjson::de::Error;
use mongodb::bson::doc;

use super::mongodb::get_collection;

pub fn get_location_info(deviceId: &str) -> Result<LocationInfo, Error> {
    let collection = get_collection("location_info").unwrap();
    let result = collection.find_one(doc! {"deviceId": deviceId}, None);

    Ok(result.unwrap().unwrap())
}
