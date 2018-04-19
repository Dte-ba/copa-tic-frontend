import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ctic-home-cards', 'Integration | Component | ctic home cards', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ctic-home-cards}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ctic-home-cards}}
      template block text
    {{/ctic-home-cards}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
