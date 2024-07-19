import { isNullOrUndefined } from "./NullOrUndefinedGuard";

function isStringEmptyOrNull<T extends string | null | undefined>(value: T): boolean {
    if (isNullOrUndefined(value))
        return true;

    return value.trim().length === 0;
}

export { isNullOrUndefined, isStringEmptyOrNull }