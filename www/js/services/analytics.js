(function() {
    angular.module('Analytic.services', []).
        service('GoogleTagManager', function($window) {
            this.push = function(data) {
                try {
                    $window.dataLayer.push(data);
                } catch (e) {}
            };
        });
})();