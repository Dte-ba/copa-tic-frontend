
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ctic-toolbox-card-recursos', 'helper:ctic-toolbox-card-recursos', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{ctic-toolbox-card-recursos inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

