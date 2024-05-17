use crate::models::referenceLocation::ReferenceLocation;



#[post("/", format="application/json", data = "<referenceLocation>")]
fn add_reference_location(referenceLocation: ReferenceLocation) -> 
