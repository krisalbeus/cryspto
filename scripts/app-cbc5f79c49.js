!function(){"use strict";angular.module("geckoboard",["ngTouch","ngMessages","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("geckoboard").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("geckoboard").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,n,r,o){var a,i=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),a=e.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){a()})}function n(t,e){function n(){return r().then(function(){t.info("Activated Contributors View")})}function r(){return e.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],n()}n.$inject=["$log","githubContributor"];var r={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return r}t.$inject=["malarkey"],angular.module("geckoboard").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function n(n){function o(t){return t.data}function a(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=30),e.get(r+"/contributors?per_page="+n).then(o)["catch"](a)}var r="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:r,getContributors:n};return o}t.$inject=["$log","$http"],angular.module("geckoboard").factory("githubContributor",t)}(),function(){"use strict";function t(t,e){}angular.module("geckoboard").component("cryptoComponent",{templateUrl:"app/components/cryptoComponent/cryptoComponent.html",controller:t,controllerAs:"cryptoComponentVm",bindings:{data:"<",index:"<"}}),t.$inject=["cryptoService","$filter"]}(),function(){"use strict";function t(t,e){function n(t,e){return r(1,t,e)}function r(n,r,o){var a=e.defer(),i=t.get("https://www.google.com/finance/converter?a="+n+"&from="+r+"&to="+o);return i.then(function(t){a.resolve(t.data.match(/<span class=bld>(.*)<\/span>/)[1].replace(/ AUD/g,""))},function(t){a.reject(t)}),a.promise}return{convert:r,getRate:n}}angular.module("geckoboard").service("fxService",t),t.$inject=["$http","$q"]}(),function(){"use strict";function t(t){function e(e){return t.get("http://www.coincap.io/history/1day/"+e)}return{getHistory:e}}angular.module("geckoboard").service("cryptoService",t),t.$inject=["$http"]}(),function(){"use strict";function t(t,e,n){var r=this,o=0;e.getRate("USD","AUD").then(function(t){o=t}),r.currencies={BTC:{quantity:1.95639,name:"Bitcoin"},ETH:{quantity:92.25704,name:"Ethereum"},XRP:{quantity:52094.54242,name:"Ripple"},LTC:{quantity:192.30769,name:"Litecoin"},DASH:{quantity:97.83954,name:"Dash"},ETC:{quantity:1769.83335,name:"EthereumClassic"}},r.data={},Object.keys(r.currencies).forEach(function(e){r.data[e]={},t.getHistory(e).then(function(t){var o=t.data.price.map(function(t){return{timestamp:t[0],price:t[1]}}),a=n("orderBy")(o,"timestamp",!0),i=a[0],c=a[a.length-1];r.data[e]=i,r.data[e].currency=e,r.data[e].increased=i.price>c.price,r.data[e].rate=i.price>c.price?100*(i.price/c.price-1):100*(c.price/i.price-1),r.data[e].value=i.price*r.currencies[e].quantity,r.data[e].info=r.currencies[e]})}),r.sum=function(){var t=0;return angular.forEach(r.data,function(e){t+=e.value}),o*t}}t.$inject=["cryptoService","fxService","$filter"],angular.module("geckoboard").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("geckoboard").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("geckoboard").config(t)}(),function(){"use strict";angular.module("geckoboard").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("geckoboard").config(t)}(),angular.module("geckoboard").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container ng-cloak"><div class=geckoboard><h2>A<span ng-bind="main.sum() | currency"></span></h2><div class=row><crypto-component ng-repeat="(key,value) in main.data track by $index" class=col-xs-12 data=value index="$index + 1"></crypto-component></div></div></div>'),t.put("app/components/cryptoComponent/cryptoComponent.html","<div class=box><div class=currency><img src=http://www.coincap.io/images/coins/{{cryptoComponentVm.data.info.name}}.png width=20px> {{cryptoComponentVm.data.info.name}} {{ cryptoComponentVm.data.currency }}</div><div class=price ng-class=\"{'increased': cryptoComponentVm.data.increased, 'decreased': !cryptoComponentVm.data.increased}\">{{ cryptoComponentVm.data.price | currency }}</div></div>"),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-cbc5f79c49.js.map
