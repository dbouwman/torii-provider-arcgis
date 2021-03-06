/*
 * Copyright (c) 2016-2018 Esri
 * Apache-2.0
*/

/**
 * initializers/torii-provider-arcgis.js
 *
 * This file is simply here so that it includes the extension file
 * which reopen's the Torii Session, and adds additional methods
 * to it which are useful for ArcGIS Online Sessions
 */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "ext" }] */
import ext from '../ext/torii-provider-arcgis';

export function initialize () {
  // do nothing here...
}

// we need to export this stuff...
export default {
  name: 'torii-provider-arcgis',
  initialize: initialize
};
