//VARIABLES

const randomURL = 'https://api.windy.com/api/webcams/v2/list/orderby=random/limit=50?show=webcams:image,location,player;categories&key=xMMGgPgLclxZ4KEX9vDrtMTweoIiHQqm'

//ELEMENT REFERENCES
const $title = $('#title')
const $city = $('#city')
const $region = $('#region')
const $country = $('#country')
const $iframe = $('iframe')


//EVENT LISTENERS






//FUNCTIONS
$.ajax(randomURL).then(function(data){
    // console.log(data)
    $title.text('Title: ' + data['result']['webcams'][0]['title']);
    $city.text('City: ' + data['result']['webcams'][0]['location']['city'])
    $region.text('Region: ' + data['result']['webcams'][0]['location']['region'])
    $country.text('Country: ' + data['result']['webcams'][0]['location']['country'])
    // let url=data['result']['webcams'][0]['location']['country']['player']['day']['embed']
    // $iframe.attr('src',url)
    // console.log(url)

})






console.log($.ajax(randomURL))



