export function getNestedPathFormik<T>(obj: T, path: string): any {
    const splitArray = path.split(/[[\].]/).filter((item) => item);

    return splitArray.reduce((acc, curr) => {
        return acc && acc[curr];
    }, obj);
}
