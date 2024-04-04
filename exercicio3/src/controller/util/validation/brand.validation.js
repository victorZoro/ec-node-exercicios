export const validate = (brand) => {
    if (!brand) {
        return {
            message: 'Brand is required',
            isValid: false,
        };
    }

    if (!brand.name) {
        return {
            message: 'Name is required',
            isValid: false,
        };
    }

    return {
        message: 'Brand is valid',
        isValid: true,
    };
}

export { validate }