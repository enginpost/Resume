export function getMonth(someDate) {
    return someDate.length ? (new Date(someDate).toLocaleString("en-US",{month:"short"})) : "";
}
export function getYear(someDate) {
    return someDate.length ? new Date(someDate).getFullYear() : "";
}