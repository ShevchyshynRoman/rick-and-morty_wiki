const BASE_URL = "https://rickandmortyapi.com/api/";

export const getCardsData = async (pageNumber, search) => {
    const response = await fetch(`${BASE_URL}character/?page=${pageNumber}&name=${search}`);

    return response.json();
}
