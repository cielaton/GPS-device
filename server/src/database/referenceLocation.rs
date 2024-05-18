use crate::models::referenceLocation::{ReferenceLocation, ReferenceLocationWithoutTime};
use bson::{extjson::de::Error, DateTime};
use mongodb::results::InsertOneResult;

use crate::database::mongodb::get_collection;
//
// pub fn get_latest_reference_location(deviceId: &str) -> Result<ReferenceLocation, Error> {
//     let collection = get_collection("reference_location").unwrap();
// }

pub fn insert_reference_location(refLocation: ReferenceLocationWithoutTime) -> Result<InsertOneResult, Error> {
    let collection = get_collection("reference_location").unwrap();
    let newReferenceLocation = ReferenceLocation {
        time: DateTime::now(),
        deviceId: refLocation.deviceId,
        location: refLocation.location,
        boundary: refLocation.boundary,
    };

    let insertOneResult = collection.insert_one(newReferenceLocation, None);
    Ok(insertOneResult.unwrap())
}

