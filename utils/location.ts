import { TPointGeoJson } from "~/types/location"

const getPositionOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

/**
 * watch user location:
 * same as getLocation but it bind a watcher to navigator
 * {@link [GeolocationPosition - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition)}
 * @returns GeolocationPosition
 */
export function watchLiveLocation(callback: PositionCallback): () => void {
  let watcherId = navigator.geolocation.watchPosition(callback, console.warn, getPositionOptions)
  return () => {
    navigator.geolocation.clearWatch(watcherId);
  }
}

/**
 * get user location from navigator:
 * {@link [GeolocationPosition - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition)}
 * @returns GeolocationPosition
 */
export function getLocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject, getPositionOptions)
    } else { 
      reject(new Error("Geolocation is not supported by this browser."))
    }
  })
}

/**
 * calculate direct distance between two point on earth.
 * for simplification.
 * better alternative is to use google api.
 * @param start GeoJSON point of start point
 * @param end   GeoJSON point of end point
 * @returns     Distance in Mile <number>
 */
export function calcDistance(start: TPointGeoJson, end: TPointGeoJson): number {
  const R = 3959; // Mile
  const dLat = toRad(end.coordinates[0]-start.coordinates[0]);
  const dLon = toRad(end.coordinates[1]-start.coordinates[1]);
  const lat1 = toRad(start.coordinates[0]);
  const lat2 = toRad(end.coordinates[0]);

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value: number) {
    return Value * Math.PI / 180;
}