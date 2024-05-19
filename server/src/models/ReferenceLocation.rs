use bson::serde_helpers::deserialize_rfc3339_string_from_bson_datetime;
use mongodb::bson::DateTime;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(crate = "rocket::serde")]
pub struct Location {
    pub longitude: String,
    pub latitude: String,
}
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(crate = "rocket::serde")]
pub struct Boundary {
    pub value: f64,
    pub unit: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ReferenceLocation {
    pub time: DateTime,
    pub deviceId: String,
    pub location: Location,
    pub boundary: Boundary,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ReferenceLocationWithoutTime {
    pub deviceId: String,
    pub location: Location,
    pub boundary: Boundary,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(crate = "rocket::serde")]
pub struct ReferenceLocationWithStringDateTime {
    #[serde(deserialize_with = "deserialize_rfc3339_string_from_bson_datetime")]
    pub time: String,
    pub deviceId: String,
    pub location: Location,
    pub boundary: Boundary,
}
