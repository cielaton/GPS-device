use mongodb::bson::serde_helpers::serialize_bson_datetime_as_rfc3339_string;
use mongodb::bson::DateTime;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
#[serde(crate = "rocket::serde")]
pub struct Location {
    longitude: String,
    latitude: String,
}
#[derive(Serialize, Deserialize, Debug)]
#[serde(crate = "rocket::serde")]
pub struct Boundary {
    value: f64,
    unit: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ReferenceLocation {
    #[serde(serialize_with = "serialize_bson_datetime_as_rfc3339_string")]
    pub time: DateTime,
    pub deviceId: String,
    pub location: Location,
    pub boundary: Boundary,
}
