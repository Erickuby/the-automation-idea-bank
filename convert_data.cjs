const fs = require('fs');
const path = require('path');

const extractedDataPath = path.join(__dirname, 'extracted_data.json');
const outputPath = path.join(__dirname, 'data.ts');

try {
    const rawData = fs.readFileSync(extractedDataPath, 'utf8');
    const jsonData = JSON.parse(rawData);

    const mappedData = jsonData.map((item, index) => {
        return {
            id: String(index + 1),
            idea: (item.Idea || '').trim(),
            niche: (item.Category || '').trim(),
            solution: (item['How to Get Started'] || '').trim(),
        };
    }).filter(item => item.idea && item.niche && item.solution);

    const fileContent = `import { AutomationIdea } from './types';

export const automationData: AutomationIdea[] = ${JSON.stringify(mappedData, null, 2)};
`;

    fs.writeFileSync(outputPath, fileContent);
    console.log(`Successfully wrote ${mappedData.length} items to data.ts`);

} catch (error) {
    console.error('Error converting data:', error);
    process.exit(1);
}
