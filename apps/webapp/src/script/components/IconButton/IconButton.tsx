/*
 * Wire
 * Copyright (C) 2024 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import {CSSObject} from '@emotion/react';
import cx from 'classnames';
import React, {forwardRef} from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Renders the accent-tinted active/selected state */
  active?: boolean;
  /** Emotion CSS override — passed through to the underlying <button> */
  css?: CSSObject;
}

/**
 * Unified icon button used throughout the app.
 *
 * Defaults: transparent background, no border, 32×32 px, border-radius 8.
 * States  : hover → subtle tint | active → accent tint + accent icon
 *           disabled → wire-content-disabled colour | focus → accent border
 *
 * Calling-specific buttons are intentionally excluded from this component.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({active, className, children, type = 'button', ...props}, ref) => (
    <button
      ref={ref}
      type={type}
      className={cx('wire-icon-btn', {'wire-icon-btn--active': active}, className)}
      {...props}
    >
      {children}
    </button>
  ),
);

IconButton.displayName = 'IconButton';
