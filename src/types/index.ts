export interface ArtObjectRes {
  elapsedMilliseconds: number
  count: number
  artObjects: ArtObject[]
}

export interface ArtObject {
  links: Links
  id: string
  objectNumber: string
  title: string
  hasImage: boolean
  longTitle: string
  showImage: boolean
  permitDownload: boolean
  webImage: Image
  headerImage: Image
}

export interface ArtObjectDetailRes {
  elapsedMilliseconds: number
  artObject: ArtObjectDetail
}

export interface ArtObjectDetail {
  links: Links
  id: string
  priref: string
  objectNumber: string
  language: string
  title: string
  copyrightHolder: null
  webImage: WebImage
  colors: any[]
  colorsWithNormalization: any[]
  normalizedColors: any[]
  normalized32Colors: any[]
  materialsThesaurus: any[]
  techniquesThesaurus: any[]
  productionPlacesThesaurus: any[]
  titles: string[]
  description: string
  labelText: null
  objectTypes: string[]
  objectCollection: string[]
  makers: Maker[]
  principalMakers: Maker[]
  plaqueDescriptionDutch: null
  plaqueDescriptionEnglish: null
  principalMaker: string
  artistRole: null
  associations: any[]
  acquisition: Acquisition
  exhibitions: any[]
  materials: string[]
  techniques: string[]
  productionPlaces: string[]
  dating: Dating
  classification: Classification
  hasImage: boolean
  historicalPersons: any[]
  inscriptions: any[]
  documentation: any[]
  catRefRPK: any[]
  principalOrFirstMaker: string
  dimensions: Dimension[]
  physicalProperties: any[]
  physicalMedium: string
  longTitle: string
  subTitle: string
  scLabelLine: string
  label: Label
  showImage: boolean
  location: null
}

export interface Acquisition {
  method: string
  date: Date
  creditLine: string
}

export interface Classification {
  iconClassIdentifier: any[]
  iconClassDescription: any[]
  motifs: any[]
  events: string[]
  periods: string[]
  places: string[]
  people: any[]
  objectNumbers: string[]
}

export interface Dating {
  presentingDate: string
  sortingDate: number
  period: number
  yearEarly: number
  yearLate: number
}

export interface Dimension {
  unit: string
  type: string
  precision: null
  part: null
  value: string
}

export interface Label {
  title: null
  makerLine: null
  description: null
  notes: null
  date: null
}

export interface Maker {
  name: string
  unFixedName: string
  placeOfBirth: null
  dateOfBirth: null
  dateOfBirthPrecision: null
  dateOfDeath: null
  dateOfDeathPrecision: null
  placeOfDeath: null
  occupation: string[]
  roles: string[]
  nationality: null | string
  biography: null
  productionPlaces: string[]
  qualification: null
  labelDesc: string
}

export interface WebImage {
  guid: string
  offsetPercentageX: number
  offsetPercentageY: number
  width: number
  height: number
  url: string
}
export interface Image {
  guid: string
  offsetPercentageX: number
  offsetPercentageY: number
  width: number
  height: number
  url: string
}

export interface Links {
  self: string
  web: string
}

export interface QueryParam {
  name: string
  value: string
}

export interface Color {
  hex: string
  red: number
  green: number
  blue: number
  area: number
  hue: number
  saturation: number
  lightness: number
  intensity: number
}

export interface SearchProps {
  param: string
  color: string
}
