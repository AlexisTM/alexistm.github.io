var gulp = require('gulp');
var resume = require('gulp-resume');
var rename = require('gulp-rename');

gulp.task('default', function() {
  return gulp.src('resume.json')
    .pipe(resume({
      format: 'html',
      theme: 'elegant'
    }))
    .pipe(rename('cv.html'))
    .pipe(gulp.dest('.'));
});
