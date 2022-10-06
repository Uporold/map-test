'use strict';

define('map-test/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('common/const.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'common/const.js should pass ESLint\n\n');
  });

  QUnit.test('common/utils.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'common/utils.js should pass ESLint\n\n');
  });

  QUnit.test('components/leaflet-map.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/leaflet-map.js should pass ESLint\n\n');
  });

  QUnit.test('components/states-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/states-container.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('services/data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/data.js should pass ESLint\n\n');
  });
});
define("map-test/tests/integration/components/leaflet-map-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | leaflet-map", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)("it renders", async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ov2op6ux",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"leaflet-map\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), "");

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "o9FARhwh",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"leaflet-map\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), "template block text");
    });
  });
});
define("map-test/tests/integration/components/states-container-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | states-container", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)("it renders", async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "7+TP7OfT",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"states-container\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), "");

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "xqJvbwML",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"states-container\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), "template block text");
    });
  });
});
define("map-test/tests/test-helper", ["map-test/app", "map-test/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('map-test/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/leaflet-map-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/leaflet-map-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/states-container-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/states-container-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/data-test.js should pass ESLint\n\n');
  });
});
define("map-test/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)("Unit | Controller | index", function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)("it exists", function (assert) {
      let controller = this.owner.lookup("controller:index");
      assert.ok(controller);
    });
  });
});
define("map-test/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)("Unit | Route | index", function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)("it exists", function (assert) {
      let route = this.owner.lookup("route:index");
      assert.ok(route);
    });
  });
});
define("map-test/tests/unit/services/data-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)("Unit | Service | data", function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)("it exists", function (assert) {
      let service = this.owner.lookup("service:data");
      assert.ok(service);
    });
  });
});
define('map-test/config/environment', [], function() {
  var prefix = 'map-test';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('map-test/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
