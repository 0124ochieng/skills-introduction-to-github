document.getElementById('a_creatives').addEventListener('click', function() {
    var possessionParagraph = document.getElementById('biggest_possession');
    if (possessionParagraph.style.display === 'none') {
        possessionParagraph.style.display = 'block';
    } else {
        possessionParagraph.style.display = 'none';
    }
});

document.getElementById('biggest_possession').addEventListener('click', function() {
    var possessionParagraph2 = document.getElementById('is_their_own_ideas');
    if (possessionParagraph2.style.display === 'none') {
        possessionParagraph2.style.display = 'block';
    } else {  
        possessionParagraph2.style.display = 'none';
    }
});