const VEHICLES_QUERY = {
    GET_VEHICLES: 'SELECT * FROM vehicle',
    GET_VEHICLE_BY_ID: 'SELECT * FROM vehicle WHERE id = ?',
    CREATE_VEHICLE: 'INSERT INTO vehicle(name, model, year, color, category, brand) VALUES(?, ?, ?, ?, ?, ?)',
    UPDATE_VEHICLE: 'UPDATE vehicle SET name = ?, model = ?, year = ?, color = ?, category = ?, brand = ? WHERE id = ?',
    REMOVE_VEHICLE: 'DELETE FROM vehicle WHERE id = ?'
}

export default VEHICLES_QUERY;