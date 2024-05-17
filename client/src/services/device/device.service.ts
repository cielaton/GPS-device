import Config from 'react-native-config';

const locationInfoApiUrl = Config.LOCATION_INFO_API_URL;

export const getLocationInfo = (deviceId: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${getLocationInfo}?deviceId=${deviceId}`)
      .then(result => resolve(result.json()))
      .catch(error => reject(error.json()));
  });
};
