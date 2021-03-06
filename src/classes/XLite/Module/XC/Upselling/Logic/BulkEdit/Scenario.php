<?php
// vim: set ts=4 sw=4 sts=4 et:

/**
 * Copyright (c) 2011-present Qualiteam software Ltd. All rights reserved.
 * See https://www.x-cart.com/license-agreement.html for license details.
 */

namespace XLite\Module\XC\Upselling\Logic\BulkEdit;

/**
 * @Decorator\Depend ("XC\BulkEditing")
 */
class Scenario extends \XLite\Module\XC\BulkEditing\Logic\BulkEdit\Scenario implements \XLite\Base\IDecorator
{
    /**
     * @return array
     */
    protected static function defineScenario()
    {
        $result = parent::defineScenario();
        $result['product_related_products'] = [
            'title'   => \XLite\Core\Translation::getInstance()->translate('Related products'),
            'url'     => 'https://ideas.x-cart.com/forums/229428-x-cart-5-x/suggestions/15147657-bulk-products-editing-related-products',
        ];

        return $result;
    }
}
