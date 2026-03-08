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


export const expirationContentStyles: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
};

export const expirationLabelStyles: CSSObject = {
  fontSize: 'var(--font-size-medium)',
  fontWeight: 'var(--font-weight-regular)',
  color: 'var(--wire-content-base-primary)',
};

export const expirationFieldsRowStyles: CSSObject = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 160px)',
  gap: '12px',
  width: '100%',
  '@media (max-width: 520px)': {
    gridTemplateColumns: 'minmax(0, 1fr)',
  },
};

export const datePickerGroupStyles: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
  width: '100%',
  minHeight: '48px',
  padding: '10px 14px',
  borderRadius: '14px',
  border: '1px solid var(--wire-border-base-primary)',
  backgroundColor: 'var(--wire-background-base-primary)',
  'body.theme-dark &': {
    backgroundColor: 'var(--wire-background-base-tertiary)',
  },
};

export const datePickerGroupFocusStyles: CSSObject = {
  '&[data-focus-visible]': {
    borderColor: 'var(--accent-color)',
  },
  '.react-aria-DatePicker[data-open] &': {
    borderColor: 'var(--accent-color)',
  },
  'body.theme-dark &': {
    '&&[data-focus-visible]': {
      borderColor: 'var(--accent-color)',
    },
    '.react-aria-DatePicker[data-open] &': {
      borderColor: 'var(--accent-color)',
    },
  },
};

export const dateInputStyles: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  gap: 0,
  fontSize: 'var(--font-size-medium)',
  color: 'var(--wire-content-base-primary)',
};

export const dateSegmentStyles: CSSObject = {
  padding: '2px 0',
  borderRadius: '6px',
  margin: 0,
  '&[data-type="literal"]': {
    padding: 0,
    margin: 0,
  },
  '&[data-placeholder]': {
    color: 'var(--wire-content-base-secondary)',
  },
  '&[data-focused]': {
    backgroundColor: 'var(--wire-background-base-tertiary)',
  },
};

export const calendarButtonStyles: CSSObject = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '10px',
  border: '1px solid transparent',
  background: 'transparent',
  color: 'var(--wire-content-base-primary)',
  cursor: 'pointer',
  '&:hover, &[data-focus-visible]': {
    backgroundColor: 'var(--wire-background-base-tertiary)',
  },
};

export const calendarIconStyles: CSSObject = {
  width: '18px',
  height: '18px',
};

export const calendarPopoverStyles: CSSObject = {
  backgroundColor: 'var(--wire-background-base-primary)',
  border: '1px solid var(--wire-border-base-primary)',
  borderRadius: '16px',
  padding: '12px',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
  width: 'var(--trigger-width)',
  maxWidth: 'var(--trigger-width)',
  boxSizing: 'border-box',
  zIndex: 10000020,
};

export const calendarHeaderStyles: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
  marginBottom: '10px',
};

export const calendarHeadingStyles: CSSObject = {
  fontSize: 'var(--font-size-medium)',
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--wire-content-base-primary)',
};

export const calendarNavButtonStyles: CSSObject = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: '8px',
  border: '1px solid var(--wire-border-base-primary)',
  backgroundColor: 'var(--wire-background-base-primary)',
  cursor: 'pointer',
  '&:hover, &[data-focus-visible]': {
    backgroundColor: 'var(--wire-background-base-tertiary)',
  },
};

export const calendarGridStyles: CSSObject = {
  width: '100%',
  borderCollapse: 'collapse',
  tableLayout: 'fixed',
  fontSize: 'var(--font-size-small)',
  color: 'var(--wire-content-base-primary)',
};

export const calendarGridHeaderStyles: CSSObject = {
  textTransform: 'uppercase',
  fontSize: 'var(--font-size-small)',
  color: 'var(--wire-content-base-secondary)',
};

export const calendarHeaderCellStyles: CSSObject = {
  paddingBottom: '6px',
  textAlign: 'center',
  fontWeight: 'var(--font-weight-semibold)',
  verticalAlign: 'middle',
  width: '36px',
};

export const calendarCellStyles: CSSObject = {
  width: '36px',
  height: '36px',
  textAlign: 'center',
  borderRadius: '10px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  lineHeight: 1,
  '&[data-outside-month]': {
    color: 'var(--wire-content-base-secondary)',
  },
  '&[data-selected]': {
    backgroundColor: 'var(--accent-color) !important',
    color: 'var(--white) !important',
  },
  '&[data-focus-visible]': {
    outline: '2px solid var(--accent-color)',
    outlineOffset: '2px',
  },
  '&[data-disabled]': {
    color: 'var(--wire-content-disabled-primary)',
    cursor: 'not-allowed',
  },
};

export const timeSelectWrapperStyles: CSSObject = {
  width: '100%',
};

export const timeSelectStyles: CSSObject = {
  height: '48px',
  minHeight: '48px',
  borderRadius: '14px',
  '& .css-1dimb5e-singleValue': {
    color: 'var(--wire-content-base-primary)',
  },
  '& [class*="singleValue"]': {
    color: 'var(--wire-content-base-primary)',
  },
};

export const timeSelectMenuStyles: CSSObject = {
  '& [role="option"]': {
    color: 'var(--wire-content-base-primary)',
  },
};

export const timeSelectMenuPortalStyles: CSSObject = {
  zIndex: 10000010,
};

export const expirationErrorBorderStyles: CSSObject = {
  borderColor: 'var(--wire-border-danger-primary)',
  boxShadow: 'none',
  outline: 'none',
};

export const expirationErrorLabelStyles: CSSObject = {
  color: 'var(--wire-content-danger-primary)',
};

export const expirationErrorTextStyles: CSSObject = {
  fontSize: 'var(--font-size-small)',
  color: 'var(--wire-content-danger-primary)',
};

export const expirationErrorShadowStyles: CSSObject = {
  borderColor: 'var(--wire-border-danger-primary)',
  boxShadow: '0 0 0 1px var(--wire-border-danger-primary)',
  outline: 'none',
};

export const timeSelectLabelVisuallyHiddenStyles: CSSObject = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
};
