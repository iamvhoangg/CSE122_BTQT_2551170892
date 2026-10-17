const roseImg = document.getElementById('roseImg');
const buttons = document.querySelectorAll('.effect-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        
        this.classList.add('active');

        const effect = this.getAttribute('data-effect');

        roseImg.style.filter = 'none';
        roseImg.style.transform = 'none';

        switch(effect) {
            case 'gray':
                roseImg.style.filter = 'grayscale(1)';
                break;
            case 'xray':
                roseImg.style.filter = 'invert(1) grayscale(1)';
                break;
            case 'invert':
                roseImg.style.filter = 'invert(1)';
                break;
            case 'fliph':
                roseImg.style.transform = 'scaleX(-1)';
                break;
            case 'flipv':
                roseImg.style.transform = 'scaleY(-1)';
                break;
            case 'glow':
                roseImg.style.filter = 'drop-shadow(0 0 12px #ff3399) brightness(1.2)';
                break;
            case 'shadow':
                roseImg.style.filter = 'drop-shadow(6px 6px 6px rgba(0, 0, 0, 0.7))';
                break;
            case 'bold-shadow':
                roseImg.style.filter = 'drop-shadow(12px 12px 10px #000000)';
                break;
            case 'dropshadow':
                roseImg.style.filter = 'drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.5))';
                break;
            case 'blur':
                roseImg.style.filter = 'blur(3px)';
                break;
            case 'wave':
                roseImg.style.filter = 'url(#waveFilter)';
                break;
            case 'mask':
            case 'alpha':
                roseImg.style.filter = 'opacity(0.4)';
                break;
            default:
                roseImg.style.filter = 'none';
        }
    });
});