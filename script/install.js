window.addEventListener('beforeinstallprompt', function(event) {
    deferredInstallPrompt = event;
    // installButton.removeAttribute('hidden');
    // deferredInstallPrompt.prompt();
    // Hide the install button, it can't be called twice.
    // event.srcElement.setAttribute('hidden', true);
});
