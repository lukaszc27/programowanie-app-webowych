import INote from './INote'
import IAppStorage from './IAppStorage'

class AppStorage implements IAppStorage {
    constructor() { }
    /**
     * renderuje wszystkie notatki w kontenerze
     */
    public render = () : void => {
        let container : HTMLDivElement | null = document.querySelector('#container');
        let data = this.getData();
        if (container != null) {
            container.innerHTML = '';
            data.forEach(item => {
                let card : HTMLDivElement = document.createElement('div');
                card.classList.add(item.background);
                card.classList.add('card');

                let caption : HTMLElement = document.createElement('h4');
                caption.innerHTML = item.caption;
                card.appendChild(caption);

                let content : HTMLParagraphElement = document.createElement('p');
                content.innerHTML = item.content;
                card.appendChild(content);

                container?.appendChild(card);
            });
        }
    }

    /**
     * Dodaje nową notatkę do listy notatek
     * oraz ponownie renderuje notatki
     * @param note obiekt który należy dodać do listy
     */
    public addNote = (note : INote) : void => {
        let data : Array<INote> = this.getData();
        data.push(note);
        localStorage.setItem('notes', JSON.stringify(data));
        
        // ponowne wyrysowanie notatek
        this.render();
    }

    /**
     * Pobiera dane z localStorage
     * @returns tablica elementów interfejsu INote
     */
    public getData = () : Array<INote> => {
        let data = localStorage.getItem('notes');
        return data ? JSON.parse(data) : [];
    }
}
export default AppStorage;