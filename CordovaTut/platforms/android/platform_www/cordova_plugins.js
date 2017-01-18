cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-barcodescanner.BarcodeScanner",
        "file": "plugins/cordova-plugin-barcodescanner/www/barcodescanner.js",
        "pluginId": "cordova-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "id": "cordova-plugin-battery-status.battery",
        "file": "plugins/cordova-plugin-battery-status/www/battery.js",
        "pluginId": "cordova-plugin-battery-status",
        "clobbers": [
            "navigator.battery"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "mp-cordova-plugin-contacts.contacts",
        "file": "plugins/mp-cordova-plugin-contacts/www/contacts.js",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "navigator.contacts"
        ]
    },
    {
        "id": "mp-cordova-plugin-contacts.Contact",
        "file": "plugins/mp-cordova-plugin-contacts/www/Contact.js",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "Contact"
        ]
    },
    {
        "id": "mp-cordova-plugin-contacts.ContactAddress",
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactAddress.js",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "ContactAddress"
        ]
    },
    {
        "id": "mp-cordova-plugin-contacts.ContactError",
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactError.js",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "ContactError"
        ]
    },
    {
        "id": "mp-cordova-plugin-contacts.ContactField",
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactField.js",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "ContactField"
        ]
    },
    {
        "id": "mp-cordova-plugin-contacts.ContactFindOptions",
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactFindOptions.js",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "ContactFindOptions"
        ]
    },
    {
        "id": "mp-cordova-plugin-contacts.ContactName",
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactName.js",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "ContactName"
        ]
    },
    {
        "id": "mp-cordova-plugin-contacts.ContactOrganization",
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactOrganization.js",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "ContactOrganization"
        ]
    },
    {
        "id": "mp-cordova-plugin-contacts.ContactFieldType",
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactFieldType.js",
        "pluginId": "mp-cordova-plugin-contacts",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "es6-promise-plugin.Promise",
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "id": "cordova-plugin-geofence.TransitionType",
        "file": "plugins/cordova-plugin-geofence/www/TransitionType.js",
        "pluginId": "cordova-plugin-geofence",
        "clobbers": [
            "TransitionType"
        ]
    },
    {
        "id": "cordova-plugin-geofence.geofence",
        "file": "plugins/cordova-plugin-geofence/www/geofence.js",
        "pluginId": "cordova-plugin-geofence",
        "clobbers": [
            "geofence"
        ]
    },
    {
        "id": "cordova-plugin-camera.Camera",
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "id": "cordova-plugin-camera.camera",
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-barcodescanner": "0.7.0",
    "cordova-plugin-battery-status": "1.2.2",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-geolocation": "2.4.1",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-x-socialsharing": "5.1.3",
    "mp-cordova-plugin-contacts": "1.1.1-dev",
    "cordova-plugin-network-information": "1.3.1",
    "es6-promise-plugin": "3.0.2",
    "cordova-plugin-geofence": "0.6.0",
    "cordova-plugin-camera": "2.3.1"
};
// BOTTOM OF METADATA
});