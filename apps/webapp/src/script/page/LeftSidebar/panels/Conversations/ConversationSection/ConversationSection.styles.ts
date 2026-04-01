/*
 * Wire
 * Copyright (C) 2025 Wire Swiss GmbH
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

export const sectionStyles: CSSObject = {
  width: '100%',
};

export const sectionHeaderStyles = (isExpanded: boolean): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '32px',
  padding: '0 16px',
  gap: '6px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: 'var(--wire-content-secondary)',
  fontSize: '10px',
  fontWeight: 'var(--font-weight-bold)',
  letterSpacing: '0.08em',
  userSelect: 'none',
  '&:hover': {
    color: 'var(--wire-content-primary)',
  },
  svg: {
    flexShrink: 0,
    transition: 'transform 0.15s ease',
    transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
    fill: 'currentColor',
    path: {fill: 'currentColor'},
  },
});

export const sectionTitleStyles: CSSObject = {
  flex: 1,
  textAlign: 'left',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  textTransform: 'uppercase',
};

export const sectionUnreadStyles: CSSObject = {
  color: 'var(--wire-content-tertiary)',
  fontSize: '10px',
  fontWeight: 'var(--font-weight-regular)',
  textTransform: 'none',
  letterSpacing: 'normal',
  flexShrink: 0,
};

export const sectionBodyStyles: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
};

export const sectionDividerStyles: CSSObject = {
  height: '1px',
  margin: '4px 16px',
  backgroundColor: 'var(--wire-border-default)',
};
