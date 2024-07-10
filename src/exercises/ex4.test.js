import { fetchData } from './ex4';

// Mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      main: {
        temp: 293.15, // Température en Kelvin
        humidity: 75
      },
      weather: [{
        description: 'clear sky'
      }],
      wind: {
        speed: 5
      }
    })
  })
);

describe('fetchData', () => {
  it('should fetch weather data and convert temperature to Celsius', async () => {
    const data = await fetchData();

    expect(data).toBeDefined();
    expect(data.main.tempCelsius).toBe('20.00'); // 293.15 K - 273.15 = 20.00 °C
    expect(data.main.humidity).toBe(75);
    expect(data.weather[0].description).toBe('clear sky');
    expect(data.wind.speed).toBe(5);
  });

  it('should handle fetch errors', async () => {
    // Configure le mock pour simuler une erreur de réseau
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false
      })
    );

    // Capture la sortie de la console pour vérifier l'erreur
    console.error = jest.fn();

    const data = await fetchData();

    expect(data).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith('There has been a problem with your fetch operation:', expect.any(Error));
  });
});