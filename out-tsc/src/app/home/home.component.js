"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// SEO
var platform_browser_1 = require("@angular/platform-browser");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(meta, title) {
        // SEO Config
        title.setTitle('My WebPack Home Page');
        meta.addTags([
            { name: 'author', content: 'vvs' },
            { name: 'keywords', content: 'angular seo, angular 4 universal, etc' },
            { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
        ]);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-home',
                    templateUrl: './home.component.html',
                    styleUrls: ['./home.component.css']
                },] },
    ];
    /** @nocollapse */
    HomeComponent.ctorParameters = function () { return [
        { type: platform_browser_1.Meta, },
        { type: platform_browser_1.Title, },
    ]; };
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map