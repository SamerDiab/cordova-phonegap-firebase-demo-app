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

/* global Cordova */

module.exports = {
    getInfo: function (win, fail, args) {
        Cordova.exec(function (model, cordova, platform, uuid, version) {
            win({name: name, // eslint-disable-line no-undef
                model: model,
                cordova: cordova,
                platform: platform,
                uuid: uuid,
                version: version});
        }, null, 'com.cordova.Device', 'getInfo', []);
    }
};

require('cordova/exec/proxy').add('Device', module.exports);
