/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        console.log("test");
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

    */


// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

var text = "";

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("test");
    console.log(navigator.contacts);
    console.log(navigator.camera);
    initializeGeofenzing();

    window.geofence.onTransitionReceived = function (geofences) {
        geofences.forEach(function (geo) {
            console.log('Geofence transition detected + angekommen!', geo);
            sendSMS();
        });
    };
}

function getBatteryStatus(){
    console.log("test method called");
    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(info)
    {
        // The battery level and plugged/unplugged status
        console.log(info);
        alert("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }
}

function scanCode() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}

function geolocate() {
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Altitude: '          + position.coords.altitude          + '\n' +
            'Accuracy: '          + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '           + position.coords.heading           + '\n' +
            'Speed: '             + position.coords.speed             + '\n' +
            'Timestamp: '         + position.timestamp                + '\n');
    };

// onError Callback receives a PositionError object
//
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function sendMail() {
    var onSuccess = function(result) {
        alert("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
        alert("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    }

    var onError = function(msg) {
        alert("Sharing failed with message: " + msg);
    }

    window.plugins.socialsharing.shareViaEmail(
        'Message', // can contain HTML tags, but support on Android is rather limited:  http://stackoverflow.com/questions/15136480/how-to-send-html-content-with-image-through-android-default-email-client
        'Subject',
        ['info@fabian-schick.de'], // TO: must be null or an array
        null, // CC: must be null or an array
        null, // BCC: must be null or an array
        ['https://www.google.nl/images/srpr/logo4w.png','www/localimage.png'], // FILES: can be null, a string, or an array
        onSuccess, // called when sharing worked, but also when the user cancelled sharing via email (I've found no way to detect the difference)
        onError // called when sh*t hits the fan
    );
}

function saveAnyData(){
    localStorage.setItem("AnyData", localStorage.getItem("AnyData") + "; " + text);
}

function showAnyData(){
    alert(localStorage.getItem("AnyData"));
}

function updateText(textToUpdate) {
    text = textToUpdate;
}

function deleteAnyData(){
    localStorage.setItem("AnyData", "");
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert(states[networkState]);
}


function getLocationData() {
    var onSuccess = function(position) {
        cords = [];
        cords[0] = position.coords.latitude;
        cords[1] = position.coords.longitude;
        addGeofence(cords[0], cords[1]);
    };

// onError Callback receives a PositionError object
//
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}



function initializeGeofenzing() {
    window.geofence.initialize().then(function () {
        console.log("Successful initialization");
    }, function (error) {
        console.log("Error", error);
    });
}

function addGeofence(lat, lng) {
    window.geofence.addOrUpdate({
        id:             "69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb",
        latitude:       49.38823,
        longitude:      8.59752,
        radius:         500,
        transitionType: TransitionType.BOTH,
        notification: {
            id:             1,
            title:          "Angekommen",
            text:           "Kevin",
            openAppOnClick: true
        }
    }).then(function () {
        console.log('Geofence successfully added');
        console.log(lat + " " + lng)
    }, function (reason) {
        console.log('Adding geofence failed', reason);
    })
}

function camera() {
    function cameraSuccess() {
        console.log("Camera cleanup success.")
    }

    function cameraError(message) {
        alert('Failed because: ' + message);
    }
    var srcType = Camera.PictureSourceType.CAMERA;
    var cameraOptions = setOptions(srcType);

    function setOptions(srcType) {
        var options = {
            // Some common settings are 20, 50, and 100
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            // In this app, dynamically set the picture source, Camera or photo gallery
            sourceType: srcType,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true  //Corrects Android orientation quirks
        }
        return options;
    }

    navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
}
function removeAllGeofences() {
    window.geofence.removeAll()
        .then(function () {
                console.log('All geofences successfully removed.');
            }
            , function (reason) {
                console.log('Removing geofences failed', reason);
            });
}


function sendSMS() {

    var number = '01773472472';
    var message = 'hahahaha';
    console.log("number=" + number + ", message= " + message);

    //CONFIGURATION
    var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
            intent: ''

        }
    };

    var success = function () {};
    var error = function (e) { alert('Message Failed:' + e); };
    sms.send(number, message, options, success, error);

}

