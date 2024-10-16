function showInfo(id) {
    var infos = document.querySelectorAll('.info');
    infos.forEach(function(info) {
        info.style.display = 'none';
    });
    var infoToShow = document.getElementById(id + '-info');
    if (infoToShow) {
        infoToShow.style.display = 'block';
    }
}

var items = document.querySelectorAll('.item');
items.forEach(function(item) {
    item.addEventListener('click', function() {
        var id = this.textContent.trim(); 
        showInfo(id);
    });
});

