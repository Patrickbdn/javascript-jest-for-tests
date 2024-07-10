// script.js
import { fetchData } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
   try {
        const data = await fetchData();
        const dataContainer = document.getElementById('data-container');

        data.forEach(item => {
          //  const itemElement = document.createElement('div');
            //itemElement.classList.add('data-item');
            //itemElement.textContent = `${item.id}: ${item.title}`;
            //dataContainer.appendChild(itemElement);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
