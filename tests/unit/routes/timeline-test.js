import { module, test } from 'qunit';
import { setupTest } from 'rfcs-pipeline/tests/helpers';

module('Unit | Route | timeline', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:timeline');
    assert.ok(route);
  });
});
