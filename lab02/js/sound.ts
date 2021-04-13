// typ elemenu wyszukiwanego w dokumęcie HTML
type AudioElement = HTMLAudioElement | null;

/**
 * class Sound - obsługuje pojedynczy dzwięk (jako element audio)
 */
class Sound {
    private element : AudioElement;

    constructor(element : AudioElement) {
        this.element = element;
    }

    /**
     * play - odtwarza dzwięk
     */
    play = () => {
        if (this.element !== null) {
            this.element.currentTime = 0;
            this.element.play();
        }
    }
}

export default Sound;