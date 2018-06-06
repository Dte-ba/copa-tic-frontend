import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ctic-detalle-equipo', 'Integration | Component | ctic detalle equipo', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ctic-detalle-equipo}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ctic-detalle-equipo}}
      template block text
    {{/ctic-detalle-equipo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
