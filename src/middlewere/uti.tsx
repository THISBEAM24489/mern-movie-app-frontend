export const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('th-TH', options).format(date);
};

export const formatDateToTime = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Use 24-hour time format
    };
    return new Intl.DateTimeFormat('th-TH', options).format(date);
};
