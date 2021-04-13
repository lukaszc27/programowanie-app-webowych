window.addEventListener('load', () => {
    const createButton : HTMLButtonElement = document.querySelector('button') as HTMLButtonElement;
    const inputsDiv: HTMLDivElement = document.getElementById('inputs') as HTMLDivElement;

    createButton.addEventListener('click', function () {
        const input: HTMLInputElement = document.getElementById('inputCounter') as HTMLInputElement;

        for (let i : number = 0; i < Number(input.value); i++) {
            const el: HTMLInputElement = document.createElement('input');
            el.type = 'number';
            el.value = '0';

            inputsDiv.append(el);
        }

        const inputs : NodeListOf<HTMLInputElement> = inputsDiv.querySelectorAll('input');
        inputs.forEach(el => {
            el.addEventListener('change', function() {
                let tab : Array<number> = [];
                let sumValue : number = 0;
                inputs.forEach(el => {
                    tab.push(Number(el.value));
                    sumValue += Number(el.value);
                })

                const sum : HTMLParagraphElement = document.querySelector('p[data-type="sum"]');
                const avg : HTMLParagraphElement = document.querySelector('p[data-type="avg"]');
                const min : HTMLParagraphElement = document.querySelector('p[data-type="min"]');
                const max : HTMLParagraphElement = document.querySelector('p[data-type="max"]');

                sum.innerHTML = `SUMA: ${sumValue}`;
                avg.innerHTML = `ŚREDNIA: ${sumValue / inputs.length}`;
                max.innerHTML = `MAX: ${findMax(tab)}`;
                min.innerHTML = `MIN: ${findMin(tab)}`;
            })
        })
    });
});

const findMax = (tab : Array<number>) : number => {
    let current = tab[0];
    tab.forEach(el => {
        if (el > current)
            current = el;
    })
    return current;
}

const findMin = (tab : Array<number>) : number => {
    let current = tab[0];
    tab.forEach(el => {
        if (el < current)
            current = el;
    })
    return current;
}