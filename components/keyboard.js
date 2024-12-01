app.component('typing-keyboard', {
    template: `
        <ul class="keyboard">
            <li>
                <dt>q</dt>
                <dt>w</dt>
                <dt>e</dt>
                <dt>r</dt>
                <dt>t</dt>
                <dt>y</dt>
                <dt>u</dt>
                <dt>i</dt>
                <dt>o</dt>
                <dt>p</dt>
                <dt>[</dt>
                <dt>]</dt>
            </li>
            <li>
                <dt>a</dt>
                <dt>s</dt>
                <dt>d</dt>
                <dt>f</dt>
                <dt>g</dt>
                <dt>h</dt>
                <dt>j</dt>
                <dt>k</dt>
                <dt>l</dt>
                <dt>;</dt>
                <dt>'</dt>
            </li>
            <li>
                <dt>z</dt>
                <dt>x</dt>
                <dt>c</dt>
                <dt>v</dt>
                <dt>b</dt>
                <dt>n</dt>
                <dt>m</dt>
                <dt>,</dt>
                <dt>.</dt>
                <dt>/</dt>
            </li>
            <dt id="space-button">
                <h3>we gonna hide this text</h3>
            </dt>
        </ul>
    `,
    data() {
        return {

        }
    },
    methods: {
        // Methods Here
    },
    mounted(){
        document.addEventListener("keyup", function(event) {
            let clicked_key = event.key;
            var allKeys = document.querySelectorAll("dt");
            var clickSpace = (clicked_key == " ");

            allKeys.forEach(function(key) {
                // Reset styling for all keys
                key.style.transition = "ease .3s";
                key.style.backgroundColor = "transparent";
                key.style.border = "1px solid #6272a4"; // Soft blue for default border
                key.style.color = "#f8f8f2"; // Light text color
                key.style.boxShadow = "none";
            });

            if (clickSpace) {
                // Special styling for spacebar
                var spaceButton = document.querySelector("dt#space-button");
                spaceButton.style.transition = "ease .3s";
                spaceButton.style.backgroundColor = "#50fa7b"; // Green color for spacebar
                spaceButton.style.border = "1px solid #50fa7b";
                spaceButton.style.boxShadow = "rgb(80 250 123 / 15%) 0px 6px 33px"; // Green glow effect
            } else {
                allKeys.forEach(function(key) {
                    if (clicked_key == key.innerHTML) {
                        // Styling for the pressed key
                        key.style.transition = "ease .3s";
                        key.style.backgroundColor = "#ff79c6"; // Pink for pressed key
                        key.style.border = "1px solid #ff79c6"; // Pink border
                        key.style.color = "#282a36"; // Dark text color for contrast
                        key.style.boxShadow = "rgb(255 121 198 / 15%) 0px 6px 33px"; // Pink glow effect
                    }
                });
            }
        });
    }
});
