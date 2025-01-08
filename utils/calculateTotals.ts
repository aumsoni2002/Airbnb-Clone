import { calculateDaysBetween } from "@/utils/calendar";

type BookingDetails = {
  checkIn: Date;
  checkOut: Date;
  price: number;
};

export const calculateTotals = ({
  checkIn,
  checkOut,
  price,
}: BookingDetails) => {
  const totalNights = calculateDaysBetween({ checkIn, checkOut });
  const subTotal = totalNights * price;
  const cleaning = 5 * totalNights;
  const service = 10 * totalNights;
  const tax = subTotal * 0.13;
  const orderTotal = subTotal + cleaning + service + tax;
  return { totalNights, subTotal, cleaning, service, tax, orderTotal };
};
