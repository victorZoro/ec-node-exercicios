const BRANDS_QUERY = {
    GET_BRANDS: 'SELECT * FROM brand',
    GET_BRAND_BY_ID: 'SELECT * FROM brand WHERE id = ?',
    CREATE_BRAND: 'INSERT INTO brand(name) VALUES(?)',
}

export default BRANDS_QUERY;