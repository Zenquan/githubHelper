const fs = require("fs");
const path = require("path");
const manifest = require(path.resolve(__dirname, "../chrome/manifest.json"));
const ChromeExtension = require("crx");
const crxName = `${manifest.name}-v${manifest.version}.crx`;
const crx = new ChromeExtension({
  privateKey: fs.readFileSync(path.resolve(__dirname, "../../dist.pem"))
});

crx
  .load(path.resolve(__dirname, "../../dist"))
  .then(crx => crx.pack())
  .then(crxBuffer => {
    fs.writeFile(crxName, crxBuffer, err =>
      err
        ? console.error(err)
        : console.log(`>>>>>>>  ${crxName}  <<<<<<< 已打包完成`)
    );
  })
  .catch(err => {
    console.error(err);
  });
