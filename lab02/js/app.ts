import Application from './application.js'

/**
 * zdarzenie wywoływane w momęcie całkowitego 
 * wczytania się dokumentu HTML
 */
window.addEventListener('load', () => {
    /**
     * obsługa zdarzenia kliknięcia przycisku na klawiaturze
     */
    window.addEventListener('keydown', (event : KeyboardEvent) => {
        Application.keyPressEvent(event);
    });

    // obsługa widgetów nagrywania ścieszki dzwiękowej
    Application.recordingEvents();
});