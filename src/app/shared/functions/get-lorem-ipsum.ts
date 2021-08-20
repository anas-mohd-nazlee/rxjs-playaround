import { loremIpsum } from "lorem-ipsum";

export function getLoremIpsum(wordCount = 1): string {
  return loremIpsum({count: wordCount, random: Math.random, units: "word"});
}
