use rocket::serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
#[serde(crate = "rocket::serde")]
pub struct LocationInfo {
 pub   deviceId: String,
   pub longitude: String,
   pub latitude: String,
   pub accuracy: i32,
}
