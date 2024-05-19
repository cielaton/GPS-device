use crate::models::ReferenceLocation::{
    ReferenceLocation, ReferenceLocationWithStringDateTime, ReferenceLocationWithoutTime,
};
use bson::{doc, extjson::de::Error, DateTime};
use mongodb::{options::FindOneOptions, results::InsertOneResult};

use crate::database::mongodb::get_collection;

pub fn insert_reference_location(
    refLocation: ReferenceLocationWithoutTime,
) -> Result<InsertOneResult, Error> {
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

pub fn query_reference_location(
    deviceId: &str,
) -> Result<ReferenceLocationWithStringDateTime, Error> {
    let collection = get_collection("reference_location").unwrap();
    let findOneOption = FindOneOptions::builder().sort(doc! {"time": -1}).build();

    let result = collection.find_one(doc! {"deviceId": deviceId}, findOneOption);

    Ok(result.unwrap().unwrap())
}
