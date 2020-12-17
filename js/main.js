var ingredientsList = [];
var additionsList = [];

var elPizzaForm = document.querySelector('.pizza-form');
var elMessage = document.querySelector('.message');

if (elPizzaForm){
  var elPizzaDoughSelect = elPizzaForm.querySelector('.dough-select'); 
  var elPizzaSmallInput = elPizzaForm.querySelector('.small'); 
  var elPizzaMiddleInput = elPizzaForm.querySelector('.middle'); 
  var elPizzaLargeInput = elPizzaForm.querySelector('.large'); 
  var elPizzaIngredientsCheckbox = elPizzaForm.querySelector('.checkbox-ingredients'); 
  var elPizzaAddditionsCheckbox = elPizzaForm.querySelector('.checkbox-additions');
  var elPizzaDoughResult = elPizzaForm.querySelector('.dough-result');
  var elPizzaSizeResult = elPizzaForm.querySelector('.size-result'); 
  var elPizzaIngredientsResult = elPizzaForm.querySelector('.ingrediets-result'); 
  var elPizzaAdditionsResult = elPizzaForm.querySelector('.additions-result'); 
}

var doughResult = function () {
  var dough = elPizzaDoughSelect.value;
  elPizzaDoughResult.textContent = dough;
};

var GetSelectedIngrediets = function () {
  elPizzaIngredientsResult.innerHTML = '';

  //Reference the Table.
  var divIngredients = document.getElementById('ingredients');
  
  //Reference all the CheckBoxes.
  var chks = divIngredients.getElementsByTagName('INPUT');
  
  // Loop and push the checked CheckBox value in Array.
  for (var i = 0; i < chks.length; i++) {
    if (chks[i].checked) {
      ingredientsList.push(chks[i].value);
    };
  };
  
  let newIngrList = Array.from(new Set(ingredientsList));
  console.log(newIngrList);

  for (var item of newIngrList) {
    var elIngredients = document.createElement('li');
    elIngredients.textContent = item;
    elPizzaIngredientsResult.appendChild(elIngredients);
  }

  for (var i = 0; i < chks.length; i++) {
    if (!chks[i].checked) {
      ingredientsList.pop(chks[i].value);
    };
  };
};

var GetSelectedAdditions = function () {
  elPizzaAdditionsResult.innerHTML = '';

  //Reference the Table.
  var divAdditions = document.getElementById('additions');
  
  //Reference all the CheckBoxes.
  var chksAdditions = divAdditions.getElementsByTagName('INPUT');
  
  // Loop and push the checked CheckBox value in Array.
  for (var i = 0; i < chksAdditions.length; i++) {
    if (chksAdditions[i].checked) {
      additionsList.push(chksAdditions[i].value);
    };
  };
  
  let newAdditionsList = Array.from(new Set(additionsList));

  for (var item of newAdditionsList) {
    var elAdditions = document.createElement('li');
    elAdditions.textContent = item;
    elPizzaAdditionsResult.appendChild(elAdditions);
  }

  for (var i = 0; i < chksAdditions.length; i++) {
    if (!chksAdditions[i].checked) {
      additionsList.pop(chksAdditions[i].value);
    };
  };
};

elPizzaForm.addEventListener('change', function () {
  doughResult();
  GetSelectedIngrediets(); 
  GetSelectedAdditions();
});

elPizzaSmallInput.addEventListener('change', function () {
  var smallSize = elPizzaSmallInput.value;
  elPizzaSizeResult.textContent = smallSize;
});

elPizzaMiddleInput.addEventListener('change', function () {
  var middleSize = elPizzaMiddleInput.value;
  elPizzaSizeResult.textContent = middleSize;
});

elPizzaLargeInput.addEventListener('change', function () {
  var largeSize = elPizzaLargeInput.value;
  elPizzaSizeResult.textContent = largeSize;
})

elPizzaForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  elMessage.innerHTML = '';
  elMessage.textContent = `Your pizza is getting prepared for delivery`
});

