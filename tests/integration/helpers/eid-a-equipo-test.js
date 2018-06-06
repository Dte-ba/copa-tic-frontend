
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eid-a-equipo', 'helper:eid-a-equipo', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{eid-a-equipo inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

