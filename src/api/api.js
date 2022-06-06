const BASE_URL = "https://rickandmortyapi.com/api/";

export const getCardsData = async (pageNumber) => {
    const response = await fetch(`${BASE_URL}character/?page=${pageNumber}`);

    return response.json();
}
