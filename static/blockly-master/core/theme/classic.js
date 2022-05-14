/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Classic theme.
 * Contains multi-coloured border to create shadow effect.
 */
'use strict';

/**
 * Classic theme.
 * Contains multi-coloured border to create shadow effect.
 * @namespace Blockly.Themes.Classic
 */
goog.module('Blockly.Themes.Classic');

const {Theme} = goog.require('Blockly.Theme');

/**
 * Classic theme.
 * Contains multi-coloured border to create shadow effect.
 * @type {Theme}
 * @alias Blockly.Themes.Classic
 */
const Classic = new Theme('classic', defaultBlockStyles, categoryStyles);

exports.Classic = Classic;
