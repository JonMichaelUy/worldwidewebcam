//ELEMENT REFERENCES
const $title = $('#title')
const $city = $('#city')
const $region = $('#region')
const $country = $('#country')
const $iframe = $('iframe')



//VARIABLES

const randomURL = 'https://api.windy.com/api/webcams/v2/list/orderby=random/limit=50?show=webcams:image,location,player;categories&key=xMMGgPgLclxZ4KEX9vDrtMTweoIiHQqm'



const $form =$('form')

$("select#category").change(function() {
 
  const category = $(this).val();
  


  const categoryURL = `https://api.windy.com/api/webcams/v2/list/orderby=random/category=${category}/limit=50?show=webcams:location,player&key=xMMGgPgLclxZ4KEX9vDrtMTweoIiHQqm`
  

  $.ajax(categoryURL).then(function(data){
    
    console.log(data)

    let url= data['result']['webcams'][0]['player']['day']['embed']

    $title.text('Title: ' + data['result']['webcams'][0]['title']);
    $city.text('City: ' + data['result']['webcams'][0]['location']['city']);
    $region.text('Region: ' + data['result']['webcams'][0]['location']['region']);
    $country.text('Country: ' + data['result']['webcams'][0]['location']['country']);

    $iframe.attr('src',url)


  })


})






//FUNCTIONS
$('.randomBtn').click(function(){
  $.ajax(randomURL).then(function(data){
    
    $title.text('Title: ' + data['result']['webcams'][0]['title']);
    $city.text('City: ' + data['result']['webcams'][0]['location']['city']);
    $region.text('Region: ' + data['result']['webcams'][0]['location']['region']);
    $country.text('Country: ' + data['result']['webcams'][0]['location']['country']);

    let url= data['result']['webcams'][0]['player']['day']['embed']

    $iframe.attr('src',url)
   
  })
})

$('.liveBtn').click(function(){

  const liveURL = 'https://api.windy.com/api/webcams/v2/list/property=live/orderby=random/limit=50?show=webcams:image,location,player;categories&key=xMMGgPgLclxZ4KEX9vDrtMTweoIiHQqm'
  $.ajax(liveURL).then(function(data){
    
    $title.text('Title: ' + data['result']['webcams'][0]['title']);
    $city.text('City: ' + data['result']['webcams'][0]['location']['city']);
    $region.text('Region: ' + data['result']['webcams'][0]['location']['region']);
    $country.text('Country: ' + data['result']['webcams'][0]['location']['country']);

    // let url= data['result']['webcams'][0]['player']['day']['embed']
    let url = `https://webcams.windy.com/webcams/stream/${data['result']['webcams'][0]['id']}`

    $iframe.attr('src',url)
    
  })
})









