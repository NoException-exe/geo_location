const gulp = require("gulp");
const path = require("node:path");
const fs = require("node:fs");

/**
 * Task to copy the GeoLite2-City.mmdb file to the dist directory.
 *
 * @function copy-mmdb
 * @param {function} done - Callback function to indicate task completion.
 */
gulp.task("copy-mmdb", function (done) {
  const MMDBPATH = path.resolve(
    __dirname,
    "lib",
    "GeoLite2",
    "GeoLite2-City.mmdb"
  );
  const DISTPATH = path.resolve(
    __dirname,
    "dist",
    "lib",
    "GeoLite2",
    "GeoLite2-City.mmdb"
  );

  // Check if the source file exists
  if (!fs.existsSync(MMDBPATH)) {
    throw new Error(`Cannot find ${MMDBPATH} file`);
  }

  // Ensure the destination directory exists
  if (!fs.existsSync(path.dirname(DISTPATH))) {
    fs.mkdirSync(path.dirname(DISTPATH), { recursive: true });
  }

  // Use read and write streams directly
  const readStream = fs.createReadStream(MMDBPATH);
  const writeStream = fs.createWriteStream(DISTPATH);

  readStream.on("error", done);
  writeStream.on("error", done);
  writeStream.on("finish", done);

  readStream.pipe(writeStream);
});

/**
 * Build task that runs the copy-mmdb task.
 *
 * @function build
 */
gulp.task("build", gulp.series("copy-mmdb"));
