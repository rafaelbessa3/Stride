window.addEventListener('load', function() {
    const canvas = document.getElementById('shoeCanvas');
    const ctx = canvas.getContext('2d');

    let bodyColor = '#ffffff';
    let soleColor = '#000000';
    let bodyTexture = null;
    let soleTexture = null;

    function drawShoe() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = bodyColor;
        ctx.fillRect(100, 100, 400, 150);

        if (bodyTexture) {
            let img = new Image();
            img.src = bodyTexture;
            img.onload = () => ctx.drawImage(img, 100, 100, 400, 150);
        }

        ctx.fillStyle = soleColor;
        ctx.fillRect(100, 250, 400, 30);

        if (soleTexture) {
            let img = new Image();
            img.src = soleTexture;
            img.onload = () => ctx.drawImage(img, 100, 250, 400, 30);
        }

        updateContestPreview();
    }

    document.getElementById('applyBody').addEventListener('click', function() {
        bodyColor = document.getElementById('colorBody').value;
        bodyTexture = document.getElementById('textureBody').value || null;
        drawShoe();
    });

    document.getElementById('applySole').addEventListener('click', function() {
        sole
