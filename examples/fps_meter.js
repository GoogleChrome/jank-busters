// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


(function() {
  if (window.FPSMeter)
    return;

  function FPSMeter() {
    this.classList.add('fps-meter');
    this.style.boxSizing = 'border-box';
    this.style.width = '300px';
    this.style.height = '100px';
    this.style.padding = '4px';
    this.style.border = '1px solid black';
    this.style.fontSize = '12px';

    this.updateContents_();
  }

  FPSMeter.prototype = {
    __proto__: HTMLDivElement.prototype,

    updateContents_: function() {
      this.textContent = 'I am an fps meter';
    }
  };

  window.FPSMeter = function() {
    var div = document.createElement('div');
    div.__proto__ = FPSMeter.prototype;
    div.constuctor = FPSMeter;
    FPSMeter.call(div);
    return div;
  }

})();
