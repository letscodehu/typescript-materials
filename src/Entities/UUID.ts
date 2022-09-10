import {randomUUID} from "crypto";

export default class UUID {
    private uuid : string;
    constructor() {
        this.uuid = randomUUID();
    }
    toString() {
        return this.uuid;
    }
}
