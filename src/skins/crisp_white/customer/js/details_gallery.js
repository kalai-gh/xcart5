/* vim: set ts=2 sw=2 sts=2 et: */

/**
 * Controller
 *
 * Copyright (c) 2011-present Qualiteam software Ltd. All rights reserved.
 * See https://www.x-cart.com/license-agreement.html for license details.
 */

core.bind('init-cycle-gallery', function () {
  $('.cycle-slideshow').each(function () {
    var count = $(this).data('cycle-carousel-visible');

    if (!$(this).find('.cycle-carousel-wrap').length) {
      if ($(this).find($(this).data('cycle-slides')).length <= count) {
        $($(this).data('cycle-next')).hide();
        $($(this).data('cycle-prev')).hide();
      } else {
        $($(this).data('cycle-next')).show();
        $($(this).data('cycle-prev')).show();
        $(this).cycle();
      }
    }
  });
});

jQuery(function () {
  core.trigger('init-cycle-gallery');

  core.bind('block.product.details.postprocess', function () {
    core.trigger('init-cycle-gallery');
  });

  $('.cycle-cloak.cycle-slideshow').on('cycle-initialized', function (event, opts) {
    $(this).removeClass('.cycle-cloak');
  });
});
