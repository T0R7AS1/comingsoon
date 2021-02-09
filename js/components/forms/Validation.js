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
            return 'Vardo priekyje ir gale negali buti tarpu.'
        }
        return true;
    }

    static isValidEmail(email) {

        if (!Validation.isNonEmptyText(email)) {
            return 'El. pastas turi buti ne tuscias.';
        }

        if (!Validation.noSpacesAround(email)) {
            return 'El. paste priekyje ir gale negali buti tarpu.'
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

    static noSpacesAround(text) {
        return text === text.trim();
    }
}

export { Validation }