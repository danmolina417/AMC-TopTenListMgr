(function () {
    "use strict";

    var app = angular.module("SongListManagement", ['spotify'])
        .config(function (SpotifyProvider) {
            SpotifyProvider.setClientId('ABC123DEF456GHI789JKL');
            SpotifyProvider.setRedirectUri('http://www.example.com/callback.html');
            SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
            // If you already have an auth token
            //SpotifyProvider.setAuthToken('zoasliu1248sdfuiknuha7882iu4rnuwehifskmkiuwhjg23');
        });
        

} ());
