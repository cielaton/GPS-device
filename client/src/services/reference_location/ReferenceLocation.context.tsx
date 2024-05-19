import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  getRefererenceLocation,
  insertReferenceLocation,
} from './referenceLocation.service';
import {DeviceContext} from '../device/device.context';

export const ReferenceLocationContext = createContext({});

export const ReferenceLocationContextProvider = ({children}: any) => {
  const {deviceId}: any = useContext(DeviceContext);
  const [referenceLocation, setReferenceLocation] = useState({
    longitude: '',
    latitude: '',
  });
  const [boundary, setBoundary] = useState({value: 0, unit: ''});

  const onSetReferenceLocation = (location: any) => {
    referenceLocation.longitude = location.longitude;
    referenceLocation.latitude = location.latitude;
    setReferenceLocation(location);
  };

  const onSetBoundary = (boundaryVal: any) => {
    boundary.value = boundaryVal.value;
    boundary.unit = boundaryVal.unit;
    setBoundary(boundaryVal);
  }


  const onGetReferenceLocation = () => {
    getRefererenceLocation(deviceId)
      .then((result: any) => {
        if (result) {
          console.log('Fetched reference location sucessfully');
          const location = result.location;
          const boundaryResult = result.boundary;
          setReferenceLocation({
            longitude: location.longitude,
            latitude: location.latitude,
          });
          setBoundary({value: boundaryResult.value, unit: boundaryResult.unit});
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const onInsertReferenceLocation = () => {
    const data = {
      deviceId: deviceId,
      location: referenceLocation,
      boundary: boundary,
    };
    insertReferenceLocation(data).then((result: any) => {
      if (result.insertedId) {
        console.log('Reference location inserted sucessfully');
      } else {
        console.log('Failed inserting reference location');
      }
    });
  };

  useEffect(() => {
    onGetReferenceLocation();
  }, [deviceId]);

  return (
    <ReferenceLocationContext.Provider
      value={{
        referenceLocation,
        onSetReferenceLocation,
        boundary,
        onSetBoundary,
        onInsertReferenceLocation,
      }}>
      {children}
    </ReferenceLocationContext.Provider>
  );
};
