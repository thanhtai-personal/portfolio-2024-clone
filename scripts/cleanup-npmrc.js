const fs = require('fs-extra');
const path = require('path');

// Function to recursively delete all 'node modules' folders
async function cleanNodeModule(dir) {
  const entries = await fs.readdir(dir);
  for (const entry of entries) {
    const entryPath = path.join(dir, entry);
    const stats = await fs.stat(entryPath);
    if (stats.isDirectory()) {
      try {
        if (entry === "node_modules") {
        } else {
          await cleanNodeModule(entryPath);
        }
      } catch (error) {
        console.log("Error", error)
      }
    } else {
      console.log("DELETING", entryPath)
      if (entryPath === ".npmrc") {
        await fs.remove(entryPath);
      } else {
        console.log("IGNORE", entryPath)
      }
    }
  }
}

// Start cleaning 'dist' folders from the current directory
cleanNodeModule('./').catch(err => console.error(err));