var mortyApp = (function () {

    var total = [];

    /**
     * Function is responsible for reading the use's input and calling necessary functions to build the
     * output.
     */
    function submitStrings(commaSeparatedList) {
        var input = document.getElementById('user-input'),
            userInput = input.value ? input.value : commaSeparatedList,
            cleanInputArray = sanitizeInput(userInput),
            maxAllowed = 7,
            uniqueNumbersWithMaxMet = [];

        if (cleanInputArray.length > 0) {

            for (var i = 0; i < cleanInputArray.length; i++) {
                buildCombinations(cleanInputArray[i]);

                for (var j = 0; j < total.length; j++) {
                    if (!hasDuplicatesAndHasValuesAllowed(total[j]) && total[j].length === maxAllowed) {
                        uniqueNumbersWithMaxMet.push(total[j]);
                    }
                }

                //clear the global
                total = [];
            }

            buildResults(uniqueNumbersWithMaxMet);
            showReplay();

        }

    }

    /**
     * Function is responsible for ensuring requirements are met.
     * We check if individual numbers are not repeated or greater than allowed.
     * @param array
     * @returns {boolean}
     */
    function hasDuplicatesAndHasValuesAllowed(array) {
        var valuesSoFar = [],
            maxAllowed = 59;
        for (var i = 0; i < array.length; ++i) {
            var value = array[i];
            if (value >= maxAllowed) {
                return true;
                //console.log(value, array);
            }
            if (valuesSoFar.indexOf(value) !== -1) {
                return true;
            }
            valuesSoFar.push(value);
        }
        return false;
    }

    /**
     * Function is our recursion caller.
     * @param singleString
     */
    function buildCombinations(singleString) {
        var arrayList = [];
        splitString(singleString, arrayList);
    }


    /**
     * Function builds all the possible combinations we can with sanitized input string.
     * @param input
     * @param arrayOfSplits
     * @returns {*}
     */
    function splitString(input, arrayOfSplits) {

        if (input.length === 0) {
            total.push(arrayOfSplits);
            return arrayOfSplits;
        }

        if (input.length >= 1) {
            var copy = Array.from(arrayOfSplits);
            copy.push(input.substring(0, 1));

            for (var i = 0; i < input.substring(0, 1).length; i++) {

                splitString(input.substring(1), copy);
            }
        }

        if (input.length >= 2) {
            var copy = Array.from(arrayOfSplits);

            copy.push(input.substr(0, 2));

            for (var j = 1; j < input.substr(0, 2).length; j++) {

                splitString(input.substring(2), copy);
            }
        }

    }

    /*
    Function is responsible for setting the passed content
    to the message id.
    */
    function setLottoPicks(content) {
        document.getElementById('message').innerHTML = content;
    }

    function buildResults(arrayOfPicks) {

        var joinArrayOfPicks = [],
            joinArrayOfPicksMashed = [],
            firstDiv = "<div class=\"row\"><span class=\"col-md-6\">";

        for (var i = 0; i < arrayOfPicks.length; i++) {
            joinArrayOfPicks.push(arrayOfPicks[i].join(' '));
        }

        for (var j = 0; j < joinArrayOfPicks.length; j++) {
            var str = joinArrayOfPicks[j].replace(/\s/g, '');
            joinArrayOfPicksMashed.push(str);
        }

        if (joinArrayOfPicks.length > 0) {
            setLottoPicks("Uncle Morty these are your potential picks: ");
        } else {
            setLottoPicks("Uncle Morty, no potential picks found. Try again.");
        }


        for (var k = 0; k < joinArrayOfPicksMashed.length; k++) {
            firstDiv = firstDiv + joinArrayOfPicksMashed[k] + " -> " + joinArrayOfPicks[k] + "<br>";

        }
        firstDiv = firstDiv + "</div>";
        document.getElementById('results').innerHTML = firstDiv;

    }


    /**
     * Function is responsible for sanitizing our input.
     * @param input
     * @returns {Array}
     */
    function sanitizeInput(input) {
        var stringArray = input.split(','),
            i = 0,
            validArray = [],
            arrayLen = stringArray.length;

        //we only add number strings to our array
        for (; i < arrayLen; i++) {
            //clean potential white space
            stringArray[i] = stringArray[i].replace(/^\s*/, "").replace(/\s*$/, "");

            //test our string for numbers only
            if ((/^[0-9]*$/.test(stringArray[i]))) {
                validArray.push(stringArray[i]);
            }
        }
        return validArray;
    }

    /**
     * Function is responsible for showing/hiding our
     */
    function showReplay() {
        document.getElementById('winner-div').style.display = "none";
        document.getElementById('replay-div').style.display = "block";
    }

    //we only expose one function. This way avoid adding the global to the global space
    return {
        //since the requirements did not specify to write html/css. We can optional use the script using the console and passing the parameter.
        submitStrings: function (optionalParam) {
            return submitStrings(optionalParam);
        }
    }
})();






