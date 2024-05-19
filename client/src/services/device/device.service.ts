import { LOCATION_INFO_API_URL } from '../../infrastructure/config/api_url';


export const getLocationInfo = (deviceId: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${LOCATION_INFO_API_URL}?deviceId=${deviceId}`)
      .then(result => {
        resolve(result.json());
      })
      .catch(error => {
        reject(error);
      });
  });
};
