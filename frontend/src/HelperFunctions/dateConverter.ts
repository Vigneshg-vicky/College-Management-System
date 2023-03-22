export const convertDate = (date: any) => {
    const thisdate = date.getDate()
    const month = date.getMonth();
    const year = date.getFullYear();

    const StringDate = `${thisdate}-${month}-${year}`;
    return StringDate;
}