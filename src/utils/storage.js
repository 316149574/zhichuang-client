/**
 * Storage 二次封装
 * @ author duali
*/
import config from '../conifg/index';
export default {
    setItem(key, val) {
        let storage = this.getStorage();
        storage[key] = val;
        window.localStorage.setItem( config.spacename, JSON.stringify(storage) );
    },
    getItem(key) {
        let storage = this.getStorage();
        return storage[key];
    },
    getStorage() {
        return JSON.parse(window.localStorage.getItem(config.spacename) || "{}");
    },
    clearItem(key) {
        let storage = this.getStorage();
        delete storage[key];
        window.localStorage.setItem( config.spacename, JSON.stringify(storage) );
    },
    clearAll() {
        window.localStorage.clear();
    }

}