const codes = document.querySelectorAll(".code");

// İlk öğeyi odaklayın 
codes[0].focus();

codes.forEach((code, indx) => {
    code.addEventListener("keydown", (e) => {
        // eğer tuş 0  ile 9 arasında ise
        if (e.key >= 0 && e.key <= 9) {
            // şu anki kod öğesinin değerini temizle
            codes[indx].value = "";

            // bir sonraki kod öğesine 10ms sonra odaklan
            setTimeout(() => codes[indx + 1].focus(), 10);
        }

        // eğer silme işlemi yapılırsa 
        else if (e.key == "Backspace") {
            setTimeout(() => codes[indx - 1].focus(), 10);
        }
    });
});