import { assert } from './utils';

export let _Vue;

export function install (Vue) {
    const version = Number(Vue.version.split('.')[0]);
    assert(version >= 2, `Only supports Vuejs 2`);

    if (install.installed) {
        return;
    }
    install.installed = true;

    _Vue = Vue;

    Vue.mixins({
        beforeCreate () {
            console.log('[revuekjs]: beforeCreate');
            const options = this.$options;
            if (options.modules) {
                this.$modules = options.modules;
            } else if (options.parent && options.parent.$modules) {
                this.$modules = options.parent.$modules;
            }
        }
    });
};