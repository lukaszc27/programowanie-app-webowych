import axios from 'axios'

class Application {
    constructor() {
    }

    /**
     * main function
     */
    main = () => {
        this.getWeather('Gorlice');
    }

    async getWeather(location : string) {
        const appId : string = 'aa8b6dc42b70fe9332a39e81c4b28230';
        const lang : string = 'PL';
        const request : string = `http://api.openweathermap.org/data/2.5/weather?
            q=${location}&
            appid=${appId}&
            lang=${lang}`;

        // const response = await fetch(request);
        // const data = response.json();

        axios.get(request)
        .then((response) => {
            console.log(response);
        })
        .catch ((error) => {
            console.log(error);
        })
    }
}

export default Application;