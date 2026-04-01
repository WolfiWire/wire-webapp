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

export const header: CSSObject = {
  color: 'var(--foreground)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 'var(--content-title-bar-height)',
  width: '100%',
};

export const label: CSSObject = {
  color: 'var(--wire-content-primary)',
  fontWeight: 'var(--font-weight-semibold)',
  fontSize: 'var(--font-size-medium)',
  paddingBlock: '8px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  flex: 1,
};

export const button: CSSObject = {
  marginBottom: 0,
  backgroundColor: 'var(--wire-background-elevated)',
  border: '1px solid var(--wire-border-default)',
  color: 'var(--wire-content-primary)',
  svg: {
    path: {
      fill: 'currentColor',
    },
  },
  '&:hover': {
    backgroundColor: 'var(--wire-background-container)',
    borderColor: 'var(--wire-border-default)',
  },
};

export const searchInputWrapperStyles: CSSObject = {
  marginBlock: '4px 16px',
};
