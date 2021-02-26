export interface History {
  histories?: Histories[] | null;
}
export interface Histories {
  __typename: string;
  id: number;
  event_date_utc: Date;
  title: string;
  flight: Flight;
}
export interface Flight {
  __typename: string;
  links: Links;
}
export interface Links {
  __typename: string;
  flickr_images?: string[] | null;
}
