const RANDOM = {};

RANDOM.getNormalGenerator = function () {

  return (function () {

    var oldMu, oldSigma;
    var x2, multiplier, genReady;

    return function normal(mu = 0, sigma = 0, fixed) {

      var x1, u1, u2, v1, v2, s;

      if ('number' !== typeof mu) {
        throw new TypeError('nextNormal: mu must be number.');
      }
      if ('number' !== typeof sigma) {
        throw new TypeError('nextNormal: sigma must be number.');
      }

      if (mu !== oldMu || sigma !== oldSigma) {
        genReady = false;
        oldMu = mu;
        oldSigma = sigma;
      }

      if (genReady) {
        genReady = false;
        if (fixed !== undefined) {
          return parseFloat((sigma * x2) + mu).toFixed(fixed);
        } else {
          return (sigma * x2) + mu;
        }
      }

      u1 = Math.random();
      u2 = Math.random();

      // Normalize between -1 and +1.
      v1 = (2 * u1) - 1;
      v2 = (2 * u2) - 1;

      s = (v1 * v1) + (v2 * v2);

      // Condition is true on average 1.27 times,
      // with variance equal to 0.587.
      if (s >= 1) {
        return normal(mu, sigma, fixed);
      }

      multiplier = Math.sqrt(-2 * Math.log(s) / s);

      x1 = v1 * multiplier;
      x2 = v2 * multiplier;

      genReady = true;
      if (fixed !== undefined) {
        return parseFloat((sigma * x1) + mu).toFixed(fixed);
      } else {
        return (sigma * x1) + mu;
      }
    };
  })();
};
RANDOM.nextNormal = RANDOM.getNormalGenerator();

export default RANDOM;
