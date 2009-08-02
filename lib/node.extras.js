// export load = function(path){
//   exec(path);
// }

loadJS = function (file) {
  puts("Loading file... "+file);
  // node.fs.cat(file).addCallback(function (data) { 
  //   puts(data);
  //   // eval(data);
  // });
  node.fs.cat("/etc/passwd", "utf8").addCallback(function (content) {
    puts(content);
  });
}

exports.load = loadJS;