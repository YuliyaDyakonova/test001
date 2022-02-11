(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date);
        var seconds = Math.floor(t / 1e3 % 60);
        var minutes = Math.floor(t / 1e3 / 60 % 60);
        var hours = Math.floor(t / (1e3 * 60 * 60) % 24);
        var days = Math.floor(t / (1e3 * 60 * 60 * 24));
        return {
            total: t,
            days,
            hours,
            minutes,
            seconds
        };
    }
    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var hoursSpan = clock.querySelector(".timer__hours");
        var minutesSpan = clock.querySelector(".timer__minutes");
        var secondsSpan = clock.querySelector(".timer__seconds");
        function updateClock() {
            var t = getTimeRemaining(endtime);
            hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
            minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
            secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
            if (t.total <= 0) clearInterval(timeinterval);
        }
        updateClock();
        var timeinterval = setInterval(updateClock, 1e3);
    }
    var deadline = new Date;
    deadline.setHours(0, 0, 0, 0);
    deadline.setDate(deadline.getDate() + 1);
    initializeClock("countdown", deadline);
    initializeClock("countdown1", deadline);
    window["FLS"] = true;
    isWebp();
})();