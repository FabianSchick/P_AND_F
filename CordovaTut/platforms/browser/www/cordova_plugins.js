cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-battery-status/www/battery.js",
        "id": "cordova-plugin-battery-status.battery",
        "pluginId": "cordova-plugin-battery-status",
        "clobbers": [
            "navigator.battery"
        ]
    },
    {
        "file": "plugins/cordova-plugin-battery-status/src/browser/BatteryProxy.js",
        "id": "cordova-plugin-battery-status.Battery",
        "pluginId": "cordova-plugin-battery-status",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-barcodescanner/www/barcodescanner.js",
        "id": "cordova-plugin-barcodescanner.BarcodeScanner",
        "pluginId": "cordova-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/mp-cordova-plugin-contacts/www/contacts.js",
        "id": "mp-cordova-plugin-contacts.contacts",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "navigator.contacts"
        ]
    },
    {
        "file": "plugins/mp-cordova-plugin-contacts/www/Contact.js",
        "id": "mp-cordova-plugin-contacts.Contact",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "Contact"
        ]
    },
    {
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactAddress.js",
        "id": "mp-cordova-plugin-contacts.ContactAddress",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "ContactAddress"
        ]
    },
    {
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactError.js",
        "id": "mp-cordova-plugin-contacts.ContactError",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "ContactError"
        ]
    },
    {
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactField.js",
        "id": "mp-cordova-plugin-contacts.ContactField",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "ContactField"
        ]
    },
    {
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactFindOptions.js",
        "id": "mp-cordova-plugin-contacts.ContactFindOptions",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "ContactFindOptions"
        ]
    },
    {
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactName.js",
        "id": "mp-cordova-plugin-contacts.ContactName",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "ContactName"
        ]
    },
    {
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactOrganization.js",
        "id": "mp-cordova-plugin-contacts.ContactOrganization",
        "pluginId": "mp-cordova-plugin-contacts",
        "clobbers": [
            "ContactOrganization"
        ]
    },
    {
        "file": "plugins/mp-cordova-plugin-contacts/www/ContactFieldType.js",
        "id": "mp-cordova-plugin-contacts.ContactFieldType",
        "pluginId": "mp-cordova-plugin-contacts",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "id": "es6-promise-plugin.Promise",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-geofence/www/TransitionType.js",
        "id": "cordova-plugin-geofence.TransitionType",
        "pluginId": "cordova-plugin-geofence",
        "clobbers": [
            "TransitionType"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geofence/www/geofence.js",
        "id": "cordova-plugin-geofence.geofence",
        "pluginId": "cordova-plugin-geofence",
        "clobbers": [
            "geofence"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
        "id": "cordova-plugin-camera.CameraProxy",
        "pluginId": "cordova-plugin-camera",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-battery-status": "1.2.2",
    "cordova-plugin-barcodescanner": "0.7.0",
    "mp-cordova-plugin-contacts": "1.1.1-dev",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-geolocation": "2.4.1",
    "cordova-plugin-x-socialsharing": "5.1.3",
    "cordova-plugin-network-information": "1.3.1",
    "es6-promise-plugin": "3.0.2",
    "cordova-plugin-geofence": "0.6.0",
    "cordova-plugin-camera": "2.3.1"
}
// BOTTOM OF METADATA
});