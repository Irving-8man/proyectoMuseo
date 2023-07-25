
/*
document.addEventListener("DOMContentLoaded", function () {
    var searchInput1 = document.getElementById("searchInput1");
    var resultsList = document.getElementById("resultsList");
    var suggestionsList1 = document.getElementById("suggestionsList1");


    searchInput1.addEventListener("input", function () {
        var searchText = searchInput1.value.toLowerCase();
        var items = resultsList.getElementsByTagName("li");
        var suggestions = [];

        if (searchText.length === 0) {
            suggestionsList1.style.display = "none";
            return;
        }

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var title = item.innerText.toLowerCase();

            if (title.startsWith(searchText)) {
                suggestions.push({
                    title: title.charAt(0).toUpperCase() + title.slice(1),
                    link: item.getAttribute("data-href")
                });
            }
        }

        suggestionsList1.innerHTML = "";
        suggestions.forEach(function (suggestion) {
            var li = document.createElement("li");
            var strong = document.createElement("strong");

            li.innerHTML += " " + suggestion.title;
            li.setAttribute("data-link", suggestion.link);
            suggestionsList1.appendChild(li);
        });


        if (suggestions.length > 0) {
            suggestionsList1.style.display = "block";
        } else {
            suggestionsList1.style.display = "none";
        }
    });


    suggestionsList1.addEventListener("click", function (event) {
        var selectedSuggestion = event.target;
        var link = selectedSuggestion.getAttribute("data-link");

        if (link) {
            window.location.href = link;
        }
    });

});



var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('aparecer');
            observer.unobserve(entry.target);
        }
    });
});

var elementos = document.querySelectorAll('.animacion');
elementos.forEach(function (elemento) {
    var aparecerDireccion = elemento.classList.contains('aparecer-izquierda') ? 'izquierda' : 'derecha';
    elemento.classList.add('aparecer-' + aparecerDireccion);
    observer.observe(elemento);
});

*/