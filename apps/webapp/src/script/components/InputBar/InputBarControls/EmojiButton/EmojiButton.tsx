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

import type {MouseEvent} from 'react';

import {EmojiIcon} from '@wireapp/react-ui-kit';

import {IconButton} from 'Components/IconButton';
import {t} from 'Util/LocalizerUtil';

interface EmojiButtonProps {
  isActive: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const EmojiButton = ({isActive, onClick}: EmojiButtonProps) => (
  <IconButton
    active={isActive}
    onClick={onClick}
    title={t('tooltipConversationEmoji')}
    aria-label={t('tooltipConversationEmoji')}
    data-uie-name="add-emoji"
  >
    <EmojiIcon width={14} height={14} />
  </IconButton>
);
