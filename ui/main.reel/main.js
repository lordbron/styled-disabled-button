/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    templateDidLoad: {
        value: function (event) {
            this.templateObjects.buttonNoHTMLClassDisabledJSDisabled.enabled = false;
        }
    }
});
