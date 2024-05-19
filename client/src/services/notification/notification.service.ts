import { ARLERT_API_URL } from '../../infrastructure/config/api_url';

export const getArlertInfo = (deviceId: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${ARLERT_API_URL}?deviceId=${deviceId}`)
      .then(result => {
        resolve(result.json());
      })
      .catch(error => {
        reject(error);
      });
  });
};
