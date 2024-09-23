import { defineCustomElement } from 'vue';
// NOTE:  配信する Web Components に .vue が含まれる場合は Vue の customElement を有効にする必要がある。
import Sample from "./components/Sample.vue";
// MEMO: 配信する Web Components が .ce.vue のみの場合は、Vue の customElement を有効にする必要はない。
import Counter from './components/Counter.ce.vue';

customElements.define("sample-element", defineCustomElement(Sample));
customElements.define('counter-element', defineCustomElement(Counter));
