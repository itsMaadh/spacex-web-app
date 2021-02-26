export interface HistoriesQuery {
  histories?: History[] | null;
}
export interface History {
  __typename: string;
  id: number;
  event_date_utc: Date;
  title: string;
  details?: string;
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
