export function convertDayNumberToWord(dayNumber) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return days[dayNumber];
}

export function formatTemp(tempNumber) {
    const units = "ºC"

    if (tempNumber > -.5 && tempNumber < .5) {
        return "0ºC";
    }

    return `${tempNumber.toFixed()}${units}`;
}
