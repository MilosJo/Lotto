var container = $('<div class="group">');
var btn = $('<button>').text('izvuci brojeve');
var number = 0;
var heading = $('<h1>');
var column = 1;

for (var i = 1; i <= 39; i++) {
  var numberPlaces = $('<button>');
    numberPlaces.addClass('btn'+ i);
  container.append(numberPlaces);
  number++;
    numberPlaces.text(number);
}
for(var i = 0; i < 10; i++){
  container.append(heading);
  heading.text(column);
  $('body').append(container.clone());
  column++;
}

$('body').append(btn);

btn.on('click', function (){
   var brojevi = computerRandomChoice();
   brojevi.forEach(function(broj) {
      $('.active.btn'+broj).addClass('selected')
   });
  $('body').append('<br>' + '<strong>' + brojevi.join(', ') + '</strong>');
   
$('.group').each(function() {
   var brojPogodaka = $(this).find('.active.selected').length;
   var brojGrupe = $(this).find('h1').text();
    console.log('broj pogodaka za kolonu ' + brojGrupe + ' je ' + brojPogodaka);
})
})

$('button').on('click', function() {
     $(this).toggleClass('active');
     var chose = $(this).parent().find('button.active');
     if (chose.length > 7) {
        $(this).removeClass('active');
        return;
     }
     
});

function computerRandomChoice(){
  var computerChoice = [];
  var computerNumber;
  for(var j=0 ;j < 7; j++){
    computerNumber = Math.floor((Math.random() * 39)+ 1);
    while (computerChoice.indexOf(computerNumber) !== -1) {
      computerNumber = Math.floor((Math.random() * 39)+ 1);
    }
    computerChoice.push(computerNumber);
  }
  return computerChoice;
};

function compare(chose, selected){
  var same = [];
  for(var i=0 ;i < chose.length; i++){
    for(var j=0;j<selected.length;j++){
       if(chose[j] === selected[i]){
          same.push(selected[i]);
       }
    }
  }
  return same;
};

