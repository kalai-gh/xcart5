<?php
// vim: set ts=4 sw=4 sts=4 et:

/**
 * Copyright (c) 2011-present Qualiteam software Ltd. All rights reserved.
 * See https://www.x-cart.com/license-agreement.html for license details.
 */

namespace XLite\Core\Job\StepsProvider;

use XLite\Core\Job\Job;

/**
 * Class JobGeneratorInterface
 */
interface JobGeneratorInterface
{
    /**
     * @return Job
     */
    public function getNextJob();

    /**
     * @return boolean
     */
    public function isValid();
}