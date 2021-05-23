import INote from './INote'

class Notes {
    /**
     * renderuje wszystkie notatki w kontenerze
     */
    public static render = () : void => {
        let container : HTMLDivElement | null = document.querySelector('#container');
        let data = Notes.getData();
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
    public static addNote = (note : INote) : void => {
        let data : Array<INote> = Notes.getData();
        data.push(note);
        localStorage.setItem('notes', JSON.stringify(data));
        
        // ponowne wyrysowanie notatek
        Notes.render();
    }

    /**
     * Pobiera dane z localStorage
     * @returns tablica elementów interfejsu INote
     */
    public static getData = () : Array<INote> => {
        let data = localStorage.getItem('notes');
        return data ? JSON.parse(data) : [];
    }
}
export default Notes;