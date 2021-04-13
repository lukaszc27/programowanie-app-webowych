import axios from 'axios'

type InputElement = HTMLElement | HTMLInputElement | null;

class Application {
    /**
     * main function
     */
    public main = () : void => {
    }

    public buttonHandle = () : void => {
        const input : InputElement | null = document.querySelector('input[id="location"]') as HTMLInputElement;
        if (input != null) {
        }
    }

    /**
     * 
     * @param location pobiera informacje o pogodznie metodą GET
     * @returns JSON data
     */
    private getWeather = (location : string) : any => {
        const appid = 'aa8b6dc42b70fe9332a39e81c4b28230';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appid}&units=metric&lang=PL`;

        axios.get(url)
        .then((response) => {
            const data = response.data;
            console.log(data);
            
            return data;
        })
        .catch((error) => {
            console.log(error);
        })

        return {};
    }

    /**
     * zapisywanie danych o pogodzie w localStorage
     * @param data informacje do zapisania
     */
    private setData(data : any) : void {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }

    /**
     * 
     * @returns odczyt zapisanych informacji z localStorage
     */
    private getData() : any {
        const data = localStorage.getItem('weatherData');
        return data ? JSON.parse(data) : []
    }
};

export default Application;