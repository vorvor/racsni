/**
 * @file
 * Javascript functions for HTML5 Simple Player.
 */

(function ($) {
  "use strict";

  function simpleplayer_function(context) {

    /* toggle play/pause function and icon */

    $('.simpleplayer-play-button i', context).click(
      function () {
        if ($(this).hasClass('fa-play')) {
          $(this).addClass('fa-pause').removeClass('fa-play').parents('.simpleplayer').children('.simpleplayer-media').trigger('play');
        }
        else {
          $(this).addClass('fa-play').removeClass('fa-pause').parents('.simpleplayer').children('.simpleplayer-media').trigger('pause');
        }
      }
    );
    $('.simpleplayer-combospeed-button i', context).click(
      function () {
        if ($(this).html() === '1x') {
          $(this).html('2x').parents('.simpleplayer').children('.simpleplayer-media').get(0).playbackRate = 2.0;
        }
        else if ($(this).html() === '2x') {
          $(this).html('&frac12;x').parents('.simpleplayer').children('.simpleplayer-media').get(0).playbackRate = 0.5;
        }
        else {
          $(this).html('1x').parents('.simpleplayer').children('.simpleplayer-media').get(0).playbackRate = 1.0;
        }
      }
    );

    $('.simpleplayer-back30-button i', context).click(
      function () {
        var ct = $(this).parents('.simpleplayer').children('.simpleplayer-media').get(0).currentTime;
        ct = ct > 30 ? (ct - 30) : 0;
        $(this).parents('.simpleplayer').children('.simpleplayer-media').get(0).currentTime = ct;
      }
    );

    $('.simpleplayer-download-button i', context).click(
      function () {
        var $dl = $(this).parents('.simpleplayer').children('.simpleplayer-media').get(0).currentSrc;
        window.location.href = $dl;
      }
    );

    $('.simpleplayer .simpleplayer-media', context).bind("timeupdate",
      function () {
        var audiotime = this.currentTime;
        var ms = Math.ceil((audiotime % 1) * 100);
        var milli = (ms > 9) ? ms.toString() : "0".concat(ms.toString());
        var s = parseInt(audiotime % 60);
        var sec = (s > 9) ? s.toString() : "0".concat(s.toString());
        var m = parseInt((audiotime / 60) % 60);
        var min = (m > 9) ? m.toString() : "0".concat(m.toString());
        var h = parseInt((audiotime / 3600) % 3600);
        var hr = (h > 9) ? h.toString() : "0".concat(h.toString());
        var progressWidth = Math.floor((100 / this.duration) * audiotime);
        var pw = progressWidth.toString().concat("%");
        $(this).siblings('.simpleplayer-timer').html(hr.concat(":").concat(min).concat(":").concat(sec).concat(":").concat(milli));
        $(this).siblings('.simpleplayer-progressbar').children('span').width(pw);
      }
    );
  }

  Drupal.behaviors.simpleplayer = {
    attach: function (context) {
      simpleplayer_function(context);
    }
  };
})(jQuery);
