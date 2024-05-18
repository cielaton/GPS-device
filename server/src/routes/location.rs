use crate::database::locationInfo::{insert_location_info, query_location_info};
use crate::models::LocationInfo::{LocationInfoWithStringDateTime, LocationInfoWithoutTime};
use bson::doc;
use mongodb::results::InsertOneResult;
use rocket::http::Status;
use rocket::serde::json::Json;

#[get("/?<deviceId>")]
pub async fn get_location_info(
    deviceId: &str,
) -> Result<Json<LocationInfoWithStringDateTime>, Status> {
    match query_location_info(deviceId) {
        Ok(locationInfo) => Ok(Json(locationInfo)),
        Err(_) => Err(Status::InternalServerError),
    }
}

#[post("/", format = "application/json", data = "<locationInfo>")]
pub async fn add_location_info(
    locationInfo: Json<LocationInfoWithoutTime>,
) -> Result<Json<InsertOneResult>, Status> {
    let data = LocationInfoWithoutTime {
        deviceId: locationInfo.deviceId.to_owned(),
        longitude: locationInfo.longitude.to_owned(),
        latitude: locationInfo.latitude.to_owned(),
        accuracy: locationInfo.accuracy.to_owned(),
        isOutOfBound: locationInfo.isOutOfBound.to_owned(),
    };

    match insert_location_info(data) {
        Ok(locationInf) => Ok(Json(locationInf)),
        Err(_) => Err(Status::InternalServerError),
    }
}
