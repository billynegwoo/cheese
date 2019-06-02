<template>
    <div>
        <div>
            <video ref="video" id="video" width="640" height="480" autoplay></video>
        </div>
        <div>
            <button id="snap" v-on:click="capture()">Snap Photo</button>
        </div>
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
        <ul>
            <li v-bind:key="c.key" v-for="c in captures">
                <img alt="capture" v-bind:src="c" height="50"/>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                video: {},
                canvas: {},
                captures: []
            }
        },
        async mounted() {
            this.video = this.$refs.video;
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                this.video.srcObject = await navigator.mediaDevices.getUserMedia({video: true});
                this.video.play();
            }
        },
        methods: {
            capture() {
                this.canvas = this.$refs.canvas;
                this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
                this.captures.push(this.canvas.toDataURL("image/png"));
            }
        }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }

    #video {
        background-color: #000000;
    }

    #canvas {
        display: none;
    }

    li {
        display: inline;
        padding: 5px;
    }
</style>