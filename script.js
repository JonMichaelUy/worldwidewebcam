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
  // console.log(category);


  const categoryURL = `https://api.windy.com/api/webcams/v2/list/orderby=random/category=${category}/limit=50?show=webcams:location,player&key=xMMGgPgLclxZ4KEX9vDrtMTweoIiHQqm`
  // console.log(categoryURL)

  $.ajax(categoryURL).then(function(data){
    
    console.log(data)

    let url= data['result']['webcams'][0]['player']['day']['embed']

    $title.text('Title: ' + data['result']['webcams'][0]['title']);
    $city.text('City: ' + data['result']['webcams'][0]['location']['city']);
    $region.text('Region: ' + data['result']['webcams'][0]['location']['region']);
    $country.text('Country: ' + data['result']['webcams'][0]['location']['country']);

    $iframe.attr('src',url)

    // let newDropdown = $('<select />')
    // newDropdown.appendTo('form')
    // $('<option />', {text: $(data['result']['webcams'])}).appendTo(newDropdown)
  })


})






//FUNCTIONS
$('.randomBtn').click(function(){
  $.ajax(randomURL).then(function(data){
    // console.log(data)
    $title.text('Title: ' + data['result']['webcams'][0]['title']);
    $city.text('City: ' + data['result']['webcams'][0]['location']['city']);
    $region.text('Region: ' + data['result']['webcams'][0]['location']['region']);
    $country.text('Country: ' + data['result']['webcams'][0]['location']['country']);

    let url= data['result']['webcams'][0]['player']['day']['embed']

    $iframe.attr('src',url)
    // console.log(url)
  })
})





// console.log($.ajax(randomURL))



