(function () {
    "use strict";

    angular
        .module("songListManagement")
        .controller("SongListEditCtrl",
                     AdsEditCtrl);

    function AdsEditCtrl(adsResource) {
        var vm = this;
        vm.ad = {};
        vm.message = '';

        adResource.get({ id: 5 },
            function (data) {
                vm.ad = data;
                vm.originalAd = angular.copy(data);
            });

        if (vm.ad && vm.ad.adId) {
            vm.title = "Edit: " + vm.ad.adName;
        }
        else {
            vm.title = "New Ad";
        }

        vm.submit = function () {
        };

        vm.cancel = function (editForm) {
            editForm.$setPristine();
            vm.ad = angular.copy(vm.originalAd);
            vm.message = "";
        };

    }
}());
