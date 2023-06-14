export type Transport = {
  id: number,
  category: string
  driverName: string,
  driverContact: string,
  location: {
    latitude: number
    longitude: number
  }
}