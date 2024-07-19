export function isNullOrUndefined<T>(value: T | undefined | null): value is null | undefined {
    const isNullOrUndefined : boolean = <T>value === undefined || <T>value === null;
    
    return isNullOrUndefined;
}
