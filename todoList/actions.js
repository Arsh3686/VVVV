export const allData = () => {
	return { type: "ALL_DATA" };
};
export const addData = (data, id) => {
	return { type: "ADD_DATA", payload: { id, todo: data } };
};
export const remData = (id) => {
	return { type: "REM_DATA", payload: id };
};
export const upData = (data, id) => {
	return { type: "UPD_DATA", payload: { id, todo: data } };
};
