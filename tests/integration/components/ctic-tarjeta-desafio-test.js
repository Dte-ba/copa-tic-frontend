import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ctic-tarjeta-desafio', 'Integration | Component | ctic tarjeta desafio', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ctic-tarjeta-desafio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ctic-tarjeta-desafio}}
      template block text
    {{/ctic-tarjeta-desafio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
