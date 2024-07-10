// api.js
export async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // URL d'API fictive
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}
