import { defineCustomElement } from 'vue';
import Counter from './components/Counter.ce.vue';

customElements.define('counter-element', defineCustomElement(Counter));
