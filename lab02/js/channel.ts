import Sound from './sound.js'

interface SoundPoint {
    sound : Sound,
    timeout : number
}

/**
 * Channel - obsługa pojedynczego kanału do nagrywania utworów
 * umożliwia nagranie oraz odtworzenie utworu
 */
class Channel {
    private timeStamp : number = 0;
    private sounds : SoundPoint[] = [];

    /**
     * Rozpoczęcie nagrywania utworu
     * 
     * @param event - zdarzenie wysyłane przez rodzica
     */
    startRecording = (event : Event) : void => {
        this.timeStamp = event.timeStamp;
    }

    /**
     * dodaje klip do ścieszki utowru
     * 
     * @param s - dzwięk do odtworzenia 
     * @param event - zdarzenie przekazywane przez rodzica
     */
    addSound = (s : Sound, event : Event) : void => {
        this.sounds.push({
            sound : s,
            timeout : event.timeStamp
        });
    }

    /**
     * odtworzenie ścieszki dzwiękowej
     */
    play = () : void => {
        this.sounds.forEach(element => {
            const timeout = element.timeout - this.timeStamp;

            setTimeout(() => {
                element.sound.play();
            }, timeout);
        });
    }

    /**
     * czyści aktualną ścieszkę dzwiękową
     */
    clear = () => {
        this.timeStamp = 0;
        this.sounds = [];
    }
}

export default Channel;