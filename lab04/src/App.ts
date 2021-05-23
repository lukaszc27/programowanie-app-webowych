import INote from './INote'
import LocalNote from './LocalNote'
import Notes from './Notes';

class Application {
    private currentColor : string = 'orange';

    /**
     * main function
     */
    public main = (): void => {
        Notes.render();

        let button : HTMLButtonElement | null = document.querySelector('button[role="button"]');
        if (button != null)
            button.addEventListener('click', this.addButtonHandle);

        let colorButtons : NodeListOf<HTMLButtonElement>;
        colorButtons = document.querySelectorAll('button[class^="colorPicker"]');
        colorButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                let color : string | undefined = btn.dataset.color;
                if (color != undefined) {
                    this.currentColor = color;
                }
            })
        })
    }

    /**
     * obsługa przyciksu 'dodaj'
     */
    public addButtonHandle = () : void => {
        let inputCaption : HTMLInputElement | null = document.querySelector('input[name="caption"]');
        let inputContent : HTMLTextAreaElement | null = document.querySelector('textarea[name="content"]');

        if (inputCaption != null && inputCaption.value.length > 0 &&
            inputContent != null && inputContent.value.length > 0) {
                let note : LocalNote = new LocalNote(inputCaption.value, inputContent.value, this.currentColor);
                Notes.addNote(note);

                inputCaption.value = '';
                inputContent.value = '';
                this.currentColor = 'orange';
        }
        else {
            alert('Nie wszystkie pola formularza zostały uzupełnione!');
            return;
        }
    }
};

export default Application;