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

/*jshint node: true */
'use strict';

var cameraConstants = require('../../www/CameraConstants');

module.exports.generateSpecs = function (sourceTypes, destinationTypes, encodingTypes, allowEditOptions) {
    var destinationType,
        sourceType,
        encodingType,
        allowEdit,
        specs = [],
        id = 1;
    for (destinationType in destinationTypes) {
        if (destinationTypes.hasOwnProperty(destinationType)) {
            for (sourceType in sourceTypes) {
                if (sourceTypes.hasOwnProperty(sourceType)) {
                    for (encodingType in encodingTypes) {
                        if (encodingTypes.hasOwnProperty(encodingType)) {
                            for (allowEdit in allowEditOptions) {
                                if (allowEditOptions.hasOwnProperty(allowEdit)) {
                                    // if taking picture from photolibrary, don't vary 'correctOrientation' option
                                    if (sourceTypes[sourceType] === cameraConstants.PictureSourceType.PHOTOLIBRARY) {
                                        specs.push({
                                            'id': id++,
                                            'options': {
                                                'destinationType': destinationTypes[destinationType],
                                                'sourceType': sourceTypes[sourceType],
                                                'encodingType': encodingTypes[encodingType],
                                                'allowEdit': allowEditOptions[allowEdit],
                                                'saveToPhotoAlbum': false,
                                            }
                                        });
                                    } else {
                                        specs.push({
                                            'id': id++,
                                            'options': {
                                                'destinationType': destinationTypes[destinationType],
                                                'sourceType': sourceTypes[sourceType],
                                                'encodingType': encodingTypes[encodingType],
                                                'correctOrientation': true,
                                                'allowEdit': allowEditOptions[allowEdit],
                                                'saveToPhotoAlbum': false,
                                            }
                                        }, {
                                            'id': id++,
                                            'options': {
                                                'destinationType': destinationTypes[destinationType],
                                                'sourceType': sourceTypes[sourceType],
                                                'encodingType': encodingTypes[encodingType],
                                                'correctOrientation': false,
                                                'allowEdit': allowEditOptions[allowEdit],
                                                'saveToPhotoAlbum': false,
                                            }
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return specs;
};
