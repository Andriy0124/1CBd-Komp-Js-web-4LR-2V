function swapText(containerClass) {
    var tekst1, tekst2, tekst3, tekst4;
    if (containerClass === 'button-container') {
        tekst1 = document.querySelector('.tekst1');
        tekst2 = document.querySelector('.tekst2');
        var temp = tekst1.innerHTML;
        tekst1.innerHTML = tekst2.innerHTML;
        tekst2.innerHTML = temp;
    } else if (containerClass === 'button-container2') {
        tekst3 = document.querySelector('.tekst3');
        tekst4 = document.querySelector('.tekst4');
        var temp = tekst3.innerHTML;
        tekst3.innerHTML = tekst4.innerHTML;
        tekst4.innerHTML = temp;
    }

    var tekst1Content = (tekst1 && (tekst1.textContent || tekst1.innerText)) || '';
    var tekst2Content = (tekst2 && (tekst2.textContent || tekst2.innerText)) || '';
    var tekst3Content = (tekst3 && (tekst3.textContent || tekst3.innerText)) || '';
    var tekst4Content = (tekst4 && (tekst4.textContent || tekst4.innerText)) || '';

    var tekst1Stats = calculateStats(tekst1Content);
    var tekst2Stats = calculateStats(tekst2Content);
    var tekst3Stats = calculateStats(tekst3Content);
    var tekst4Stats = calculateStats(tekst4Content);

    if (tekst1) {
        console.log("Статистика тексту 1:");
        console.log("Речень: " + tekst1Stats.sentences);
        console.log("Слів: " + tekst1Stats.words);
        console.log("Символів: " + tekst1Stats.characters);
    }

    if (tekst2) {
        console.log("Статистика тексту 2:");
        console.log("Речень: " + tekst2Stats.sentences);
        console.log("Слів: " + tekst2Stats.words);
        console.log("Символів: " + tekst2Stats.characters);
    }

    if (tekst3) {
        console.log("Статистика тексту 3:");
        console.log("Речень: " + tekst3Stats.sentences);
        console.log("Слів: " + tekst3Stats.words);
        console.log("Символів: " + tekst3Stats.characters);
    }

    if (tekst4) {
        console.log("Статистика тексту 4:");
        console.log("Речень: " + tekst4Stats.sentences);
        console.log("Слів: " + tekst4Stats.words);
        console.log("Символів: " + tekst4Stats.characters);
    }
}

function calculateStats(text) {
    var sentences = text.split(/[.!?]+/).filter(function(sentence) {
        return sentence.trim() !== '';
    }).length;

    var words = text.split(/\s+/).length;

    var characters = text.replace(/\s/g, "").length;

    return {
        sentences: sentences,
        words: words,
        characters: characters
    };
}

document.getElementById('swapButton').addEventListener('click', function() {
    swapText('button-container');
});

document.getElementById('swapButton2').addEventListener('click', function() {
    swapText('button-container2');
});
