import {
  cultureTopicIds,
  type CultureTopicId,
  type Locale,
} from "../routing";
import { basicsTopic } from "./basics";
import { brothsTopic } from "./broths";
import { etiquetteTopic } from "./etiquette";
import { ingredientsTopic } from "./ingredients";
import { ritualTopic } from "./ritual";
import type { CultureTopic, TopicContent } from "./types";

type CultureTopicCard = TopicContent & {
  id: CultureTopicId;
  image: CultureTopic["image"];
};

type RelatedCultureTopic = TopicContent & {
  id: CultureTopicId;
};

export const cultureTopics = {
  basics: basicsTopic,
  broths: brothsTopic,
  ingredients: ingredientsTopic,
  ritual: ritualTopic,
  etiquette: etiquetteTopic,
} as const satisfies Record<CultureTopicId, CultureTopic>;

export function getCultureTopicCards(locale: Locale) {
  return cultureTopicIds.map((topicId) =>
    getCultureTopicCard(locale, topicId),
  );
}

export function getCultureTopic(topicId: CultureTopicId) {
  return cultureTopics[topicId];
}

export function getCultureTopicContent(
  locale: Locale,
  topicId: CultureTopicId,
) {
  return getCultureTopic(topicId).content[locale];
}

export function getRelatedCultureTopics(
  locale: Locale,
  currentTopicId: CultureTopicId,
  limit = 3,
) {
  return cultureTopicIds
    .filter((topicId) => topicId !== currentTopicId)
    .slice(0, limit)
    .map((topicId) => getRelatedCultureTopic(locale, topicId));
}

function getCultureTopicCard(
  locale: Locale,
  topicId: CultureTopicId,
): CultureTopicCard {
  const topic = getCultureTopic(topicId);

  return {
    id: topicId,
    image: topic.image,
    ...topic.content[locale],
  };
}

function getRelatedCultureTopic(
  locale: Locale,
  topicId: CultureTopicId,
): RelatedCultureTopic {
  return {
    id: topicId,
    ...getCultureTopicContent(locale, topicId),
  };
}
