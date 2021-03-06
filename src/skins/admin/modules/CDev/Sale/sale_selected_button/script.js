/* vim: set ts=2 sw=2 sts=2 et: */

/**
 * File selector button and popup controller
 *
 * Copyright (c) 2011-present Qualiteam software Ltd. All rights reserved.
 * See https://www.x-cart.com/license-agreement.html for license details.
 */

function PopupButtonSaleSelectedButton()
{
  PopupButtonSaleSelectedButton.superclass.constructor.apply(this, arguments);
}

extend(PopupButtonSaleSelectedButton, PopupButton);

PopupButtonSaleSelectedButton.prototype.pattern = '.sale-selected-button';

decorate(
  'PopupButtonSaleSelectedButton',
  'callback',
  function (selector, link)
  {
    // previous method call
    arguments.callee.previousMethod.apply(this, arguments);

    // Autoloading of browse server link (popup widget).
    // TODO. make it dynamically and move it to ONE widget initialization (Main widget)
    core.autoload(SalePriceValue);
  }
);

decorate(
  'PopupButtonSaleSelectedButton',
  'afterSubmit',
  function (selector)
  {
    // previous method call
    arguments.callee.previousMethod.apply(this, arguments);

    var value = jQuery('input[name="postedData[salePriceValue]"]').val();

    var participateSale = 'sale_percent' == jQuery('input[name="postedData[discountType]"]:checked').val()
      ? ((value > 0) && (value <= 100))
      : (value >= 0);

    var elements = jQuery('input[name*="select"]', jQuery(selector));

    if (elements.length) {
      jQuery('input[name*="select"]', jQuery(selector)).each(function (index, elem) {
        if (participateSale) {
          jQuery('.entity-' + jQuery(elem).val() + ' .product-name-sale-label')
            .removeClass('product-name-sale-label-disabled');
        } else {
          jQuery('.entity-' + jQuery(elem).val() + ' .product-name-sale-label')
            .addClass('product-name-sale-label-disabled');
        }
      });
    } else {
      if (participateSale) {
        jQuery('.items-list.products .list .lines .line .product-name-sale-label')
          .removeClass('product-name-sale-label-disabled');
      } else {
        jQuery('.items-list.products .list .lines .line .product-name-sale-label')
          .addClass('product-name-sale-label-disabled');
      }
    }
  }
);

decorate(
  'PopupButtonSaleSelectedButton',
  'getURLParams',
  function (button)
  {
    var urlParams = arguments.callee.previousMethod.apply(this, arguments);

    jQuery('[name*="select"]:checked').each(function (index, elem) {urlParams[elem.name] = 1});

    return urlParams;
  }
);

decorate(
  'PopupButtonSaleSelectedButton',
  'eachClick',
  function (elem)
  {
    if (elem.linkedDialog) {
      jQuery(elem.linkedDialog).dialog('close').remove();
      elem.linkedDialog = undefined;
    }

    return arguments.callee.previousMethod.apply(this, arguments);
  }
);

core.autoload(PopupButtonSaleSelectedButton);
