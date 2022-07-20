import moment from "moment"

export const timeFormatter = (miliseconds: number): string => {
  const timeFormatted = moment(miliseconds).format("DD/MM/YYYY HH:mm'")
  return timeFormatted
}
