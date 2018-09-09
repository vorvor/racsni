<?php

/**
 * @file
 * Outputs audio/video tag.
 *
 * Available variables:
 * - $simpleplayer_mediapath: path to the video or audio player.
 * - $simpleplayer_mediatype: audio, video, or error.
 *
 * @ingroup themeable
 */
?>

<?php if ($simpleplayer_mediatype == 'video') { ?>
  <video class="simpleplayer-video simpleplayer-media">
    <source class="simpleplayer-source"
     type="video/mp4"
     src="<?php echo $simpleplayer_mediapath; ?>"></source>
       Your Browser Does Not Support the VIDEO tag.<br/>
       <a href="http://caniuse.com/#search=video" target="_blank">Click here to find one that does.</a><br/>
       Then <a href="http://browsehappy.com" target="_blank">Click here to download a new one FREE!</a>
  </video>
 <?php } else { ?>
  <audio class="simpleplayer-audio simpleplayer-media" preload="none">
    <source class="simpleplayer-source" type="audio/mpeg" src="<?php echo $simpleplayer_mediapath; ?>"></source>
      Your Browser Does Not Support the AUDIO tag.<br/>
      <a href="http://caniuse.com/#search=audio" target="_blank">Click here to find one that does.</a><br/>
      Then <a href="http://browsehappy.com" target="_blank">Click here to download a new one FREE!</a>
  </audio>
<?php } ?>
