/**
 * Channel - obsługa pojedynczego kanału do nagrywania utworów
 * umożliwia nagranie oraz odtworzenie utworu
 */
var Channel = /** @class */ (function () {
    function Channel() {
        var _this = this;
        this.timeStamp = 0;
        this.sounds = [];
        /**
         * Rozpoczęcie nagrywania utworu
         *
         * @param event - zdarzenie wysyłane przez rodzica
         */
        this.startRecording = function (event) {
            _this.timeStamp = event.timeStamp;
        };
        /**
         * dodaje klip do ścieszki utowru
         *
         * @param s - dzwięk do odtworzenia
         * @param event - zdarzenie przekazywane przez rodzica
         */
        this.addSound = function (s, event) {
            _this.sounds.push({
                sound: s,
                timeout: event.timeStamp
            });
        };
        /**
         * odtworzenie ścieszki dzwiękowej
         */
        this.play = function () {
            _this.sounds.forEach(function (element) {
                var timeout = element.timeout - _this.timeStamp;
                setTimeout(function () {
                    element.sound.play();
                }, timeout);
            });
        };
        /**
         * czyści aktualną ścieszkę dzwiękową
         */
        this.clear = function () {
            _this.timeStamp = 0;
            _this.sounds = [];
        };
    }
    return Channel;
}());
export default Channel;
//# sourceMappingURL=channel.js.map