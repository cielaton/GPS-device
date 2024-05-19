import { jsx } from 'react/jsx-runtime';
import { REFERENCE_LOCATION_API_URL } from '../../infrastructure/config/api_url';

export const getRefererenceLocation = (deviceId: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${REFERENCE_LOCATION_API_URL}?deviceId=${deviceId}`)
      .then(result => {
        resolve(result.json());
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const insertReferenceLocation = (data: object) => {
  return new Promise((resolve, reject) => {
    fetch(REFERENCE_LOCATION_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(result => resolve(result.json()))
      .catch(err => reject(err));
  });
};
