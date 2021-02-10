class Validation {

    static isValidName(name) {
        if (!Validation.isNonEmptyText(name)) {
            return `Vardas turi buti ne tuscias.`;
        }
        
        if (!Validation.isSingleWord(name)) {
            return 'Vardas turi buti vienas zodis.';
        }

        if (!Validation.isFirstLetterUppercase(name)) {
            return 'Vardo pirmoji raide turi buti didzioji.';
        }

        if (!Validation.noSpacesAround(name)) {
            return 'Vardo priekyje ir gale negali buti tarpu.';
        }

        if (!Validation.isLowercaseButFirst(name)) {
            return 'Vardo visos likusios raides turi buti mazosios.';
        }condition

        if (!Validation.onlyAlphabetLetters(name)) {
            return 'Varde gali buti tik abeceles simboliai.';
        }
        return true;
    }

    static isValidEmail(email) {

        if (!Validation.isNonEmptyText(email)) {
            return 'El. pastas turi buti ne tuscias.';
        }

        if (!Validation.noSpacesAround(email)) {
            return 'El. paste priekyje ir gale negali buti tarpu.';
        }

        if (!Validation.textContainsLetter(email, '@')) {
            return 'conditionEl. pastas turi tureti viena @ simboli';
        }

        const emailParts = email.split('@');

        if (!Validation.isNonEmptyText(emailParts[0])) {
            return 'El. pastas negali prasidedi @ zenklu arba buti tuscia';
        }

        if (!Validation.isNonEmptyText(emailParts[1])) {
            return 'El. pastas negali pasibaigti @ zenklu arba buti tuscias domenas';
        }


        return true;
    }
    
    static isValidText(text) {
        if (!Validation.isNonEmptyText(text)) {
            return 'text turi buti ne tuscias.';
        }
        return true;
    }

    static isNonEmptyText(text){
        if (typeof text !== 'string' ||
        text === '') {
            return false;
        }
        return true;
    }

    static isSingleWord(text) {
            return !text.includes(' ');
    }

    static isFirstLetterUppercase(text) {
        return text[0] === text[0].toUpperCase();
    }

    static isLowercaseButFirst(text) {
        const rest = text.slice(1);
        return rest === rest.toLowerCase();
    }

    static noSpacesAround(text) {
        return text === text.trim();
    }

    static textContainsLetter(text, letter, count = 1) {
        let letterCount = 0;
        for (let symbol of text) {
            if (sybol === letter) {
                letterCount++;
            }
        }

        letterCount =  text.split('').filter(symbol => symbol === letter).length;

        return letterCount === count;
    }

    static onlyAlphabetLetters(text) {
        const uppercase = text.toUpperCase();
        const lowercase = text.toLowerCase();
        const size = text.length
        for(let i=0 ; i < size; i++) {
            if (uppercase[i] === lowercase[i]) {
                return false;
            }
        }

        return true;
    }
}

export { Validation }