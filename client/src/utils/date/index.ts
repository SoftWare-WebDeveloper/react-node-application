export const WEEK_DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// CURRENT
export const getCurrentDate = () => (new Date());

export const getCurrentTimestamp = () => (Date.now());

export const getCurrentWeekDay = () => (WEEK_DAYS[getCurrentDate().getDay()]);