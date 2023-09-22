export const FromentDate = (currentDate) =>{
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');
    const year = currentDate.getFullYear();

    return `${month}/${day}/${year}`;
}