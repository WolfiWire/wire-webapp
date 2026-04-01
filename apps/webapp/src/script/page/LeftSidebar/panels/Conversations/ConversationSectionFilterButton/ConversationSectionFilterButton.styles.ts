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

export const filterButtonWrapperStyles: CSSObject = {
  position: 'relative',
};

export const menuStyles: CSSObject = {
  position: 'absolute',
  top: 'calc(100% + 4px)',
  right: 0,
  minWidth: '160px',
  backgroundColor: 'var(--wire-background-elevated)',
  border: '1px solid var(--wire-border-default)',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.06)',
  zIndex: 100,
  padding: '8px 0',
};

export const menuLabelStyles: CSSObject = {
  padding: '4px 12px 8px',
  color: 'var(--wire-content-secondary)',
  fontSize: 'var(--font-size-small)',
  fontWeight: 'var(--font-weight-semibold)',
};

export const menuItemStyles = (isActive: boolean): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '6px 12px',
  gap: '8px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: isActive ? 'var(--wire-content-primary)' : 'var(--wire-content-secondary)',
  fontWeight: isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
  fontSize: 'var(--font-size-base)',
  textAlign: 'left',
  transition: 'background-color 0.1s ease',
  '&:hover': {
    backgroundColor: 'var(--wire-background-container)',
    color: 'var(--wire-content-primary)',
  },
});

export const checkboxStyles = (isChecked: boolean): CSSObject => ({
  width: '14px',
  height: '14px',
  flexShrink: 0,
  border: `1.5px solid ${isChecked ? 'var(--accent-color)' : 'var(--wire-border-strong)'}`,
  borderRadius: '3px',
  backgroundColor: isChecked ? 'var(--accent-color)' : 'transparent',
  transition: 'all 0.1s ease',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::after': isChecked
    ? {
        content: '""',
        width: '8px',
        height: '4px',
        borderLeft: '1.5px solid white',
        borderBottom: '1.5px solid white',
        transform: 'rotate(-45deg) translate(0px, -1px)',
        display: 'block',
      }
    : {},
});

export const menuDividerStyles: CSSObject = {
  height: '1px',
  margin: '6px 12px',
  backgroundColor: 'var(--wire-border-default)',
};

export const removeFiltersButtonStyles: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'calc(100% - 24px)',
  margin: '4px 12px',
  padding: '5px 12px',
  background: 'none',
  border: '1px solid var(--wire-border-default)',
  borderRadius: '20px',
  cursor: 'pointer',
  color: 'var(--wire-content-secondary)',
  fontSize: 'var(--font-size-small)',
  transition: 'all 0.1s ease',
  '&:hover': {
    backgroundColor: 'var(--wire-background-container)',
    color: 'var(--wire-content-primary)',
    borderColor: 'var(--wire-border-strong)',
  },
};
