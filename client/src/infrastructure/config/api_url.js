import Config from 'react-native-config';

const apiUrl = Config.API_URL;

const mainRoutes = {
  location: `${apiUrl}/location`,
  reference: `${apiUrl}/reference`,
};

export const LOCATION_INFO_API_URL = mainRoutes.location;
export const REFERENCE_LOCATION_API_URL = mainRoutes.reference;
