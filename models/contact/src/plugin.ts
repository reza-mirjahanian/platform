//
// Copyright © 2020 Anticrm Platform Contributors.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { mergeIds } from '@anticrm/platform'
import type { Ref, Class, Type } from '@anticrm/core'
import contact, { contactId } from '@anticrm/contact'
import type { ChannelProvider, Channel } from '@anticrm/contact'
import type { AnyComponent } from '@anticrm/ui'
import {} from '@anticrm/core'

export const ids = mergeIds(contactId, contact, {
  channelProvider: {
    Email: '' as Ref<ChannelProvider>
    // Phone: '' as Ref<ChannelProvider>,
    // LinkedIn: '' as Ref<ChannelProvider>,
    // Twitter: '' as Ref<ChannelProvider>,
    // GitHub: '' as Ref<ChannelProvider>,
    // Telegram: '' as Ref<ChannelProvider>,
  },
  component: {
    PersonPresenter: '' as AnyComponent,
    ChannelsPresenter: '' as AnyComponent
  },
  class: {
    TypeChannels: '' as Ref<Class<Type<Channel[]>>>
  }
})
