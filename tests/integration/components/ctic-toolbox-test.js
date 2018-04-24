import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ctic-toolbox', 'Integration | Component | ctic toolbox', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ctic-toolbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ctic-toolbox}}
      template block text
    {{/ctic-toolbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
