/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    enterDocument: {
        value: function (firstTime) {
            this.templateObjects.buttonNoHTMLClassDisabledJSStyled.element.className = "btn-primary-disabled";
        }
    }
});
