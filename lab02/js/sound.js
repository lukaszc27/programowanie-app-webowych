/**
 * class Sound - obsługuje pojedynczy dzwięk (jako element audio)
 */
var Sound = /** @class */ (function () {
    function Sound(element) {
        var _this = this;
        /**
         * play - odtwarza dzwięk
         */
        this.play = function () {
            if (_this.element !== null) {
                _this.element.currentTime = 0;
                _this.element.play();
            }
        };
        this.element = element;
    }
    return Sound;
}());
export default Sound;
//# sourceMappingURL=sound.js.map