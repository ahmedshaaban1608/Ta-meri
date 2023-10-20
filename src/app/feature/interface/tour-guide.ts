export interface TourGuide {
  id: number;
  name: string;
  title: string;
  description: string;
  langauge: string;
  thumbnail: string;
  address:string;
  star : number;
  comment:string;
  startdate : Date;
  enddate : Date;
  area:string;
  price:number;
  salary:number;
  booking_date:Date;
  booking_time:Date;
  places_visit: string[];
  reservation_status:string;
  isPaymentButtonVisible?: boolean;


}