use crate::database::locationInfo::get_location_info;
use crate::models::locationInfo::LocationInfo;
use bson::doc;
use rocket::http::Status;
use rocket::serde::json::Json;

#[get("/?<deviceId>")]
pub async fn get_location(deviceId: &str) -> Result<Json<LocationInfo>, Status> {
    match get_location_info(deviceId) {
        Ok(locationInfo) => Ok(Json(locationInfo)),
        Err(_) => Err(Status::InternalServerError),
    }
}
