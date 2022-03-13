goog.setTestOnly("goog.testing.PseudoRandom");
goog.provide("goog.testing.PseudoRandom");
goog.require("goog.Disposable");
goog.testing.PseudoRandom = function(opt_seed, opt_install) {
  goog.Disposable.call(this);
  if (opt_seed === undefined) {
    opt_seed = goog.testing.PseudoRandom.seedUniquifier_++ + goog.now();
  }
  this.seed(opt_seed);
  if (opt_install) {
    this.install();
  }
};
goog.inherits(goog.testing.PseudoRandom, goog.Disposable);
goog.testing.PseudoRandom.seedUniquifier_ = 0;
goog.testing.PseudoRandom.A = 48271;
goog.testing.PseudoRandom.M = 2147483647;
goog.testing.PseudoRandom.Q = 44488;
goog.testing.PseudoRandom.R = 3399;
goog.testing.PseudoRandom.ONE_OVER_M_MINUS_ONE = 1.0 / (goog.testing.PseudoRandom.M - 1);
goog.testing.PseudoRandom.prototype.seed_ = 1;
goog.testing.PseudoRandom.prototype.installed_;
goog.testing.PseudoRandom.prototype.mathRandom_;
goog.testing.PseudoRandom.prototype.install = function() {
  if (!this.installed_) {
    this.mathRandom_ = Math.random;
    Math.random = goog.bind(this.random, this);
    this.installed_ = true;
  }
};
goog.testing.PseudoRandom.prototype.disposeInternal = function() {
  goog.testing.PseudoRandom.superClass_.disposeInternal.call(this);
  this.uninstall();
};
goog.testing.PseudoRandom.prototype.uninstall = function() {
  if (this.installed_) {
    Math.random = this.mathRandom_;
    this.installed_ = false;
  }
};
goog.testing.PseudoRandom.prototype.seed = function(opt_seed) {
  this.seed_ = (opt_seed || 0) % (goog.testing.PseudoRandom.M - 1);
  if (this.seed_ <= 0) {
    this.seed_ += goog.testing.PseudoRandom.M - 1;
  }
};
goog.testing.PseudoRandom.prototype.random = function() {
  var hi = Math.floor(this.seed_ / goog.testing.PseudoRandom.Q);
  var lo = this.seed_ % goog.testing.PseudoRandom.Q;
  var test = goog.testing.PseudoRandom.A * lo - goog.testing.PseudoRandom.R * hi;
  if (test > 0) {
    this.seed_ = test;
  } else {
    this.seed_ = test + goog.testing.PseudoRandom.M;
  }
  return (this.seed_ - 1) * goog.testing.PseudoRandom.ONE_OVER_M_MINUS_ONE;
};

//# sourceMappingURL=goog.testing.pseudorandom.js.map
