import { module, test } from 'qunit';
import { setupRenderingTest } from 'rfcs-pipeline/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rfc', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Rfc />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Rfc>
        template block text
      </Rfc>
    `);

    assert.dom().hasText('template block text');
  });
});
