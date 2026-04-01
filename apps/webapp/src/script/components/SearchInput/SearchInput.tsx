/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
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

import React, {forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef} from 'react';

import {SearchIcon} from '@wireapp/react-ui-kit';

import type {User} from 'Repositories/entity/User';
import {MAX_HANDLE_LENGTH} from 'Repositories/user/UserHandleGenerator';
import {isEnterKey} from 'Util/KeyboardUtil';
import {t} from 'Util/LocalizerUtil';

import * as Icon from '../Icon';

interface SearchInputProps {
  input: string;
  setInput: (value: string) => void;
  placeholder: string;
  selectedUsers?: User[];
  onEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void | Promise<void>;
  className?: string;
  'data-uie-name'?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({input, setInput, placeholder, selectedUsers = [], onEnter, className, 'data-uie-name': dataUieName}, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);

    // Forward the inner ref to the external ref so callers can focus/read the element
    useImperativeHandle(ref, () => innerRef.current!);

    // Re-focus and clear text after each user selection (people-picker behaviour)
    useLayoutEffect(() => {
      innerRef.current?.focus();
    }, [selectedUsers.length]);

    useEffect(() => {
      setInput('');
    }, [selectedUsers.length]);

    return (
      <div className={`search-input-wrap${className ? ` ${className}` : ''}`}>
        <span className="search-input-icon" aria-hidden="true">
          <SearchIcon width={14} height={14} />
        </span>

        <input
          ref={innerRef}
          className="search-input-field"
          type="search"
          value={input}
          maxLength={MAX_HANDLE_LENGTH}
          placeholder={placeholder}
          spellCheck={false}
          aria-label={placeholder}
          data-uie-name={dataUieName ?? 'enter-search'}
          onChange={event => setInput(event.target.value)}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Escape') {
              event.preventDefault();
              setInput('');
            } else if (isEnterKey(event.nativeEvent)) {
              event.preventDefault();
              void onEnter?.(event);
            }
          }}
        />

        {input && (
          <button
            className="search-input-clear"
            type="button"
            onClick={() => setInput('')}
            aria-label={t('accessibility.searchInput.cancel')}
          >
            <Icon.CloseIcon width={8} height={8} />
          </button>
        )}
      </div>
    );
  },
);

SearchInput.displayName = 'SearchInput';
