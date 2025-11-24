import { TAG } from '@shared';

on('onResourceStart', (resourceName: string) => {
    console.log('[' + TAG + '] Server resource started: ' + resourceName);
});