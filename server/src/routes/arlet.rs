use crate::database::mongodb::get_collection;
use crate::models::LocationInfo:: LocationInfo;
use bson::doc;
use mongodb::options::FindOneOptions;
use mongodb::sync::Collection;
use rocket::http::Status;
use rocket::serde::json::Json;

#[get("/?<deviceId>")]
pub fn send_arlet(deviceId: &str) -> Result<Json<LocationInfo>, Status> {
    let collection: Collection<LocationInfo> = get_collection("location_info").unwrap();
    let findOneOption = FindOneOptions::builder().sort(doc! {"time": -1}).build();
    let result = collection
        .find_one(doc! {"deviceId": deviceId}, findOneOption)
        .unwrap()
        .unwrap();

    match result.isOutOfBound {
        true => Ok(Json(result)),
        false => Err(Status::InternalServerError)
    }
}
