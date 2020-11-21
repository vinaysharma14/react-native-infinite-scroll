interface Location {
  street: {
    number: Number;
    name: String;
  };
  city: String;
  state: String;
  country: String;
  postcode: Number;
  coordinates: {
    latitude: String;
    longitude: String;
  };
  timezone: {
    offset: String;
    description: String;
  };
}

interface Response {
  gender: String;
  name: {
    title: String;
    first: String;
    last: String;
  };
  location: Location;
  email: String;
  login: {
    uuid: String;
    username: String;
    password: String;
    salt: String;
    md5: String;
    sha1: String;
    sha256: String;
  };
  dob: {
    date: String;
    age: Number;
  };
  registered: {
    date: String;
    age: Number;
  };
  phone: String;
  cell: String;
  id: {
    name: String;
    value: String;
  };
  picture: {
    large: String;
    medium: String;
    thumbnail: String;
  };
  nat: String;
}

export interface ConnectionResponse {
  results: Response[];
  info: {
    seed: String;
    results: Number;
    page: Number;
    version: String;
  };
}

export interface Connection {
  name: String;
  cell: String;
  email: String;
  phone: String;
  gender: String;
  age: Response['dob']['age'];
  dob: Response['dob']['date'];
  image: Response['picture']['large'];
  thumbnail: Response['picture']['thumbnail'];
  location: Omit<Location, 'timezone' | 'coordinates'>;
}
