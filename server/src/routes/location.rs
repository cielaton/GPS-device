use crate::database::locationInfo::{insert_location_info, query_location_info};
use crate::database::referenceLocation::query_reference_location;
use crate::models::LocationInfo::{
    LocationInfoWithStringDateTime, LocationInfoWithoutTime, LocationInfoWithoutTimeAndIsOutOfBound,
};
use bson::doc;
use geoutils::Location;
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
    locationInfo: Json<LocationInfoWithoutTimeAndIsOutOfBound>,
) -> Result<Json<InsertOneResult>, Status> {
    let referenceLocation = query_reference_location(locationInfo.deviceId.as_str()).unwrap();

    let locationFloatLongitude: f64 = locationInfo.longitude.parse().unwrap();
    let locationFloatLatitude: f64 = locationInfo.latitude.parse().unwrap();
    let referenceLocationFloatLongitude: f64 =
        referenceLocation.location.longitude.parse().unwrap();
    let referenceLocationFloatLatitude: f64 = referenceLocation.location.latitude.parse().unwrap();

    let location = Location::new(locationFloatLongitude, locationFloatLatitude);
    let reference = Location::new(
        referenceLocationFloatLongitude,
        referenceLocationFloatLatitude,
    );

    let boundary = referenceLocation.boundary;
    let boundaryValueConvert = match boundary.unit.as_str() {
        "meter" => boundary.value,
        "kilometer" => boundary.value * 1000 as f64,
        _ => boundary.value,
    };

    let isOutOfBoundCheck: bool =
        location.distance_to(&reference).unwrap().meters() > boundaryValueConvert;

    let data = LocationInfoWithoutTime {
        deviceId: locationInfo.deviceId.to_owned(),
        longitude: locationInfo.longitude.to_owned(),
        latitude: locationInfo.latitude.to_owned(),
        accuracy: locationInfo.accuracy.to_owned(),
        isOutOfBound: isOutOfBoundCheck,
    };

    match insert_location_info(data) {
        Ok(locationInf) => Ok(Json(locationInf)),
        Err(_) => Err(Status::InternalServerError),
    }
}
