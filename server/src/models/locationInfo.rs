use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct LocationInfo {
    deviceId: String,
    longitude: String,
    latitude: String,
    accuracy: i32,
}
