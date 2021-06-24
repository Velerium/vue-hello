let counter = 0;

const app = new Vue (
    {
        el: '#app',

        data: {
            text: 'Hello World!!',
            linkImg: 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg',
        },

        methods: {
            
            changePic: function () {
                let x = Math.floor(Math.random()*4);
                console.log(x)
                switch (x) {

                    case 0:
                        this.linkImg = 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg';
                        break;
                    case 1:
                        this.linkImg = 'https://mcdn.wallpapersafari.com/medium/91/50/xwJ1rb.jpg';
                        break;
                    case 2:
                        this.linkImg = 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
                        break;
                    case 3:
                        this.linkImg = 'https://images.unsplash.com/photo-1554143091-c41d76e3da15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxvcyUyMGFuZ2VsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
                        break;
                }
            },
        }
    }
)