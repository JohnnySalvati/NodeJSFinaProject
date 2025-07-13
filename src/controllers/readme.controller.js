import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export const showReadme = (req, res) => {
  const readmePath = path.join(process.cwd(), 'README.md');

  fs.readFile(readmePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error loading README.md');
    }

    const html = marked(data);
    res.type('html').send(html);
  });
};
