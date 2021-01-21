function vowelsCheck() {
    var vowelsCount = 0;

    var vowels = document.getElementById("vowels").value;
    newVowels = vowels.toLowerCase();
    nowVowels = newVowels.toString();

    for (var i = 0; i <= nowVowels.length - 1; i++) {
        if (nowVowels.charAt(i) == "a" || nowVowels.charAt(i) == "e" ||
            nowVowels.charAt(i) == "i" || nowVowels.charAt(i) == "o" ||
            nowVowels.charAt(i) == "u") {
            vowelsCount += 1;
        }
    }
    alert(vowelsCount)
}

