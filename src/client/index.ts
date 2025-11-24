import { TAG } from '@shared';

on('onResourceStart', (resourceName: string) => {
    if (resourceName !== GetCurrentResourceName()) 
        return;
    
    console.log('[' + TAG + '] Client resource started: ' + resourceName);
});