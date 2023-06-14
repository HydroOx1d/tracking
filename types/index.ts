export type Transport = {
  category: 'cargo' | 'passenger' | 'spec'
  driverName: string,
  driverContact: string,
  location: {
    lat: number
    lon: number
  }
}