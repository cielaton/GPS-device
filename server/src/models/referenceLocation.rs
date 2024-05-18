use mongodb::bson::DateTime;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(crate = "rocket::serde")]
pub struct Location {
    longitude: String,
    latitude: String,
}
#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(crate = "rocket::serde")]
pub struct Boundary {
    value: f64,
    unit: String,
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
