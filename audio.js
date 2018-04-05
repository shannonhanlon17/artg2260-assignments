var amp, pieces, radius, fft, analyzer, mapMouseX, mapMouseY, audio, toggleBtn, uploadBtn, uploadedAudio;
var colorPalette = ["#000000", "#74F94C", "#FFFFFF"];
var uploadLoading = false;

function preload() {
    audio = loadSound("Runaway (Explicit).mp3");
}

function uploaded(file) {
    uploadLoading = true;
    uploadedAudio = loadSound(file.data, uploadedAudioPlay);
}


function uploadedAudioPlay(audioFile) {

    uploadLoading = false;

    if (audio.isPlaying()) {
        audio.pause();
    }

    audio = audioFile;
    audio.loop();
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    toggleBtn = createButton("Play / Pause");
    uploadBtn = createFileInput(uploaded);
    uploadBtn.addClass("upload-btn");
    toggleBtn.addClass("toggle-btn");
    toggleBtn.mousePressed(toggleAudio);

    analyzer = new p5.Amplitude();
    fft = new p5.FFT();
    amp = new p5.Amplitude(0.2);
    audio.loop();

}

function draw() {

    background(colorPalette[0]);

    translate(windowWidth / 2, windowHeight / 2);

    level = analyzer.getLevel();
    fft.analyze();

    var bass = fft.getEnergy(100, 150);
    var treble = fft.getEnergy(150, 250);
    var mid = fft.getEnergy("mid");

    var mapMid = map(mid, 0, 255, -100, 200);
    var scaleTreble = map(treble, 0, 255, 0, 1);
    var mapbass = map(bass, 0, 255, 50, 200);

    mapMouseX = map(mouseX, 0, width, 15, 50);
    mapMouseXbass = map(mouseY, 0, width, 1, 5);
    mapMouseY = map(mouseY, 0, height, 2, 6);

    pieces = 20;
    radius = 100;

    for (i = 0; i < pieces; i += 0.1) {

        rotate(TWO_PI / (pieces / 2));

        noFill();

        push();
        stroke(colorPalette[1]);
        rotate(frameCount * 0.002);
        strokeWeight(0.5);
        polygon(mapbass + i, mapbass - i, mapMouseXbass * i, 3);
        pop();

        push();
        stroke(colorPalette[1]);
        strokeWeight(0.2);
        polygon(mapMid + i / 2, mapMid - i * 2, mapMouseX * i, 7);
        pop();

        push();
        noStroke();
        fill(colorPalette[0]);

        var vol = amp.getLevel();
        var diam = map(vol, 0, 0.3, 10, 200);

        ellipse(0, 0, diam, diam);
        pop();

        radius = windowHeight / 4;

        push();
        stroke(colorPalette[2]);
        strokeWeight(4);
        scale(scaleTreble);
        rotate(frameCount * 0.01);
        point(100, diam * 2);
        // point(-50, radius * 1.25);
        point(-25, diam * 1.5);
        pop();

    }

}


function toggleAudio() {
    if (audio.isPlaying()) {
        audio.pause();
    } else {
        audio.play();
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}