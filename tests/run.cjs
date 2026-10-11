const groups=[require("./theory.test.cjs"),require("./guitar.test.cjs"),require("./harmony.test.cjs"),require("./export.test.cjs"),require("./app.test.cjs"),require("./visual.test.cjs"),require("./scene.test.cjs"),require("./voicing.test.cjs"),require("./voicing-ui.test.cjs"),require("./scales-harmony.test.cjs"),require("./harmony-ui.test.cjs"),require("./standalone.test.cjs")];
groups.push(require('./preferences-makam.test.cjs'),require('./chord-matching.test.cjs'));
groups.push(require('./pool-playback.test.cjs'),require('./mobile-pwa-export.test.cjs'));
groups.push(require('./makam-tuning.test.cjs'));
async function run(){const names=[...groups.flat(),...await require('./audio.test.cjs')(),...await require('./pwa-launch.test.cjs')()];for(const name of names)console.log(`✓ ${name}`);console.log(`\n${names.length}/${names.length} kontrol geçti.`);}
run().catch(error=>{console.error(error);process.exitCode=1;});

