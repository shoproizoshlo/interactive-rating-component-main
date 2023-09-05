const rating = document.querySelectorAll("#rating > li");
let selectedValue = null;

for (let li of rating) {
  li.addEventListener("click", function (event) {
    var listItem = event.target;
    var listItemValue = listItem.textContent;
    selectedValue = listItemValue; // Сохраняем выбранное значение
    // Выделение выбранного элемента (необязательно, для визуальной обратной связи)

    // 1. Remove Class from All Lis
    for (let li of rating) {
      li.classList.remove("selected");
      console.log("class removed");
    }
    // 2. Add Class to Relevant Li
    this.classList.add("selected");
    console.log("class added");
  });
}

document.getElementById("submitButton").addEventListener("click", function () {
  if (selectedValue) {
    // Скрываем контейнер с кнопкой и элементами списка
    document.getElementById("container").style.display = "none";

    // Показываем контейнер с результатом и изображением
    var resultContainer = document.getElementById("result");
    resultContainer.style.display = "block";

    let selectedRate = document.getElementById("selectedRate");
    selectedRate.innerHTML = `You selected ${selectedValue} out of 5`;
  } else {
    alert("Please select an item.");
  }
});
