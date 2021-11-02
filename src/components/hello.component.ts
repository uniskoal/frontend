class Hello extends HTMLElement {
    
    constructor() {
        super();

        this.innerHTML = "안녕하세요!";
    }

}

customElements.define("hello-world" , Hello);