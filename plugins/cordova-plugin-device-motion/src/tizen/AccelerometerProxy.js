/*
 * Copyright 2019 Samer Diab emil: contact@samerdiab.net
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(win) {
    var accelerometerCallback = null;

    module.exports = {
        start: function (successCallback, errorCallback) {
            if (accelerometerCallback) {
                win.removeEventListener("devicemotion", accelerometerCallback, true);
            }

            accelerometerCallback = function (motion) {
                successCallback({
                    x: motion.accelerationIncludingGravity.x,
                    y: motion.accelerationIncludingGravity.y,
                    z: motion.accelerationIncludingGravity.z,
                    timestamp: new Date().getTime()
                });
            };
            win.addEventListener("devicemotion", accelerometerCallback, true);
        },

        stop: function (successCallback, errorCallback) {
            win.removeEventListener("devicemotion", accelerometerCallback, true);
            accelerometerCallback = null;
        }
    };

    require("cordova/tizen/commandProxy").add("Accelerometer", module.exports);
}(window));
