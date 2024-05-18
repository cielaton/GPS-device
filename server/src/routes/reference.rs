use mongodb::results::InsertOneResult;
use rocket::{http::Status, serde::json::Json};

use crate::{
    database::referenceLocation::insert_reference_location,
    models::referenceLocation::{ReferenceLocation, ReferenceLocationWithoutTime},
};

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
