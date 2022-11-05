import dayjs from "dayjs";

export function counter(start: dayjs.Dayjs, end: dayjs.Dayjs): [number, number, number, number] {
  const distance = end.diff(start, "milliseconds")
  const daysCount = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursCount = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesCount = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondsCount = Math.floor((distance % (1000 * 60)) / 1000);

  return [daysCount, hoursCount, minutesCount, secondsCount];
}