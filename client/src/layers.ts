// Connect and read json data
const response = await fetch('http://localhost:5000/geom');
const jsonData = await response.json();

// Interquartile Range value tables
export const iqr_table = jsonData[0];
