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

import {ReactNode} from 'react';

import * as Icon from 'Components/Icon';
import {Conversation} from 'Repositories/entity/Conversation';

import {useSidebarStore} from '../useSidebarStore';

import {
  sectionStyles,
  sectionHeaderStyles,
  sectionTitleStyles,
  sectionUnreadStyles,
  sectionBodyStyles,
  sectionDividerStyles,
} from './ConversationSection.styles';

interface ConversationSectionProps {
  sectionKey: string;
  title: string;
  conversations: Conversation[];
  unreadCount: number;
  renderConversation: (conversation: Conversation, index: number) => ReactNode;
  isLast?: boolean;
}

export const ConversationSection = ({
  sectionKey,
  title,
  conversations,
  unreadCount,
  renderConversation,
  isLast = false,
}: ConversationSectionProps) => {
  const {collapsedSections, toggleSection} = useSidebarStore();
  const isExpanded = !collapsedSections.includes(sectionKey);

  return (
    <div css={sectionStyles}>
      <button
        type="button"
        css={sectionHeaderStyles(isExpanded)}
        onClick={() => toggleSection(sectionKey)}
        aria-expanded={isExpanded}
      >
        <Icon.ChevronIcon width={7} height={4} />
        <span css={sectionTitleStyles}>{title}</span>
        {unreadCount > 0 && <span css={sectionUnreadStyles}>{unreadCount}</span>}
      </button>

      {isExpanded && conversations.length > 0 && (
        <div css={sectionBodyStyles}>{conversations.map((conv, idx) => renderConversation(conv, idx))}</div>
      )}

      {!isLast && <div css={sectionDividerStyles} />}
    </div>
  );
};
