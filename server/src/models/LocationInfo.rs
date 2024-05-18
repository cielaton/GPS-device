use bson::{serde_helpers::deserialize_rfc3339_string_from_bson_datetime, DateTime};
use rocket::serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
#[serde(crate = "rocket::serde")]
pub struct LocationInfo {
    pub time: DateTime,
    pub deviceId: String,
    pub longitude: String,
    pub latitude: String,
    pub accuracy: i32,
    pub isOutOfBound: bool,
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(crate = "rocket::serde")]
pub struct LocationInfoWithoutTime {
    pub deviceId: String,
    pub longitude: String,
    pub latitude: String,
    pub accuracy: i32,
    pub isOutOfBound: bool,
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(crate = "rocket::serde")]
pub struct LocationInfoWithStringDateTime {
    #[serde(deserialize_with = "deserialize_rfc3339_string_from_bson_datetime")]
    pub time: String,
    pub deviceId: String,
    pub longitude: String,
    pub latitude: String,
    pub accuracy: i32,
    pub isOutOfBound: bool,
}
