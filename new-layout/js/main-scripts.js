'use strict';

//
//var allClubs = [
//    {name: "Bunkier", city: "Gdansk"},
//    {name: 'Mewa Towarzyska', city: 'Sopot'},
//    {name: 'Absinthe', city: 'Gdansk'},
//    {name: 'Sfinks 700', city: 'Sopot'},
//    {name: 'Kwadratowa', city: 'Gdansk'},
//    {name: 'Dream Club', city: 'Sopot'},
//    {name: 'Bunkier', city: 'Gdansk'},
//    {name: "B90", city: "Gdansk"},
//    {name: 'Czekoladowa', city: 'Sopot'},
//    {name: 'SPATiF', city: 'Sopot'},
//    {name: 'Protokultura', city: 'Gdansk'},
//    {name: 'Atelier', city: 'Sopot'},
//    {name: 'HAH', city: 'Sopot'},
//    {name: 'Wtedy', city: 'Sopot'},
//    {name: 'Dwie zmiany', city: 'Sopot'},
//    {name: 'Scena', city: 'Sopot'},
//    {name: 'TAN', city: 'Sopot'},
//    {name: 'Libation ', city: 'Sopot'},
//];
//var allEvents = [
//    {name: 'Ludzie ulicy', photo: '', data: ''},
//    {name: 'Otwarcie ogródka', photo: '', data: ''},
//    {name: 'Zaćmienie', photo: '', data: ''},
//    {name: 'Cudawianki', photo: '', data: ''},
//    {name: 'Pozytwynie wpłynie TECHNO', photo: '', data:''},
//    {name: 'Ziemia to za mało', photo: '', data: ''},
//    {name: 'Festiwal trafik', photo: '', data: ''},
//    {name: 'Garden party', photo: '', data: ''},
//    {name: 'Wieczor piwa ', photo: '', data: ''},
//    {name: 'Techno Night', photo: '', data: ''},
//    {name: 'House Time', photo: '', data: ''},
//    {name: 'Muzyka elektroniczna', photo: '', data: ''},
//    {name: 'Destroy music', photo: '', data: ''},
//    {name: 'Rozpoczecie seonu', photo: '', data: ''},
//    {name: 'Zmiana miejsc', photo: '', data: ''},
//    {name: 'Wystywa Fotografi', photo: '', data: ''},
//    {name: 'Koncert na dachu', photo: '', data: ''},
//    {name: 'Scena odkryć', photo: '', data: ''},
//    {name: 'VHS HELL', photo: '', data: ''},
//    {name: 'CD HEAVEN', photo: '', data: ''},
//    {name: 'Wieczór', photo: '', data: ''},
//    {name: 'Boat Party', photo: '', data: ''},
//    {name: 'Disco 80', photo: '', data: ''},
//    {name: 'Dance Time', photo:'', data: ''}
//
//];

//
//function generateEvents(events, clubs) {
//
//    var newEvents = [];
//
//    for (var i = 0; i < 30; i++) {
//
//        var dventData= event
//        var club = clubs[Math.round(Math.random() * allClubs.length - 1)];
//        var event = events[Math.round(Math.random() * allEvents.length - 1)];
//        club.eventName = event['name'];
//        club.eventPhoto = event.photo;
//        club.eventData = event.data;
//
//       //
//        debugger;
//
//        newEvents.push(club);
//
//
//    }
//    //console.log(newEvents);
//    return newEvents;
//}
//var events = generateEvents(allEvents,allClubs);
//console.log(events);
//
//
/* do póżniejszego użycia */

var eventList=[
    {name: "Bunkier", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, nameEvent:'Ludzie ulicy', photo:'images/main-party-photo/mini_mapa/0.jpg', data: '1.7.2016', idEvent:"ev-00"},
    {name: 'Mewa Towarzyska', city: 'Sopot', position: {lat: 54.443701, lng: 18.567403}, nameEvent:'Otwarcie ogródka', photo: 'images/main-party-photo/mini_mapa/1.jpg', data: '3.7.2016', idEvent:"ev-01"},
    {name: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}, nameEvent:'Zaćmienie', photo: 'images/main-party-photo/mini_mapa/2.jpg', data: '5.7.2016', idEvent:"ev-02"},
    {name: 'Sfinks 700', city: 'Sopot', position: {lat: 54.448606, lng: 18.567710}, nameEvent:'Cudawianki', photo: 'images/main-party-photo/mini_mapa/3.jpg', data: '7.7.2016', idEvent:"ev-03"},
    {name: 'Kwadratowa', city: 'Gdansk', position: {lat: 54.370941, lng: 18.615147}, nameEvent:'Festival trafik', photo: 'images/main-party-photo/mini_mapa/4.jpg', data: '9.7.2016', idEvent:"ev-04"},
    {name: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}, nameEvent:'Pozytywnie wpłynie techno', photo: 'images/main-party-photo/mini_mapa/5.jpg', data: '12.7.2016', idEvent:"ev-05"},
    {name: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}, nameEvent:'Garden party', photo: 'images/main-party-photo/mini_mapa/6.jpg', data: '14.7.2016', idEvent:"ev-06"},
    {name: "B90", city: "Gdansk", position: {lat: 54.364774, lng: 18.648552}, nameEvent:'Techno night', photo: 'images/main-party-photo/mini_mapa/18.jpg', data: '10.7.2016', idEvent:"ev-07"},
    {name: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, nameEvent:'House Time', photo: 'images/main-party-photo/mini_mapa/7.jpg', data: '8.7.2016', idEvent:"ev-08"},
    {name: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}, nameEvent:'Destyroy Music', photo: 'images/main-party-photo/mini_mapa/8.jpg', data: '9.7.2016', idEvent:"ev-09"},
    {name: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}, nameEvent:'Sunrise', photo: 'images/main-party-photo/mini_mapa/9.jpg', data: '11.7.2016', idEvent:"ev-10"},
    {name: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}, nameEvent:'Ultra ', photo: 'images/mmain-party-photo/mini_mapa/10.jpg', data: '13.7.2016', idEvent:"ev-11"},
    {name: 'HAH', city: 'Sopot', position: {lat: 54.453064, lng: 18.564116}, nameEvent:'Tomoorowland', photo: 'images/main-party-photo/mini_mapa/11.jpg', data: '15.7.2016', idEvent:"ev-12"},
    {name: 'Wtedy', city: 'Sopot', position: {lat: 54.441044, lng: 18.563498}, nameEvent:'Rozpoczęcie sezonu', photo: 'images/main-party-photo/mini_mapa/12.jpg', data: '17.7.2016', idEvent:"ev-13"},
    {name: 'Dwie zmiany', city: 'Sopot', position: {lat: 54.443651, lng: 18.5643276}, nameEvent:'Scena odkryć', photo: 'images/main-party-photo/mini_mapa/13.jpg', data: '19.7.2016', idEvent:"ev-14"},
    {name: 'Scena', city: 'Sopot', position: {lat: 54.448498, lng: 18.568309}, nameEvent:'CD Haven', photo: 'images/main-party-photo/mini_mapa/14.jpg', data: '21.7.2016', idEvent:"ev-15"},
    {name: 'TAN', city: 'Sopot', position: {lat: 54.445276, lng: 18.567748}, nameEvent:'CazanTip', photo: 'images/main-party-photo/mini_mapa/15.jpg', data: '23.7.2016', idEvent:"ev-16"},
    {name: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}, nameEvent:'History Mix ', photo: 'images/main-party-photo/mini_mapa/16.jpg', data: '25.7.2016', idEvent:"ev-17"}
];