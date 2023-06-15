export type Transport = {
  id: number,
  category: 'cargo' | 'special' | 'passenger'
  driverName: {
    ru: string,
    en: string
  },
  driverContact: string,
  location: {
    latitude: number
    longitude: number
  }
}

export type CarsCategory = { name: string; type: string };