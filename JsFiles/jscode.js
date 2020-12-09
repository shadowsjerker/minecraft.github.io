var userInputValue = document.getElementById("userInput").value;



function findWord() {



    var userSearch = document.getElementById("userInput").value;
    var textToCheck;
    var userSearchLength = userSearch.length;
    var searchFound1 = "";
    var searchImage1 = "";
    var searchfound2 = "";
    var searchImage2 = "";
    var searchfound3 = "";
    var searchImage3 = "";
    var labelConfig1 = {}
    var labelConfig2 = {}
    var labelConfig3 = {}
    var searchFoundsArray = []

    searchFoundsArray = [];
    console.log("userSearch: " + userSearch);
    console.log("searchFound: " + searchFound1);

    userSearch = userSearch.toUpperCase();

    //Configuration 1
    for (var i = 0; i < items.length; i++) {
        textToCheck = items[i].substring(0, userSearchLength);
        textToCheck = textToCheck.toUpperCase();

        if (userSearch == textToCheck) {
            searchFound1 = items[i];
            document.getElementById("searchDisplay1").innerHTML = searchFound1;
            console.log("searchFound: " + searchFound1);
            searchFoundsArray.push(searchFound1);
            searchImage1 = i
            document.getElementById("defLabel1").innerHTML = itemsP[i]

            document.getElementById("image1").src = itemsI[searchImage1]
        } else if (searchFound1 == "") {
            document.getElementById("image1").src = "imageSource/searchError.png"
        }

    }
    //P
    for (var i = 0; i < itemsP.length; i++) {
        textToCheck = itemsP[i].substring(0, userSearchLength);
        textToCheck = textToCheck.toUpperCase();

        if (userSearch == textToCheck) {
            searchFound1 = itemsP[i];
            document.getElementById("searchDisplay1").innerHTML = searchFound1;
            console.log("searchFound: " + searchFound1);
            searchFoundsArray.push(searchFound1);
            searchImage1 = i
            document.getElementById("defLabel1").innerHTML = itemsP[i]

            document.getElementById("image1").src = itemsI[searchImage1]
        } else if (searchFound1 == "") {
            document.getElementById("image1").src = "imageSource/searchError.png"
        }

    }



    //Configuration 2
    for (var i = 0; i < items.length; i++) {
        textToCheck = items[i].substring(0, userSearchLength);
        textToCheck = textToCheck.toUpperCase();

        if (userSearch == textToCheck) {
            if (searchFound1 != items[i]) {
                searchFound2 = items[i];
                document.getElementById("searchDisplay2").innerHTML = searchFound2;
                console.log("searchFound: " + searchFound2);
                searchFoundsArray.push(searchFound2);
                searchImage2 = i
                document.getElementById("defLabel2").innerHTML = itemsP[i]

                document.getElementById("image2").src = itemsI[searchImage2]
            } else if (searchFound1 == "") {
                document.getElementById("searchDisplay2").innerHTML = ""
                document.getElementById("image2").src = "imageSource/searchError.png"
            }
        }

    }

    //P
    for (var i = 0; i < items.length; i++) {
        textToCheck = itemsP[i].substring(0, userSearchLength);
        textToCheck = textToCheck.toUpperCase();

        if (userSearch == textToCheck) {
            if (searchFound1 != itemsP[i]) {
                searchFound2 = itemsP[i];
                document.getElementById("searchDisplay2").innerHTML = searchFound2;
                console.log("searchFound: " + searchFound2);
                searchFoundsArray.push(searchFound2);
                searchImage2 = i
                document.getElementById("defLabel2").innerHTML = itemsP[i]
                document.getElementById("image2").src = itemsI[searchImage2]
            } else if (searchFound1 == "") {
                document.getElementById("searchDisplay2").innerHTML = ""
                document.getElementById("image2").src = "imageSource/searchError.png"
            }
        }

    }

    //Configuration 3
    for (var i = 0; i < items.length; i++) {
        textToCheck = items[i].substring(0, userSearchLength);
        textToCheck = textToCheck.toUpperCase();

        if (userSearch == textToCheck) {
            if (searchFound1 != items[i] && searchFound2 != items[i]) {
                searchFound3 = items[i];
                document.getElementById("searchDisplay3").innerHTML = searchFound3;
                console.log("searchFound: " + searchFound3);
                searchFoundsArray.push(searchFound3);
                searchImage3 = i
                document.getElementById("defLabel3").innerHTML = itemsP[i]
                document.getElementById("image3").src = itemsI[searchImage3]
            } else if (searchFound1 == "") {
                document.getElementById("searchDisplay3").innerHTML = searchFound1
                document.getElementById("image3").src = "imageSource/searchError.png"
            }
        }

    }

    //P
    for (var i = 0; i < items.length; i++) {
        textToCheck = itemsP[i].substring(0, userSearchLength);
        textToCheck = textToCheck.toUpperCase();

        if (userSearch == textToCheck) {
            if (searchFound1 != itemsP[i] && searchFound2 != itemsP[i]) {
                searchFound3 = itemsP[i];
                document.getElementById("searchDisplay3").innerHTML = searchFound3;
                console.log("searchFound: " + searchFound3);
                searchFoundsArray.push(searchFound3);
                searchImage3 = i
                document.getElementById("defLabel3").innerHTML = itemsP[i]
                document.getElementById("image3").src = itemsI[searchImage3]
            } else if (searchFound1 == "") {
                document.getElementById("searchDisplay3").innerHTML = searchFound1
                document.getElementById("image3").src = "imageSource/searchError.png"
            }
        }

    }

    //Images confic
    if (document.getElementById("userInput").value.length == 0) {
        document.getElementById("image1").src = "imageSource/searchEmpty.png"
        document.getElementById("image2").src = "imageSource/searchEmpty.png"
        document.getElementById("image3").src = "imageSource/searchEmpty.png"
    }




    d



}

function userInputMovement() {

}
