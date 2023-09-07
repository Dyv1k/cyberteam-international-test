export default function formatMilliseconds(milliseconds: number) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const millisecondsFormatted = (milliseconds % 1000).toString().padStart(3, '0');

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${millisecondsFormatted}`;
}