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

interface Navigator {
	/**
	 * Vibrates the device for the specified amount of time.
	 * @param time Milliseconds to vibrate the device. 0 cancels the vibration. Ignored on iOS.
	 */
    vibrate(time: number): void;

    /**
	 * Vibrates the device with a given pattern.
	 * @param time Sequence of durations (in milliseconds) for which to turn on or off the vibrator. Ignored on iOS.
	 */
    vibrate(time: number[]): void;
}

interface Notification {
	/**
	 * Vibrates the device for the specified amount of time.
	 * @param time Milliseconds to vibrate the device. Ignored on iOS.
     * @deprecated
	 */
    vibrate(time: number): void;
    /**
     * Vibrates the device with a given pattern.
     * @param number[] pattern Pattern with which to vibrate the device.
     *                         The first value - number of milliseconds to wait before turning the vibrator on.
     *                         The next value - the number of milliseconds for which to keep the vibrator on before turning it off.
     * @param number  repeat   Optional index into the pattern array at which to start repeating (will repeat until canceled),
     *                         or -1 for no repetition (default).
     * @deprecated
     */
    vibrateWithPattern(pattern: number[], repeat: number): void;
    /**
     * Immediately cancels any currently running vibration.
     * @deprecated
     */
    cancelVibration(): void;
}