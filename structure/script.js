function lightToDark() {
    const image = document.getElementById('lightbulb'); {
        image.style.display = 'none';
    }
    const targetImage = document.getElementById('darkbulb'); {
        targetImage.style.display = 'block'; 
        document.body.style.background = "#101010";
    }
    const frogImage = document.getElementById('frogvis'); {
        frogImage.style.display = 'none';
    }
}

function darkToLight() {
    const image = document.getElementById('darkbulb'); {
        image.style.display = 'none';
    }

    const targetImage = document.getElementById('lightbulb'); {
        targetImage.style.display = 'block';
        document.body.style.background = "ivory";
    }
    const frogImage = document.getElementById('frogvis'); {
        frogImage.style.display = 'block';
    }
}

function frogBleh() {
    const image = document.getElementById('frog-default'); {
        image.style.display = 'none';
    }

    const targetImage = document.getElementById('frog-mouth'); {
        targetImage.style.display = 'block';
    }

    setTimeout(function() {
        image.style.display = 'block';
        targetImage.style.display = 'none';
    }, 1000);

    const audio = document.getElementById('audio');
    audio.currentTime = 0;
    audio.play();
}