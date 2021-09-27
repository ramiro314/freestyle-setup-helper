export const INCHES = 'in';
export const MILLIMETERS = 'mm';

export const toInches = (value, unit) => {
    switch (unit) {
        case INCHES:
            return value;
        case MILLIMETERS:
            return value / 25.4;
        default:
            throw new Error(`Unknown unit ${unit}`);
    }
};

export const toMillimeter = (value, unit) => {
    switch (unit) {
        case INCHES:
            return value * 25.4;
        case MILLIMETERS:
            return value;
        default:
            throw new Error(`Unknown unit ${unit}`);
    }
};

export const unitSymbol = (unit) => (
    unit === INCHES ? '"' : unit
);
