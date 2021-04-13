import Application from './App'

window.addEventListener('load', ()=>{
    const app : Application = new Application();
    app.main();

    const submitButton = document.querySelector('button[role="submit"]');
    submitButton?.addEventListener('click', (event : Event) => {
        event.preventDefault();

        app.buttonHandle();
    })
})