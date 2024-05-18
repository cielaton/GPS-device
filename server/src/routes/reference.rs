use mongodb::results::InsertOneResult;
use rocket::{http::Status, serde::json::Json};

use crate::{
    database::referenceLocation::{insert_reference_location, query_reference_location},
    models::ReferenceLocation::{ReferenceLocation, ReferenceLocationWithStringDateTime, ReferenceLocationWithoutTime},
};

#[get("/?<deviceId>")]
pub async fn get_reference_location(deviceId: &str) -> Result<Json<ReferenceLocationWithStringDateTime>, Status> {
    match query_reference_location(deviceId) {
        Ok(refLocation) => Ok(Json(refLocation)),
        Err(_) => Err(Status::InternalServerError),
    }
}

#[post("/", format = "application/json", data = "<referenceLocation>")]
pub async fn add_reference_location(
    referenceLocation: Json<ReferenceLocationWithoutTime>,
) -> Result<Json<InsertOneResult>, Status> {
    let data = ReferenceLocationWithoutTime {
        deviceId: referenceLocation.deviceId.to_owned(),
        location: referenceLocation.location.to_owned(),
        boundary: referenceLocation.boundary.to_owned(),
    };
    match insert_reference_location(data) {
        Ok(refLocation) => Ok(Json(refLocation)),
        Err(_) => Err(Status::InternalServerError),
    }
}
