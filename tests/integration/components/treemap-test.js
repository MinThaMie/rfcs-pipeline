import { module, test } from 'qunit';
import { setupRenderingTest } from 'rfcs-pipeline/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | treemap', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Treemap />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Treemap>
        template block text
      </Treemap>
    `);

    assert.dom().hasText('template block text');
  });
});
