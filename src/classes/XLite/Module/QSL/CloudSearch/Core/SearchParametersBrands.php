<?php
// vim: set ts=4 sw=4 sts=4 et:

/**
 * Copyright (c) 2011-present Qualiteam software Ltd. All rights reserved.
 * See https://www.x-cart.com/license-agreement.html for license details.
 */

namespace XLite\Module\QSL\CloudSearch\Core;

use XLite\Module\QSL\CloudSearch\Model\Repo\Product;


/**
 * Produces CloudSearch search parameters from CommonCell conditions
 *
 * @Decorator\Depend({"QSL\ShopByBrand"})
 */
class SearchParametersBrands extends \XLite\Module\QSL\CloudSearch\Core\SearchParameters implements \XLite\Base\IDecorator
{
    /**
     * Get search parameters
     *
     * @return array
     */
    public function getParameters()
    {
        $data = parent::getParameters();

        if ($this->cnd->{Product::P_BRAND_ID}) {
            $data['conditions']['brand'] = [$this->cnd->{Product::P_BRAND_ID}];
        }

        return $data;
    }
}
