import Application from './application.js';
/**
 * zdarzenie wywoływane w momęcie całkowitego
 * wczytania się dokumentu HTML
 */
window.addEventListener('load', function () {
    /**
     * obsługa zdarzenia kliknięcia przycisku na klawiaturze
     */
    window.addEventListener('keydown', function (event) {
        Application.keyPressEvent(event);
    });
    // obsługa widgetów nagrywania ścieszki dzwiękowej
    Application.recordingEvents();
});
//# sourceMappingURL=app.js.map