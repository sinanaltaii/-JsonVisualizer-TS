function formatDate(dateString: string) {
    const dateTime = new Date(dateString);
    const date = dateTime.toLocaleDateString("sv-SE");
    const time = dateTime.toLocaleTimeString("sv-SE");

    return `${date}:${time}`;
}

export default formatDate;