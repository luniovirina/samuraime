import * as fs from 'fs';

const readRecommendationsArtifact = () => {
  const artifact_contents = fs.readFileSync('artifacts/berecommendations', 'utf-8').trim().split('\n');
  const recommendations = [];
  for (const [index, element] of artifact_contents.entries()) {
    recommendations.push({ id: index, recommendation: element });
  }
  console.log('Samurai Backend recommendations initialised from artifacts');
  return recommendations;
};

const BERECOMMENDATIONS = readRecommendationsArtifact();
const IAMSAMURAI = [
  { id: 0, answer: 'no', values: ['Nah.', 'Seriously?', 'No way', "Ain't happening, my friend.", 'Nope.'] },
  { id: 1, answer: 'yes', values: ['Sure thing!', 'Hell yeah!', 'Yes, absolutely.'] },
];

export const amISamurai = {
  _getRandomIndex(len: number) {
    return Math.floor(Math.random() * len);
  },
  getResponse() {
    let responseIndex = amISamurai._getRandomIndex(IAMSAMURAI.length);
    let responseValues = IAMSAMURAI[responseIndex].values;
    return {
      id: IAMSAMURAI[responseIndex].id,
      answer: IAMSAMURAI[responseIndex].answer,
      content: responseValues[amISamurai._getRandomIndex(responseValues.length)],
    };
  },
  getRecommendation() {
    return BERECOMMENDATIONS[amISamurai._getRandomIndex(BERECOMMENDATIONS.length)];
  },
};
