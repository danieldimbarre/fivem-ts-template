import { TAG } from '@common';

on('onResourceStart', (resourceName: string) => {
    console.log('[' + TAG + '] Server resource started: ' + resourceName);
});