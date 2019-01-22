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

/**
 * This plugin defines a global device object, which describes the device's hardware and software.
 * Although the object is in the global scope, it is not available until after the deviceready event.
 */
interface Device {
    /** Get the version of Cordova running on the device. */
    cordova: string;
    /** Indicates that Cordova initialize successfully. */
    available: boolean;
    /**
     * The device.model returns the name of the device's model or product. The value is set
     * by the device manufacturer and may be different across versions of the same product.
     */
    model: string;
    /** Get the device's operating system name. */
    platform: string;
    /** Get the device's Universally Unique Identifier (UUID). */
    uuid: string;
    /** Get the operating system version. */
    version: string;
	/** Get the device's manufacturer. */
	manufacturer: string;
	/** Whether the device is running on a simulator. */
	isVirtual: boolean;
	/** Get the device hardware serial number. */
	serial: string;}

declare var device: Device;