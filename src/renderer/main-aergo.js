import Vue from 'vue'
import { AergoClient, GrpcWebProvider } from '@herajs/client/dist/herajs.js';

const aergo = new AergoClient({}, new GrpcWebProvider({url: "http://192.168.1.107:7845"}));

Vue.prototype.$aergo = aergo
