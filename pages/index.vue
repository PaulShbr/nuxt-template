import Tutorial from '~/components/Tutorial.vue';
import {Component, Vue, render} from 'nuxt-property-decorator';

@Component
export default class IndexPage  extends Vue {
 render(h) {
   return "Hello World";
 }
}
