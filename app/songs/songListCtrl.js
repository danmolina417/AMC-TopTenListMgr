(function () {
    "use strict";
    angular
        .module("SongListManagement")
        .controller('SongListCtrl', ['$scope', 'Spotify', function ($scope, Spotify) {

            $scope.curView = 'Songs Search';

            $scope.topTenLists = [
                {
                    title: 'Top 10 70s Songs',
                    songs: [
                        {
                            track: 'Down On The Corner',
                            artist: 'Creedence Clearwater Revival',
                            album: 'Willy And The Poor Boys',
                            note: 'Love this song! Listened to it all of the time on my RV trip!',
                            customImage: 'https://www.stitch.net/wp-content/uploads/2014/10/9.jpg' 
                        },
                        {
                            track: 'Don\'t let me down',
                            artist: 'Beatles',
                            album: 'White Album',
                            note: 'Reminds me of being a kid',
                            customImage: 'https://www.stitch.net/wp-content/uploads/2014/10/9.jpg' 
                        }
                    ]
                },
                {
                    title: 'Top 10 90s Songs',
                    songs: [
                        {
                            track: 'Ocean Size',
                            artist: 'Jane\'s Addition',
                            album: 'Ritual de lo Habitual',
                            note: 'Good song for surfing trip',
                            customImage: 'https://www.stitch.net/wp-content/uploads/2014/10/9.jpg' 
                        },
                        {
                            track: 'Lithium',
                            artist: 'Nirvana',
                            album: 'Bleach',
                            note: 'Great head banging song',
                            customImage: 'https://www.stitch.net/wp-content/uploads/2014/10/9.jpg' 
                        }
                    ]
                }
            ];

            $scope.searchArtist = function () {
                console.log('=================== searchArtist() ===================');
                Spotify.search($scope.searchartist, 'artist').then(function (data) {
                    console.log(data);
                    $scope.artists = data.artists.items;
                    $scope.albums = [];
                    $scope.tracks = [];
                });
            };

            $scope.getAlbums = function (id) {
                console.log('=================== getAlbums() ===================');
                Spotify.getArtistAlbums(id).then(function (data) {
                    console.log(data);
                    $scope.albums = data.items;
                    $scope.tracks = [];
                });
            };

            $scope.getTracks = function (album) {
                console.log('=================== getTracks() ===================');
                Spotify.getAlbum(album.id).then(function (data) {
                    console.log(data);
                    $scope.album = album;
                    $scope.tracks = data.tracks;
                    console.log(data.tracks);
                });
            };

            $scope.login = function () {
                Spotify.login().then(function (data) {
                    console.log(data);
                    alert("You are now logged in");
                }, function () {
                    console.log('didn\'t log in');
                })
            };

            $scope.showAddForm = function(track) {
                console.log('=================== Add Track to Top Ten ===================');
                //console.log(track);
                $scope.showAddSongForm = true;
                $scope.selectedTrack = track;

            }

            $scope.createNewTopTenList = function() {
                console.log('=================== createNewTopTenList() ===================');
                //console.log($scope.newTopTenList);
                var newList = {
                    title: $scope.newTopTenList,
                    songs: []
                }

                $scope.topTenLists.push(newList);
                
            }

            $scope.addSongToTopTenList = function() {
                console.log('=================== addSongToTopTenList() ===================');
                //console.log($scope.selectedTrack);
                //console.log($scope.selectedTrack.artists[0].name);
                //console.log($scope.album);
                var newSong = {
                            track: $scope.selectedTrack.name,
                            artist: $scope.selectedTrack.artists[0].name,
                            album: $scope.album.name,
                            note: $scope.songNote,
                            customImage: '' //TODO: ADD CUSTOM IMAGE UPLOAD 
                        }

                $scope.selectedTopTenList.songs.push(newSong);

                $scope.showAddSongForm = false;
                
            }


            $scope.removeSongFromTopTenList = function(ttlist, song) {
                console.log('=================== removeSongFromTopTenList() ===================');
                //console.log(ttlist);
                ttlist.songs.pop(song);
            }

            

/*
            // Gets an album
            Spotify.getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(function (data){
                console.log('=================== Album - ID ===================');
                console.log(data);
            });
            // Works with Spotify uri too
            Spotify.getAlbum('spotify:album:0sNOF9WDwhWunNAHPD3Baj').then(function (data){
            console.log('=================== Album - Spotify URI ===================');
            console.log(data);
            });

            //Get multiple Albums
            Spotify.getAlbums('41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37').then(function (data) {
            console.log('=================== Albums - Ids ===================');
            console.log(data);
            });
            Spotify.getAlbums(['41MnTivkwTO3UUJ8DrqEJJ','6JWc4iAiJ9FjyK0B59ABb4','6UXCm6bOO4gFlDQZV5yL37']).then(function (data) {
            console.log('=================== Albums - Array ===================');
            console.log(data);
            });

            Spotify.getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ').then(function (data) {
            console.log('=================== Album Tracks - ID ===================');
            console.log(data);
            });
            Spotify.getAlbumTracks('spotify:album:41MnTivkwTO3UUJ8DrqEJJ').then(function (data) {
            console.log('=================== Album Tracks - Spotify URI ===================');
            console.log(data);
            });

            //Artist
            Spotify.getArtist('0LcJLqbBmaGUft1e9Mm8HV').then(function (data) {
            console.log('=================== Artist - Id ===================');
            console.log(data);
            });
            Spotify.getArtist('spotify:artist:0LcJLqbBmaGUft1e9Mm8HV').then(function (data) {
            console.log('=================== Artist - Spotify URI ===================');
            console.log(data);
            });

            Spotify.getArtistAlbums('0LcJLqbBmaGUft1e9Mm8HV').then(function (data) {
            console.log('=================== Artist Albums - Id ===================');
            console.log(data);
            });

            Spotify.getArtistAlbums('spotify:artist:0LcJLqbBmaGUft1e9Mm8HV').then(function (data) {
            console.log('=================== Artist Albums - Spotify URI ===================');
            console.log(data);
            });

            Spotify.getArtistTopTracks('0LcJLqbBmaGUft1e9Mm8HV', 'AU').then(function (data) {
            console.log('=================== Artist Top Tracks Australia ===================');
            console.log(data);
            });

            Spotify.getRelatedArtists('0LcJLqbBmaGUft1e9Mm8HV').then(function (data) {
            console.log('=================== Get Releated Artists ===================');
            console.log(data);
            });

            //Tracks
            Spotify.getTrack('0eGsygTp906u18L0Oimnem').then(function (data) {
            console.log('=================== Track ===================');
            console.log(data);
            });

            Spotify.getTracks('0eGsygTp906u18L0Oimnem,1lDWb6b6ieDQ2xT7ewTC3G').then(function (data) {
            console.log('=================== Tracks - String ===================');
            console.log(data);
            });

            Spotify.getTracks(['0eGsygTp906u18L0Oimnem','1lDWb6b6ieDQ2xT7ewTC3G']).then(function (data) {
            console.log('=================== Tracks - Array ===================');
            console.log(data);
            });
*/


        }]);


}());
