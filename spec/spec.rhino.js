
load('/usr/local/lib/ruby/gems/1.8/gems/visionmedia-jspec-2.8.3/lib/jspec.js');
load('lib/fluidjs.core.js');

JSpec
  .exec('spec/spec.core.js')
  .run({ formatter : JSpec.formatters.Terminal })
  .report();