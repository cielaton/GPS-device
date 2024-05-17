import Config from "react-native-config"

const apiUrl = Config.API_URL;

const mainRoutes = {
  location: `${apiUrl}/location`
}

export const LOCATION_INFO_API_URL = mainRoutes.location;
