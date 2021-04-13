import axios from 'axios'

type InputElement = HTMLInputElement | null;

class Application {
    /**
     * main function
     */
    public main = () : void => {
        this.render();
    }

    public buttonHandle = () : void => {
        const input : InputElement = document.querySelector('input[id="location"]') as HTMLInputElement;
        if (input != null) {
            const city = input.value;
            
            this.getWeather(city);
            this.render();
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
            this.addToLocalStorage(data);
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
    private getData() : Array<any> {
        const data : string | null = localStorage.getItem('weatherData');
        return data ? JSON.parse(data) : []
    }

    /**
     * dodanie nowych danych do tablicy zapisanej w localStorage
     * @param data - objekt do dodania do pamięci lokalnej
     */
    private addToLocalStorage(data : any) : void {
        let tab : Array<any> = [];
        tab = this.getData();
        tab.push(data);

        this.setData(tab);
    }

    private render() : void {
        const mainContainer : HTMLElement | null = document.getElementById('widgets');

        if (mainContainer != null) {
            let elements = this.getData();
            elements.forEach(el => {
                console.log(el);
                const container : HTMLElement = document.createElement('div');
                container.classList.add('card');

                const header : HTMLElement = document.createElement('h4');
                header.innerHTML = el.name;

                const paragraph : HTMLElement = document.createElement('p');
                paragraph.innerHTML = el.weather[0].description;

                const temp : HTMLElement = document.createElement('p');
                temp.innerHTML = `${el.main.temp} <sup>o</sup>C`;

                const imgSource : string = `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;
                const image = document.createElement('img');
                image.src = imgSource;

                container.append(header);
                container.append(paragraph);
                container.append(temp);
                container.append(image);
                mainContainer.append(container);
            })
        }
    }
};

export default Application;