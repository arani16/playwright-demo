export class RandomText {

    static randomProgramName() {
        return `Program_${Math.random().toString(36).substring(2, 8)}`;
    }

    static randomProgramDescription() {
        return `Desc_${Math.random().toString(36).substring(2, 12)}`;
    }

    static randomBusinessClient() {
        return `Business${Math.random().toString(36).substring(2, 10)}`;
    }

    static randomEin() {
        return Math.floor(100000000 + Math.random() * 900000000).toString(); // 9 digits
    }


}
