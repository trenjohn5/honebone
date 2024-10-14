export class Counter {
    constructor(state) {
        this.state = state;
        this.state.blockConcurrencyWhile(async () => {
            this.value = (await this.state.storage.get("count")) || 0;
        });
    }

    async fetch(request) {
        this.value++;
        await this.state.storage.put("count", this.value);
        return new Response(`Hello, World! Counter: ${this.value}`);
    }
}
