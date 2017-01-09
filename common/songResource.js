(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("songResource",
                ["$resource",
                 "appSettings",
                  songResource])

    function songResource($resource, appSettings) {
        //return $resource(appSettings.serverPath + "api/songs/:id");


        return null;

    }
} ());