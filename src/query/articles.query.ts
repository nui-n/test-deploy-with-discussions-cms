/*
 * Copyright 2026 nuin
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { getCollection } from 'astro:content';

// Types
import type { CollectionEntry } from 'astro:content';

export async function getAvailableArticles(): Promise<Array<CollectionEntry<'articles'>>> {
  const availableArticles = (await getCollection('articles')).sort(
    ({ data: a }, { data: b }) => b.created_at.getTime() - a.created_at.getTime(),
  );

  return availableArticles;
}
