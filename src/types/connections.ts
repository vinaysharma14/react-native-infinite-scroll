interface Location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

interface Response {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: Location;
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface ConnectionResponse {
  results: Response[];
  info: {
    page: number;
    seed: string;
    results: number;
    version: string;
  };
}

export interface Connection {
  name: string;
  cell: string;
  email: string;
  phone: string;
  gender: string;
  age: Response['dob']['age'];
  dob: Response['dob']['date'];
  image: Response['picture']['large'];
  thumbnail: Response['picture']['thumbnail'];
  location: Omit<Location, 'timezone' | 'coordinates'>;
}
