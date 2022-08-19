export function getMonth(someDate) {
    return someDate.length ? ("0" + (new Date(someDate).getMonth() + 1)).slice(-2) : "";
}
export function getYear(someDate) {
    return someDate.length ? new Date(someDate).getFullYear() : "";
}