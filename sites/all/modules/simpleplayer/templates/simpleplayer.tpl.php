<?php

/**
 * @file
 * Displays HTML5 SimplePlayer.
 *
 * Available variables:
 * - $simpleplayer_id: Unique HTML ID for the displaying player.
 * - $simpleplayer_counter: HTML for counter.
 * - $simpleplayer_progressbar: HTML for progress bar.
 * - $simpleplayer_media_tag: Full path for media file.
 * - $simpleplayer_download_button: HTML for "download" button.
 * - $simpleplayer_back30_button: HTML for "back30" button.
 * - $simpleplayer_play_button: HTML for "play" button.
 * - $simpleplayer_combospeed_button: HTML for "combospeed" button.
 *
 * @ingroup themeable
 */
?>
<div id ="<?php echo $simpleplayer_id; ?>" class="simpleplayer">
    <?php echo $simpleplayer_media_tag; ?>
    <?php echo $simpleplayer_counter; ?>
    <?php echo $simpleplayer_progressbar; ?>
  <div class="simpleplayer-controls">
    <?php echo $simpleplayer_back30_button; ?>
    <?php echo $simpleplayer_play_button; ?>
    <?php echo $simpleplayer_download_button; ?>
    <?php echo $simpleplayer_combospeed_button; ?>
  </div>
</div>
