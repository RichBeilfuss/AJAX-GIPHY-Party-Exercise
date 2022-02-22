console.log("Let's get this party started!");

const $contain = $('#gifIMG');
const $input = $('#gifSearch');
const key = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'

function getGif(search){
    let searchLength = search.data.length
    if(searchLength){
        let random = Math.floor(Math.random() * searchLength);
        let $newDiv = $('<div>', {class: 'col-md-4 col-12 mb-4 '});
        let $newGif = $('<img>', {
            src: search.data[random].images.original.url,
            class: 'w-100'
        });
        $newDiv.append($newGif);
        $contain.append($newDiv);
    }
}


$('form').on('submit', async function(e){
    e.preventDefault();

    let searchTerm = $input.val();
    $input.val('');

    const response = await axios.get('https://api.giphy.com/v1/gifs/search',{
        params: {
            q: searchTerm,
            api_key: key
        }
    });
    getGif(response.data);
})

$('#delete').on('click', function(){
    $contain.empty();
})
