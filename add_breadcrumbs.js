const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  const subdirs = fs.readdirSync(dir);
  const files = subdirs.map((subdir) => {
    const res = path.resolve(dir, subdir);
    return fs.statSync(res).isDirectory() ? getFiles(res) : res;
  });
  return files.reduce((a, f) => a.concat(f), []);
}

const files = getFiles(path.join(__dirname, 'app')).filter(f => f.endsWith('page.tsx'));
let updatedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (content.includes('generateBreadcrumb(')) {
    if (content.includes('import { Breadcrumb }')) return;
    
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
       const endOfLastImport = content.indexOf('\n', lastImportIndex);
       content = content.slice(0, endOfLastImport + 1) + 'import { Breadcrumb } from "@/components/Breadcrumb";\n' + content.slice(endOfLastImport + 1);
    } else {
       content = 'import { Breadcrumb } from "@/components/Breadcrumb";\n' + content;
    }
    
    // We can extract everything between `list: [` and `],` or `]` inside generateBreadcrumb
    const startIndex = content.indexOf('generateBreadcrumb({');
    if (startIndex !== -1) {
      const listStart = content.indexOf('list: [', startIndex);
      if (listStart !== -1) {
        // Find the matching closing bracket for list array
        let listStr = null;
        let bracketCount = 0;
        let endIdx = -1;
        
        for (let i = listStart + 6; i < content.length; i++) {
          if (content[i] === '[') bracketCount++;
          if (content[i] === ']') {
            bracketCount--;
            if (bracketCount === 0) {
              endIdx = i;
              break;
            }
          }
        }
        
        if (endIdx !== -1) {
          listStr = content.slice(listStart + 6, endIdx + 1);
          content = content.replace(/(<main[^>]*>)/, `$1\n        <Breadcrumb list={${listStr}} />`);
          fs.writeFileSync(file, content, 'utf-8');
          console.log(`Updated ${file}`);
          updatedCount++;
        }
      } else if (file.includes('app/(main)/page.tsx') || file.includes('app\\(main)\\page.tsx')) {
        content = content.replace(/(<main[^>]*>)/, `$1\n        <Breadcrumb list={[]} />`);
        fs.writeFileSync(file, content, 'utf-8');
        console.log(`Updated ${file}`);
        updatedCount++;
      }
    }
  }
});

console.log(`Total files updated: ${updatedCount}`);
