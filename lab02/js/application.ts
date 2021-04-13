import Sound from './sound.js'
import Channel from './channel.js'

type ButtonElement = HTMLButtonElement | null;

/**
 * główna klasa aplikacji,
 * zawiera metody obsługi zdarzeń (keyPress)
 */
class Application {

    /**
     * tablica elementów Sound reprezentująca pojedynczy dzwięk
     * odtwarzany w momęcie kliknięcia przycisku
     * 
     * UWAGA! Tablica nie jest budowana automatycznie.
     * Aby dodać nowy dzwięk do odtwarzania, należy w
     * kodzie HTML dodać odpowiedni przycisk oraz element audio
     * według schematu z innych elementów
     */
    private static sounds : Sound[] = [
        new Sound(document.querySelector('audio[data-sound="clap"]')),
        new Sound(document.querySelector('audio[data-sound="hihat"]')),
        new Sound(document.querySelector('audio[data-sound="kick"]')),
        new Sound(document.querySelector('audio[data-sound="openhat"]')),
        new Sound(document.querySelector('audio[data-sound="ride"]')),
        new Sound(document.querySelector('audio[data-sound="snare"]'))
    ];

    /**
     * tablica kanałów do nagrywania dzwięku
     * 
     * UWAGA! tablica nie jest budowana automatycznie.
     * W celu dodania kolejnego kanału należy utworzyć
     * odpowiedni kod w HTML (według schematu) oraz nowy kanał w tej talicy
     */
    private static channels : Channel[] = [
        new Channel(),
        new Channel(),
        new Channel(),
        new Channel()
    ];
    public static currentChannel : Channel | undefined = undefined;

    /**
     * keyPressEvent - obsługa klawiatury
     * sprawdza który przycisk został kliknięty
     * i na tej podstawie odtwarza wybrany dzwięk
     * 
     * @param event - zawiera inforację który przycisk został kliknięty
     */
    public static keyPressEvent = (event : KeyboardEvent) : void => {
        const button : ButtonElement | null = document.querySelector(`button[data-key="${event.key}"]`);
        if (button !== null && button !== undefined) {
            event.preventDefault();

            const soundIndex : any = button.dataset.index;

            // odtwarzanie przypisanego dzwięku do przycisku
            Application.sounds[soundIndex].play();
            
            if (Application.currentChannel != undefined)
                Application.currentChannel.addSound(Application.sounds[soundIndex], event);

            button.focus();
        }
        else {
            console.log('Klawisz nie został rozpoznany!');
        }
    }

    /**
     * obsługa zdarzeń widgetu nagrywania dzwięku
     */
    public static recordingEvents = () : void => {
        const spans : NodeListOf<HTMLSpanElement> = document.querySelectorAll('div[class="records"] span[data-channel]');
        spans.forEach(element => {
            const channelIndex : any = element.dataset.channel;

            const recordButton : ButtonElement = element.querySelector('button[data-action="record"]');
            const stopButton : ButtonElement = element.querySelector('button[data-action="stop"]');
            const playButton : ButtonElement = element.querySelector('button[data-action="play"]');

            // obsługa przycisku rozpoczęcia nagrywania (Record)
            if (recordButton !== null) {
                recordButton.addEventListener('click', (event : Event) => {
                    Application.channels[channelIndex].startRecording(event);
                    
                    // ustawienie aktywnego kanału
                    Application.currentChannel = Application.channels[channelIndex];
                });
            }

            // obsługa kliknięcia przycisku stop, wyczyszczenie ostatnio nagranego utworu
            if (stopButton !== null) {
                stopButton.addEventListener('click', (event : Event) => {
                    if (Application.channels[channelIndex] !== undefined) {
                        Application.channels[channelIndex].clear();
                        Application.currentChannel = undefined;
                    }
                });
            }

            // odtwarzanie nagranego utworu z kanału
            if (playButton !== null) {
                playButton.addEventListener('click', (event : Event) => {
                    if (Application.channels[channelIndex] !== undefined)
                        Application.channels[channelIndex].play();
                });
            }
        });
    }
}

export default Application;