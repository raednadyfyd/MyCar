
export interface CarImage {
    id: string;
    url: string;
  }
  
  export interface Car {
    image: CarImage;
    _id: string;
    name: string;
    rate: number;
    reviewsCount: number;
    passengers: number;
    transmissions: string;
    airConditioning: boolean;
    doors: number;
    price: number;
    createdAt: string;  // You could also use Date if you plan to parse it into a Date object
    updatedAt: string;
    __v: number;
  }
  
  export interface Metadata {
    limit: number;
    currentPage: number;
    nextPage: number;
    numberOfPages: number;
  }
  
  export interface GenericResponse<T> {
    totalCars: number;
    metadata: Metadata;
    result: T[];
  }
  