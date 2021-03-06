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

var Compass = {
    getHeading: function(success, error) {
        var listener = function(ev) {
            var orient = {
                trueHeading: ev.alpha,
                magneticHeading: ev.alpha,
                headingAccuracy: 0,
                timestamp: new Date().getTime()
            };
            success(orient);
            // remove listener after first response
            window.removeEventListener('deviceorientation', listener, false);
        };
        return window.addEventListener('deviceorientation', listener, false);
    }
};

module.exports = Compass;
require('cordova/exec/proxy').add('Compass', Compass);

