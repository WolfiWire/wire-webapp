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

import {useState, useRef, useEffect} from 'react';

import * as Icon from 'Components/Icon';
import {IconButton} from 'Components/IconButton';
import {conversationViewFilterOrder} from 'src/script/page/LeftSidebar/panels/Conversations/helpers';
import {ConversationViewFilter, useSidebarStore} from 'src/script/page/LeftSidebar/panels/Conversations/useSidebarStore';

import {
  filterButtonWrapperStyles,
  menuStyles,
  menuLabelStyles,
  menuItemStyles,
  checkboxStyles,
  menuDividerStyles,
  removeFiltersButtonStyles,
} from './ConversationSectionFilterButton.styles';

const filterLabels: Record<ConversationViewFilter, string> = {
  [ConversationViewFilter.FAVORITES]: 'Favorites',
  [ConversationViewFilter.UNREADS]: 'Unread',
  [ConversationViewFilter.DIRECTS]: '1:1 conversations',
  [ConversationViewFilter.CHANNELS]: 'Channels',
  [ConversationViewFilter.GROUPS]: 'Groups',
  [ConversationViewFilter.MENTIONS]: 'Mentions',
  [ConversationViewFilter.DRAFTS]: 'Drafts',
  [ConversationViewFilter.FOLDERS]: 'Folders',
};


export const ConversationSectionFilterButton = () => {
  const {activeFilters, toggleViewFilter, clearViewFilters} = useSidebarStore();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const isFilterActive = activeFilters.length > 0;

  return (
    <div css={filterButtonWrapperStyles}>
      <IconButton
        ref={buttonRef}
        active={isFilterActive}
        onClick={() => setIsOpen(!isOpen)}
        title="Filter conversations"
        data-uie-name="conversation-section-filter-button"
      >
        <Icon.OptionsIcon width={16} height={16} />
      </IconButton>

      {isOpen && (
        <div ref={menuRef} css={menuStyles} data-uie-name="conversation-section-filter-menu">
          <div css={menuLabelStyles}>Filter by</div>

          {conversationViewFilterOrder.map(filter => (
            <button
              key={filter}
              type="button"
              onClick={() => toggleViewFilter(filter)}
              css={menuItemStyles(activeFilters.includes(filter))}
              data-uie-name={`section-filter-${filter.toLowerCase()}`}
            >
              <div css={checkboxStyles(activeFilters.includes(filter))} />
              {filterLabels[filter]}
            </button>
          ))}

          <div css={menuDividerStyles} />

          <button
            type="button"
            onClick={() => {
              clearViewFilters();
              setIsOpen(false);
            }}
            css={removeFiltersButtonStyles}
            data-uie-name="remove-all-filters"
          >
            Remove filters
          </button>
        </div>
      )}
    </div>
  );
};
