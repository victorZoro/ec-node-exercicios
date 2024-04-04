export const validate = (vehicle) => {
    if(!vehicle) {
        return {
            message: 'Vehicle is required',
            isValid: false,
        };
    }

    const requiredFields = ['name', 'model', 'year', 'color', 'brand', 'category'];

    for (const field of requiredFields) {
        if (!vehicle[field]) {
            return {
                message: `${field} is required`,
                isValid: false,
            };
        }
    }

    return {
        message: 'Vehicle is valid',
        isValid: true,
    };
}
