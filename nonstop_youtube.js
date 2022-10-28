// ==UserScript==
// @name         Nonstop Youtube
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Dismiss confirm dialog
// @author       tihory
// @match        https://music.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function(){
        let button = document.querySelector("ytmusic-you-there-renderer yt-button-renderer");
        if (button) {
            button.click();
        }
    }, 5000);

})();
