
// const format = "dd.MM.yy HH:mm";
const dateFormat: Intl.DateTimeFormatOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
};

const fullDateFormat: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
};

const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit'
};

export function dateString(date: Date): string {
    return `${date.toLocaleDateString("de-DE", dateFormat)} ${date.toLocaleTimeString("de-DE", timeFormat)}`;
}

// dd.mm.yyyy
export function fullDateString(date: Date): string {
    return date.toLocaleDateString("de-DE", fullDateFormat);
}