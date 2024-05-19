use super::mongodb::get_collection;
use crate::models::LocationInfo::{LocationInfo, LocationInfoWithStringDateTime, LocationInfoWithoutTime};
use bson::{extjson::de::Error, DateTime};
use mongodb::{bson::doc, options::FindOneOptions, results::InsertOneResult};

pub fn query_location_info(deviceId: &str) -> Result<LocationInfoWithStringDateTime, Error> {
    let collection = get_collection("location_info").unwrap();
    let findOneOption = FindOneOptions::builder().sort(doc! {"time": -1}).build();
    let result = collection.find_one(doc! {"deviceId": deviceId}, findOneOption);

    Ok(result.unwrap().unwrap())
}

pub fn insert_location_info(
    locationInfoVal: LocationInfoWithoutTime,
) -> Result<InsertOneResult, Error> {
    let collection = get_collection("location_info").unwrap();
    let newLocationInfo = LocationInfo {
        time: DateTime::now(),
        deviceId: locationInfoVal.deviceId,
        longitude: locationInfoVal.longitude,
        latitude: locationInfoVal.latitude,
        accuracy: locationInfoVal.accuracy,
        isOutOfBound: locationInfoVal.isOutOfBound,
    };
    let insertResult = collection.insert_one(newLocationInfo, None);

    Ok(insertResult.unwrap())
}
